#!/bin/bash

echo "🚀 Bon Hotel - GitHub Deployment Script"
echo "========================================"

# Check if repository name is provided
if [ -z "$1" ]; then
    echo "❌ Please provide repository name as argument"
    echo "Usage: ./deploy.sh <repository-name>"
    echo "Example: ./deploy.sh bonhotel-website"
    exit 1
fi

REPO_NAME=$1
GITHUB_USERNAME="bonhotel"

echo "📁 Repository: $REPO_NAME"
echo "👤 GitHub Username: $GITHUB_USERNAME"
echo ""

# Add remote origin
echo "🔗 Adding remote origin..."
git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git

# Set main branch and push
echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ Deployment completed!"
echo "🌐 Your website will be available at:"
echo "   https://$GITHUB_USERNAME.github.io/$REPO_NAME"
echo ""
echo "📋 Next steps:"
echo "1. Go to https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo "2. Click Settings → Pages"
echo "3. Select 'Deploy from a branch'"
echo "4. Choose 'main' branch and '/ (root)' folder"
echo "5. Click Save"
echo ""
echo "🎉 Your Bon Hotel website will be live in a few minutes!" 