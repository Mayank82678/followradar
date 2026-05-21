# FollowRadar - Premium Instagram Tracker

> Never miss an unfollow. Track followers, get instant alerts, and manage your Instagram relationships with precision.

## 🎯 Overview

FollowRadar is a premium SaaS application that helps creators, influencers, and brands track their Instagram followers with real-time alerts, advanced analytics, and smart cleanup tools.

### Core Features

- ✅ **Real-time Unfollow Alerts** - Know instantly when someone unfollows you
- ✅ **Follower Analytics** - Track mutuals, ghost followers, and non-followers
- ✅ **Smart Cleanup** - One-click bulk unfollow suggestions
- ✅ **Premium Dashboard** - Beautiful, fast, conversion-focused UI
- ✅ **Instant Actions** - Unfollow back with a single click
- ✅ **Subscription Ready** - Razorpay integration for ₹299/month Pro plan

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Node.js, Express (planned)
- **Database**: MongoDB Atlas (planned)
- **Auth**: Firebase Authentication
- **Payments**: Razorpay
- **Hosting**: Vercel (frontend), Railway (backend)

## 📋 Project Structure

```
followradar/
├── app/                          # Next.js app directory
│   ├── dashboard/                # Main dashboard
│   ├── non-followers/            # Non-followers list
│   ├── unfollowers/              # Recent unfollowers
│   ├── mutuals/                  # Mutual followers
│   ├── ghosts/                   # Ghost followers
│   ├── pricing/                  # Pricing page
│   ├── settings/                 # Account settings
│   ├── support/                  # Support center
│   ├── login/                    # Login page
│   ├── signup/                   # Signup page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Landing page
│   └── globals.css               # Global styles
│
├── components/                   # React components
│   ├── DashboardShell.tsx        # Dashboard layout wrapper
│   ├── Sidebar.tsx               # Navigation sidebar
│   └── SmartUnfollowTable.tsx    # Data table component
│
├── lib/                          # Utilities & config
│   ├── firebaseConfig.ts         # Firebase setup
│   ├── mockData.ts               # Mock data for development
│   └── ...
│
├── public/                       # Static assets
├── styles/                       # Additional styles
├── package.json                  # Dependencies
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── next.config.js                # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Firebase project (create at [firebase.google.com](https://firebase.google.com))
- Razorpay account (create at [razorpay.com](https://razorpay.com))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/followradar.git
   cd followradar
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your credentials:
   - Firebase API keys
   - Razorpay keys
   - API endpoints

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📄 Pages & Routes

### Public Routes
- `/` - Landing page
- `/login` - Login page
- `/signup` - Signup page
- `/pricing` - Pricing page

### Protected Routes (Dashboard)
- `/dashboard` - Main analytics dashboard
- `/non-followers` - Accounts you follow that don't follow back
- `/unfollowers` - Recent unfollowers with alerts
- `/mutuals` - Mutual followers (you follow + they follow you)
- `/ghosts` - Ghost followers (no engagement 30+ days)
- `/settings` - Account & notification settings
- `/support` - Help center & documentation

## 🎨 Design System

### Colors
- **Primary**: Brand indigo (#6366F1)
- **Secondary**: Purple (#8B5CF6)
- **Accent**: Pink (#EC4899)
- **Dark Background**: #0F0F0F
- **Dark Surface**: #1A1A1A

### Typography
- **Font**: Inter (sans-serif)
- **Weight**: 400, 500, 600, 700

### Components
- Rounded cards with backdrop blur
- Smooth transitions (200-300ms)
- Glass-morphism effects
- Premium shadow effects

## 💳 Pricing Plans

### Free Plan
- Limited scans (5/month)
- Basic follower tracking
- Email support
- Price: **Free**

### Pro Plan ✨
- Unlimited scans
- Real-time unfollow alerts
- Bulk cleanup tools
- Priority support
- Advanced analytics
- Price: **₹299/month**

### Enterprise
- Multi-account management
- API access
- Custom analytics
- Dedicated support
- Price: **Custom**

## 📊 Features Roadmap

### Phase 1 (MVP) ✅
- [x] Landing page
- [x] Dashboard UI
- [x] Authentication flow
- [ ] Firebase integration
- [ ] Basic tracking features

### Phase 2
- [ ] Real-time unfollow notifications
- [ ] Bulk actions
- [ ] Advanced analytics
- [ ] Settings page

### Phase 3
- [ ] Razorpay payment integration
- [ ] Subscription management
- [ ] Premium features
- [ ] Email notifications

### Phase 4+
- [ ] Chrome extension
- [ ] API for partners
- [ ] Advanced ML analytics
- [ ] Team collaboration
- [ ] Instagram API integration

## 🔐 Security

- Firebase Authentication for secure login
- Environment variables for sensitive credentials
- No Instagram credentials stored
- HTTPS only
- Regular security audits

## 📱 Mobile Responsive

FollowRadar is fully responsive and optimized for:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🧪 Development Commands

```bash
# Development server
npm run dev

# Build production
npm run build

# Production server
npm run start

# Linting
npm run lint

# Type checking
npm run typecheck
```

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

- **Email**: support@followradar.com
- **Documentation**: /support/help-center
- **Issues**: GitHub Issues
- **Discord**: [Join our community]

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with Next.js, React, and Tailwind CSS
- Premium design inspired by modern SaaS applications
- Community feedback and contributions

---

**Ready to track your Instagram growth?** [Start for free](http://localhost:3000/signup)

