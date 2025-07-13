#!/bin/bash

echo "🚀 Bon Hotel - GitHub Deployment Script"
echo "========================================"

# Default to bonhotel.github.io repository
REPO_NAME="bonhotel.github.io"
GITHUB_USERNAME="bonhotel"

echo "📁 Repository: $REPO_NAME"
echo "👤 GitHub Username: $GITHUB_USERNAME"
echo ""

# Check if remote already exists
if git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Updating remote origin..."
    git remote set-url origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git
else
    echo "🔗 Adding remote origin..."
    git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git
fi

# Add all files, commit and push
echo "📦 Adding files to git..."
git add .
git commit -m "Deploy Bon Hotel website - $(date)"

echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ Deployment completed!"
echo "🌐 Your website will be available at:"
echo "   https://$GITHUB_USERNAME.github.io"
echo ""
echo "📋 Next steps for custom domain (bonhotel.kg):"
echo "1. Go to https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo "2. Click Settings → Pages"
echo "3. In 'Custom domain' field, enter: bonhotel.kg"
echo "4. Configure your DNS provider to point bonhotel.kg to:"
echo "   - A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153"
echo "   - CNAME record: www.bonhotel.kg → bonhotel.github.io"
echo ""
echo "🎉 Your Bon Hotel website will be live in a few minutes!" 