# FollowRadar - Premium Instagram Relationship Tracker

> A modern, premium SaaS application that helps Instagram creators track unfollows, analyze relationships, and manage their follower growth intelligently.

## 🎯 What is FollowRadar?

FollowRadar is a real-time Instagram relationship tracker that:

- ✅ Detects who unfollowed you instantly
- ✅ Identifies non-followers in your following list
- ✅ Shows mutual followers and ghost accounts
- ✅ Provides smart unfollow recommendations
- ✅ Offers one-click unfollow actions
- ✅ Tracks follower growth analytics

## 🚀 Features

### Core Features
- **Real-time Tracking** - Get instant notifications when someone unfollows
- **Relationship Analytics** - See comprehensive insights about your followers
- **Smart Dashboard** - Beautiful, responsive UI with live stats
- **Payment Integration** - Razorpay-powered subscription system
- **Notifications** - Toast & center-based notification system

### Dashboard Features
- Total Following/Followers count
- Non-followers list
- Recent unfollowers tracking
- Mutual followers identification
- Ghost followers detection
- Smart unfollow table

### Pro Plan Features (₹299/month)
- Unlimited scans and tracking
- Instant unfollow alerts
- Bulk cleanup tools
- Advanced analytics
- Priority support

## 🛠️ Tech Stack

**Frontend:**
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Lucide React Icons

**Backend:**
- Node.js REST API
- Razorpay Payment Gateway
- Firebase Authentication

**Database:**
- MongoDB (Atlas)
- Firestore (Real-time data)

**Hosting:**
- Vercel (Frontend)
- Railway/Render (Backend)

## 📋 Getting Started

### Prerequisites
- Node.js 16+ and npm
- Git
- GitHub account (for deployment)

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/followradar.git
cd followradar
npm install
```

### 2. Environment Setup

```bash
# Copy example env file
cp .env.example .env.local

# Edit with your credentials
nano .env.local
```

Required environment variables:
```
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=xxx
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxx
NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxx
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxx
NEXT_PUBLIC_FIREBASE_APP_ID=xxx

# Razorpay
NEXT_PUBLIC_RAZORPAY_KEY_ID=xxx
NEXT_RAZORPAY_KEY_SECRET=xxx

# Database
MONGODB_URI=mongodb+srv://...

# App
NODE_ENV=development
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
followradar/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Landing page
│   ├── signup/                   # Authentication
│   ├── dashboard/                # Main dashboard
│   ├── pricing/                  # Pricing page
│   ├── settings/                 # User settings
│   ├── support/                  # Help center
│   └── api/                      # API routes
│       ├── route.ts              # Main API endpoint
│       └── razorpay/             # Payment integration
│
├── components/                   # Reusable React components
│   ├── DashboardShell.tsx        # Dashboard layout wrapper
│   ├── Sidebar.tsx               # Dashboard navigation
│   ├── SmartUnfollowTable.tsx    # Data table component
│   ├── PaymentButton.tsx         # Razorpay integration
│   ├── TrackingStats.tsx         # Analytics stats
│   └── NotificationCenter.tsx    # Notification system
│
├── lib/                          # Utilities & helpers
│   └── mockData.ts               # Development mock data
│
├── styles/                       # Global styles
├── public/                       # Static assets
├── tailwind.config.ts            # Tailwind configuration
└── tsconfig.json                 # TypeScript config
```

## 🎨 Design System

### Color Palette
- **Primary Brand**: Indigo (#6366F1)
- **Accent**: Purple (#8B5CF6), Pink (#EC4899)
- **Dark Background**: #0F0F0F
- **Light Text**: #E2E8F0
- **Muted Text**: #94A3B8

### Typography
- Font Family: Inter, Geist
- Sizes: 12px to 48px
- Line Height: 1.5-1.6

### Spacing
- Base Unit: 8px
- Scales: 4, 8, 12, 16, 24, 32, 48, 64, 96

## 🔐 Authentication

### Sign Up Flow
1. Enter email, name, password
2. Validation on client & server
3. Account created in Firestore
4. Auth token generated
5. Redirect to dashboard

### Login Flow
1. Enter email & password
2. Firebase Authentication
3. Generate JWT token
4. Set session cookie
5. Dashboard access

## 💳 Payment Integration

### Razorpay Setup
1. Create Razorpay account
2. Get API keys (Key ID & Secret)
3. Add to environment variables
4. Checkout component handles payment flow

### Payment Flow
1. User clicks upgrade button
2. Create order via `/api/razorpay`
3. Razorpay checkout opens
4. User completes payment
5. Verify signature on backend
6. Update subscription in database

## 📊 API Endpoints

### Authentication
```
POST /api?action=signup          # Create account
POST /api?action=login           # Login user
POST /api?action=logout          # Logout user
POST /api?action=verify-token    # Verify token
```

### Tracking
```
GET /api?action=tracking-stats   # Get user stats
POST /api?action=tracking-sync   # Sync with Instagram
```

### Payments
```
POST /api/razorpay               # Create order (action: create)
POST /api/razorpay               # Verify payment (action: verify)
```

## 🚢 Deployment

### Deploy to Vercel

```bash
# Push to GitHub
git add .
git commit -m "Deploy"
git push origin main

# Go to https://vercel.com
# Import project from GitHub
# Add environment variables
# Deploy
```

### Deploy Backend

Use Railway or Render for Node.js API server with MongoDB.

## 📚 Documentation

- [Deployment Guide](./DEPLOYMENT.md)
- [Razorpay Setup](./RAZORPAY_SETUP.md)
- [Architecture](./ARCHITECTURE.md)
- [Quick Start](./QUICKSTART.md)

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Not Loading
- Restart dev server
- Check `.env.local` exists
- Verify variable names match

### Firebase Connection Issues
- Check API keys in `.env.local`
- Verify Firebase project exists
- Check Firestore security rules

## 📈 Performance

- **Next.js Optimization**: Automatic code splitting, image optimization
- **Tailwind CSS**: Tree-shaking for smaller bundle
- **Component Lazy Loading**: Dynamic imports for heavy components
- **Caching**: ISR for static pages, HTTP cache headers

## 🔒 Security

- ✅ HTTPS only (Vercel enforces)
- ✅ Firebase Security Rules for database
- ✅ Server-side Razorpay verification
- ✅ JWT token validation
- ✅ No sensitive keys in frontend
- ✅ Input validation on all endpoints

## 📞 Support

- Documentation: See `docs/` folder
- Issues: Create GitHub issue
- Email: support@followradar.com

## 📄 License

MIT License - feel free to use for personal or commercial projects

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

---

**Built with ❤️ for Instagram creators**

Start tracking your relationships today! [Get Started →](https://followradar.com)
