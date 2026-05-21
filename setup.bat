@echo off
REM FollowRadar Project Setup Script for Windows

echo ========================================
echo    FollowRadar - Setup & Quick Start
echo ========================================
echo.

echo Step 1: Installing dependencies...
call npm install

echo.
echo Step 2: Setting up environment variables...
if not exist .env.local (
    copy .env.example .env.local
    echo ✅ Created .env.local - Please edit with your credentials!
    echo.
    echo Required credentials:
    echo   - Firebase API key
    echo   - Razorpay Key ID and Secret
    echo   - MongoDB URI (optional)
    pause
) else (
    echo ✅ .env.local already exists
)

echo.
echo Step 3: Starting development server...
echo.
echo ✅ Setup complete! Starting npm run dev...
echo Open http://localhost:3000 in your browser
echo.

call npm run dev
