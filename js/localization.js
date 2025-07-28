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
        standardRoom: "Standard Room",
        standardRoomDesc: "Cozy and functional room, perfect for individual travelers and couples. The room features two comfortable single beds (100×200 cm) that can be combined into one spacious double bed upon request.",
        juniorSuite: "Junior Suite",
        juniorSuiteDesc: "Elegant and spacious room with one Queen size double bed (160×200 cm) — the perfect solution for individual travelers or couples who value comfort and coziness.",
        luxurySuite: "Luxury Suite",
        luxurySuiteDesc: "Spacious and exquisite Luxury category room — the perfect choice for those who value enhanced comfort, style and privacy. At the center of the room is a luxurious King size double bed (180×200 cm) with premium bedding and orthopedic mattress for complete relaxation.",
        
        galleryTitle: "Gallery",
        blogTitle: "Blog",
        
        // Contact
        name: "Name",
        email: "Email",
        phoneNumber: "Phone Number",
        message: "Message",
        send: "Send",
        
        // Location content
        exceptionalLocation: "Prime Location in Bishkek City Center - Near Ala-Too Square",
        locationDescription: "Bon Hotel Bishkek offers an exceptional location in the heart of Kyrgyzstan's capital. Situated at 14 Yunusaliev Avenue, our luxury hotel provides easy access to Bishkek's top attractions including Ala-Too Square, State Historical Museum, and Chuy Avenue's premier shopping and dining district. Just 30 minutes from Manas International Airport, we're perfectly positioned for both business travelers and tourists exploring Central Asia. Our guests enjoy convenient access to Osh Bazaar, Panfilov Park, and the scenic Ala-Archa National Park. Whether you're visiting Bishkek for business, leisure, or exploring Kyrgyzstan's rich cultural heritage, Bon Hotel combines European luxury with authentic Central Asian hospitality.",
        hotelAddress: "14 Yunusaliev Avenue, Bishkek 720000, Kyrgyzstan",
        
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
        standardRoom: "Стандартный номер",
        standardRoomDesc: "Уютный и функциональный номер, идеально подходящий как для индивидуальных путешественников, так и для пар. В номере установлены две комфортабельные односпальные кровати размером 100×200 см, которые по желанию могут быть объединены в одну просторную двуспальную кровать.",
        juniorSuite: "Полулюкс номер",
        juniorSuiteDesc: "Элегантный и просторный номер с одной двуспальной кроватью Queen size (160×200 см) — идеальное решение для индивидуальных путешественников или пар, ценящих комфорт и уют.",
        luxurySuite: "Люкс номер",
        luxurySuiteDesc: "Просторный и изысканный номер категории Люкс — идеальный выбор для тех, кто ценит повышенный комфорт, стиль и уединение. В центре номера — роскошная двуспальная кровать King size (180×200 см) с премиальным постельным бельём и ортопедическим матрасом для полноценного отдыха.",
        
        galleryTitle: "Галерея",
        blogTitle: "Блог",
        
        // Contact
        name: "Имя",
        email: "Email",
        phoneNumber: "Номер телефона",
        message: "Сообщение",
        send: "Отправить",
        
        // Location content
        exceptionalLocation: "Превосходное расположение в центре Бишкека - рядом с площадью Ала-Тоо",
        locationDescription: "Отель Бон Бишкек предлагает исключительное расположение в самом сердце столицы Кыргызстана. Расположенный по адресу проспект Юнусалиева 14, наш роскошный отель обеспечивает легкий доступ к главным достопримечательностям Бишкека, включая площадь Ала-Тоо, Государственный исторический музей и престижный торгово-ресторанный район проспекта Чуй. Всего в 30 минутах от международного аэропорта Манас, мы идеально расположены как для деловых путешественников, так и для туристов, изучающих Центральную Азию. Наши гости наслаждаются удобным доступом к Ошскому базару, парку Панфилова и живописному национальному парку Ала-Арча. Независимо от того, приезжаете ли вы в Бишкек по делам, для отдыха или изучения богатого культурного наследия Кыргызстана, отель Бон сочетает европейскую роскошь с подлинным центральноазиатским гостеприимством.",
        hotelAddress: "проспект Юнусалиева 14, Бишкек 720000, Кыргызстан",
        
        // WhatsApp buttons
        whatsappBook: "WhatsApp",
        whatsappContact: "WhatsApp"
    }
};

// Detect user's preferred language
function detectLanguage() {
    // First check if language is already stored
    const storedLang = localStorage.getItem('bonhotel_lang');
    if (storedLang && (storedLang === 'en' || storedLang === 'ru')) {
        return storedLang;
    }
    
    // Check browser language
    const userLang = navigator.language || navigator.userLanguage;
    const langCode = userLang.toLowerCase();
    
    console.log('Browser language detected:', userLang);
    
    // Check if the language is Russian, Kyrgyz, Kazakh, Ukrainian, or Uzbek
    if (langCode.includes('ru') || langCode.includes('ky') || langCode.includes('kk') || langCode.includes('uk') || langCode.includes('uz')) {
        return 'ru';
    }
    
    // Default to English
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
    $('[data-translate="standardRoom"]').text(t.standardRoom);
    $('[data-translate="standardRoomDesc"]').text(t.standardRoomDesc);
    $('[data-translate="juniorSuite"]').text(t.juniorSuite);
    $('[data-translate="juniorSuiteDesc"]').text(t.juniorSuiteDesc);
    $('[data-translate="luxurySuite"]').text(t.luxurySuite);
    $('[data-translate="luxurySuiteDesc"]').text(t.luxurySuiteDesc);
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
    
    // Update location content
    $('[data-translate="exceptionalLocation"]').text(t.exceptionalLocation);
    $('[data-translate="locationDescription"]').text(t.locationDescription);
    $('[data-translate="hotelAddress"]').text(t.hotelAddress);
    
    // Update WhatsApp buttons
    $('[data-translate="whatsappBook"]').text(t.whatsappBook);
    $('[data-translate="whatsappContact"]').text(t.whatsappContact);
    
    // Update HTML lang attribute
    $('html').attr('lang', lang);
}

// Initialize localization
$(document).ready(function() {
    const currentLang = detectLanguage();
    console.log('Detected language:', currentLang);
    console.log('User language:', navigator.language);
    console.log('Translations available:', Object.keys(translations));
    
    applyTranslations(currentLang);
    
    // Store current language
    localStorage.setItem('bonhotel_lang', currentLang);
    
    // Set active language button
    updateActiveLanguageButton(currentLang);
    
    // Debug: Check if translations are applied
    setTimeout(() => {
        console.log('Sample translation check - About Us title:', $('[data-translate="aboutUsTitle"]').text());
        console.log('Sample translation check - Standard Room:', $('[data-translate="standardRoom"]').text());
    }, 1000);
});

// Function to manually switch language (for future language switcher)
function switchLanguage(lang) {
    console.log('Switching to language:', lang);
    applyTranslations(lang);
    localStorage.setItem('bonhotel_lang', lang);
    
    // Update active button
    $('.lang-btn').removeClass('active');
    $(`.lang-btn:contains('${lang.toUpperCase()}')`).addClass('active');
}

// Update active language button
function updateActiveLanguageButton(lang) {
    $('.lang-btn').removeClass('active');
    $(`.lang-btn:contains('${lang.toUpperCase()}')`).addClass('active');
} 