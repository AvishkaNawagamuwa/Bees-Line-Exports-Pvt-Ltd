# 🚀 Deployment Checklist for Bees Line Exports Website

## Pre-Deployment

### 1. Content Review
- [ ] All text content is accurate and proofread
- [ ] Company information is correct (address, phones, emails)
- [ ] Product descriptions are complete
- [ ] Images are replaced (no placeholders)
- [ ] Logo is in place and displays correctly

### 2. Images
- [ ] Logo uploaded to `assets/images/logo.png`
- [ ] All 7 product images uploaded to `assets/images/products/`
  - [ ] papaya-leaves.png
  - [ ] moringa.png
  - [ ] margosa.png
  - [ ] green-coffee.png
  - [ ] heenbovitiya.png
  - [ ] garcinia.png
  - [ ] ashwagandha.png
- [ ] Hero image uploaded (placeholder-hero.png)
- [ ] Certificate images uploaded to `assets/images/certificates/`
- [ ] All images optimized (< 200KB each)

### 3. SMTP Configuration
- [ ] SMTP host configured in `php/contact.php`
- [ ] SMTP credentials updated (email & password)
- [ ] SMTP port set correctly (587 for TLS, 465 for SSL)
- [ ] Recipient email set to: info@beeslineexport.com
- [ ] Auto-reply email tested
- [ ] Form submission tested locally

### 4. PHPMailer Installation
- [ ] PHPMailer installed via Composer OR
- [ ] PHPMailer files manually uploaded to `php/PHPMailer/src/`
- [ ] PHPMailer require path verified in contact.php

### 5. Code Review
- [ ] All external links work (social media, if any)
- [ ] Internal navigation links work (#home, #about, etc.)
- [ ] Mobile menu opens/closes properly
- [ ] Product filter buttons work
- [ ] Product modals open and display correctly
- [ ] Contact form validates inputs
- [ ] Form shows success message after submission
- [ ] Error messages display for invalid inputs

### 6. Browser Testing
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari (if Mac available)
- [ ] Tested in Edge
- [ ] Tested on mobile devices (iOS & Android)
- [ ] Tested in tablet view

### 7. Performance
- [ ] Page loads in < 3 seconds
- [ ] Images load properly
- [ ] No JavaScript console errors
- [ ] No broken links
- [ ] Animations run smoothly

## Deployment Process

### For cPanel Hosting

#### Step 1: Prepare Files
- [ ] Create backup of all files (ZIP)
- [ ] Remove any test files or development files
- [ ] Verify `.htaccess` file is included

#### Step 2: Upload Files
- [ ] Login to cPanel
- [ ] Navigate to File Manager
- [ ] Go to `public_html/` directory
- [ ] Upload ZIP file
- [ ] Extract all files
- [ ] Verify folder structure is correct

#### Step 3: Set Permissions
- [ ] Set `php/contact.php` to 644
- [ ] Set all folders to 755
- [ ] Set all images to 644

#### Step 4: Install PHPMailer (if using Composer)
- [ ] Access Terminal in cPanel
- [ ] Navigate to project directory
- [ ] Run: `composer require phpmailer/phpmailer`
- [ ] Verify `vendor/` folder created

#### Step 5: Configure Domain
- [ ] Update SMTP settings in contact.php with production credentials
- [ ] Verify domain DNS is pointing to hosting
- [ ] Wait for DNS propagation (up to 48 hours)

### For VPS/Cloud Server

#### Step 1: Server Setup
- [ ] SSH into server
- [ ] Install Apache: `sudo apt install apache2`
- [ ] Install PHP: `sudo apt install php libapache2-mod-php`
- [ ] Install Composer: Install from getcomposer.org

#### Step 2: Upload Files
- [ ] Use SCP or FileZilla to upload files
- [ ] Upload to: `/var/www/html/`
- [ ] Set ownership: `sudo chown -R www-data:www-data /var/www/html/`
- [ ] Set permissions: `sudo chmod -R 755 /var/www/html/`

#### Step 3: Install Dependencies
- [ ] Navigate to project: `cd /var/www/html/`
- [ ] Install PHPMailer: `sudo composer require phpmailer/phpmailer`

#### Step 4: Configure Apache
- [ ] Enable mod_rewrite: `sudo a2enmod rewrite`
- [ ] Enable mod_headers: `sudo a2enmod headers`
- [ ] Restart Apache: `sudo systemctl restart apache2`

## Post-Deployment

### 1. SSL Certificate
- [ ] Install SSL certificate (Let's Encrypt or paid)
- [ ] Force HTTPS (uncomment lines in .htaccess)
- [ ] Verify HTTPS works (green padlock in browser)
- [ ] Update SMTP settings to use SSL if needed

### 2. Final Testing
- [ ] Visit website: https://yourdomain.com
- [ ] Test all navigation links
- [ ] Submit test contact form
- [ ] Verify email received at info@beeslineexport.com
- [ ] Verify auto-reply received
- [ ] Test on mobile device (real device, not just browser resize)
- [ ] Test in incognito/private mode

### 3. Speed & Performance
- [ ] Run Google PageSpeed Insights test
- [ ] Run GTmetrix test
- [ ] Optimize any slow-loading resources
- [ ] Enable Gzip compression (check in .htaccess)
- [ ] Enable browser caching (check in .htaccess)

### 4. SEO & Analytics
- [ ] Add website to Google Search Console
- [ ] Submit sitemap.xml (create if needed)
- [ ] Add Google Analytics tracking code (optional)
- [ ] Verify meta tags (title, description)
- [ ] Test Open Graph tags for social sharing

### 5. Security
- [ ] Verify HTTPS is active
- [ ] Test contact form rate limiting
- [ ] Check file permissions (no 777 permissions)
- [ ] Verify PHP error display is OFF in production
- [ ] Test for SQL injection (even though we're not using database)
- [ ] Set up regular backups (daily/weekly)

### 6. Monitoring
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom, etc.)
- [ ] Monitor email delivery
- [ ] Check server logs regularly
- [ ] Monitor form submissions

## Maintenance

### Weekly
- [ ] Check contact form submissions
- [ ] Verify emails are being received
- [ ] Check for broken images
- [ ] Monitor website speed

### Monthly
- [ ] Update PHPMailer if new version available
- [ ] Check for security updates
- [ ] Review analytics (if installed)
- [ ] Backup website files and database (if any)

### As Needed
- [ ] Update product information
- [ ] Add new products
- [ ] Update company information
- [ ] Replace images
- [ ] Update certifications

## Troubleshooting Checklist

### If Contact Form Doesn't Work
1. [ ] Check SMTP credentials in `php/contact.php`
2. [ ] Verify PHPMailer is installed
3. [ ] Check PHP error logs
4. [ ] Test SMTP connection with telnet
5. [ ] Check firewall/security groups allow port 587/465
6. [ ] Verify sender email is authorized
7. [ ] Check spam folder for test emails

### If Images Don't Load
1. [ ] Verify file paths are correct
2. [ ] Check file names (case-sensitive on Linux)
3. [ ] Check file permissions (644)
4. [ ] Clear browser cache
5. [ ] Check server error logs

### If Website is Slow
1. [ ] Optimize images (use TinyPNG)
2. [ ] Enable Gzip compression
3. [ ] Enable browser caching
4. [ ] Use CDN (Cloudflare) if needed
5. [ ] Check hosting resources (CPU, RAM)

## Launch Announcement

### After Successful Deployment
- [ ] Announce on social media
- [ ] Send email to existing customers/partners
- [ ] Update business cards with website URL
- [ ] Update email signatures with website link
- [ ] Update company brochures/materials

---

## Emergency Contacts

**Hosting Support:**
- Provider: _________________
- Phone: _________________
- Email: _________________
- Account #: _________________

**Domain Registrar:**
- Provider: _________________
- Login: _________________

**Developer/Technical Support:**
- Name: _________________
- Phone: _________________
- Email: _________________

---

## Notes

**Deployment Date:** _________________

**Deployed By:** _________________

**Issues Found:** 
_______________________________________
_______________________________________
_______________________________________

**Resolution:**
_______________________________________
_______________________________________
_______________________________________

---

✅ **Deployment Complete!**

Your Bees Line Exports website is now live and ready to serve customers worldwide! 🚀🐝
