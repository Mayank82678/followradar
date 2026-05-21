# FollowRadar - Quick Deployment Guide (5 minutes to live!)

## 🚀 Deploy to Vercel in 5 Steps

### Step 1: Prepare Your Code (1 min)

```bash
cd followradar

# Make sure everything builds
npm run build

# If it builds successfully, continue!
```

### Step 2: Push to GitHub (2 min)

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial FollowRadar MVP - Ready for deployment"

# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/followradar.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 3: Connect to Vercel (1 min)

1. Go to https://vercel.com
2. Click "New Project"
3. Click "Import Git Repository"
4. Select "GitHub" and authenticate
5. Find and select your `followradar` repository
6. Click "Import"

### Step 4: Add Environment Variables (1 min)

In Vercel dashboard, go to **Settings > Environment Variables** and add:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_value_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_value_here
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_value_here
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_value_here
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_value_here
NEXT_PUBLIC_FIREBASE_APP_ID=your_value_here

NEXT_PUBLIC_RAZORPAY_KEY_ID=your_value_here
NEXT_RAZORPAY_KEY_SECRET=your_value_here
```

**Don't have these credentials?** See section below.

### Step 5: Deploy! (0 min)

Click the "Deploy" button and watch the magic happen! ✨

In ~2 minutes, your site will be live at:
- `https://followradar.vercel.app`
- Or your custom domain if configured

---

## 🔑 Getting Required Credentials

### Firebase Setup (10 minutes)

1. **Go to Firebase Console**
   - https://console.firebase.google.com
   - Sign in with Google

2. **Create a new project**
   - Click "Create a project"
   - Name: `followradar`
   - Click "Create project"
   - Wait for project to initialize (~1 min)

3. **Get Web SDK config**
   - Click the Web icon (</>) to add an app
   - Register app
   - Copy the config that appears:
   ```javascript
   const firebaseConfig = {
     apiKey: "...",
     authDomain: "...",
     projectId: "...",
     storageBucket: "...",
     messagingSenderId: "...",
     appId: "..."
   };
   ```
   - These values go in your `.env.local` / Vercel environment

4. **Enable Authentication**
   - Left sidebar > Authentication
   - Click "Get started"
   - Enable "Email/Password"
   - Copy your Auth Domain value

5. **Done!** Your Firebase credentials are ready to use

### Razorpay Setup (5 minutes)

1. **Go to Razorpay Dashboard**
   - https://dashboard.razorpay.com
   - Sign up or sign in

2. **Get API Keys**
   - Settings > API Keys
   - Copy your Key ID and Key Secret
   - These are your:
     - `NEXT_PUBLIC_RAZORPAY_KEY_ID`
     - `NEXT_RAZORPAY_KEY_SECRET`

3. **Done!** Your payment keys are ready

---

## ✅ After Deployment - What to Do

### Test Your Live Site

1. **Visit your deployed site**
   - https://followradar.vercel.app

2. **Test the signup form**
   - Go to /signup
   - Try signing up
   - (It won't save yet without backend, but the form should work)

3. **Test the dashboard**
   - Go to /dashboard
   - Mock data should display
   - Stats should update

4. **Test pricing/payments**
   - Go to /pricing
   - Try clicking "Upgrade to Pro"
   - Razorpay modal should open

### Set Up Custom Domain (Optional)

1. **In Vercel Dashboard**
   - Project > Settings > Domains
   - Add custom domain
   - Follow DNS setup instructions

2. **Point your domain**
   - Go to your domain registrar
   - Update DNS records as shown in Vercel

3. **Done!** Your custom domain works

### Next: Backend Setup (Optional but Recommended)

Once you have the frontend live, you can:

1. Deploy Node.js API to Railway or Render
2. Connect MongoDB
3. Set up real user authentication
4. Integrate real Instagram data tracking

See `DEPLOYMENT.md` for full backend setup instructions.

---

## 🎯 Quick Troubleshooting

### Build Failed in Vercel?
- Check console output for errors
- Most common: Wrong Node version
- Fix: Vercel > Settings > Node.js Version > Select 18 or 20

### Environment Variables Not Working?
- Make sure you added them in Vercel Settings
- Don't add them in a `.env` file (Vercel ignores it)
- Redeploy after adding variables
- Vercel > Deployments > Click latest > Redeploy

### Can't Add GitHub Repo?
- Make sure you pushed all changes to GitHub
- Check repository is public or you have access
- Reconnect GitHub account

### Blank Page on First Load?
- Wait 10 seconds for Next.js to build
- Check browser console for errors
- Hard refresh (Ctrl+Shift+R)

---

## 📊 Deployment Checklist

- [ ] Code builds locally with `npm run build`
- [ ] All changes pushed to GitHub
- [ ] Vercel project created
- [ ] Firebase credentials added
- [ ] Razorpay credentials added
- [ ] Deployed successfully
- [ ] Site loads at vercel.app URL
- [ ] Forms are interactive
- [ ] Dashboard displays stats
- [ ] Pricing page shows

---

## 🎉 Success!

You now have FollowRadar live on the internet! 🚀

**Share it:**
- Tweet: "Just launched FollowRadar - Instagram relationship tracker! 🎯"
- GitHub star: https://github.com/YOUR_USERNAME/followradar
- Show friends the live site

**Next steps:**
- Add backend for real user data
- Integrate Instagram API
- Get first users
- Iterate based on feedback

---

## 📞 Need Help?

**Common issues and solutions:**

1. **"Firebase not initializing"**
   - Check environment variables in Vercel
   - Make sure API keys are correct
   - Redeploy after adding variables

2. **"Razorpay button not working"**
   - Verify Razorpay script loads (check Network tab)
   - Check Key ID is public, Secret is server-side only

3. **"Site is slow"**
   - Vercel automatically optimizes - wait for first deployment
   - Check Lighthouse score in Vercel Analytics
   - Most pages load in <2 seconds

4. **"Signup form doesn't work"**
   - Backend API not connected yet
   - This is expected in MVP
   - Form validation works locally

---

**Congratulations! Your FollowRadar is now live! 🎊**

For detailed setup, see:
- `BUILD_GUIDE.md` - Complete build guide
- `DEPLOYMENT.md` - Full deployment docs
- `README.md` - Project overview
