!function(){var t={757:function(){var t;t=jQuery,"object"!==typeof window.MagicLogin&&(window.MagicLogin={}),MagicLogin.pageToggles=function(e){if(t("body").hasClass("settings_page_magic-login"))return t('.sui-toggle input[type="checkbox"]').each((function(){const e=t(this);void 0!==e.attr("aria-controls")&&function(e){const n=t(`#${e.attr("aria-controls")}`);e.on("change",(function(){e.is(":checked")?n.show():n.hide()}))}(e)})),this},t("body").ready((function(){MagicLogin.pageToggles("toggles")}))},307:function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}!function(e){"use strict";"object"!==t(window.SUI)&&(window.SUI={}),SUI.suiTabs=function(t){var e,n,i,a,o=["tab","pane"],s=[],r=[],c=[],l=[],u=[];function d(t,n){f(t,n),"function"===typeof e.callback&&e.callback(l.tab,l.pane)}function f(t,e){var d;for(i=t,a=e,d=0;d<o.length;d++)r[n=o[d]]=s[n][i],c[n]=r[n].children,l[n]=c[n][a],h();u[t]=[],u[t][e]=!0}function h(){var t;for(t=0;t<c[n].length;t++)c[n][t].classList.remove(e[n+"Active"]);l[n].classList.add(e[n+"Active"])}function b(t,n){(e=e||[])[t]=e[t]||n}!function(t){var r,c,l;for(e=t,function(){var t;for(t=0;t<o.length;t++)b((n=o[t])+"Group","[data-"+n+"s]"),b(n+"Active","active")}(),s.tab=document.querySelectorAll(e.tabGroup),s.pane=document.querySelectorAll(e.paneGroup),r=0;r<s.tab.length;r++)for(c=s.tab[r].children,l=0;l<c.length;l++)c[l].addEventListener("click",d.bind(this,r,l),!1),i=r,a=l,window.location.hash&&window.location.hash.replace(/[^\w-_]/g,"")===c[l].id&&f(r,l)}(t)},SUI.tabsOverflow=function(t){var n=t.closest(".sui-tabs").find('[data-tabs], [role="tablist"]'),i=t.find(".sui-tabs-navigation--left"),a=t.find(".sui-tabs-navigation--right");function o(){return n[0].scrollWidth>n.width()?(0===n.scrollLeft()?i.addClass("sui-tabs-navigation--hidden"):i.removeClass("sui-tabs-navigation--hidden"),s(0),!0):(i.addClass("sui-tabs-navigation--hidden"),a.addClass("sui-tabs-navigation--hidden"),!1)}function s(t){var e,i;e=n.scrollLeft()+t,i=n.outerWidth(),n.get(0).scrollWidth-e<=i?a.addClass("sui-tabs-navigation--hidden"):a.removeClass("sui-tabs-navigation--hidden")}o(),i.on("click",(function(){return a.removeClass("sui-tabs-navigation--hidden"),0>=n.scrollLeft()-150&&i.addClass("sui-tabs-navigation--hidden"),n.animate({scrollLeft:"-=150"},400,(function(){})),!1})),a.on("click",(function(){return i.removeClass("sui-tabs-navigation--hidden"),s(150),n.animate({scrollLeft:"+=150"},400,(function(){})),!1})),e(window).on("resize",(function(){o()})),n.on("scroll",(function(){o()}))},SUI.tabs=function(t){var n=e('.sui-tabs > div[role="tablist"]'),i=t,a=35,o=36,s=37,r=38,c=39,l=40,u=13,d=32,f={37:-1,38:-1,39:1,40:1};if(n.length)return function(){var t=n.closest(".sui-tabs");t.each((function(){t=e(this),(n=t.find('> [role="tablist"]')).find('> [role="tab"]').on("click",(function(t){v(t)})).on("keydown",(function(t){!function(t,e,n){switch(t.keyCode||t.which){case a:case o:t.preventDefault();break;case r:case l:b(t,e,n)}}(t,e(this).index(),n)})).on("keyup",(function(t){!function(t,e,n){switch(t.keyCode||t.which){case s:case c:b(t,e,n);break;case u:case d:h(t)}}(t,e(this).index(),n)}))}))}(),this;function h(t){var n=e(t).closest('[role="tablist"]').find('[role="tab"]'),i=e(t).closest('[role="tablist"]').find('input[type="radio"]'),a=e(t).closest(".sui-tabs").find('> .sui-tabs-content > [role="tabpanel"]'),o=e(t).attr("aria-controls"),s=e(t).next('input[type="radio"]'),r=e("#"+o);!function(t,e,n){t.removeClass("active"),t.attr("tabindex","-1"),t.attr("aria-selected",!1),n.prop("checked",!1),e.removeClass("active"),e.prop("hidden",!0)}(n,a,i),e(t).addClass("active"),e(t).removeAttr("tabindex"),e(t).attr("aria-selected",!0),s.prop("checked",!0),r.addClass("active"),r.prop("hidden",!1)}function b(t,n,i){var a=t.keyCode||t.which,o=!1;"vertical"===e(i).attr("aria-orientation")?r!==a&&l!==a||(t.preventDefault(),o=!0):s!==a&&c!==a||(o=!0),!0===o&&function(t,n){var i,a,o;i=t.keyCode||t.which,f[i]&&(a=t.target,o=e(a).closest('[role="tablist"]').find('> [role="tab"]'),void 0!==n&&(o[n+f[i]]?o[n+f[i]].focus():s===i||r===i?o[o.length-1].focus():c!==i&&l!==i||o[0].focus()))}(t,n)}function v(t){var n=t.target;h(n),void 0!==i&&"undefined"!==i&&function(t){var n=e(t),a=n.attr("aria-controls"),o=e("#"+a);"function"===typeof i.callback&&i.callback(n,o)}(n),t.preventDefault(),t.stopPropagation()}},0!==e(".sui-2-12-24 .sui-tabs").length&&(SUI.tabs(),SUI.suiTabs(),e(".sui-2-12-24 .sui-tabs-navigation").each((function(){SUI.tabsOverflow(e(this))})))}(jQuery)}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";n(757),n(307);jQuery(document).ready((function(t){t('[name="registration_mode"]').on("change",(function(){"auto"===t(this).val()?t("#auto-registration-details").show():t("#auto-registration-details").hide(),"standard"===t(this).val()?t("#standard-registration-details").show():t("#standard-registration-details").hide(),"shortcode"===t(this).val()?t("#shortcode-registration-details").show():t("#shortcode-registration-details").hide()})),t('input[name="spam_protection_service"]').on("change",(function(){t(".spam-protection-service-settings").hide(),t("#"+t(this).val()+"-details").show()}))})),document.addEventListener("DOMContentLoaded",(function(){const t=window.location.hash;function e(e){const i=t;if(i){const t=e.querySelector(`.magic-login-main-tab-item[aria-controls="${i.substring(1)}"]`);t&&n(t,!1,e)}}function n(t,e=!0,n){const i=n.querySelectorAll(".magic-login-main-tab-item"),a=n.nextElementSibling.querySelectorAll(".magic-login-main-tab-content");i.forEach((t=>{t.classList.remove("active"),t.setAttribute("aria-selected","false"),t.setAttribute("tabindex","-1")})),a.forEach((t=>{t.classList.remove("active"),t.setAttribute("tabindex","-1")})),t.classList.add("active"),t.setAttribute("aria-selected","true"),t.setAttribute("tabindex","0");const o=t.getAttribute("aria-controls"),s=n.nextElementSibling.querySelector(`#${o}`);s.classList.add("active"),s.setAttribute("tabindex","0"),e&&history.replaceState(null,null,`#${o}`)}t&&history.replaceState(null,null,window.location.pathname+window.location.search);document.querySelectorAll(".magic-login-main-tab-nav").forEach((t=>{t.querySelectorAll(".magic-login-main-tab-item").forEach((e=>{e.addEventListener("click",(function(){n(e,!0,t)}))})),e(t),window.addEventListener("hashchange",(function(){e(t)}))})),t&&setTimeout((()=>{history.replaceState(null,null,t)}),0)}))}()}();