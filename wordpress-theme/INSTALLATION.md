# IZI Support Corporate Theme - Installation Guide

## Quick Installation

1. **Download** - Download the theme folder as a ZIP file
2. **Upload** - In WordPress admin: Appearance > Themes > Add New > Upload Theme
3. **Activate** - Click "Activate" after installation
4. **Customize** - Go to Appearance > Customize to set up your content

## Manual Installation

1. Upload the `wordpress-theme` folder to `/wp-content/themes/`
2. Rename the folder to `izi-support-theme`
3. Activate the theme through WordPress admin

## Required Files Checklist

Your theme folder should contain:
- ✅ style.css (theme header)
- ✅ functions.php (theme functions)
- ✅ index.php (main template)
- ✅ header.php (header template)
- ✅ footer.php (footer template)
- ✅ page.php (page template)
- ✅ single.php (post template)
- ✅ assets/css/main.css (styles)
- ✅ assets/js/main.js (scripts)
- ✅ readme.txt (theme info)
- ⚠️ screenshot.png (theme preview - needs to be created)

## Post-Installation Setup

### 1. Set Your Logo
- Go to Appearance > Customize > Site Identity
- Upload your logo image

### 2. Create Navigation Menu
- Go to Appearance > Menus
- Create a new menu with these items:
  - НҮҮР (Home)
  - БИДНИЙ ТУХАЙ (About)
  - ШИЙДЛҮҮД (Solutions)
  - ҮЙЛЧИЛГЭЭ (Services)
  - ТҮНШҮҮД (Partners)
  - ХОЛБОГДОХ (Contact)
- Assign to "Primary Menu" location

### 3. Customize Hero Section
- Go to Appearance > Customize > Hero Section
- Update hero title, description, and button text

### 4. Add Contact Information
- Go to Appearance > Customize > Contact Information
- Add email, phone, and address

### 5. Create Content

#### Services
- Go to Services in admin menu
- Add your company services
- Each service can have a title, description, and featured image

#### Partners
- Go to Partners in admin menu
- Add partner companies
- Upload partner logos as featured images

#### Blog Posts
- Create blog posts for the news section
- Add featured images to posts for best display

### 6. Widget Areas
- Go to Appearance > Widgets
- Configure footer widget areas:
  - Footer Widget Area 1: Solutions/Services
  - Footer Widget Area 2: Company links
  - Footer Widget Area 3: Additional links
  - Footer Widget Area 4: Contact info

## Theme Features

- ✅ Fully responsive design
- ✅ Animated elements and smooth transitions
- ✅ Dark theme with blue accents
- ✅ Custom post types (Services, Partners)
- ✅ Theme customizer integration
- ✅ SEO optimized
- ✅ Mobile-friendly navigation
- ✅ Cross-browser compatible

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## Troubleshooting

### Theme Not Appearing
- Check that all required files are present
- Ensure proper folder structure
- Verify file permissions

### Styles Not Loading
- Clear any caching plugins
- Check that assets/css/main.css exists
- Verify file paths in functions.php

### JavaScript Not Working
- Check browser console for errors
- Ensure assets/js/main.js is loading
- Clear browser cache

## Support

For support and customization:
- Check WordPress.org documentation
- Review theme files for customization examples
- Test changes on staging site first

## File Structure
```
izi-support-theme/
├── style.css (WordPress theme header)
├── functions.php (theme setup and functionality)
├── index.php (main homepage template)
├── header.php (site header)
├── footer.php (site footer)
├── page.php (static pages)
├── single.php (blog posts)
├── readme.txt (theme information)
├── screenshot.png (theme preview - create this)
├── assets/
│   ├── css/
│   │   └── main.css (all styles)
│   └── js/
│       └── main.js (interactive features)
└── INSTALLATION.md (this file)
```

## Customization Tips

- All styles are in `assets/css/main.css`
- JavaScript functionality in `assets/js/main.js`
- Theme options in `functions.php`
- Customize colors by editing CSS variables
- Add new sections by modifying template files

Ready to install! 🚀