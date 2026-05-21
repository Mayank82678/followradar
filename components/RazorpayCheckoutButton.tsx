'use client';

import { useState } from 'react';

declare global {
  interface Window {
    Razorpay?: any;
  }
}

async function loadRazorpayScript(): Promise<boolean> {
  if (typeof window === 'undefined') {
    return false;
  }

  if (window.Razorpay) {
    return true;
  }

  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

interface RazorpayCheckoutButtonProps {
  plan: string;
  amount: number;
}

export function RazorpayCheckoutButton({ plan, amount }: RazorpayCheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    try {
      const response = await fetch('/api/razorpay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });

      const payload = await response.json();
      if (!response.ok || !payload.order) {
        throw new Error(payload.message || 'Unable to create order');
      }

      const sdkReady = await loadRazorpayScript();
      if (!sdkReady) {
        throw new Error('Unable to load Razorpay SDK');
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
        amount: payload.order.amount,
        currency: payload.order.currency,
        name: 'FollowRadar',
        description: `${plan} subscription`,
        order_id: payload.order.id,
        handler: (paymentResult: any) => {
          console.log('Payment success', paymentResult);
          alert('Payment successful! You are now subscribed to Pro.');
        },
        theme: {
          color: '#3469ff',
        },
      };

      const checkout = new window.Razorpay(options);
      checkout.open();
    } catch (error) {
      console.error(error);
      alert('Unable to start the payment flow. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? 'Opening checkout…' : 'Subscribe to Pro'}
    </button>
  );
}
