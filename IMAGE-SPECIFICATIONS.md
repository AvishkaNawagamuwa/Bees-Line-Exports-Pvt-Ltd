# Image Specifications for Bees Line Exports Website

## Overview
This document provides detailed specifications for all images needed on the website.

---

## 1. Company Logo

**File:** `assets/images/logo.png`

**Specifications:**
- Format: PNG with transparent background (preferred) or JPG
- Dimensions: 200x200px minimum (will scale down)
- File size: < 50KB
- Color profile: RGB
- Resolution: 72 DPI (web standard)

**Design Guidelines:**
- Should include Bees Line branding
- Use brand colors: Gold (#F4B400), Orange (#F2994A), Red (#D3543A)
- Clear and visible at small sizes
- Professional appearance

**Usage:**
- Navbar (scaled to 48x48px)
- Footer
- Favicon (create 16x16, 32x32, 64x64 versions)

---

## 2. Product Images

**Location:** `assets/images/products/`

**File Names:**
1. `papaya-leaves.png` - Papaya Leaves capsules
2. `moringa.png` - Moringa capsules
3. `margosa.png` - Margosa capsules
4. `green-coffee.png` - Green Coffee capsules
5. `heenbovitiya.png` - Heenbovitiya capsules
6. `garcinia.png` - Garcinia capsules
7. `ashwagandha.png` - Ashwagandha capsules
8. `placeholder-hero.png` - Hero section featured product

**Specifications:**
- Format: PNG (preferred for transparency) or JPG
- Dimensions: 800x800px (square, 1:1 ratio)
- File size: < 200KB per image
- Background: White or transparent
- Color profile: RGB
- Resolution: 72 DPI

**Photography Guidelines:**
- Professional product photography
- Consistent lighting and angles for all products
- Show product bottle/package clearly
- Include any visible branding/labels
- Clean, minimalist composition
- Centered product placement

**Image Treatment:**
- Soft shadows acceptable
- No borders or frames
- Consistent color correction across all products
- Sharp focus on product

---

## 3. Certificate Images

**Location:** `assets/images/certificates/`

**File Names:**
1. `iso-22000.png` - ISO 22000 certification
2. `haccp.png` - HACCP certification
3. `gmp.png` - GMP certification
4. `ayurveda.png` - Ayurveda Department approval

**Specifications:**
- Format: PNG or JPG
- Dimensions: 1200x1600px (portrait, 3:4 ratio) or scan resolution
- File size: < 500KB per certificate
- Color profile: RGB
- Resolution: 150 DPI minimum for readability

**Scanning Guidelines:**
- Scan original certificates in color
- Ensure text is readable when zoomed
- Remove shadows from scan
- Crop to certificate edges
- Straighten if tilted

---

## 4. Hero Section Featured Image

**File:** `assets/images/products/placeholder-hero.png`

**Specifications:**
- Format: PNG with transparent background
- Dimensions: 1000x1000px
- File size: < 300KB
- Background: Transparent or white
- Color profile: RGB
- Resolution: 72 DPI

**Design Guidelines:**
- Feature your best-selling or flagship product
- High-quality professional photography
- Could be a product in natural setting (herbs, leaves)
- Should evoke "natural wellness" feeling
- Premium look and feel

---

## 5. Optional: Favicon

**Files:** 
- `favicon.ico` (16x16, 32x32, 48x48)
- `apple-touch-icon.png` (180x180)
- `favicon-32x32.png`
- `favicon-16x16.png`

**Location:** Root directory (same level as index.html)

**How to Add:**
Add these lines in `<head>` section of index.html:

```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
```

**Specifications:**
- Simplified version of your logo
- High contrast for visibility
- Recognizable at tiny sizes

---

## Image Optimization Tools

### Before Uploading:

1. **TinyPNG** (https://tinypng.com)
   - Reduces PNG/JPG file sizes by 50-80%
   - Maintains quality
   - Free for up to 20 images

2. **Squoosh** (https://squoosh.app)
   - Browser-based image compression
   - Real-time preview
   - Multiple format options

3. **ImageOptim** (Mac) or **FileOptimizer** (Windows)
   - Desktop apps for batch optimization
   - Automatically optimize entire folders

### Quick Optimization Commands:

**Using ImageMagick (if installed):**
```bash
# Resize and optimize product image
magick input.jpg -resize 800x800 -quality 85 output.png

# Batch resize all products
magick mogrify -resize 800x800 -quality 85 *.jpg
```

---

## Image Naming Conventions

### Rules:
- Use lowercase letters only
- Use hyphens (-) instead of spaces or underscores
- Be descriptive but concise
- Include product name
- Use consistent naming pattern

### Good Examples:
✅ `papaya-leaves.png`
✅ `moringa-capsules.png`
✅ `iso-22000-certificate.png`

### Bad Examples:
❌ `IMG_1234.jpg` (not descriptive)
❌ `Papaya Leaves.PNG` (spaces and capitals)
❌ `papaya_leaves_final_v2.jpg` (too complex)

---

## Testing Images

### Before Upload Checklist:
- [ ] Correct dimensions (800x800px for products)
- [ ] File size under limit (< 200KB for products)
- [ ] Proper file name (lowercase, hyphens)
- [ ] Correct format (PNG or JPG)
- [ ] Image is clear and in focus
- [ ] Colors look natural (not over-saturated)
- [ ] No watermarks or unwanted text
- [ ] Optimized using compression tool

### After Upload Checklist:
- [ ] Image loads in browser
- [ ] Image looks good on desktop
- [ ] Image looks good on mobile
- [ ] Hover effects work properly
- [ ] No broken image icons
- [ ] Fast loading speed

---

## Current Image Fallbacks

The website currently uses SVG placeholders with the product name as fallback. These will automatically be replaced when you upload the correct image files.

**Example fallback code in HTML:**
```html
<img src="assets/images/products/papaya-leaves.png" 
     alt="Papaya Leaves" 
     onerror="this.src='data:image/svg+xml,...'">
```

This means if the image doesn't exist, it shows a gray placeholder with the product name.

---

## Recommended Photography Setup

### For Product Photos:
- **Camera:** DSLR or high-quality smartphone (12MP+)
- **Lighting:** Softbox or natural diffused light
- **Background:** White seamless paper or lightbox
- **Tripod:** Essential for consistency
- **Editing:** Adobe Photoshop or free alternative (GIMP)

### Professional Photography Services:
If you don't have photography equipment, consider:
- Local product photography services
- Freelance photographers (Fiverr, Upwork)
- Photography studios in Colombo

**Estimated cost in Sri Lanka:**
- Basic product photography: LKR 5,000 - 15,000 for 7 products
- Professional studio: LKR 20,000 - 50,000 with editing

---

## Image Copyright & Usage Rights

**Important:**
- Ensure you have rights to use all images
- If using stock photos, purchase proper licenses
- Photographer should transfer image rights to company
- Include photo credits if required by photographer

---

## Questions?

If you need help with:
- Image editing
- Optimization
- Photography recommendations
- File format conversion

Contact your web developer or refer to the main README.md file.

---

**Quick Reference:**

| Image Type | Size | Format | Max File Size | Location |
|-----------|------|--------|---------------|----------|
| Logo | 200x200px | PNG | 50KB | assets/images/ |
| Products | 800x800px | PNG/JPG | 200KB | assets/images/products/ |
| Certificates | 1200x1600px | PNG/JPG | 500KB | assets/images/certificates/ |
| Hero Image | 1000x1000px | PNG | 300KB | assets/images/products/ |
| Favicon | 16x16, 32x32 | ICO/PNG | 10KB | root directory |

---

**Last Updated:** February 8, 2026
