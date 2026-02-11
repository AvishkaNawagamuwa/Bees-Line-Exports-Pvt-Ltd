# 🚀 Quick Start Guide - Bees Line Exports Website

Welcome! This guide will help you get your website running in **15 minutes**.

---

## What You Have

✅ A complete, professional website for Bees Line Exports  
✅ Contact form with email functionality  
✅ Product catalog with filtering  
✅ Mobile-responsive design  
✅ Premium animations and interactions  

---

## What You Need Before Starting

1. **Web Hosting** with PHP support (cPanel, VPS, or shared hosting)
2. **Email Account** for sending contact form emails (Gmail, Outlook, etc.)
3. **Your Product Images** (7 product photos + logo)
4. **15 minutes** of your time

---

## 3-Step Quick Start

### Step 1: Upload Files (5 minutes)

**If you have cPanel:**
1. Login to your cPanel
2. Open "File Manager"
3. Go to `public_html` folder
4. Click "Upload"
5. Upload all files from the `professional website` folder
6. Done!

**If you have FTP access:**
1. Open FileZilla or your FTP client
2. Connect to your server
3. Upload all files to the `public_html` or `www` folder
4. Done!

---

### Step 2: Configure Email (5 minutes)

1. Open `php/contact.php` in your hosting file manager or text editor

2. Find these lines (around line 55):
   ```php
   define('SMTP_HOST', 'smtp.gmail.com');
   define('SMTP_USER', 'your-email@gmail.com');
   define('SMTP_PASS', 'your-app-password');
   ```

3. **For Gmail users:**
   - Go to: https://myaccount.google.com/apppasswords
   - Generate an App Password (16 characters)
   - Replace `'your-email@gmail.com'` with your Gmail address
   - Replace `'your-app-password'` with the 16-character password
   - Save the file

4. **For other email providers:**
   - Ask your email provider for SMTP settings
   - Update the SMTP_HOST, SMTP_USER, and SMTP_PASS accordingly

---

### Step 3: Install PHPMailer (5 minutes)

**Option A - Using SSH/Terminal (Recommended):**
```bash
cd /path/to/your/website
composer install
```

**Option B - Manual Installation (if no SSH access):**
1. Download PHPMailer: https://github.com/PHPMailer/PHPMailer/releases
2. Extract the ZIP file
3. Upload the `src` folder to `php/PHPMailer/src/` on your server
4. Done!

---

## You're Live! 🎉

Visit your website: `https://yourdomain.com`

Test the contact form:
1. Scroll to the Contact section
2. Fill out the form
3. Click "Send Message"
4. Check your email!

---

## Optional: Add Your Images

### Replace Logo (2 minutes)
1. Create/optimize your logo (200x200px PNG)
2. Upload to `assets/images/logo.png`
3. Refresh your website!

### Add Product Images (10 minutes)
1. Prepare 7 product photos (800x800px each)
2. Name them exactly as:
   - `papaya-leaves.png`
   - `moringa.png`
   - `margosa.png`
   - `green-coffee.png`
   - `heenbovitiya.png`
   - `garcinia.png`
   - `ashwagandha.png`
3. Upload to `assets/images/products/`
4. Refresh - images appear automatically!

**Need help with images?** See `IMAGE-SPECIFICATIONS.md`

---

## Troubleshooting

### ❌ Contact form not sending emails?

**Quick fixes:**
1. Check spam/junk folder
2. Verify SMTP credentials in `php/contact.php`
3. Make sure port is 587 (for TLS)
4. Check if PHPMailer is installed

### ❌ Images not showing?

**Quick fixes:**
1. Check file names (must be exact, lowercase)
2. Verify images are in `assets/images/products/` folder
3. Clear browser cache (Ctrl + F5)

### ❌ Website looks broken?

**Quick fixes:**
1. Clear browser cache
2. Check if all files uploaded correctly
3. Verify `css/style.css` and `js/main.js` exist

---

## Advanced Setup (Optional)

### Enable HTTPS (Recommended)
- **cPanel:** Use AutoSSL (free, automatic)
- **Let's Encrypt:** Free SSL certificates
- After installing SSL, uncomment HTTPS redirect in `.htaccess`

### Optimize Performance
- Use TinyPNG to compress images
- Enable Gzip in `.htaccess` (already configured)
- Use Cloudflare for CDN (optional)

### Add Google Analytics
1. Get tracking code from Google Analytics
2. Add before `</head>` tag in `index.html`

---

## Need More Help?

📖 **Detailed Documentation:**
- `README.md` - Complete setup guide
- `DEPLOYMENT-CHECKLIST.md` - Step-by-step deployment
- `IMAGE-SPECIFICATIONS.md` - Image requirements

📧 **Contact:**
- Email: info@beeslineexport.com
- Phone: +94 777 182 110 / +94 777 667 576

---

## What's Included?

### ✅ Pages & Sections
- 🏠 Home / Hero Section
- 📖 About Us
- 🌿 Products (7 herbal products)
- ✅ Quality & Certifications
- 🤝 Partnership Opportunities
- 📞 Contact Form

### ✅ Features
- 📱 Mobile Responsive
- 🎨 Premium Animations
- 🔍 Product Filtering
- 📧 Email Contact Form
- 🚀 Fast Loading
- 🔒 Secure & Modern

### ✅ Technical Features
- Light/Premium Theme
- Smooth Scroll Navigation
- Product Detail Modals
- Form Validation
- Rate Limiting (anti-spam)
- Auto-Reply Emails
- SEO Optimized

---

## Quick Tips

💡 **For Best Results:**
1. Use professional product photos
2. Keep images under 200KB each
3. Test on mobile devices
4. Enable HTTPS for security
5. Backup your website regularly

💡 **Before Going Live:**
1. Test contact form thoroughly
2. Check all links work
3. Preview on mobile phone
4. Ask a friend to review
5. Check spelling/grammar

---

## Customization

### Change Brand Colors
Edit `index.html` (line 29-35):
```javascript
'honey-gold': '#F4B400',    // Change to your primary color
'amber-orange': '#F2994A',  // Change to your secondary color
'deep-honey': '#D3543A',    // Change to your accent color
```

### Update Contact Info
Edit `index.html` (search for "Contact Section"):
- Address: No. 10, Horton Place, Colombo 07, Sri Lanka
- Phones: +94 777 182 110, +94 777 667 576
- Emails: info@beeslineexport.com

### Change Email Recipient
Edit `php/contact.php` (line 64):
```php
define('RECIPIENT_EMAIL', 'your-email@domain.com');
```

---

## Success Checklist

After setup, verify:
- ✅ Website loads at your domain
- ✅ All navigation links work
- ✅ Products display with images
- ✅ Contact form sends emails
- ✅ You receive auto-reply
- ✅ Mobile menu works
- ✅ Website looks good on phone
- ✅ HTTPS is enabled (green padlock)

---

## Next Steps

### Week 1:
- [ ] Replace all images with your products
- [ ] Test contact form multiple times
- [ ] Share website with team for feedback
- [ ] Fix any issues found

### Week 2:
- [ ] Submit to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Share on social media
- [ ] Update business cards with website URL

### Month 1:
- [ ] Monitor contact form submissions
- [ ] Gather customer feedback
- [ ] Make improvements as needed
- [ ] Plan content updates

---

## Support Resources

### Learning Resources
- **HTML/CSS:** w3schools.com
- **Tailwind CSS:** tailwindcss.com/docs
- **PHPMailer:** github.com/PHPMailer/PHPMailer

### Tools
- **Image Optimization:** tinypng.com
- **Speed Test:** pagespeed.web.dev
- **SSL Check:** ssllabs.com
- **Uptime Monitor:** uptimerobot.com

---

## Congratulations! 🎉

Your premium Bees Line Exports website is ready to connect with customers worldwide!

**From Nature's Wisdom to Everyday Well-Being** 🐝🌿

---

**Questions?** Refer to README.md or contact your technical support.

**Last Updated:** February 8, 2026
