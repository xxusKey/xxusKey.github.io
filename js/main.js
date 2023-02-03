(()=>{var s={q:n=>document.querySelector(n),qa:n=>document.querySelectorAll(n),gId:n=>document.getElementById(n),debounce(n,e,t){let o;return function(){let i=this,r=arguments;clearTimeout(o),o=setTimeout(function(){o=null,t||n.apply(i,r)},e),t&&!o&&n.apply(i,r)}},wrap(n,e,t={}){if(typeof e=="string"){e=document.createElement(e);for(let[o,i]of Object.entries(t))e.setAttribute(o,i)}n.parentNode.insertBefore(e,n),e.appendChild(n)},urlFor(n){return/^(#|\/\/|http(s)?:)/.test(n)?n:(window.ASYNC_CONFIG.root+n).replace(/\/{2,}/g,"/")},siblings:(n,e)=>[...n.parentNode.children].filter(t=>e?t!==n&&t.matches(e):t!==n),_message:[],message(n,e="success"){let t=document.createElement("div");t.className=`trm-message ${e}`,t.style.top=`${30+s._message.length*60}px`,t.innerText=n,document.body.append(t),s._message.push(t),setTimeout(()=>{s._message=s._message.filter(o=>o!==t),document.body.removeChild(t),s._message.forEach((o,i)=>{o.style.top=`${30+i*60}px`})},2e3)},loadScript(n,e){return new Promise((t,o)=>{if(e)t();else{let i=document.createElement("script");i.src=n,i.setAttribute("async","false"),i.onerror=o,i.onload=()=>t(),document.head.appendChild(i)}})},runScriptBlock(n){let e=n.text||n.textContent||n.innerHTML||"",t=document.head||document.querySelector("head")||document.documentElement,o=document.createElement("script");if(e.match("document.write"))return console&&console.log&&console.log("Script contains document.write. Can\u2019t be executed correctly. Code skipped "),!1;try{o.appendChild(document.createTextNode(e))}catch{o.text=e}t.appendChild(o),t.contains(o)&&t.removeChild(o)},icons(n,e="font"){return e==="symbol"?`<svg class="symbol-icon " aria-hidden="true"><use xlink:href="#${n}"></use></svg>`:`<i class="iconfont ${n}"></i>`},diffDate:(n,e=!1)=>{let t=new Date,o=new Date(n),i=t.getTime()-o.getTime(),r=1e3*60,c=r*60,a=c*24,f=a*30,u;if(e){let h=i/f,l=i/a,d=i/c,g=i/r;h>12?u=o.toISOString().slice(0,10):h>=1?u=parseInt(h.toString())+" "+window.ASYNC_CONFIG.date_suffix.month:l>=1?u=parseInt(l.toString())+" "+window.ASYNC_CONFIG.date_suffix.day:d>=1?u=parseInt(d.toString())+" "+window.ASYNC_CONFIG.date_suffix.hour:g>=1?u=parseInt(g.toString())+" "+window.ASYNC_CONFIG.date_suffix.min:u=window.ASYNC_CONFIG.date_suffix.just}else u=parseInt((i/a).toString());return u}},y={pageLoading(n=600){return new Promise(e=>{s.q("html").classList.add("is-animating"),s.q(".trm-scroll-container").style.opacity=0,setTimeout(function(){s.q("html").classList.remove("is-animating"),s.q(".trm-scroll-container").style.opacity=1,e()},n)})},themeLoading(n=600){let e=s.q("#trm-scroll-container"),t=s.q(".trm-mode-swich-animation-frame");return new Promise(o=>{t.classList.add("trm-active"),e.style.opacity=0,setTimeout(()=>{setTimeout(()=>{t.classList.remove("trm-active"),e.style.opacity=1},n),o()},n)})},switchSingleColumn(){document.body.classList.toggle("trm-single-column")},switchReadMode(){let n=document.body;n.classList.add("trm-read-mode");let e=document.createElement("button");e.type="button",e.title=window.ASYNC_CONFIG.i18n.exit_read_mode,e.className="trm-exit-readmode trm-glow",e.innerHTML=s.icons(window.ASYNC_CONFIG.icons.close,window.ASYNC_CONFIG.icontype),n.appendChild(e);function t(){n.classList.remove("trm-read-mode"),e.remove(),e.removeEventListener("click",t)}e.addEventListener("click",t)},switchThemeMode(n){y.themeLoading().then(()=>{let e=n==="style-dark"?"add":"remove";s.q(".trm-mode-swich-animation").classList[e]("trm-active"),document.documentElement.classList[e]("dark"),localStorage.setItem("theme-mode",n),y.setThemeColor(),typeof window.changeGiscusTheme=="function"&&window.changeGiscusTheme()})},setThemeColor(n="--theme-bg-color"){let e=getComputedStyle(document.documentElement).getPropertyValue(n),t=s.q('meta[name="theme-color"]');e&&t&&(t.content=e)}};var b=class{constructor(e){this.name="HeadPlugin";this.isSwupPlugin=!0;this.defaultOptions={persistTags:!1,persistAssets:!1,specialTags:!1};this.getHeadAndReplace=()=>{let e=this.getHeadChildren(),t=this.getNextHeadChildren();this.replaceTags(e,t)};this.getHeadChildren=()=>document.head.children;this.getNextHeadChildren=()=>{let e=this.swup.cache.getCurrentPage().originalContent.replace("<head",'<div id="swupHead"').replace("</head>","</div>"),t=document.createElement("div");t.innerHTML=e;let o=t.querySelector("#swupHead").children;return t.innerHTML="",t=null,o};this.replaceTags=(e,t)=>{let o=document.head,i=Boolean(document.querySelector("[data-swup-theme]")),r=this.getTagsToAdd(e,t,i),c=this.getTagsToRemove(e,t);c.reverse().forEach(a=>{o.removeChild(a.tag)}),r.forEach(a=>{o.insertBefore(a.tag,o.children[a.index+1]||null)}),this.swup.log(`Removed ${c.length} / added ${r.length} tags in head`)};this.compareTags=(e,t)=>{let o=e.outerHTML,i=t.outerHTML;return o===i};this.getTagsToRemove=(e,t)=>{let o=[];for(let i=0;i<e.length;i++){let r=null;for(let c=0;c<t.length;c++)if(this.compareTags(e[i],t[c])){r=c;break}r==null&&e[i].getAttribute("data-async-theme")===null&&!this.isMatchesTag(e[i],this.options.persistTags)&&o.push({tag:e[i]})}return o};this.getTagsToAdd=(e,t,o)=>{let i=[];for(let r=0;r<t.length;r++){let c=null;for(let a=0;a<e.length;a++)if(this.compareTags(e[a],t[r])){c=a;break}c==null&&!this.isMatchesTag(t[r],this.options.specialTags)&&i.push({index:o?r+1:r,tag:t[r]})}return i};this.isMatchesTag=(e,t=this.options.persistTags)=>typeof t=="function"?t(e):typeof t=="string"?e.matches(t):Boolean(t);this.updateHtmlLangAttribute=()=>{let e=document.documentElement,o=new DOMParser().parseFromString(this.swup.cache.getCurrentPage().originalContent,"text/html").documentElement.lang;e.lang!==o&&(this.swup.log(`Updated lang attribute: ${e.lang} > ${o}`),e.lang=o)};this.options={...this.defaultOptions,...e},this.options.persistAssets&&!this.options.persistTags&&(this.options.persistTags="link[rel=stylesheet], script[src], style")}mount(){this.swup.on("contentReplaced",this.getHeadAndReplace),this.swup.on("contentReplaced",this.updateHtmlLangAttribute)}unmount(){this.swup.off("contentReplaced",this.getHeadAndReplace),this.swup.off("contentReplaced",this.updateHtmlLangAttribute)}},S=b;var $=n=>Array.prototype.slice.call(n),x=class{constructor(e={}){this.name="ScriptPlugin";this.isSwupPlugin=!0;this.defaultOptions={selectors:"script[data-swup-reload-script]"};this.getScriptAndInsert=()=>{let e=this.getNextScriptChildren();e.length&&(async o=>{let i=Array.from(document.scripts);for(let r=0;r<o.length;r++){let c=o[r];c.src?i.findIndex(a=>a.src===c.src&&!a.dataset.reset)<0&&await this.loadScript(c):s.runScriptBlock(c)}})(e)};this.options={...this.defaultOptions,...e}}mount(){this.swup.on("contentReplaced",this.getScriptAndInsert)}unmount(){this.swup.off("contentReplaced",this.getScriptAndInsert)}loadScript(e){return new Promise((t,o)=>{let i=document.createElement("script");for(let{name:r,value:c}of $(e.attributes))i.setAttribute(r,c);i.textContent=e.textContent,i.setAttribute("async","false"),i.onload=()=>{t(),document.body.contains(i)&&document.body.removeChild(i)},i.onerror=o,document.body.appendChild(i)})}getNextScriptChildren(){let e=this.swup.cache.getCurrentPage().originalContent.replace("<body",'<div id="swupBody"').replace("</body>","</div>"),t=document.createElement("div");t.innerHTML=e;let o=t.querySelector("#swupBody").querySelectorAll(this.options.selectors);return t.innerHTML="",t=null,o}},E=x;function N(){window.Fancybox&&(window.Fancybox.bind("[data-fancybox]"),window.Fancybox.bind('[data-fancybox="light"],[data-fancybox="article"]',{groupAll:!0}),window.Fancybox.bind('[data-fancybox="dark"],[data-fancybox="article"]',{groupAll:!0}),window.Fancybox.defaults.Hash=!1)}function T(){if(window.Swiper)var n=new window.Swiper(".trm-slideshow",{slidesPerView:1,effect:"fade",parallax:!0,autoplay:!0,speed:1400})}function _(){window.Fancybox&&s.qa("#article-container img:not(.no-fancybox)").forEach(n=>{if(!n.parentNode.dataset.fancybox){let e="article";n.classList.contains("trm-light-icon")?e="light":n.classList.contains("trm-dark-icon")&&(e="dark"),s.wrap(n,"div",{"data-src":n.dataset.src||n.src,"data-fancybox":e})}})}function P(){let n=[];n.push(new S({specialTags:"#trm-switch-style"})),n.push(new E);let e={containers:["#trm-dynamic-content"],animateHistoryBrowsing:!0,linkSelector:".trm-menu a:not([data-no-swup]), .trm-anima-link:not([data-no-swup])",animationSelector:'[class="trm-swup-animation"]',plugins:n};return new window.Swup(e)}function I(n=!1){let e=s.q("#trm-swich"),t=s.q(".trm-mode-swich-animation"),o=s.q(".trm-mode-swich-animation-frame");if(n){let i=(localStorage.getItem("theme-mode")||window.ASYNC_CONFIG.theme.default)=="style-dark",r=i?"add":"remove";t.classList[r]("trm-active"),o.classList.remove("trm-active"),y.setThemeColor(),e&&(e.checked=i)}e&&e.addEventListener("change",function(){y.switchThemeMode(this.checked?"style-dark":"style-light")})}function A(){let n=s.q("#trm-scroll-container"),e=s.q("#trm-back-top"),t=s.q(".trm-fixed-container"),o=new window.LocomotiveScroll({el:s.q("#trm-scroll-container"),smooth:!0,lerp:.1,reloadOnContextChange:!0,class:"trm-active-el"}),i=s.debounce(()=>o.update(),150),r=new ResizeObserver(()=>{o.update()});r.observe(n),window.addEventListener("resize",i),o.on("scroll",({scroll:h,limit:l})=>{let d=parseInt((h.y/l.y*100).toString());e.style.backgroundSize=`100% ${d}%`,h.y>500?(e.classList.add("active-el"),t.classList.add("offset")):(e.classList.remove("active-el"),t.classList.remove("offset"))});let c=function(){o.scrollTo(0)};e==null||e.addEventListener("click",c);let a=window.matchMedia("screen and (min-width: 768px)"),f=window.matchMedia("screen and (max-width: 767px)"),u=function(h){h.matches&&location.reload()};return a.addListener(u),f.addListener(u),document.addEventListener("swup:contentReplaced",h=>{e==null||e.removeEventListener("click",c),window.removeEventListener("resize",i),r.unobserve(n),a.removeListener(u),f.removeListener(u),o.destroy()}),o}function H(){s.q(".trm-menu-btn").addEventListener("click",function(){s.q(".trm-menu-btn,.trm-right-side").classList.toggle("trm-active")}),s.q(".trm-menu ul li a").addEventListener("click",function(){s.q(".trm-menu-btn,.trm-right-side").classList.remove("trm-active")})}function q(n=2e3){let e=(t,o,i,r)=>{i+=o,i>=r?t.innerText=r.toString():(t.innerText=parseInt(i.toString()).toString(),requestAnimationFrame(()=>e(t,o,i,r)))};s.qa(".trm-counter").forEach(t=>{let o=Number(t.innerText);if(!isNaN(o)){let i=o/(n/16);e(t,i,0,o)}})}function F(){let n=document.getElementById("trm-tabs-nav");n&&(n.addEventListener("click",function(t){var o=t.target;let i=o.dataset.to||o.parentElement.dataset.to,r=o.classList.contains("active")||o.parentElement.classList.contains("active");i&&!r&&(document.querySelectorAll(".trm-tabs-nav-item").forEach(c=>{c.classList.toggle("active")}),document.querySelectorAll(".trm-tabs-item").forEach(c=>{c.classList.toggle("active")}))}),(()=>{let t=s.q(".post-toc"),o=Array.from(t.querySelectorAll("a.toc-link"));if(!o.length)return;let i=o.map(l=>s.gId(decodeURI(l.getAttribute("href").replace("#","")))),r=document.querySelector(".trm-app-frame");if(!r)return;let c=document.querySelector(".trm-top-bar"),{bottom:a}=c.getBoundingClientRect();function f(l){if(l=l.parentNode,l.classList.contains("active-current"))return;s.qa(".post-toc .active").forEach(g=>{g.classList.remove("active","active-current")}),l.classList.add("active","active-current");let d=l.parentNode;for(;!d.matches(".post-toc");)d.matches("li")&&d.classList.add("active"),d=d.parentNode}function u(l){let d=0,g=l[d];if(g.intersectionRatio<=0)return d=i.indexOf(g.target),d===0?0:d-1;for(;d<l.length;d++)if(l[d].intersectionRatio>0)g=l[d];else return i.indexOf(g.target);return i.indexOf(g.target)}function h(l){l=Math.floor(l+1e4);let d=new IntersectionObserver((g,p)=>{let w=document.documentElement.scrollHeight+100;if(w>l){p.disconnect(),h(w);return}let v=u(g);f(o[v])},{root:r,rootMargin:`${l}px 0px -${r.clientHeight-a-20}px 0px`,threshold:[0,1]});i.forEach(g=>{g&&d.observe(g)})}h(document.documentElement.scrollHeight)})())}function Y(){if(window.ASYNC_CONFIG.creative_commons){let{author:n,i18n:e,creative_commons:t}=window.ASYNC_CONFIG,o=function(i){let r=i.clipboardData||window.clipboardData;if(!r)return;let c=window.getSelection().toString();if(c){i.preventDefault();let a=document.getElementById("post-author");a&&(n=a.innerText.replace(`
`,""));let f=location.href,u=document.getElementById("original-link");u&&(f=u.innerText.replace(`
`,""));let h=`

${e.author}${n}
${e.copyright_link}${f}
${e.copyright_license_title}${e.copyright_license_content.replace("undefined","CC"+t.license.toUpperCase()+" "+(t.license=="zero"?"1.0":"4.0"))}`;r.setData("text/plain",c+h)}};document.addEventListener("copy",o)}}function O(){let{i18n:n,highlight:e,icons:t,icontype:o}=window.ASYNC_CONFIG,i=e.copy,r=e.lang,c=e.height_limit,a=i||r,f=e.plugin==="prismjs",u=e.title==="mac",h=f?'pre[class*="language-"]':"figure.highlight",l=s.qa(h);if(!(a||c||l.length))return;let d=function(){try{let p=this.parentNode.parentNode,w=p.querySelector(".code");if(w||(w=p.querySelector("table")),w||(w=p.querySelector("code")),!w)return;navigator.clipboard.writeText(w.innerText),s.message(n.copy_success)}catch{s.message(n.copy_failure,"warning")}},g=function(){this.classList.toggle("expand-done")};s.qa(h).forEach(p=>{let w=document.createDocumentFragment(),v=document.createElement("div");if(v.className=`code-tools ${a&&u?"mac-style":"default-style"}`,r){let m="";f?m=p.getAttribute("data-language")?p.getAttribute("data-language"):"Code":(m=p.getAttribute("class").split(" ")[1],(m==="plain"||m===void 0)&&(m="Code"));let C=document.createElement("span");C.className="code-lang",C.innerText=m,v.append(C)}if(i){let m=document.createElement("span");m.className="copy-button",m.innerHTML=s.icons(t.copy,o),m.addEventListener("click",d),v.append(m)}if(c&&p.offsetHeight>e.height_limit+50){let m=document.createElement("div");m.innerHTML=s.icons(t.double_arrows,o),m.className="code-expand-btn",m.addEventListener("click",g),w.append(m)}if(w.append(v),f){s.wrap(p,"figure",{class:"highlight"}),p.parentNode.insertBefore(w,p);let m=p.querySelector(".caption,caption");m&&p.parentNode.appendChild(m)}else p.insertBefore(w,p.querySelector("table"))})}function k(){s.qa(".trm-tabs .trm-tab > button").forEach(function(n){n.addEventListener("click",function(e){let t=this,o=t.parentNode;if(!o.classList.contains("active")){let i=o.parentNode.nextElementSibling,r=s.siblings(o,".active")[0];r&&r.classList.remove("active"),o.classList.add("active");let c=t.getAttribute("data-href").replace("#","");[...i.children].forEach(f=>{f.id===c?f.classList.add("active"):f.classList.remove("active")})}})})}function M(){let n=s.qa(".fj-gallery");n.length&&(n.forEach(e=>{e.querySelectorAll("img").forEach(o=>{o.loading="eager",s.wrap(o,"div",{class:"fj-gallery-item","data-src":o.dataset.src||o.src,"data-fancybox":"gallery"})})}),s.loadScript(window.ASYNC_CONFIG.plugin.flickr_justified_gallery,window.fjGallery).then(()=>{n.forEach(e=>{window.fjGallery(e,{itemSelector:".fj-gallery-item",rowHeight:220,gutter:4,onJustify:function(){this.$container.style.opacity="1"}})})}))}function R(){if(window.ASYNC_CONFIG&&window.ASYNC_CONFIG.favicon.visibilitychange){window.originTitle=document.title;let n,e=Array.from(s.qa('[rel="icon"]')),t=e.map(o=>o.href);document.addEventListener("visibilitychange",function(){document.hidden?(e.forEach(o=>{o.href=s.urlFor(window.ASYNC_CONFIG.favicon.hidden)}),document.title=window.ASYNC_CONFIG.favicon.hideText,clearTimeout(n)):(e.forEach((o,i)=>{o.href=t[i]}),document.title=window.ASYNC_CONFIG.favicon.showText+window.originTitle,n=setTimeout(function(){document.title=window.originTitle},2e3))})}}function G(){let{notice_outdate:n,i18n:e}=window.ASYNC_CONFIG;if(n){let t=s.diffDate(window.PAGE_CONFIG.postUpdate);if(t>=n.limit_day){let o=document.createElement("div");o.className=`post-outdate-notice ${n.position}`,o.textContent=e.notice_outdate_message.replace("undefined",t.toString());let i=document.getElementById("article-container");n.position==="top"?i.insertBefore(o,i.firstChild):i.appendChild(o)}}}function B(){let n=e=>console.log(e,"color: white; background: #0078E7; padding:5px 0;margin: 0 0 2px 0;border-radius: 4px 0 0 4px;","padding: 4px;border:1px solid #0078E7;border-radius: 0 4px 4px 0; background: linear-gradient(70deg, #e3f9eb, #d1dbff);");n(`%c \u{1F680} Hexo-Theme-Async ${window.ASYNC_CONFIG.theme_version=="0.0.0"?"Github":window.ASYNC_CONFIG.theme_version} %c https://github.com/MaLuns/hexo-theme-async `),n("%c \u{1F4D1} Hexo-Theme-Async Docs %c https://hexo-theme-async.imalun.com ")}function L(){window.asyncFun=y,B(),y.pageLoading(),R(),window.PAGE_CONFIG.isPost&&G(),M(),_(),O(),k(),window.ASYNC_CONFIG.swup&&P(),H(),I(!0),q(),A(),T(),N(),F(),Y(),window.ASYNC_CONFIG.swup&&document.addEventListener("swup:contentReplaced",function(){let n=s.gId("async-page-config");n&&s.runScriptBlock(n),window.PAGE_CONFIG.isPost&&G(),document.body.classList.remove("trm-read-mode"),window.show_date_time&&window.show_date_time(),M(),_(),O(),k(),s.q(".trm-scroll-container").style.opacity=1,H(),I(!0),q(),A(),T(),N(),F()})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",L):L();})();
