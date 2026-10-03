(function () {
  'use strict';

  var CONFIG = {
    waNumber: '201042438799',
    // Set after the Google Play release: the Android card then links to the store instead of the APK.
    googlePlayUrl: '',
    videoId: 'cVwAXD7NJ5g'
  };

  var EN = {"home": "Home", "features": "Features", "how_it_works": "How it Works", "pricing": "Pricing", "download": "Download", "faq": "Help", "start_free_trial": "Start your Trial", "no_credit_card": "No payment required", "hero_label": "30-Day Free Trial", "hero_title": "One Clear View.\nComplete Control.", "hero_subtitle_1": "A complete clinic management system: patients, appointments, accounts and payments in one place.", "hero_subtitle_2": "", "hero_cta_primary": "Try CLIVIO Free", "hero_cta_secondary": "See the System", "value_title": "Everything your clinic needs. In one place.", "value_subtitle": "An integrated system that covers all aspects of your daily work, giving you time to focus on patient care.", "value_patients": "Patients", "value_appointments": "Appointments", "value_accounts": "Accounts & Payments", "value_activity": "Activity Center", "value_users": "Users & Permissions", "showcase_patients_title": "Patient Management", "showcase_patients_desc": "Patient data and related operations in one place.", "showcase_appointments_title": "Appointment Organization", "showcase_appointments_desc": "Track your schedule and daily visits easily.", "showcase_accounts_title": "Accounts & Payments", "showcase_accounts_desc": "Track patient accounts, payments, and transactions.", "showcase_activity_title": "Every transaction is clear.", "showcase_activity_desc": "Who paid? How much? How did they pay? Who recorded it?\nThe Activity Center records every step clearly.", "video_title": "See CLIVIO in Action", "video_subtitle": "Experience a comprehensive walkthrough of the entire system.", "video_cta": "Watch Full Walkthrough", "free_trial_title": "Try CLIVIO for Free", "free_trial_subtitle": "Start your 30-day free trial", "free_trial_desc": "Experience the full capabilities of CLIVIO in your clinic before making any commitment.", "free_trial_cta": "Start your Free Trial", "pricing_title": "All CLIVIO features. One simple price.", "pricing_subtitle": "Get access to all current features with no usage limits.", "pricing_monthly": "EGP / month", "pricing_yearly": "EGP / year", "pricing_feature_1": "Patient Management", "pricing_feature_2": "Appointment Organization", "pricing_feature_3": "Services & Treatments", "pricing_feature_4": "Patient Accounts & Payments", "pricing_feature_5": "Activity Center", "pricing_feature_6": "Users & Permissions", "pricing_feature_7": "Android / iPhone / Windows / Web", "pricing_feature_8": "Continuous Technical Support", "founding_offer_label": "Early Adopters", "founding_offer_discount": "20% OFF", "founding_offer_desc": "For the first clinics joining us.", "referral_title": "Know a clinic that could benefit from CLIVIO?", "referral_subtitle": "Recommend CLIVIO to a new clinic and get a discount on your subscription.", "referral_1": "Refer 1 clinic ➔ 5% Discount", "referral_2": "Refer 2+ clinics ➔ 10% Discount", "download_title": "Download CLIVIO", "download_subtitle": "Use CLIVIO the way that suits you best.", "download_windows": "Download Desktop App", "download_android": "Download APK", "download_mac": "Download macOS", "download_ios": "iPhone & iPad", "download_web": "Use on the Web", "download_web_desc": "No download needed — use directly in your browser", "support_title": "Need Help?", "support_subtitle": "The CLIVIO team is ready to help you.", "contact_whatsapp": "Contact us on WhatsApp", "footer_desc": "A complete clinic management system with everything you need to run your practice efficiently.", "footer_product": "Product", "footer_company": "Company", "footer_about": "About CLIVIO", "footer_contact": "Contact Us", "footer_terms": "Terms & Conditions", "footer_privacy": "Privacy Policy", "copyright": "© 2026 CLIVIO. All rights reserved.", "hero_cta_demo": "Request a demo on WhatsApp", "hero_trust": "No credit card · then only 999 EGP/month", "hero_platforms": "Works on iPhone, Android, Windows and Web", "pricing_limited": "Limited time", "pricing_yearly_line": "or 9,990 EGP / year (instead of 12,000)", "whatsapp_message": "Hi, I'd like to know more about CLIVIO and request a demo", "download_google_play": "Get it on Google Play", "eyebrow_value": "All in one place", "eyebrow_how": "How it works", "eyebrow_features": "Features", "eyebrow_video": "See it yourself", "eyebrow_pricing": "Pricing", "eyebrow_download": "Download", "features_title": "Built for the daily work of a clinic", "how_title": "Get started in 3 steps", "how_sub": "From sign-up to your first patient, in minutes.", "step_1_t": "Start your free trial", "step_1_d": "Sign up with no credit card and get in right away.", "step_2_t": "Set up your clinic", "step_2_d": "Add your services, prices and team with the permissions you want.", "step_3_t": "Start working", "step_3_d": "Book appointments, register patients and track payments from one place.", "trust_1": "30 days free", "trust_2": "No credit card", "trust_3": "Support on WhatsApp", "trust_4": "Fully in Arabic", "chip_1": "New appointment booked", "chip_2": "Payment recorded", "pricing_save": "Save 201 EGP every month", "lang_name": "العربية", "theme_name": "Dark / Light mode", "cta_title": "Ready to organize your clinic?", "cta_sub": "Start 30 days free, or request a demo on WhatsApp first."};
  var AR_TITLE = document.title;
  var EN_TITLE = 'CLIVIO | Clinic Management System';
  var AR_DESC = document.querySelector('meta[name="description"]').content;
  var EN_DESC = 'CLIVIO is a complete system for managing your clinic: patients, appointments, accounts, payments and team in one place. Try it free for 30 days on mobile, desktop and web.';

  var root = document.documentElement;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  // ── i18n ────────────────────────────────────────────────────────────────
  var nodes = $$('[data-i18n]');
  nodes.forEach(function (el) { el.dataset.ar = el.innerHTML; });
  var arAndroid = $('#android-btn').dataset.ar;

  function html(s, key) {
    if (key === 'hero_title') {
      var p = s.split('\n');
      return p[0] + '<br><span class="grad">' + (p[1] || '') + '</span>';
    }
    return s.replace(/\n/g, '<br>');
  }
  function currentLang() { return root.lang === 'en' ? 'en' : 'ar'; }
  function t(key) { return currentLang() === 'en' && EN[key] ? EN[key] : null; }

  function applyLang(lang) {
    root.lang = lang;
    root.dir = lang === 'en' ? 'ltr' : 'rtl';
    nodes.forEach(function (el) {
      var v = lang === 'en' ? EN[el.dataset.i18n] : null;
      el.innerHTML = v ? html(v, el.dataset.i18n) : el.dataset.ar;
    });
    document.title = lang === 'en' ? EN_TITLE : AR_TITLE;
    $('meta[name="description"]').content = lang === 'en' ? EN_DESC : AR_DESC;
    applyAndroidCard();
    updateWaLinks();
    var f = $('.dl.featured');
    if (f) f.dataset.badge = lang === 'en' ? 'Best for your device' : 'مناسب لجهازك';
  }

  function waText() {
    return t('whatsapp_message') || 'أهلاً، عايز أعرف أكتر عن CLIVIO وأطلب ديمو';
  }
  function updateWaLinks() {
    var url = 'https://wa.me/' + CONFIG.waNumber + '?text=' + encodeURIComponent(waText());
    $$('.js-wa').forEach(function (a) { a.href = url; });
  }

  function applyAndroidCard() {
    var btn = $('#android-btn'), title = $('#android-title');
    if (!CONFIG.googlePlayUrl) return;
    btn.href = CONFIG.googlePlayUrl;
    [btn, title].forEach(function (el) {
      el.dataset.i18n = 'download_google_play';
      var v = currentLang() === 'en' ? EN.download_google_play : null;
      el.innerHTML = v || 'حمّل من Google Play';
    });
  }

  $$('[data-act="lang"]').forEach(function (b) {
    b.addEventListener('click', function () {
      var next = currentLang() === 'ar' ? 'en' : 'ar';
      store.set('clivio-lang', next);
      applyLang(next);
    });
  });

  // ── theme ───────────────────────────────────────────────────────────────
  $$('[data-act="theme"]').forEach(function (b) { b.addEventListener('click', function () {
    var isDark = root.dataset.theme === 'dark' ||
      (!root.dataset.theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    var next = isDark ? 'light' : 'dark';
    root.dataset.theme = next;
    store.set('clivio-theme', next);
  }); });

  // ── mobile menu ─────────────────────────────────────────────────────────
  var drawer = $('#drawer');
  $('#menu-btn').addEventListener('click', function () { drawer.classList.add('open'); });
  $('#drawer-close').addEventListener('click', function () { drawer.classList.remove('open'); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') drawer.classList.remove('open'); });
  drawer.addEventListener('click', function (e) {
    if (e.target === drawer || e.target.closest('a.item') || e.target.closest('a.btn')) drawer.classList.remove('open');
  });

  // ── active nav link ─────────────────────────────────────────────────────
  var links = {};
  $$('.nav a').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        Object.keys(links).forEach(function (k) { links[k].classList.toggle('active', k === en.target.id); });
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    Object.keys(links).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
  }

  // ── video facade (loads YouTube only on click) ──────────────────────────
  $('#play-btn').addEventListener('click', function () {
    var f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + CONFIG.videoId + '?autoplay=1&rel=0';
    f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    f.allowFullscreen = true;
    f.title = 'CLIVIO walkthrough';
    $('#player').appendChild(f);
    this.remove();
  });

  // ── feature the visitor's platform ──────────────────────────────────────
  var ua = navigator.userAgent || '';
  var platform = /android/i.test(ua) ? 'android'
    : /iphone|ipad|ipod/i.test(ua) ? 'ios'
    : /windows/i.test(ua) ? 'windows' : 'web';
  var card = $('.dl[data-platform="' + platform + '"]');
  if (card) { card.classList.add('featured'); card.dataset.badge = currentLang() === 'en' ? 'Best for your device' : 'مناسب لجهازك'; }

  // ── Meta Pixel (off while CLIVIO_PIXEL_ID is empty) ─────────────────────
  if (window.CLIVIO_PIXEL_ID) {
    !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s); }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', window.CLIVIO_PIXEL_ID);
    fbq('track', 'PageView');
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-track]');
    if (!a || !window.fbq) return;
    var kind = a.dataset.track;
    if (kind === 'lead') fbq('track', 'Lead');
    else fbq('trackCustom', kind === 'trial' ? 'StartTrial' : 'Download');
  });

  // ── reveal on scroll ────────────────────────────────────────────────────
  var reveals = $$('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    root.classList.add('js');
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); ro.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    reveals.forEach(function (el) { ro.observe(el); });
  }

  // ── init ────────────────────────────────────────────────────────────────
  if (currentLang() === 'en') applyLang('en'); else { applyAndroidCard(); updateWaLinks(); }
})();
