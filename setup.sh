#!/bin/bash
# FollowRadar Project Setup Script

set -e

echo "🚀 Setting up FollowRadar project structure..."

# Create directory structure
mkdir -p src/app
mkdir -p src/components/landing
mkdir -p src/components/dashboard
mkdir -p src/components/shared
mkdir -p src/lib/firebase
mkdir -p src/lib/api
mkdir -p src/hooks
mkdir -p src/store
mkdir -p src/types
mkdir -p public/assets
mkdir -p api

echo "✅ Directories created"
