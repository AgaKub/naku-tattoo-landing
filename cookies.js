const NAKU_META_PIXEL_ID = "302069447693481";
const NAKU_COOKIE_CONSENT_KEY = "nakuCookieConsent";

function hasMarketingConsent() {
    return localStorage.getItem(NAKU_COOKIE_CONSENT_KEY) === "accepted";
}

function loadMetaPixel() {
    if (!hasMarketingConsent()) {
        return;
    }

    if (window.fbq) {
        return;
    }

    (function(f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function() {
            n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = true;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = true;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

    fbq("init", NAKU_META_PIXEL_ID);
    fbq("track", "PageView");

    trackCurrentPage();
}

function trackCurrentPage() {
    if (typeof fbq !== "function") {
        return;
    }

    const path = window.location.pathname;

    if (path === "/" || path.endsWith("/index.html")) {
        fbq("trackCustom", "try_on_page_view");
    }

    if (path.includes("/try-on/") && !path.includes("manual.html")) {
        fbq("trackCustom", "try_on_page_view");
    }

    if (path.includes("/try-on/manual.html")) {
        fbq("trackCustom", "browser_try_on_page_view");
    }
}

function trackNakuEvent(eventName) {
    if (typeof fbq !== "function") {
        return;
    }

    fbq("trackCustom", eventName);
}

function createCookieBanner() {
    if (hasMarketingConsent()) {
        loadMetaPixel();
        return;
    }

    if (localStorage.getItem(NAKU_COOKIE_CONSENT_KEY) === "rejected") {
        return;
    }

    const banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.innerHTML = `
        <div class="cookie-banner-text">
            <strong>Cookies & privacy</strong>
            <p>
                We use essential cookies to run this website. With your consent,
                we also use Meta Pixel to understand visits and improve our tattoo try-on experience.
            </p>
            <a href="privacy.html">Privacy & Cookies</a>
        </div>
        <div class="cookie-banner-actions">
            <button type="button" class="cookie-button secondary" id="rejectCookies">
                Reject
            </button>
            <button type="button" class="cookie-button primary" id="acceptCookies">
                Accept
            </button>
        </div>
    `;

    document.body.appendChild(banner);

    document.getElementById("acceptCookies").addEventListener("click", function() {
        localStorage.setItem(NAKU_COOKIE_CONSENT_KEY, "accepted");
        banner.remove();
        loadMetaPixel();
    });

    document.getElementById("rejectCookies").addEventListener("click", function() {
        localStorage.setItem(NAKU_COOKIE_CONSENT_KEY, "rejected");
        banner.remove();
    });
}

document.addEventListener("DOMContentLoaded", function() {
    createCookieBanner();
});