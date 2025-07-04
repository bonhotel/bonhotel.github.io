// Language localization system for Bon Hotel
const translations = {
    en: {
        // Navigation
        home: "Home",
        about: "About",
        ourRoom: "Our Room",
        gallery: "Gallery",
        blog: "Blog",
        contactUs: "Contact Us",
        
        // About Us Page
        aboutUsTitle: "About Us",
        aboutUsContent: `Welcome to Bon Hotel — where European elegance meets Central Asian warmth in the heart of Bishkek, Kyrgyzstan.

Located in the vibrant capital of Kyrgyzstan, Bon Hotel embodies the perfect fusion of European aesthetics, Eastern warmth, and the proud culture of Central Asia. Imagine a morning in a French village: fresh bread, the aroma of coffee, a gentle breeze through the window, and silence filled with possibilities. This very atmosphere inspired the creation of Bon Hotel.

At Bon Hotel, we create an atmosphere of warm European hospitality where every guest experiences comfort, style, and care at every step. Our mission is to provide not just rest, but a sense of coziness, aesthetics, and inspiration that makes you want to stay longer and return again.`,
        readMore: "Read More",
        
        // Footer
        contactUsFooter: "Contact US",
        address: "Address",
        menuLink: "Menu Link",
        
        // Other sections
        ourRoomTitle: "Our Room",
        ourRoomDesc: "Experience luxury and comfort in our thoughtfully designed rooms",
        bedRoom: "Bed Room",
        roomDesc: "Each room is carefully designed to provide maximum comfort and elegance for our guests",
        
        galleryTitle: "Gallery",
        blogTitle: "Blog",
        
        // Contact
        name: "Name",
        email: "Email",
        phoneNumber: "Phone Number",
        message: "Message",
        send: "Send",
        
        // WhatsApp buttons
        whatsappBook: "WhatsApp",
        whatsappContact: "WhatsApp"
    },
    ru: {
        // Navigation
        home: "Главная",
        about: "О нас",
        ourRoom: "Наши номера",
        gallery: "Галерея",
        blog: "Блог",
        contactUs: "Связаться с нами",
        
        // About Us Page
        aboutUsTitle: "О нас",
        aboutUsContent: `Добро пожаловать в Bon Hotel — где европейская элегантность встречается с центральноазиатским теплом в самом сердце Бишкека, Кыргызстан.

Расположенный в живописной столице Кыргызстана, Bon Hotel воплощает идеальное сочетание европейской эстетики, восточной теплоты и гордой культуры Центральной Азии. Представьте себе утро во французской деревушке: свежий хлеб, аромат кофе, легкий бриз из окна и тишина, наполненная возможностями. Именно эта атмосфера вдохновила на создание Bon Hotel.

В Bon Hotel мы создаем атмосферу теплого европейского гостеприимства, где каждый гость ощущает комфорт, стиль и заботу на каждом шагу. Наша миссия — дарить не просто отдых, а ощущение уюта, эстетики и вдохновения, в котором хочется остаться подольше и к которому хочется вернуться.`,
        readMore: "Читать далее",
        
        // Footer
        contactUsFooter: "Связаться с нами",
        address: "Адрес",
        menuLink: "Меню",
        
        // Other sections
        ourRoomTitle: "Наши номера",
        ourRoomDesc: "Почувствуйте роскошь и комфорт в наших тщательно продуманных номерах",
        bedRoom: "Спальня",
        roomDesc: "Каждый номер тщательно спроектирован для обеспечения максимального комфорта и элегантности для наших гостей",
        
        galleryTitle: "Галерея",
        blogTitle: "Блог",
        
        // Contact
        name: "Имя",
        email: "Email",
        phoneNumber: "Номер телефона",
        message: "Сообщение",
        send: "Отправить",
        
        // WhatsApp buttons
        whatsappBook: "WhatsApp",
        whatsappContact: "WhatsApp"
    }
};

// Detect user's preferred language
function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    const langCode = userLang.toLowerCase();
    
    // Check if the language is Russian, Kyrgyz, Kazakh, Ukrainian, or Uzbek
    if (langCode.includes('ru') || langCode.includes('ky') || langCode.includes('kk') || langCode.includes('uk') || langCode.includes('uz')) {
        return 'ru';
    }
    return 'en';
}

// Apply translations to the page
function applyTranslations(lang) {
    const t = translations[lang];
    
    // Update navigation
    $('a[href="#home"]').text(t.home);
    $('a[href="#about"]').text(t.about);
    $('a[href="#rooms"]').text(t.ourRoom);
    $('a[href="#gallery"]').text(t.gallery);
    $('a[href="#blog"]').text(t.blog);
    $('a[href="#contact"]').text(t.contactUs);
    
    // Update page-specific content
    $('[data-translate="aboutUsTitle"]').text(t.aboutUsTitle);
    $('[data-translate="aboutUsContent"]').html(t.aboutUsContent.replace(/\n\n/g, '</p><p>').replace(/^/, '<p>').replace(/$/, '</p>'));
    $('[data-translate="readMore"]').text(t.readMore);
    
    // Update other sections
    $('[data-translate="ourRoomTitle"]').text(t.ourRoomTitle);
    $('[data-translate="ourRoomDesc"]').text(t.ourRoomDesc);
    $('[data-translate="bedRoom"]').text(t.bedRoom);
    $('[data-translate="roomDesc"]').text(t.roomDesc);
    $('[data-translate="galleryTitle"]').text(t.galleryTitle);
    $('[data-translate="blogTitle"]').text(t.blogTitle);
    
    // Update footer
    $('[data-translate="contactUsFooter"]').text(t.contactUsFooter);
    $('[data-translate="address"]').text(t.address);
    $('[data-translate="menuLink"]').text(t.menuLink);
    
    // Update contact form
    $('[data-translate="name"]').attr('placeholder', t.name);
    $('[data-translate="email"]').attr('placeholder', t.email);
    $('[data-translate="phoneNumber"]').attr('placeholder', t.phoneNumber);
    $('[data-translate="message"]').attr('placeholder', t.message);
    $('[data-translate="send"]').text(t.send);
    
    // Update WhatsApp buttons
    $('[data-translate="whatsappBook"]').text(t.whatsappBook);
    $('[data-translate="whatsappContact"]').text(t.whatsappContact);
    
    // Update HTML lang attribute
    $('html').attr('lang', lang);
}

// Initialize localization
$(document).ready(function() {
    const currentLang = detectLanguage();
    applyTranslations(currentLang);
    
    // Store current language
    localStorage.setItem('bonhotel_lang', currentLang);
});

// Function to manually switch language (for future language switcher)
function switchLanguage(lang) {
    applyTranslations(lang);
    localStorage.setItem('bonhotel_lang', lang);
} 