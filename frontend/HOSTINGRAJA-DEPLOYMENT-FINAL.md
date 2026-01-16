# HostingRaja Deployment Guide - Srajan Vastu

## ✅ Build Complete!

Your production build is ready in the `dist` folder. Total size: ~3.8 MB

---

## 📦 What's in the dist folder

```
dist/
├── index.html              (Main HTML file - 3.97 KB)
├── robots.txt              (SEO - Search engine directives)
├── sitemap.xml             (SEO - Site structure for Google)
├── assets/                 (All CSS, JS, and images)
│   ├── index-Cl9EjugL.css (92.61 KB - All styles)
│   ├── index-BQfSU3oJ.js  (350.36 KB - All JavaScript)
│   └── [images]           (All optimized images)
```

---

## 🚀 Deployment Steps for HostingRaja

### Step 1: Access cPanel
1. Login to your HostingRaja cPanel
2. Navigate to **File Manager**

### Step 2: Prepare the public_html folder
1. Go to `public_html` directory
2. **DELETE or BACKUP** all existing files
3. Keep it empty for fresh deployment

### Step 3: Upload the dist folder contents
1. Upload **ALL files and folders** from the `dist` folder to `public_html`
2. Make sure to upload:
   - ✅ index.html
   - ✅ robots.txt
   - ✅ sitemap.xml
   - ✅ assets folder (with all contents)

**IMPORTANT:** Upload the **CONTENTS** of the dist folder, NOT the dist folder itself!

### Step 4: Set File Permissions
In File Manager, set permissions:
- Files: 644
- Folders: 755

### Step 5: Configure .htaccess for React Router
Create a `.htaccess` file in `public_html` with this content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>

# Enable GZIP Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

---

## 🔧 After Deployment Checklist

### 1. Test Your Website
- [ ] Open your domain: `https://www.srajanvastu.com`
- [ ] Test all pages (Home, About, Services, Products, Contact, etc.)
- [ ] Test navigation and internal links
- [ ] Test booking form redirect
- [ ] Test contact form WhatsApp redirect
- [ ] Verify breadcrumbs appear on all pages
- [ ] Check mobile responsiveness

### 2. Verify SEO Files
- [ ] Check `yourdomain.com/robots.txt` is accessible
- [ ] Check `yourdomain.com/sitemap.xml` is accessible

### 3. Submit to Google
1. **Google Search Console**
   - Add your website
   - Submit sitemap: `https://www.srajanvastu.com/sitemap.xml`
   
2. **Google Analytics** (if you have it)
   - Verify tracking code is working

### 4. Test SEO Elements
- [ ] Check page titles (view browser tab)
- [ ] Check meta descriptions (view page source)
- [ ] Verify Google Maps shows correctly on Contact page
- [ ] Test structured data: https://search.google.com/test/rich-results

### 5. Performance Check
- [ ] Run PageSpeed Insights: https://pagespeed.web.dev/
- [ ] Run Mobile-Friendly Test: https://search.google.com/test/mobile-friendly

---

## 🔍 Common Issues & Solutions

### Issue 1: 404 Error on Page Refresh
**Problem:** Pages work when clicking links, but show 404 when refreshing
**Solution:** Make sure `.htaccess` file is properly uploaded with rewrite rules

### Issue 2: CSS/Images Not Loading
**Problem:** Website loads but no styling or images
**Solution:** 
- Check if `assets` folder uploaded correctly
- Verify file permissions (644 for files, 755 for folders)

### Issue 3: Robots.txt Not Found
**Problem:** `yourdomain.com/robots.txt` shows 404
**Solution:** Upload `robots.txt` directly to `public_html` root

### Issue 4: Contact Form Not Working
**Problem:** Form doesn't redirect to WhatsApp
**Solution:** Verify WhatsApp numbers are correct in the code (already set to +91-9650786531)

---

## 📊 Post-Deployment Monitoring

### Week 1:
- Monitor Google Search Console for crawl errors
- Check if pages are getting indexed
- Test all forms and redirects

### Month 1:
- Track organic traffic in Google Analytics
- Monitor keyword rankings
- Check for any 404 errors

---

## 🎯 SEO Configuration Already Done

✅ **Meta Tags:** All pages have unique titles and descriptions
✅ **Structured Data:** LocalBusiness, Service, Product schemas added
✅ **Sitemap:** All pages included with proper priorities
✅ **Robots.txt:** Configured for optimal crawling
✅ **Mobile-Friendly:** Fully responsive design
✅ **Page Speed:** Optimized with lazy loading
✅ **Local SEO:** NAP consistency + Google Maps
✅ **Breadcrumbs:** On all pages with schema markup

---

## 📞 Important Contact Information

**Website:** www.srajanvastu.com
**Email:** srajanvastu@gmail.com
**Phone:** +91-9650786531, +91-9810681928
**Address:** FF, The Palladians - D Block, D-76, Mayfield Garden, Sector 50, Gurugram, Haryana 122018

---

## 🔐 Security Note

After deployment, make sure to:
1. Keep cPanel password secure
2. Enable SSL certificate (HTTPS) from HostingRaja cPanel
3. Regularly backup your website
4. Update contact form if you add backend processing

---

## ✨ Your Website Features

1. **Fully SEO Optimized** - Ready to rank on Google
2. **Mobile Responsive** - Works perfectly on all devices
3. **Fast Loading** - Optimized images and code
4. **Professional Design** - Clean, modern, business-ready
5. **Schema Markup** - Rich snippets for better SERP visibility
6. **Local SEO** - Optimized for "Vastu consultant near me" searches
7. **WhatsApp Integration** - Direct contact form to WhatsApp
8. **Google Maps** - Shows exact office location

---

## 📝 Next Steps After Going Live

1. **Submit sitemap to Google Search Console**
2. **Verify Google Business Profile** (if not done)
3. **Test website on multiple devices and browsers**
4. **Share website link on social media** (Facebook, Instagram, YouTube)
5. **Start monitoring analytics and rankings**

---

**Deployment Date:** January 5, 2026
**Build Status:** ✅ READY FOR PRODUCTION
**Total Build Size:** 3.8 MB (optimized)

🎉 **Your website is ready to go live!** 🎉
