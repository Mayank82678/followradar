@echo off
REM FollowRadar Launch Assistant
REM This script helps you launch FollowRadar in minutes!

echo.
echo =========================================
echo    FollowRadar Launch Assistant
echo =========================================
echo.

:menu
echo.
echo What would you like to do?
echo.
echo 1. Test build locally
echo 2. Setup credentials
echo 3. Push to GitHub
echo 4. View deployment status
echo 5. Open documentation
echo 6. Exit
echo.

set /p choice="Enter choice (1-6): "

if "%choice%"=="1" goto test_build
if "%choice%"=="2" goto setup_creds
if "%choice%"=="3" goto git_push
if "%choice%"=="4" goto vercel_status
if "%choice%"=="5" goto docs
if "%choice%"=="6" goto end

echo Invalid choice. Try again.
goto menu

:test_build
echo.
echo Testing build locally...
echo.
npm run build
if %errorlevel% equ 0 (
    echo.
    echo ✅ Build successful!
    echo Your code is ready to deploy.
    echo.
    pause
) else (
    echo.
    echo ❌ Build failed. Check errors above.
    echo.
    pause
)
goto menu

:setup_creds
echo.
echo Setup Credentials File
echo.
echo 1. Open https://console.firebase.google.com
echo 2. Create project "followradar"
echo 3. Copy Firebase config values
echo.
echo 4. Open https://dashboard.razorpay.com
echo 5. Get API Key ID and Secret
echo.
echo 6. Create credentials.txt on your desktop with:
echo.
echo NEXT_PUBLIC_FIREBASE_API_KEY=your_value
echo NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_value
echo NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_value
echo NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_value
echo NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_value
echo NEXT_PUBLIC_FIREBASE_APP_ID=your_value
echo NEXT_PUBLIC_RAZORPAY_KEY_ID=your_value
echo NEXT_RAZORPAY_KEY_SECRET=your_value
echo.
pause
goto menu

:git_push
echo.
echo Pushing to GitHub...
echo.

echo Initializing git...
git init

echo Adding files...
git add .

echo Creating commit...
git commit -m "Initial FollowRadar MVP - Ready for launch"

echo.
echo Enter your GitHub repository URL:
echo (Example: https://github.com/yourusername/followradar.git)
echo.
set /p repo_url="GitHub URL: "

git remote add origin %repo_url%

echo Pushing to main branch...
git branch -M main
git push -u origin main

echo.
echo ✅ Code pushed to GitHub!
echo.
echo Next steps:
echo 1. Go to https://vercel.com
echo 2. Import your followradar repository
echo 3. Add environment variables
echo 4. Deploy!
echo.
pause
goto menu

:vercel_status
echo.
echo Deployment Status
echo.
echo Your deployment status is shown at:
echo https://vercel.com/dashboard
echo.
echo Once deployed, your site will be at:
echo https://followradar.vercel.app
echo (or your custom domain)
echo.
pause
goto menu

:docs
echo.
echo Documentation
echo.
echo Opening documentation...
echo.
echo Key files:
echo - LAUNCH_CHECKLIST.md (step-by-step)
echo - QUICK_DEPLOY.md (fast deployment)
echo - BUILD_GUIDE.md (full setup)
echo.
pause
goto menu

:end
echo.
echo Thank you for using FollowRadar!
echo.
echo Next: Go to https://vercel.com and deploy!
echo.
pause
