#!/bin/bash

# ============================================================
# Synergia Research Website - Quick Start Script
# ============================================================
# 
# This script helps you get started with the Synergia website
# Run this after cloning/opening the project
#
# Usage: bash setup.sh
# ============================================================

set -e

echo "🚀 Synergia Research Website - Setup Script"
echo "==========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed"
    exit 1
fi

echo "✅ npm version: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install
echo "✅ Dependencies installed"
echo ""

# Create environment file if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local file..."
    cat > .env.local << EOF
# Development environment variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Add any additional environment variables here
EOF
    echo "✅ .env.local created"
else
    echo "✅ .env.local already exists"
fi

echo ""
echo "==========================================="
echo "✅ Setup Complete!"
echo "==========================================="
echo ""

echo "📖 Next Steps:"
echo ""
echo "1. Start development server:"
echo "   npm run dev"
echo ""
echo "2. Open http://localhost:3000 in your browser"
echo ""
echo "3. Start replacing placeholder content:"
echo "   - Review CONTENT_GUIDE.md for step-by-step instructions"
echo "   - Edit data files in data/"
echo "   - Add images to public/"
echo ""
echo "4. Build for production:"
echo "   npm run build"
echo "   npm run export"
echo ""
echo "📚 Documentation:"
echo "   - README.md - Technical documentation"
echo "   - CONTENT_GUIDE.md - Content replacement steps"
echo "   - PROJECT_SUMMARY.md - Project overview"
echo ""
echo "🎉 Ready to develop!"
