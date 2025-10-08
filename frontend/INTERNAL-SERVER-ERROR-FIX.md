# 🚨 INTERNAL SERVER ERROR - FIX GUIDE

## Problem: "Internal Server Error" after uploading to HostingRaja

This is caused by `.htaccess` file issues on Apache servers. Follow these steps:

---

## ✅ SOLUTION 1: Use the Clean .htaccess (Try This First)

I've created a clean `.htaccess` file in your dist folder. Re-upload it:

1. **Delete** the current `.htaccess` from your `public_html` on HostingRaja
2. **Upload** the new `.htaccess` from `frontend/dist/.htaccess`
3. **Test** your website

---

## ✅ SOLUTION 2: Use Minimal .htaccess (If Solution 1 Fails)

If the error persists:

1. In HostingRaja File Manager, **rename** `.htaccess` to `.htaccess-backup`
2. **Upload** the file `frontend/dist/.htaccess-minimal` 
3. **Rename** it to `.htaccess` on the server
4. **Test** your website

---

## ✅ SOLUTION 3: Check Server Configuration

### Check if mod_rewrite is enabled:
1. Log into HostingRaja cPanel
2. Look for **Apache Modules** or **Module Handlers**
3. Ensure `mod_rewrite` is **enabled** (checkmark)
4. If you can't find it, contact HostingRaja support

### Contact HostingRaja Support:
Tell them: "Please enable mod_rewrite module for my domain. I'm deploying a React SPA application."

---

## ✅ SOLUTION 4: Alternative .htaccess Configurations

Try these one by one (upload, test, if fails try next):

### Option A: With AllowOverride
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [L,QSA]
</IfModule>
```

### Option B: Without IfModule Check
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [L]
```

### Option C: With FallbackResource (simplest)
```apache
FallbackResource /index.html
```

---

## ✅ SOLUTION 5: Check File Permissions

Ensure correct permissions:
- `.htaccess` file: **644**
- `index.html`: **644**
- `assets` folder: **755**
- All files in assets: **644**

To fix in HostingRaja File Manager:
1. Right-click `.htaccess` → **Change Permissions**
2. Set to **644** (Owner: Read+Write, Group: Read, World: Read)

---

## ✅ SOLUTION 6: Check Error Logs

To see the exact error:

1. Log into HostingRaja cPanel
2. Go to **Error Logs** or **Logs** section
3. Look for the most recent error
4. Share that error message for specific help

Common errors you might see:
- `.htaccess: Option X not allowed here` → Remove that option from .htaccess
- `Invalid command 'RewriteEngine'` → mod_rewrite not enabled
- `Syntax error` → File formatting issue

---

## ✅ SOLUTION 7: Deploy Without .htaccess (Temporary Test)

To test if .htaccess is the problem:

1. **Delete** or **rename** `.htaccess` on server
2. Try accessing just the homepage: `yoursite.com`
3. If it works → .htaccess is the issue
4. If still error → Different problem (check error logs)

Note: Without `.htaccess`, direct URLs (like `/products`) won't work, but homepage should load.

---

## 🔍 Other Possible Causes

### 1. PHP Version Issue
- Go to cPanel → **Select PHP Version**
- Try changing to PHP 7.4 or 8.0

### 2. File Upload Issue
Make sure you uploaded:
- ✅ `index.html`
- ✅ `.htaccess`
- ✅ `assets` folder with ALL files inside
- ✅ No extra folders (like `dist` inside `public_html`)

### 3. Directory Structure
Your `public_html` should look like this:
```
public_html/
├── index.html
├── .htaccess
└── assets/
    ├── index-Do5Ge2aw.js
    ├── index-s2Tt1Q6D.css
    ├── 03-D4pC3WOt.png
    └── [other files...]
```

NOT like this (wrong):
```
public_html/
└── dist/
    ├── index.html
    └── ...
```

---

## 📞 Quick Fix Checklist

- [ ] Deleted old `.htaccess` from server
- [ ] Uploaded new clean `.htaccess`
- [ ] Set `.htaccess` permissions to 644
- [ ] Verified `index.html` is in `public_html` (not in a subfolder)
- [ ] Verified `assets` folder is uploaded completely
- [ ] Checked HostingRaja error logs
- [ ] Tested homepage (even if other pages fail)
- [ ] Contacted HostingRaja to enable mod_rewrite

---

## 💡 Most Common Solution

**90% of the time, this works:**

1. **Delete** everything in `public_html`
2. **Upload** ONLY these from `dist`:
   - `index.html`
   - `assets/` folder
3. **Don't upload** `.htaccess` yet
4. **Test** if homepage loads
5. If yes, then upload the minimal `.htaccess`:
   ```apache
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule ^ index.html [L]
   ```

---

## 🆘 Still Not Working?

Contact me with:
1. Screenshot of HostingRaja error log
2. Screenshot of your `public_html` file structure
3. Your domain name
4. HostingRaja server info (Apache version, PHP version)

Or contact HostingRaja support:
- Email: support@hostingraja.in
- Live Chat: https://www.hostingraja.in

---

**Good luck! 🚀**
