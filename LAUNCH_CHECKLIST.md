# 🚀 FollowRadar Launch Checklist - Start Here!

## Phase 1: Prepare (15 minutes)

### ✅ Step 1: Firebase Setup (5 minutes)

**Go to:** https://console.firebase.google.com

1. Click **"Create a project"**
   - Name: `followradar`
   - Accept terms
   - Click **Create project**
   - Wait ~1 minute for creation

2. Once created, go to **Settings** (gear icon top-left)

3. Scroll down to **"Your apps"** section

4. Click **Add app** → **Web** (</> icon)
   - Name: `followradar-web`
   - Check "Also set up Firebase Hosting"
   - Click **Register app**

5. Copy the config shown:
   ```
   apiKey: "..."
   authDomain: "..."
   projectId: "..."
   storageBucket: "..."
   messagingSenderId: "..."
   appId: "..."
   ```

6. Save these values - you'll need them in 10 minutes

---

### ✅ Step 2: Razorpay Setup (3 minutes)

**Go to:** https://dashboard.razorpay.com

1. Click **Sign up**
   - Email: your email
   - Password: secure password
   - Phone: your phone
   - Click **Create account**

2. Verify your email (check inbox)

3. Once verified, go to **Settings** → **API Keys**

4. Under "Live Keys" or "Test Keys", copy:
   - `Key ID` (looks like: `rzp_live_xxx...`)
   - `Key Secret` (long string)

5. Save these values - you'll need them in 10 minutes

---

### ✅ Step 3: GitHub Setup (3 minutes)

**Go to:** https://github.com

1. Sign in or create account

2. Click **+** (top right) → **New repository**

3. Fill in:
   - Repository name: `followradar`
   - Description: `Premium Instagram relationship tracker`
   - Public
   - Skip templates
   - Click **Create repository**

4. Copy the HTTPS URL shown (like: `https://github.com/yourname/followradar.git`)

---

### ✅ Step 4: Prepare Credentials File (2 minutes)

Create a file called `credentials.txt` on your desktop with:

```
FIREBASE CREDENTIALS:
NEXT_PUBLIC_FIREBASE_API_KEY=paste_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=paste_here
NEXT_PUBLIC_FIREBASE_PROJECT_ID=paste_here
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=paste_here
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=paste_here
NEXT_PUBLIC_FIREBASE_APP_ID=paste_here

RAZORPAY CREDENTIALS:
NEXT_PUBLIC_RAZORPAY_KEY_ID=paste_here
NEXT_RAZORPAY_KEY_SECRET=paste_here

GITHUB:
Repository URL=paste_here
```

**Now fill in the values from Steps 1, 2, and 3 above.**

---

## Phase 2: Deploy (10 minutes)

### ✅ Step 5: Push Code to GitHub

Open **Command Prompt** or **PowerShell** and run:

```bash
cd d:\instagram

# Initialize git
git init

# Add all files
git add .

# Create commit
git commit -m "Initial FollowRadar MVP - Ready for launch"

# Add remote (replace with YOUR repository URL from Step 3)
git remote add origin https://github.com/YOUR_USERNAME/followradar.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**If asked for GitHub credentials:**
- Username: your GitHub username
- Password: create a Personal Access Token at https://github.com/settings/tokens

---

### ✅ Step 6: Deploy to Vercel

**Go to:** https://vercel.com

1. Click **Sign up** (or sign in)
   - Choose "Continue with GitHub"
   - Authorize Vercel

2. Once logged in, click **"Add New..."** → **Project**

3. Click **"Import Git Repository"**

4. Search for **`followradar`** in your repositories

5. Click **Import**

6. Next page - **Environment Variables**
   - Click **"Add Environment Variable"**
   - Add ALL values from your credentials.txt:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY = (value)
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = (value)
   NEXT_PUBLIC_FIREBASE_PROJECT_ID = (value)
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = (value)
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = (value)
   NEXT_PUBLIC_FIREBASE_APP_ID = (value)
   NEXT_PUBLIC_RAZORPAY_KEY_ID = (value)
   NEXT_RAZORPAY_KEY_SECRET = (value)
   ```

7. Click **Deploy**

8. **Wait 2-3 minutes...** Vercel will build and deploy!

9. Once done, you'll see:
   - ✅ Deployment successful
   - 🌐 Your site URL (like: `https://followradar.vercel.app`)

---

### ✅ Step 7: Test Your Live Site

1. Click the URL from Vercel
2. Your FollowRadar site is LIVE! 🎉
3. Test pages:
   - Home page
   - /pricing - Try clicking "Upgrade to Pro"
   - /dashboard - Should show mock stats
   - /signup - Form should work

---

### ✅ Step 8: Share Your Launch

**Post on social media:**

```
🚀 Just launched FollowRadar!

The premium Instagram relationship tracker that helps creators:
✅ See who unfollowed them instantly
✅ Identify non-followers
✅ Track mutual followers
✅ Detect ghost accounts

Smart, beautiful, powerful.

Check it out: [YOUR_VERCEL_URL]

#IndieHackers #SaaS #Instagram
```

---

## Phase 3: Connect Backend (Tomorrow)

Once live, connect the backend:

### Step 1: Enable Firebase Auth
- Go to Firebase Console
- Authentication → Sign-in method
- Enable Email/Password
- Copy Auth Domain

### Step 2: Create Firestore Database
- Firebase Console
- Firestore Database
- Create database (production mode)
- Set security rules

### Step 3: Update .env.local
- Add Firebase credentials
- Test signup flow locally first
- Verify user creation works

### Step 4: Deploy Again
- Make changes locally
- Push to GitHub
- Vercel auto-deploys!

---

## 🎯 Quick Command Reference

**If you need to run locally first:**

```bash
cd d:\instagram
npm install
npm run build
npm run start
# Open http://localhost:3000
```

**To update and redeploy:**

```bash
# Make changes to files
git add .
git commit -m "Update description"
git push origin main
# Vercel auto-deploys!
```

---

## ❓ Stuck on a Step?

**Firebase help:**
- Go to: https://console.firebase.google.com
- Check you're on correct project
- Look for "Web" app in settings

**Razorpay help:**
- Go to: https://dashboard.razorpay.com
- Settings → API Keys
- Copy the LIVE keys (not test)

**GitHub help:**
- Make sure you have git installed
- Run: `git --version`
- If not found, install from: https://git-scm.com

**Vercel help:**
- Check environment variables are added
- Click "Deployments" to see build logs
- Redeploy if changes made

---

## 🎊 Success Indicators

✅ Firebase project created
✅ Razorpay keys obtained
✅ GitHub repo created
✅ Code pushed to GitHub
✅ Vercel deployment successful
✅ Live URL works
✅ Pages load
✅ Forms respond

---

## 📊 Timeline

| Phase | Time | Status |
|-------|------|--------|
| Firebase setup | 5 min | ⏱️ Now |
| Razorpay setup | 3 min | ⏱️ Now |
| GitHub setup | 3 min | ⏱️ Now |
| Credentials | 2 min | ⏱️ Now |
| Push to GitHub | 2 min | ⏱️ Next |
| Deploy to Vercel | 5 min | ⏱️ Next |
| Test site | 2 min | ⏱️ Next |
| **Total** | **~22 min** | ⏱️ Let's go! |

---

## 🚀 Ready? Start with Step 1!

### Next Action:
1. Open https://console.firebase.google.com
2. Create project
3. Get credentials
4. Come back here for Step 2

**You've got this! Let's launch! 🚀**

---

**Need help?** Check `QUICK_DEPLOY.md` for detailed steps
**Want to understand?** Check `BUILD_GUIDE.md`
**Just deploy?** Follow this checklist!
