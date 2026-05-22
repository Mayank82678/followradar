import Razorpay from 'razorpay';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID || '',
      key_secret: process.env.RAZORPAY_KEY_SECRET || '',
    });

    const data = await request.json().catch(() => ({}));
    const amount =
      typeof data.amount === 'number' ? data.amount : 29900;

    const order = await razorpay.orders.create({
      amount,
      currency: 'INR',
      receipt: `followradar_subscription_${Date.now()}`,
      payment_capture: true,
    });

    return NextResponse.json({ success: true, order });
  } catch (error) {
    console.error('Razorpay order creation failed', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Unable to create Razorpay order',
      },
      { status: 500 }
    );
  }
}