# FollowRadar - Technical Architecture

## 🏗 System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         USERS (Browser)                          │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                    ┌──────▼──────┐
                    │   Vercel    │  (Frontend Deployment)
                    │   (Next.js) │
                    └──────┬──────┘
         ┌──────────────────┼──────────────────┐
         │                  │                  │
    ┌────▼─────┐      ┌────▼─────┐      ┌────▼─────┐
    │ Landing  │      │ Dashboard│      │ Pricing  │
    │ Page     │      │ Pages    │      │ Page     │
    └────┬─────┘      └────┬─────┘      └────┬─────┘
         │                 │                 │
         └─────────────────┼─────────────────┘
                           │
                    ┌──────▼──────┐
                    │ API Routes  │  (Next.js API)
                    │ /api/*      │
                    └──────┬──────┘
         ┌──────────────────┼──────────────────┐
         │                  │                  │
    ┌────▼──────┐     ┌────▼──────┐      ┌────▼──────┐
    │ Firebase  │     │ MongoDB   │      │ Razorpay │
    │ Auth      │     │ Database  │      │ Payments │
    └────┬──────┘     └────┬──────┘      └────┬──────┘
         │                 │                  │
         └─────────────────┼──────────────────┘
                           │
         ┌─────────────────┼─────────────────┐
         │                 │                 │
    ┌────▼──────┐     ┌────▼──────┐    ┌────▼──────┐
    │ Firebase  │     │ Instagram │    │ Razorpay  │
    │ Services  │     │ API       │    │ Webhooks  │
    └───────────┘     └───────────┘    └───────────┘
```

## 📊 Data Flow

### User Registration & Authentication
```
User Signup
    ↓
Form Submit (/signup)
    ↓
Firebase Auth API
    ↓
Create User Document (Firestore)
    ↓
Set User Session
    ↓
Redirect to /dashboard
    ↓
Start Tracking
```

### Follower Tracking Flow
```
User Connects Instagram
    ↓
Instagram OAuth Flow
    ↓
Get Instagram Access Token
    ↓
Fetch Follower List (Instagram API)
    ↓
Store in MongoDB
    ↓
Compare with Previous Snapshot
    ↓
Detect Changes:
  ├─ New Followers
  ├─ Unfollowers
  ├─ Non-followers
  └─ Ghost Followers
    ↓
Update Dashboard
    ↓
Send Notifications
```

### Payment Flow
```
User Clicks "Upgrade"
    ↓
Create Razorpay Order
    ↓
Open Payment Modal
    ↓
User Completes Payment
    ↓
Razorpay Webhook Callback
    ↓
Verify Signature
    ↓
Update User Subscription (Firestore)
    ↓
Unlock Pro Features
    ↓
Redirect to Dashboard
```

## 🗄️ Database Schema

### Firebase Firestore

```
users/ (Collection)
├── [userId]
    ├── email: string
    ├── displayName: string
    ├── photoURL: string
    ├── subscription: "free" | "pro" | "enterprise"
    ├── subscriptionEnd: timestamp
    ├── instagramHandle: string
    ├── instagramAccessToken: string (encrypted)
    ├── createdAt: timestamp
    ├── updatedAt: timestamp
    └── settings: {
        emailNotifications: boolean
        pushNotifications: boolean
        weeklyDigest: boolean
        }

tracking/ (Collection)
├── [userId]
    ├── totalFollowing: number
    ├── totalFollowers: number
    ├── nonFollowers: [array of usernames]
    ├── recentUnfollowers: [
    │   { username, unfollowedAt: timestamp }
    │ ]
    ├── mutualFollowers: number
    ├── ghostFollowers: [array of usernames]
    ├── lastSync: timestamp
    └── syncStatus: "pending" | "completed" | "error"

transactions/ (Collection)
├── [transactionId]
    ├── userId: string
    ├── paymentId: string (Razorpay)
    ├── amount: number (in paise)
    ├── currency: "INR"
    ├── plan: "pro" | "enterprise"
    ├── status: "success" | "failed" | "pending"
    ├── createdAt: timestamp
    └── expiresAt: timestamp
```

## 🔌 API Endpoints (Planned)

```
Authentication:
  POST   /api/auth/register
  POST   /api/auth/login
  POST   /api/auth/logout
  POST   /api/auth/refresh-token

User Data:
  GET    /api/user/profile
  PUT    /api/user/profile
  GET    /api/user/subscription
  POST   /api/user/upload-avatar

Tracking:
  GET    /api/tracking/summary
  GET    /api/tracking/followers
  GET    /api/tracking/following
  POST   /api/tracking/sync
  GET    /api/tracking/changes

Analysis:
  GET    /api/analysis/non-followers
  GET    /api/analysis/unfollowers
  GET    /api/analysis/mutuals
  GET    /api/analysis/ghosts

Actions:
  POST   /api/actions/unfollow
  POST   /api/actions/follow
  POST   /api/actions/bulk-unfollow

Payments:
  POST   /api/payments/create-order
  POST   /api/payments/verify
  POST   /api/payments/subscription-status
  POST   /api/payments/cancel

Webhooks:
  POST   /api/webhooks/razorpay
  POST   /api/webhooks/instagram
```

## 🔐 Authentication Flow

```
┌─────────────────────────────────────────┐
│         User Login/Signup               │
└──────────────────┬──────────────────────┘
                   │
         ┌─────────▼──────────┐
         │  Next.js Client    │
         │  form submission   │
         └─────────┬──────────┘
                   │
         ┌─────────▼──────────┐
         │  Firebase Auth     │
         │  Email/Password    │
         └─────────┬──────────┘
                   │
         ┌─────────▼──────────┐
         │ Create User in     │
         │ Firestore          │
         └─────────┬──────────┘
                   │
         ┌─────────▼──────────┐
         │ Generate JWT Token │
         └─────────┬──────────┘
                   │
         ┌─────────▼──────────┐
         │ Store in Cookies   │
         │ (httpOnly)         │
         └─────────┬──────────┘
                   │
         ┌─────────▼──────────┐
         │ Redirect to        │
         │ /dashboard         │
         └────────────────────┘
```

## 🎛️ Component Hierarchy

```
<RootLayout>
  ├── <Header>
  │   ├── <Logo>
  │   ├── <Navigation>
  │   └── <UserMenu>
  │
  ├── <Page Content>
  │   ├── Landing Page (/)
  │   │   ├── <HeroSection>
  │   │   ├── <FeaturesSection>
  │   │   ├── <PricingSection>
  │   │   └── <FAQSection>
  │   │
  │   └── Dashboard (/dashboard)
  │       ├── <DashboardShell>
  │       │   ├── <Sidebar>
  │       │   │   ├── <NavLink> x 8
  │       │   │   └── <SupportCard>
  │       │   │
  │       │   └── <DashboardContent>
  │       │       ├── <Header>
  │       │       ├── <StatsGrid>
  │       │       │   └── <StatCard> x 6
  │       │       ├── <AlertBox>
  │       │       ├── <SmartUnfollowTable>
  │       │       └── <InsightsGrid>
  │       │
  │       ├── Feature Pages (/non-followers, etc.)
  │       ├── Settings (/settings)
  │       ├── Pricing (/pricing)
  │       └── Support (/support)
  │
  └── <Footer>
      ├── <FooterLinks>
      └── <Copyright>
```

## 🔄 State Management

```
Global State (Zustand):
├── userStore
│   ├── user: User | null
│   ├── loading: boolean
│   └── login(email, password): Promise
│
├── subscriptionStore
│   ├── plan: "free" | "pro"
│   ├── expiresAt: Date
│   └── upgrade(): Promise
│
└── trackingStore
    ├── stats: DashboardStats
    ├── unfollowers: Unfollower[]
    ├── nonFollowers: NonFollower[]
    └── sync(): Promise
```

## 📱 Mobile Optimization

```
Breakpoints:
  Mobile:   320px - 767px
  Tablet:   768px - 1024px
  Desktop:  1025px+

Responsive Components:
  ├── Navigation
  │   ├── Mobile: Hamburger menu
  │   └── Desktop: Full navbar
  │
  ├── Sidebar
  │   ├── Mobile: Hidden (in drawer)
  │   ├── Tablet: Collapsible
  │   └── Desktop: Always visible
  │
  ├── Stats Grid
  │   ├── Mobile: 1 column
  │   ├── Tablet: 2 columns
  │   └── Desktop: 3 columns
  │
  └── Tables
      ├── Mobile: Vertical stack
      ├── Tablet: Horizontal scroll
      └── Desktop: Full table
```

## 🚀 Deployment Architecture

```
GitHub Repository
    ↓
    ├─→ Vercel (Frontend)
    │   ├── Auto-deploy on push
    │   ├── Environment variables
    │   ├── Custom domain
    │   └── SSL/HTTPS
    │
    └─→ Railway (Backend - Future)
        ├── Auto-deploy on push
        ├── Environment variables
        ├── Automatic restarts
        └── Logs & monitoring
```

## 📊 Performance Metrics

```
Target Metrics:
  ├── Lighthouse Score: > 90
  ├── First Contentful Paint: < 1.5s
  ├── Largest Contentful Paint: < 2.5s
  ├── Cumulative Layout Shift: < 0.1
  ├── Bundle Size: < 200KB (gzipped)
  └── API Response Time: < 200ms
```

## 🔒 Security Layers

```
Client Side:
  ├── HTTPS Only
  ├── HttpOnly Cookies
  ├── CORS Configuration
  └── Input Validation

Server Side:
  ├── JWT Verification
  ├── Rate Limiting
  ├── Input Sanitization
  ├── SQL Injection Prevention
  └── CSRF Protection

Database:
  ├── Firestore Security Rules
  ├── User Isolation
  ├── Data Encryption
  └── Audit Logging
```

## 🔄 CI/CD Pipeline (Planned)

```
Developer Push
    ↓
GitHub Actions
    ├── Run Tests
    ├── Type Check (TypeScript)
    ├── Lint Code
    └── Build Check
        ↓
        ✓ All Pass?
        ├─→ YES: Merge to main
        │       ↓
        │   Auto Deploy
        │   ├─→ Vercel (Frontend)
        │   └─→ Railway (Backend)
        │
        └─→ NO: Block Merge
            Notify Developer
```

---

This architecture is **scalable, secure, and production-ready** for FollowRadar MVP and future growth.
