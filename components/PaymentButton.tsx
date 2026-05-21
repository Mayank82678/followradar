'use client';

import { useEffect, useState } from 'react';
import { AlertCircle, CheckCircle, Loader } from 'lucide-react';

interface PaymentButtonProps {
  plan: 'pro' | 'enterprise';
  amount?: number;
  onSuccess?: (response: any) => void;
  onError?: (error: string) => void;
}

export function PaymentButton({ 
  plan, 
  amount = plan === 'pro' ? 29900 : 99900,
  onSuccess,
  onError,
}: PaymentButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Load Razorpay checkout script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handlePayment = async () => {
    setLoading(true);
    setError('');

    try {
      // Step 1: Create order
      const orderResponse = await fetch('/api/razorpay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'create',
          plan,
          amount,
        }),
      });

      if (!orderResponse.ok) {
        throw new Error('Failed to create payment order');
      }

      const orderData = await orderResponse.json();
      if (!orderData.success || !orderData.order) {
        throw new Error('Invalid order response');
      }

      // Step 2: Open Razorpay checkout
      const Razorpay = (window as any).Razorpay;
      if (!Razorpay) {
        throw new Error('Razorpay is not loaded');
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: 'INR',
        name: 'FollowRadar',
        description: `${plan === 'pro' ? 'Pro' : 'Enterprise'} Plan Subscription`,
        order_id: orderData.order.id,
        handler: async (response: any) => {
          try {
            // Step 3: Verify payment
            const verifyResponse = await fetch('/api/razorpay', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                action: 'verify',
                orderId: orderData.order.id,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
              }),
            });

            if (!verifyResponse.ok) {
              throw new Error('Payment verification failed');
            }

            const verifyData = await verifyResponse.json();
            if (verifyData.success) {
              setSuccess(true);
              if (onSuccess) {
                onSuccess(verifyData);
              }
              // Redirect after 2 seconds
              setTimeout(() => {
                window.location.href = '/dashboard';
              }, 2000);
            } else {
              throw new Error(verifyData.message || 'Payment verification failed');
            }
          } catch (err) {
            const errorMsg = err instanceof Error ? err.message : 'Payment verification failed';
            setError(errorMsg);
            if (onError) {
              onError(errorMsg);
            }
          } finally {
            setLoading(false);
          }
        },
        prefill: {
          name: 'User Name',
          email: 'user@example.com',
        },
        theme: {
          color: '#6366F1',
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Payment failed';
      setError(errorMsg);
      if (onError) {
        onError(errorMsg);
      }
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-4 flex items-center gap-3">
        <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
        <div>
          <p className="text-emerald-300 text-sm font-semibold">Payment successful!</p>
          <p className="text-emerald-300/70 text-xs mt-1">Redirecting to dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {error && (
        <div className="mb-4 rounded-3xl border border-red-500/30 bg-red-500/10 p-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
          <p className="text-red-300 text-sm">{error}</p>
        </div>
      )}
      
      <button
        onClick={handlePayment}
        disabled={loading}
        className="w-full rounded-full bg-brand-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-brand-400 disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {loading && <Loader className="h-4 w-4 animate-spin" />}
        {loading ? 'Processing...' : `Upgrade to ${plan === 'pro' ? 'Pro' : 'Enterprise'}`}
      </button>

      <p className="text-center text-xs text-slate-400 mt-4">
        Secure payment powered by Razorpay
      </p>
    </div>
  );
}
