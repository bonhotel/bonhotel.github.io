# Bon Hotel Website

## Overview
Welcome to Bon Hotel's website - where European elegance meets Central Asian warmth in the heart of Bishkek, Kyrgyzstan.

## Recent Updates

### 1. Single-Page Application Navigation
- **Converted from multi-page to single-page application**
- Navigation links now scroll smoothly to sections instead of loading separate pages
- Added smooth scrolling behavior with proper offset for fixed header
- Active navigation item highlighting based on scroll position
- All content now accessible from main page (index.html)

### 2. Professional About Us Content
- Updated About Us section with professional, engaging content based on the hotel's brandbook
- Content reflects the hotel's French-inspired philosophy and Kyrgyzstan location
- Emphasizes European elegance combined with Central Asian hospitality
- Available on both the main page (index.html) and dedicated About page (about.html)

### 3. Language Localization System
Implemented automatic language detection and localization:

#### Supported Languages:
- **English** (default)
- **Russian** (автоматически для русскоязычных пользователей)

#### Auto-Detection Logic:
The system automatically detects the user's browser language and displays content in:
- **Russian** if the device language is set to:
  - Russian (ru)
  - Kyrgyz (ky) 
  - Kazakh (kk)
  - Ukrainian (uk)
  - Uzbek (uz)
- **English** for all other languages

#### How Language Detection Works:

**Step 1: Browser Language Detection**
```javascript
function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    const langCode = userLang.toLowerCase();
    
    if (langCode.includes('ru') || langCode.includes('ky') || langCode.includes('kk') || langCode.includes('uk') || langCode.includes('uz')) {
        return 'ru';
    }
    return 'en';
}
```

**Step 2: Dictionary Selection**
```javascript
function applyTranslations(lang) {
    const t = translations[lang];  // Selects translations.en or translations.ru
    $('[data-translate="aboutUsContent"]').html(t.aboutUsContent);
}
```

**Complete Flow:**
1. `navigator.language` gets browser language (e.g., "ru-RU", "en-US", "ky-KG", "uz-UZ")
2. System checks if language code contains ru/ky/kk/uk/uz → returns 'ru', otherwise 'en'
3. `translations[lang]` selects the appropriate dictionary (en or ru)
4. Text is retrieved from selected dictionary and applied to HTML elements with `data-translate` attributes

#### How It Works:
1. `js/localization.js` contains all translations in two dictionaries
2. HTML elements use `data-translate` attributes
3. Content automatically switches based on browser language
4. No user interaction required - fully automatic

### 4. Updated Content Areas:
- Navigation menu (now single-page with smooth scrolling)
- About Us section (full professional content)
- Room descriptions
- Footer contact information
- Contact form placeholders
- All page titles and meta descriptions

### 5. Technical Implementation:
- **Single-page application** with smooth scrolling navigation
- Clean, semantic HTML with translation attributes
- JavaScript-based localization system using dictionary lookup
- Responsive design maintained
- SEO-friendly with proper meta tags
- Professional contact information updated
- Automatic language detection via `navigator.language`
- Active navigation highlighting based on scroll position

## Navigation Structure:
- **Home** → #home (banner section)
- **About** → #about (about section)
- **Our Room** → #rooms (rooms section)
- **Gallery** → #gallery (gallery section)
- **Blog** → #blog (blog section)
- **Contact** → #contact (contact section)

## Files Modified:
- `index.html` - Main single-page application with all content sections
- `about.html` - Dedicated About page (still available for direct access)
- `room.html` - Room page with localization
- `gallery.html` - Gallery page with localization
- `blog.html` - Blog page with localization  
- `contact.html` - Contact page with localization
- `js/localization.js` - Updated for single-page navigation
- `js/custom.js` - Added smooth scrolling and active nav functionality

## Contact Information:
- Phone: +996 123 456 789
- Email: info@bonhotel.kg
- Location: Bishkek, Kyrgyzstan

## About Bon Hotel:
The name "Bon" comes from the French word meaning "good," "beautiful," and "worthy" — a philosophy that guides every aspect of our hospitality. We create an atmosphere of warm European hospitality where every guest experiences comfort, style, and care at every step. 