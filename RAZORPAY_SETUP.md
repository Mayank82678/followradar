# Razorpay Payment Integration Guide

This guide covers integrating Razorpay for subscription payments in FollowRadar.

## 📋 Overview

- **Plan**: Pro at ₹299/month
- **Payment Method**: Razorpay Subscriptions
- **Webhook**: Order completion notifications
- **Dashboard**: Vercel + Next.js

## 🔧 Setup Steps

### 1. Create Razorpay Account

1. Visit [razorpay.com](https://razorpay.com)
2. Sign up and complete KYC
3. Go to Dashboard > Settings > API Keys
4. Copy:
   - Key ID (public)
   - Key Secret (secret - keep safe)

### 2. Install Razorpay SDK

Already included in `package.json`:
```json
{
  "dependencies": {
    "razorpay": "^2.9.1"
  }
}
```

### 3. Backend Setup

Create a payment server route:

```typescript
// app/api/razorpay/create-order.ts
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  key_secret: process.env.NEXT_RAZORPAY_KEY_SECRET,
});

export async function POST(request: Request) {
  const { planId, userId } = await request.json();

  const options = {
    amount: 29900, // ₹299 in paise
    currency: 'INR',
    receipt: `receipt_${userId}_${Date.now()}`,
    payment_capture: 1, // Capture payment automatically
  };

  try {
    const order = await razorpay.orders.create(options);
    return Response.json(order);
  } catch (error) {
    return Response.json({ error }, { status: 400 });
  }
}
```

### 4. Frontend Payment Button

```typescript
// components/PaymentButton.tsx
'use client';

import { useEffect } from 'react';

interface PaymentButtonProps {
  userId: string;
  planType: 'pro' | 'enterprise';
}

export function PaymentButton({ userId, planType }: PaymentButtonProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    try {
      // Create order
      const res = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        body: JSON.stringify({ planId: planType, userId }),
      });
      const order = await res.json();

      // Open Razorpay checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: 29900,
        currency: 'INR',
        name: 'FollowRadar',
        description: `${planType} Plan Subscription`,
        order_id: order.id,
        handler: async (response: any) => {
          // Verify payment on backend
          const verifyRes = await fetch('/api/razorpay/verify-payment', {
            method: 'POST',
            body: JSON.stringify({
              orderId: order.id,
              paymentId: response.razorpay_payment_id,
              signature: response.razorpay_signature,
              userId,
            }),
          });
          
          if (verifyRes.ok) {
            alert('Payment successful!');
            // Redirect to dashboard
            window.location.href = '/dashboard';
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

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="rounded-full bg-brand-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-brand-400"
    >
      Upgrade to Pro — ₹299/month
    </button>
  );
}
```

### 5. Payment Verification

```typescript
// app/api/razorpay/verify-payment.ts
import crypto from 'crypto';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  key_secret: process.env.NEXT_RAZORPAY_KEY_SECRET,
});

export async function POST(request: Request) {
  const { orderId, paymentId, signature, userId } = await request.json();

  try {
    // Verify signature
    const body = orderId + '|' + paymentId;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.NEXT_RAZORPAY_KEY_SECRET!)
      .update(body)
      .digest('hex');

    if (expectedSignature !== signature) {
      return Response.json(
        { error: 'Invalid signature' },
        { status: 400 }
      );
    }

    // Payment verified - update user subscription
    // TODO: Update user in Firebase/MongoDB
    // - Set subscription to 'pro'
    // - Set subscription expiry date
    // - Record transaction

    return Response.json({
      success: true,
      message: 'Payment verified and subscription activated',
    });
  } catch (error) {
    console.error('Verification error:', error);
    return Response.json(
      { error: 'Verification failed' },
      { status: 500 }
    );
  }
}
```

### 6. Webhook Handler

```typescript
// app/api/razorpay/webhook.ts
import crypto from 'crypto';

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get('x-razorpay-signature');

  try {
    // Verify webhook signature
    const expectedSignature = crypto
      .createHmac('sha256', process.env.NEXT_RAZORPAY_WEBHOOK_SECRET!)
      .update(body)
      .digest('hex');

    if (expectedSignature !== signature) {
      return Response.json(
        { error: 'Invalid signature' },
        { status: 400 }
      );
    }

    const event = JSON.parse(body);

    // Handle events
    switch (event.event) {
      case 'payment.authorized':
        // Payment authorized
        break;
      case 'payment.failed':
        // Payment failed - notify user
        break;
      case 'subscription.authenticated':
        // Subscription created
        break;
      case 'subscription.pending':
        // Subscription pending
        break;
    }

    return Response.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return Response.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}
```

## 💳 Integration Checklist

- [ ] Razorpay account created
- [ ] API keys added to environment
- [ ] Razorpay SDK installed
- [ ] Order creation endpoint built
- [ ] Payment verification implemented
- [ ] Webhook handler configured
- [ ] User subscription status tracked
- [ ] Payment history recorded
- [ ] Error handling implemented
- [ ] Testing in sandbox mode
- [ ] Deployed to production

## 🧪 Testing

### Sandbox Mode

1. Use test API keys from Razorpay
2. Use test credit cards:
   - `4111 1111 1111 1111` (Success)
   - `4222 2222 2222 2222` (Failure)

### Production Mode

1. Switch to live API keys
2. Test with real payment method
3. Monitor payment success rate

## 📊 Subscription Management

### Auto-Renewal
- Set via Razorpay dashboard
- Automatic charging on due date
- Webhook notification on renewal

### Cancellation
```typescript
export async function cancelSubscription(subscriptionId: string) {
  const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    key_secret: process.env.NEXT_RAZORPAY_KEY_SECRET,
  });

  await razorpay.subscriptions.cancel(subscriptionId);
}
```

## 💰 Revenue Tracking

Log payments in Firebase:
```typescript
// Save to Firestore
const transactionRef = db.collection('transactions').doc();
await transactionRef.set({
  userId,
  orderId,
  paymentId,
  amount: 29900,
  currency: 'INR',
  plan: 'pro',
  status: 'success',
  timestamp: new Date(),
});
```

## 🚨 Error Handling

Always handle:
- Network errors
- Payment failures
- Invalid signatures
- Webhook timeouts

---

For more details: [Razorpay Docs](https://razorpay.com/docs)
