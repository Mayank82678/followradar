# FollowRadar Deployment & Setup Guide

## 🚀 Quick Start

### 1. Local Development Setup

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Add your credentials (see Configuration section below)
# vim .env.local

# Start dev server
npm run dev

# Open http://localhost:3000
```

### 2. Firebase Setup

1. **Create a Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com)
   - Click "Create a project"
   - Name it "FollowRadar"
   - Enable Google Analytics (optional)

2. **Configure Authentication**
   - Go to Authentication > Sign-in method
   - Enable Email/Password
   - Enable Google (optional)
   - Copy credentials to `.env.local`

3. **Create Firestore Database**
   - Go to Firestore Database
   - Create database in production mode
   - Update security rules (see below)

4. **Firestore Security Rules**
   ```firestore
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // Users collection
       match /users/{userId} {
         allow read, write: if request.auth.uid == userId;
       }
       
       // Tracking data
       match /tracking/{userId} {
         allow read, write: if request.auth.uid == userId;
       }
       
       // Transactions
       match /transactions/{transactionId} {
         allow read, write: if request.auth.uid == resource.data.userId;
       }
     }
   }
   ```

5. **Get Firebase Credentials**
   - Project Settings > General
   - Copy Firebase config
   - Add to `.env.local`:
     ```
     NEXT_PUBLIC_FIREBASE_API_KEY=xxx
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxx
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxx
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxx
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxx
     NEXT_PUBLIC_FIREBASE_APP_ID=xxx
     ```

### 3. Razorpay Setup

1. **Create Razorpay Account**
   - Go to [Razorpay Dashboard](https://dashboard.razorpay.com)
   - Sign up and verify
   - Go to Settings > API Keys
   - Copy Key ID and Key Secret

2. **Add to Environment**
   ```
   NEXT_PUBLIC_RAZORPAY_KEY_ID=your_key_id
   NEXT_RAZORPAY_KEY_SECRET=your_key_secret
   ```

3. **Create Subscription Plans**
   - Settings > Subscription Plans
   - Create "Pro" plan: ₹299/month
   - Create "Enterprise" plan: Custom

### 4. MongoDB Setup (For Backend)

1. **Create MongoDB Atlas Cluster**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create free tier cluster
   - Create database user
   - Get connection string

2. **Add to Environment**
   ```
   MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/followradar
   ```

## 📦 Deployment

### Deploy to Vercel (Frontend)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial FollowRadar setup"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com)
   - Import project from GitHub
   - Select repository
   - Add environment variables (from `.env.local`)
   - Deploy

3. **Configure Custom Domain**
   - Vercel Dashboard > Settings > Domains
   - Add custom domain
   - Update DNS settings

### Deploy Backend to Railway

1. **Create Railway Account**
   - Go to [Railway.app](https://railway.app)
   - Sign in with GitHub

2. **Deploy Node.js API**
   - New Project > Deploy from GitHub
   - Select backend repository
   - Add environment variables
   - Deploy

3. **Configure Database**
   - Railway > MongoDB
   - Provision MongoDB service
   - Get connection string
   - Add to project variables

## 📋 Environment Variables Checklist

```
✅ Firebase
  - NEXT_PUBLIC_FIREBASE_API_KEY
  - NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
  - NEXT_PUBLIC_FIREBASE_PROJECT_ID
  - NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
  - NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
  - NEXT_PUBLIC_FIREBASE_APP_ID

✅ Razorpay
  - NEXT_PUBLIC_RAZORPAY_KEY_ID
  - NEXT_RAZORPAY_KEY_SECRET

✅ MongoDB
  - MONGODB_URI

✅ API
  - NEXT_PUBLIC_API_URL (https://api.followradar.com)

✅ App
  - NODE_ENV (production)
```

## 🔒 Security Best Practices

1. **Never commit `.env.local`**
   - Add to `.gitignore`
   - Use Vercel/Railway env variables

2. **Use Firebase Security Rules**
   - Restrict database access by user
   - Validate data on server-side

3. **API Key Protection**
   - Use server-side Razorpay calls
   - Never expose secret keys in frontend

4. **HTTPS Only**
   - Vercel provides HTTPS by default
   - Enable HSTS headers

5. **Rate Limiting**
   - Implement on API routes
   - Prevent abuse

## 📊 Monitoring & Logging

### Vercel Analytics
- Vercel Dashboard > Analytics
- Monitor performance
- Track errors

### Firebase Console
- Authentication > Events
- Firestore > Usage
- Performance metrics

### Error Tracking
- Set up Sentry (optional)
- Track JavaScript errors
- Monitor API failures

## 🚀 Performance Optimization

1. **Image Optimization**
   - Use Next.js Image component
   - Optimize SVGs
   - Use WebP format

2. **Code Splitting**
   - Dynamic imports for large components
   - Route-based code splitting

3. **Caching**
   - Set appropriate cache headers
   - Use ISR for static pages

4. **Bundle Analysis**
   ```bash
   npm run analyze
   ```

## 🧪 Testing Before Deploy

```bash
# Type checking
npm run typecheck

# Linting
npm run lint

# Build production bundle
npm run build

# Test production build
npm run start
```

## 📞 Troubleshooting

### Firebase Connection Issues
- Check API keys are correct
- Verify security rules
- Check network connectivity

### Razorpay Payment Errors
- Verify API keys
- Check transaction logs
- Test in sandbox mode first

### Performance Issues
- Check Lighthouse score
- Analyze bundle size
- Review database queries

## 📚 Additional Resources

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Razorpay Integration](https://razorpay.com/docs/api/)
- [Vercel Docs](https://vercel.com/docs)
- [Railway Docs](https://docs.railway.app)

---

**Need help?** Email support@followradar.com or check the [Help Center](/support)
