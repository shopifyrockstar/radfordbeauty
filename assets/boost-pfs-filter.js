/** VERSION: 0.0.2 Please do not delete this line. Thank you! **/
if(typeof lazySizes !== 'function'){
    /*! lazysizes - v4.1.8 */
    !function (a, b) { var c = b(a, a.document); a.lazySizes = c, "object" == typeof module && module.exports && (module.exports = c) }(window, function (a, b) { "use strict"; if (b.getElementsByClassName) { var c, d, e = b.documentElement, f = a.Date, g = a.HTMLPictureElement, h = "addEventListener", i = "getAttribute", j = a[h], k = a.setTimeout, l = a.requestAnimationFrame || k, m = a.requestIdleCallback, n = /^picture$/i, o = ["load", "error", "lazyincluded", "_lazyloaded"], p = {}, q = Array.prototype.forEach, r = function (a, b) { return p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")), p[b].test(a[i]("class") || "") && p[b] }, s = function (a, b) { r(a, b) || a.setAttribute("class", (a[i]("class") || "").trim() + " " + b) }, t = function (a, b) { var c; (c = r(a, b)) && a.setAttribute("class", (a[i]("class") || "").replace(c, " ")) }, u = function (a, b, c) { var d = c ? h : "removeEventListener"; c && u(a, b), o.forEach(function (c) { a[d](c, b) }) }, v = function (a, d, e, f, g) { var h = b.createEvent("Event"); return e || (e = {}), e.instance = c, h.initEvent(d, !f, !g), h.detail = e, a.dispatchEvent(h), h }, w = function (b, c) { var e; !g && (e = a.picturefill || d.pf) ? (c && c.src && !b[i]("srcset") && b.setAttribute("srcset", c.src), e({ reevaluate: !0, elements: [b] })) : c && c.src && (b.src = c.src) }, x = function (a, b) { return (getComputedStyle(a, null) || {})[b] }, y = function (a, b, c) { for (c = c || a.offsetWidth; c < d.minSize && b && !a._lazysizesWidth;)c = b.offsetWidth, b = b.parentNode; return c }, z = function () { var a, c, d = [], e = [], f = d, g = function () { var b = f; for (f = d.length ? e : d, a = !0, c = !1; b.length;)b.shift()(); a = !1 }, h = function (d, e) { a && !e ? d.apply(this, arguments) : (f.push(d), c || (c = !0, (b.hidden ? k : l)(g))) }; return h._lsFlush = g, h }(), A = function (a, b) { return b ? function () { z(a) } : function () { var b = this, c = arguments; z(function () { a.apply(b, c) }) } }, B = function (a) { var b, c = 0, e = d.throttleDelay, g = d.ricTimeout, h = function () { b = !1, c = f.now(), a() }, i = m && g > 49 ? function () { m(h, { timeout: g }), g !== d.ricTimeout && (g = d.ricTimeout) } : A(function () { k(h) }, !0); return function (a) { var d; (a = !0 === a) && (g = 33), b || (b = !0, d = e - (f.now() - c), d < 0 && (d = 0), a || d < 9 ? i() : k(i, d)) } }, C = function (a) { var b, c, d = 99, e = function () { b = null, a() }, g = function () { var a = f.now() - c; a < d ? k(g, d - a) : (m || e)(e) }; return function () { c = f.now(), b || (b = k(g, d)) } }; !function () { var b, c = { lazyClass: "lazyload", loadedClass: "lazyloaded", loadingClass: "lazyloading", preloadClass: "lazypreload", errorClass: "lazyerror", autosizesClass: "lazyautosizes", srcAttr: "data-src", srcsetAttr: "data-srcset", sizesAttr: "data-sizes", minSize: 40, customMedia: {}, init: !0, expFactor: 1.5, hFac: .8, loadMode: 2, loadHidden: !0, ricTimeout: 0, throttleDelay: 125 }; d = a.lazySizesConfig || a.lazysizesConfig || {}; for (b in c) b in d || (d[b] = c[b]); a.lazySizesConfig = d, k(function () { d.init && F() }) }(); var D = function () { var g, l, m, o, p, y, D, F, G, H, I, J, K = /^img$/i, L = /^iframe$/i, M = "onscroll" in a && !/(gle|ing)bot/.test(navigator.userAgent), N = 0, O = 0, P = 0, Q = -1, R = function (a) { P-- , (!a || P < 0 || !a.target) && (P = 0) }, S = function (a) { return null == J && (J = "hidden" == x(b.body, "visibility")), J || "hidden" != x(a.parentNode, "visibility") && "hidden" != x(a, "visibility") }, T = function (a, c) { var d, f = a, g = S(a); for (F -= c, I += c, G -= c, H += c; g && (f = f.offsetParent) && f != b.body && f != e;)(g = (x(f, "opacity") || 1) > 0) && "visible" != x(f, "overflow") && (d = f.getBoundingClientRect(), g = H > d.left && G < d.right && I > d.top - 1 && F < d.bottom + 1); return g }, U = function () { var a, f, h, j, k, m, n, p, q, r, s, t, u = c.elements; if ((o = d.loadMode) && P < 8 && (a = u.length)) { for (f = 0, Q++; f < a; f++)if (u[f] && !u[f]._lazyRace) if (!M || c.prematureUnveil && c.prematureUnveil(u[f])) aa(u[f]); else if ((p = u[f][i]("data-expand")) && (m = 1 * p) || (m = O), r || (r = !d.expand || d.expand < 1 ? e.clientHeight > 500 && e.clientWidth > 500 ? 500 : 370 : d.expand, c._defEx = r, s = r * d.expFactor, t = d.hFac, J = null, O < s && P < 1 && Q > 2 && o > 2 && !b.hidden ? (O = s, Q = 0) : O = o > 1 && Q > 1 && P < 6 ? r : N), q !== m && (y = innerWidth + m * t, D = innerHeight + m, n = -1 * m, q = m), h = u[f].getBoundingClientRect(), (I = h.bottom) >= n && (F = h.top) <= D && (H = h.right) >= n * t && (G = h.left) <= y && (I || H || G || F) && (d.loadHidden || S(u[f])) && (l && P < 3 && !p && (o < 3 || Q < 4) || T(u[f], m))) { if (aa(u[f]), k = !0, P > 9) break } else !k && l && !j && P < 4 && Q < 4 && o > 2 && (g[0] || d.preloadAfterLoad) && (g[0] || !p && (I || H || G || F || "auto" != u[f][i](d.sizesAttr))) && (j = g[0] || u[f]); j && !k && aa(j) } }, V = B(U), W = function (a) { var b = a.target; if (b._lazyCache) return void delete b._lazyCache; R(a), s(b, d.loadedClass), t(b, d.loadingClass), u(b, Y), v(b, "lazyloaded") }, X = A(W), Y = function (a) { X({ target: a.target }) }, Z = function (a, b) { try { a.contentWindow.location.replace(b) } catch (c) { a.src = b } }, $ = function (a) { var b, c = a[i](d.srcsetAttr); (b = d.customMedia[a[i]("data-media") || a[i]("media")]) && a.setAttribute("media", b), c && a.setAttribute("srcset", c) }, _ = A(function (a, b, c, e, f) { var g, h, j, l, o, p; (o = v(a, "lazybeforeunveil", b)).defaultPrevented || (e && (c ? s(a, d.autosizesClass) : a.setAttribute("sizes", e)), h = a[i](d.srcsetAttr), g = a[i](d.srcAttr), f && (j = a.parentNode, l = j && n.test(j.nodeName || "")), p = b.firesLoad || "src" in a && (h || g || l), o = { target: a }, s(a, d.loadingClass), p && (clearTimeout(m), m = k(R, 2500), u(a, Y, !0)), l && q.call(j.getElementsByTagName("source"), $), h ? a.setAttribute("srcset", h) : g && !l && (L.test(a.nodeName) ? Z(a, g) : a.src = g), f && (h || l) && w(a, { src: g })), a._lazyRace && delete a._lazyRace, t(a, d.lazyClass), z(function () { var b = a.complete && a.naturalWidth > 1; p && !b || (b && s(a, "ls-is-cached"), W(o), a._lazyCache = !0, k(function () { "_lazyCache" in a && delete a._lazyCache }, 9)), "lazy" == a.loading && P-- }, !0) }), aa = function (a) { if (!a._lazyRace) { var b, c = K.test(a.nodeName), e = c && (a[i](d.sizesAttr) || a[i]("sizes")), f = "auto" == e; (!f && l || !c || !a[i]("src") && !a.srcset || a.complete || r(a, d.errorClass) || !r(a, d.lazyClass)) && (b = v(a, "lazyunveilread").detail, f && E.updateElem(a, !0, a.offsetWidth), a._lazyRace = !0, P++ , _(a, b, f, e, c)) } }, ba = C(function () { d.loadMode = 3, V() }), ca = function () { 3 == d.loadMode && (d.loadMode = 2), ba() }, da = function () { if (!l) { if (f.now() - p < 999) return void k(da, 999); l = !0, d.loadMode = 3, V(), j("scroll", ca, !0) } }; return { _: function () { p = f.now(), c.elements = b.getElementsByClassName(d.lazyClass), g = b.getElementsByClassName(d.lazyClass + " " + d.preloadClass), j("scroll", V, !0), j("resize", V, !0), a.MutationObserver ? new MutationObserver(V).observe(e, { childList: !0, subtree: !0, attributes: !0 }) : (e[h]("DOMNodeInserted", V, !0), e[h]("DOMAttrModified", V, !0), setInterval(V, 999)), j("hashchange", V, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (a) { b[h](a, V, !0) }), /d$|^c/.test(b.readyState) ? da() : (j("load", da), b[h]("DOMContentLoaded", V), k(da, 2e4)), c.elements.length ? (U(), z._lsFlush()) : V() }, checkElems: V, unveil: aa, _aLSL: ca } }(), E = function () { var a, c = A(function (a, b, c, d) { var e, f, g; if (a._lazysizesWidth = d, d += "px", a.setAttribute("sizes", d), n.test(b.nodeName || "")) for (e = b.getElementsByTagName("source"), f = 0, g = e.length; f < g; f++)e[f].setAttribute("sizes", d); c.detail.dataAttr || w(a, c.detail) }), e = function (a, b, d) { var e, f = a.parentNode; f && (d = y(a, f, d), e = v(a, "lazybeforesizes", { width: d, dataAttr: !!b }), e.defaultPrevented || (d = e.detail.width) && d !== a._lazysizesWidth && c(a, f, e, d)) }, f = function () { var b, c = a.length; if (c) for (b = 0; b < c; b++)e(a[b]) }, g = C(f); return { _: function () { a = b.getElementsByClassName(d.autosizesClass), j("resize", g) }, checkElems: g, updateElem: e } }(), F = function () { F.i || (F.i = !0, E._(), D._()) }; return c = { cfg: d, autoSizer: E, loader: D, init: F, uP: w, aC: s, rC: t, hC: r, fire: v, gW: y, rAF: z } } });
    /*! ls.rias.min.ks - v4.1.8 */
    !function (a, b) { var c = function () { b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0) }; b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0) }(window, function (a, b, c) { "use strict"; function d(b, c) { var d, e, f, g, h = a.getComputedStyle(b); e = b.parentNode, g = { isPicture: !(!e || !m.test(e.nodeName || "")) }, f = function (a, c) { var d = b.getAttribute("data-" + a); if (!d) { var e = h.getPropertyValue("--ls-" + a); e && (d = e.trim()) } if (d) { if ("true" == d) d = !0; else if ("false" == d) d = !1; else if (l.test(d)) d = parseFloat(d); else if ("function" == typeof j[a]) d = j[a](b, d); else if (q.test(d)) try { d = JSON.parse(d) } catch (a) { } g[a] = d } else a in j && "function" != typeof j[a] ? g[a] = j[a] : c && "function" == typeof j[a] && (g[a] = j[a](b, d)) }; for (d in j) f(d); return c.replace(p, function (a, b) { b in g || f(b, !0) }), g } function e(a, b) { var c = [], d = function (a, c) { return k[typeof b[c]] ? b[c] : a }; return c.srcset = [], b.absUrl && (s.setAttribute("href", a), a = s.href), a = ((b.prefix || "") + a + (b.postfix || "")).replace(p, d), b.widths.forEach(function (d) { var e = b.widthmap[d] || d, f = b.aspectratio || b.ratio, g = !b.aspectratio && j.traditionalRatio, h = { u: a.replace(n, e).replace(o, f ? g ? Math.round(d * f) : Math.round(d / f) : ""), w: d }; c.push(h), c.srcset.push(h.c = h.u + " " + d + "w") }), c } function f(a, c, d) { var f = 0, g = 0, h = d; if (a) { if ("container" === c.ratio) { for (f = h.scrollWidth, g = h.scrollHeight; !(f && g || h === b);)h = h.parentNode, f = h.scrollWidth, g = h.scrollHeight; f && g && (c.ratio = g / f) } a = e(a, c), a.isPicture = c.isPicture, u && "IMG" == d.nodeName.toUpperCase() ? d.removeAttribute(i.srcsetAttr) : d.setAttribute(i.srcsetAttr, a.srcset.join(", ")), Object.defineProperty(d, "_lazyrias", { value: a, writable: !0 }) } } function g(a, b) { var e = d(a, b); return j.modifyOptions.call(a, { target: a, details: e, detail: e }), c.fire(a, "lazyriasmodifyoptions", e), e } function h(a) { return a.getAttribute(a.getAttribute("data-srcattr") || j.srcAttr) || a.getAttribute(i.srcsetAttr) || a.getAttribute(i.srcAttr) || a.getAttribute("data-pfsrcset") || "" } var i, j, k = { string: 1, number: 1 }, l = /^\-*\+*\d+\.*\d*$/, m = /^picture$/i, n = /\s*\{\s*width\s*\}\s*/i, o = /\s*\{\s*height\s*\}\s*/i, p = /\s*\{\s*([a-z0-9]+)\s*\}\s*/gi, q = /^\[.*\]|\{.*\}$/, r = /^(?:auto|\d+(px)?)$/, s = b.createElement("a"), t = b.createElement("img"), u = "srcset" in t && !("sizes" in t), v = !!a.HTMLPictureElement && !u; !function () { var b, d = function () { }, e = { prefix: "", postfix: "", srcAttr: "data-src", absUrl: !1, modifyOptions: d, widthmap: {}, ratio: !1, traditionalRatio: !1, aspectratio: !1 }; i = c && c.cfg || a.lazySizesConfig, i || (i = {}, a.lazySizesConfig = i), i.supportsType || (i.supportsType = function (a) { return !a }), i.rias || (i.rias = {}), "widths" in (j = i.rias) || (j.widths = [], function (a) { for (var b, c = 0; !b || b < 3e3;)c += 5, c > 30 && (c += 1), b = 36 * c, a.push(b) }(j.widths)); for (b in e) b in j || (j[b] = e[b]) }(), addEventListener("lazybeforesizes", function (a) { if (a.detail.instance == c) { var b, d, e, k, l, m, o, p, q, s, t, u, x; if (b = a.target, a.detail.dataAttr && !a.defaultPrevented && !j.disabled && (q = b.getAttribute(i.sizesAttr) || b.getAttribute("sizes")) && r.test(q)) { if (d = h(b), e = g(b, d), t = n.test(e.prefix) || n.test(e.postfix), e.isPicture && (k = b.parentNode)) for (l = k.getElementsByTagName("source"), m = 0, o = l.length; m < o; m++)(t || n.test(p = h(l[m]))) && (f(p, e, l[m]), u = !0); t || n.test(d) ? (f(d, e, b), u = !0) : u && (x = [], x.srcset = [], x.isPicture = !0, Object.defineProperty(b, "_lazyrias", { value: x, writable: !0 })), u && (v ? b.removeAttribute(i.srcAttr) : "auto" != q && (s = { width: parseInt(q, 10) }, w({ target: b, detail: s }))) } } }, !0); var w = function () { var d = function (a, b) { return a.w - b.w }, e = function (a) { var b, c, d = a.length, e = a[d - 1], f = 0; for (f; f < d; f++)if (e = a[f], e.d = e.w / a.w, e.d >= a.d) { !e.cached && (b = a[f - 1]) && b.d > a.d - .13 * Math.pow(a.d, 2.2) && (c = Math.pow(b.d - .6, 1.6), b.cached && (b.d += .15 * c), b.d + (e.d - a.d) * c > a.d && (e = b)); break } return e }, f = function (a, b) { var d; return !a._lazyrias && c.pWS && (d = c.pWS(a.getAttribute(i.srcsetAttr || ""))).length && (Object.defineProperty(a, "_lazyrias", { value: d, writable: !0 }), b && a.parentNode && (d.isPicture = "PICTURE" == a.parentNode.nodeName.toUpperCase())), a._lazyrias }, g = function (b) { var d = a.devicePixelRatio || 1, e = c.getX && c.getX(b); return Math.min(e || d, 2.4, d) }, h = function (b, c) { var h, i, j, k, l, m; if (l = b._lazyrias, l.isPicture && a.matchMedia) for (i = 0, h = b.parentNode.getElementsByTagName("source"), j = h.length; i < j; i++)if (f(h[i]) && !h[i].getAttribute("type") && (!(k = h[i].getAttribute("media")) || (matchMedia(k) || {}).matches)) { l = h[i]._lazyrias; break } return (!l.w || l.w < c) && (l.w = c, l.d = g(b), m = e(l.sort(d))), m }, j = function (d) { if (d.detail.instance == c) { var e, g = d.target; if (!u && (a.respimage || a.picturefill || lazySizesConfig.pf)) return void b.removeEventListener("lazybeforesizes", j); ("_lazyrias" in g || d.detail.dataAttr && f(g, !0)) && (e = h(g, d.detail.width)) && e.u && g._lazyrias.cur != e.u && (g._lazyrias.cur = e.u, e.cached = !0, c.rAF(function () { g.setAttribute(i.srcAttr, e.u), g.setAttribute("src", e.u) })) } }; return v ? j = function () { } : addEventListener("lazybeforesizes", j), j }() });
  }
  
  // Fix the confict suggestion search in Debut theme
  if (typeof theme !== 'undefined' && theme.hasOwnProperty('settings')) theme.settings.predictiveSearchEnabled = false;
  // Override Settings
  var boostPFSFilterConfig = {
      general: {
          limit: boostPFSThemeConfig.custom.products_per_page,
          /* Optional */
          loadProductFirst: false,
          // Placeholder  
          showPlaceholderProductList: true,
          placeholderProductPerRow: 3,
          placeholderProductGridItemClass: 'boost-pfs-filter-product-item boost-pfs-filter-product-item-grid boost-pfs-filter-grid-width-3 boost-pfs-filter-grid-width-mb-2',
          enableOTP: true,
          separateRefineByFromFilter: true,
          filterTreeMobileStyle: 'style3', // 'style2', 'style3',
          equal_height: boostPFSThemeConfig.custom.equal_height,
          cropImagePossitionEqualHeight: boostPFSThemeConfig.custom.equal_height_crop_image_position,
          defaultDisplay: boostPFSThemeConfig.custom.product_item_type
      },
      selector: {
          otpButtons: '.boost-pfs-filter-product-item-image'
      }
  };
  
  (function() {
      var onSale = false,
          soldOut = false,
          priceVaries = false,
          images = [],
          firstVariant = {},
          boostPFSImgDefaultSrc = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
          boostPFSRangeWidths = [180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048];
  
  
      BoostPFS.inject(this);
  
      /************************** CUSTOMIZE DATA BEFORE BUILDING PRODUCT ITEM **************************/
      function prepareShopifyData(data) {
          // Displaying price base on the policy of Shopify, have to multiple by 100
          soldOut = !data.available; // Check a product is out of stock
          onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
          priceVaries = data.price_min != data.price_max; // Check a product has many prices
          // Convert images to array
          images = data.images_info;
          // Get First Variant (selected_or_first_available_variant)
          firstVariant = data['variants'][0];
          if (Utils.getParam('variant') !== null && Utils.getParam('variant') != '') {
              var paramVariant = data.variants.filter(function(e) {
                  return e.id == Utils.getParam('variant');
              });
              if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
          } else {
              for (var i = 0; i < data['variants'].length; i++) {
                  if (data['variants'][i].available) {
                      firstVariant = data['variants'][i];
                      break;
                  }
              }
          }
          return data;
      }
  
      /************************** END CUSTOMIZE DATA BEFORE BUILDING PRODUCT ITEM **************************/
      /************************** BUILD PRODUCT LIST **************************/
      // Build Product Grid Item
      ProductGridItem.prototype.compileTemplate = function(data) {
          if (!data) data = this.data;
          // Customize API data to get the Shopify data
          data = prepareShopifyData(data);          
  
          // Get Template
          var itemHtml = boostPFSTemplate.productGridItemHtml;
          // Add Custom class
          var soldOutClass = soldOut ? boostPFSTemplate.soldOutClass : '';
          var saleClass = onSale ? boostPFSTemplate.saleClass : '';
  
          itemHtml = itemHtml.replace(/{{soldOutClass}}/g, soldOutClass);
          itemHtml = itemHtml.replace(/{{saleClass}}/g, saleClass);
          // Add Grid Width class
          itemHtml = itemHtml.replace(/{{gridWidthClass}}/g, buildGridWidthClass(data));
          // Add Label
          itemHtml = itemHtml.replace(/{{itemLabels}}/g, buildLabels(data));
          // Add TAG Label
          itemHtml = itemHtml.replace(/{{itemTagLabels}}/g, buildTagLabels(data, false));
          // Add Images
          itemHtml = itemHtml.replace(/{{itemImages}}/g, buildImages(data));
          // Add Price
          itemHtml = itemHtml.replace(/{{itemPrice}}/g, buildPrice(data));
  
          // Add Review
          if (typeof Integration === 'undefined' ||
              (typeof Integration != 'undefined' &&
                  typeof Integration.hascompileTemplate == 'function' &&
                  !Integration.hascompileTemplate('reviews'))) {
              itemHtml = itemHtml.replace(/{{itemReviews}}/g, buildReview(data));
          }

          // Product Subtitle (TPS)
          // itemHtml = itemHtml.replace(/{{productSubtitle}}/g, '<div class="product_subtitle"><small>PRODUCT SUBTITLE {{product.metafields.global.subtitle}}</small></div>');
          // itemHtml = itemHtml.replace(/{{productReviews}}/g, '<div id="judgeme_product_reviews" class="jdgm-widget jdgm-review-widget" data-product-title="' + data.title + '" data-id="' + data.id + '">{{ product.metafields.judgeme.widget }}</div>');
            
          // Add Vendor
          itemHtml = itemHtml.replace(/{{itemVendor}}/g, buildVendor(data));
  
          // itemActiveSwapClass
          itemHtml = itemHtml.replace(/{{itemActiveSwapClass}}/g, buildActiveSwapClass(data));
          // Add Color Swatches
          itemHtml = itemHtml.replace(/{{itemColorSwatches}}/g, buildColorSwatches(data));

          itemHtml = itemHtml.replace(/{{itemBadges}}/g, buildBadges(data));
  
          // Add main attribute (Always put at the end of this function)
          itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);
          itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
          itemHtml = itemHtml.replace(/{{itemHandle}}/g, data.handle);
          itemHtml = itemHtml.replace(/{{itemVendorLabel}}/g, data.vendor);
          itemHtml = itemHtml.replace(/{{itemUrl}}/g, Utils.buildProductItemUrl(data));

          //itemHtml = itemHtml + "test";          
          return itemHtml;
      };
      // Build Product List Item
      ProductListItem.prototype.compileTemplate = function(data) {
          if (!data) data = this.data;
          // Customize API data to get the Shopify data
          data = prepareShopifyData(data);
  
          // For List View
          // Get Template
          var itemHtml = boostPFSTemplate.productListItemHtml;
  
          // Add Custom class
          var soldOutClass = soldOut ? boostPFSTemplate.soldOutClass : '';
          var saleClass = onSale ? boostPFSTemplate.saleClass : '';
  
          itemHtml = itemHtml.replace(/{{soldOutClass}}/g, soldOutClass);
          itemHtml = itemHtml.replace(/{{saleClass}}/g, saleClass);
          // Add Label
          itemHtml = itemHtml.replace(/{{itemLabels}}/g, buildLabels(data));
          // Add TAG Label
          itemHtml = itemHtml.replace(/{{itemTagLabels}}/g, buildTagLabels(data, false));
          // Add Images
          itemHtml = itemHtml.replace(/{{itemImages}}/g, buildImages(data));
  
          // Add Review
          if (typeof Integration === 'undefined' ||
              (typeof Integration != 'undefined' &&
                  typeof Integration.hascompileTemplate == 'function' &&
                  !Integration.hascompileTemplate('reviews'))) {
              itemHtml = itemHtml.replace(/{{itemReviews}}/g, buildReview(data));
          }
  
          // Add Vendor
          itemHtml = itemHtml.replace(/{{itemVendor}}/g, buildVendor(data));
  
          // Add Price
          var itemPriceHtml = buildPrice(data, onSale, priceVaries);
          itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);
  
          // Description
          var itemDescription = jQ('<p>' + data.body_html + '</p>').text();
          itemDescription = (itemDescription.split(" ")).length > 35 ? itemDescription.split(" ").splice(0, 35).join(" ") + '...' : itemDescription.split(" ").splice(0, 35).join(" ");
          itemHtml = itemHtml.replace(/{{itemDescription}}/g, itemDescription);
  
          // itemActiveSwapClass
          itemHtml = itemHtml.replace(/{{itemActiveSwapClass}}/g, buildActiveSwapClass(data));
  
          // Add Color Swatches
          itemHtml = itemHtml.replace(/{{itemColorSwatches}}/g, buildColorSwatches(data));
  
          // Add main attribute
          itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
          itemHtml = itemHtml.replace(/{{itemVendorLabel}}/g, data.vendor);
          itemHtml = itemHtml.replace(/{{itemUrl}}/g, Utils.buildProductItemUrl(data));
          itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);
          
          itemHtml = itemHtml + "test";
          //console.log("item html list view")
          return itemHtml;
          // End For List View
      };
  
      /************************** END BUILD PRODUCT LIST **************************/
      /************************** BUILD PRODUCT ITEM ELEMENTS **************************/
      function buildBadges(data) {
        var html = '<div class="badges-block gift-badge">';

        if (boostPFSConfig.general.collection_handle === 'gifts') {
          html += '<div class="discount__badge right"><img src="https://cdn.shopify.com/s/files/1/1148/7426/files/vics-picks-button.png?v=1637664162"></div>';
        } else if (data.tags.some(t => t === 'Vics VDAY Picks')) {
          html += '<div class="discount__badge right"><img src="https://cdn.shopify.com/s/files/1/1148/7426/files/vics-picks-button-VDAY.png?v=1643806739"></div>';
        }

        if (onSale) {
          html += '<div class="discount__badge right"><span>' + data.percent_sale_min + '% off</span></div>'
        }

        var label = Utils.getProductMetafield(data, 'tpsmeta', 'badge_label');

        if (label) {
          var bg = Utils.getProductMetafield(data, 'tpsmeta', 'badge_color');
          html += '<div class="discount__badge right"><span style="background-color: ' + bg + '">' + label + '</span></div>';
        }
        
        html += '</div>';
        return html;
      }
    
      function buildGridWidthClass() {
          var gridWidthClass = '';
          // On PC
          switch (boostPFSThemeConfig.custom.products_per_row) {
              case 2:
                  gridWidthClass = 'boost-pfs-filter-grid-width-2';
                  break;
              case 3:
                  gridWidthClass = 'boost-pfs-filter-grid-width-3';
                  break;
              case 5:
                  gridWidthClass = 'boost-pfs-filter-grid-width-5';
                  break;
              case 6:
                  gridWidthClass = 'boost-pfs-filter-grid-width-6';
                  break;
              default:
                  gridWidthClass = 'boost-pfs-filter-grid-width-4';
                  break;
          }
          // On Mobile
          switch (boostPFSThemeConfig.custom.products_per_row_mobile) {
              case 1:
                  gridWidthClass += ' boost-pfs-filter-grid-width-mb-1';
                  break;
              case 3:
                  gridWidthClass += ' boost-pfs-filter-grid-width-mb-3';
                  break;
              default:
                  gridWidthClass += ' boost-pfs-filter-grid-width-mb-2';
                  break;
          }
          return gridWidthClass;
      }
  
      function buildImages(data) {
          var html = '',
              aspectRatio = '',
              rangeWidths = boostPFSRangeWidths,
              paddingTop = 100;
  
          var dataSrcSet = '',
              dataWidths = '',
              dataSizes = 'auto',
              imgAlt = data.title,
              flipImageSrcSet = '';
  
          var activeSwapImage = !Utils.isMobile() && images.length > 1 &&
              boostPFSThemeConfig.custom.hasOwnProperty('active_image_swap') &&
              boostPFSThemeConfig.custom.active_image_swap == true;
  
          for (var i = 0; i < rangeWidths.length; i++) {
              dataSrcSet += Utils.getFeaturedImage(images, rangeWidths[i] + 'x') + ' ' + rangeWidths[i] + 'w';
              dataWidths += rangeWidths[i];
  
              if (activeSwapImage) {
                  flipImageSrcSet += Utils.optimizeImage(images[1]['src'], rangeWidths[i] + 'x') + ' ' + rangeWidths[i] + 'w';
              }
  
              if (i < rangeWidths.length - 1) {
                  dataSrcSet += ', ';
                  dataWidths += ', ';
  
                  if (activeSwapImage) {
                      flipImageSrcSet += ', ';
                  }
              }
          }
  
          if (images.length > 0) {
              aspectRatio = images[0]['width'] / images[0]['height'];
              paddingTop = 1 / aspectRatio * 100;
          }
  
          html += '<a href="{{itemUrl}}" class="boost-pfs-filter-product-item-image-link" ';
          html += 'style="padding-top:' + paddingTop + '%;">';
          html += '<img class="boost-pfs-filter-product-item-main-image lazyload Image--lazyLoad"' +
              'data-srcset="' + dataSrcSet + '" ' +
              'data-src="' + Utils.getFeaturedImage(images, rangeWidths[2] + 'x') + '" ' +
              'data-widths="[' + dataWidths + ']" ' +
              'data-sizes="' + dataSizes + '" ' +
              'src="' + boostPFSImgDefaultSrc + '" ' +
              'alt="' + imgAlt + '" ';
  
          if (activeSwapImage) {
              html += 'data-img-flip-src="' + Utils.optimizeImage(images[1]['src'], rangeWidths[2] + 'x') + '" ' +
                  'data-img-flip-srcset="' + flipImageSrcSet + '" ';
          }
          html += '/></a>';

          //for swatches
        //   if(data.variants.length > 0){
        //     html += '<div style="display:none;" class="variant-data"><li>'+data.variants[0]?.image+'</li><li>'+data.variants[1]?.image+'</li><li>'+data.variants[2]?.image+'</li></div>';
        //   }

          if(data.variants.length > 0){
              html += '<div style="display:none;" class="variant-data test-class">';

            for(inc = 0 ; inc < data.variants.length ; inc++){
                html += '<p>' + data.variants[inc]?.image + '</p>';
            }

            html += '</div>'
          }
  
          return html;


      }
  
      function buildVendor(data) {
          var html = '';
          if (boostPFSThemeConfig.custom.hasOwnProperty('show_vendor') &&
              boostPFSThemeConfig.custom.show_vendor == true) {
              html = boostPFSTemplate.vendorHtml;
          }
          return html;
      }
  
      function buildPrice(data) {
          var html = '';
          // if (boostPFSThemeConfig.custom.hasOwnProperty('show_price') &&
          // 	boostPFSThemeConfig.custom.show_price) {
          // 	html = '<p class="boost-pfs-filter-product-item-price">';
          // 	if (onSale) {
  
          // 		html += '<span class="boost-pfs-filter-product-item-sale-price">' + Utils.formatMoney(data.price_min) + '</span>';
          // 		html += '<s>' + Utils.formatMoney(data.compare_at_price_min) + '</s> ';
          // 	} else {
          // 		if (priceVaries) {
          // 			html += '<span class="boost-pfs-filter-product-item-price-from-text">' + (boostPFSThemeConfig.label_basic.from) + ' ' + '</span>';
          // 		}
          // 		html += '<span class="boost-pfs-filter-product-item-regular-price">' + Utils.formatMoney(data.price_min) + '</span>';
          // 	}
          // 	html += '</p>';
          // }
  
          html = '<p class="boost-pfs-filter-product-item-price">';
              if (onSale) {
  
                  html += '<span class="boost-pfs-filter-product-item-sale-price">' + Utils.formatMoney(data.price_min) + '</span>';
                  html += '<s>' + Utils.formatMoney(data.compare_at_price_min) + '</s> ';
              } else {
                  if (priceVaries) {
                      html += '<span class="boost-pfs-filter-product-item-price-from-text">'  + ' ' + '</span>';
                  }
                  html += '<span class="boost-pfs-filter-product-item-regular-price">' + Utils.formatMoney(data.price_min) + '</span>';
              }
              html += '</p>';
          return html;
      }
  
      function buildLabels(data) {
          // Build Sold out label
          var soldOutLabel = '';
          if (boostPFSThemeConfig.custom.hasOwnProperty('show_sold_out_label') &&
              boostPFSThemeConfig.custom.show_sold_out_label && soldOut) {
              soldOutLabel = boostPFSTemplate.soldOutLabelHtml.replace(/{{style}}/g, '');
          }
          // Build Sale label
          var saleLabel = '';
          if (boostPFSThemeConfig.custom.show_sale_label && onSale && !soldOut) {
              saleLabel = boostPFSTemplate.saleLabelHtml.replace(/{{style}}/g, '');
          }
          // Build Labels
          return soldOutLabel + saleLabel;
      }
  
      // BUILD LABEL PRODUCT WITH TAGS
      function buildTagLabels(data, showall) {
          if (boostPFSThemeConfig.custom.show_label_by_tag) {
              if (showall) {
                  var tagLabel = '';
                  if (data.tags) {
                      for (var i = 0; i < data.tags.length; i++) {
                          var tag = data.tags[i];
                          if (tag.indexOf("pfs:label") !== -1) {
                              var preTagLabel = boostPFSTemplate.tagLabelHtml.replace(/{{labelTag}}/g, tag.split('pfs:label-')[1]);
                              tagLabel += preTagLabel;
                          }
                      }
                  }
              } else {
                  var tagLabel = '';
                  if (data.tags) {
                      for (var i = data.tags.length - 1; i >= 0; i--) {
                          tag = data.tags[i];
                          if (tag.indexOf("pfs:label") !== -1) {
                              var preTagLabel = boostPFSTemplate.tagLabelHtml.replace(/{{labelTag}}/g, tag.split('pfs:label-')[1]);
                              tagLabel += preTagLabel;
                              break;
                          }
                      }
                  }
              }
              return tagLabel;
          } else {
              return "";
          }
      }





  
      // Build Color Swatches
      function buildColorSwatches(data) {
          var colorSwatchesHtml = '';
          var itemURL = Utils.buildProductItemUrl(data);

      
          //custom code



        //swatches for mobile
        if(data.variants.length >1){

            colorSwatchesHtml += '<div class="swatches-popup-mobile">';
            colorSwatchesHtml += '<p class="swatch-popup-btn" id="swatch-popup-btn">' + data.variants.length ;
            //+ ' shades </p>';
            if(data.tags.indexOf("Bundles") > -1){
                colorSwatchesHtml += ' options </p>';
            }
            else{
                colorSwatchesHtml += ' shades </p>';
            }
            colorSwatchesHtml += '  <div class="variant-swatch-popup" id="variant-swatch-popup" >';

            colorSwatchesHtml += '<div class="variant-swatch-titles">' ;
             //<p>SELECT SHADE</p>  
             if(data.tags.indexOf("Bundles") > -1){
                colorSwatchesHtml += ' <p>SELECT OPTION</p>';
            }
            else{
                colorSwatchesHtml += '<p>SELECT SHADE</p>';
            }
             
            colorSwatchesHtml +=  '<button class="swatch-popup-btn-close" id="swatch-popup-btn-close">';
            colorSwatchesHtml += '<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.91616 4.84372L9.80997 1.07149C10.0634 0.826121 10.0634 0.429394 9.80997 0.184026C9.55669 -0.0613421 9.14716 -0.0613421 8.89388 0.184026L4.99995 3.95626L1.10614 0.184026C0.852742 -0.0613421 0.443335 -0.0613421 0.190052 0.184026C-0.0633506 0.429394 -0.0633506 0.826121 0.190052 1.07149L4.08386 4.84372L0.190052 8.61596C-0.0633506 8.86133 -0.0633506 9.25805 0.190052 9.50342C0.316278 9.62582 0.482247 9.68731 0.648098 9.68731C0.813948 9.68731 0.979799 9.62582 1.10614 9.50342L4.99995 5.73119L8.89388 9.50342C9.02022 9.62582 9.18607 9.68731 9.35192 9.68731C9.51777 9.68731 9.68362 9.62582 9.80997 9.50342C10.0634 9.25805 10.0634 8.86133 9.80997 8.61596L5.91616 4.84372Z" fill="black"/>   </svg>  ';
            colorSwatchesHtml += '</button></div>';

            colorSwatchesHtml += '<input class="default-variant-id-pdp default-variant-box-def" id="default-variant-box-def" name="id" value="' + data.variants[0].id  + '" type="hidden">';


            colorSwatchesHtml +='<div class="variant-swatches"> <div class="variant-swatch-options">';
            for(var i = 0; i < data.variants.length ; i++){

             




                var variant = data.variants[i];
                var swatchName =   encodeURIComponent($.trim(variant.title));              


               // colorSwatchesHtml += '<div class="current-variant">';
               colorSwatchesHtml += '<div class="current-variant" data-current-product-tags="' + data.tags + '">';
                colorSwatchesHtml += '<input type="radio" value="' + variant.id + '" data-swatch-for ="color-cl-' + variant.id + '" class="variant-color-input variant-color-swatch-mob" name="id" id="color-cl-' + variant.id + '" >';

                var fallbackImage = variant.image ? Utils.optimizeImage(variant.image, 'small') : Utils.getFeaturedImage(data.images_info, 'small');

                colorSwatchesHtml += '<label for="color-cl-' + variant.id + '" data-swatch-for ="color-cl-' + variant.id + '" class="variant-color-swatch variant-color-swatch-mob" data-variant-title="' + variant.title + '" >';
                colorSwatchesHtml += '<img swatch-name="'+variant.title+'" class="swatch-images" src="' + window.assetPath  + swatchName + '.jpg" alt="' + variant.title + '"  onerror="this.src=\'' + fallbackImage  +'\' ; "   >'; 
                colorSwatchesHtml += '<p style="padding-left:5px">' + variant.title + '</p>';
                colorSwatchesHtml += '</label>';

                colorSwatchesHtml += '</div>';

            }


            colorSwatchesHtml += '</div> </div>';

            colorSwatchesHtml += '</div> <div class="variant-swatch-popup-overlay"></div>';
            colorSwatchesHtml += '</div>';

        }
        else{
            colorSwatchesHtml += ' <div class="swatch-btn-placeholder"></div>';
        }
  
         //item title
        colorSwatchesHtml += '<a href="' + itemURL + '" class="boost-pfs-filter-product-item-title"><h5>' + data.title + '</h5></a>';
        var subtitle = Utils.getProductMetafield(data, 'global', 'subtitle');
        if (subtitle) colorSwatchesHtml += '<div class="product_subtitle"><small>' + subtitle + '</small></div>';


         //if product has only default variant
         if(data.variants.length < 1){

             colorSwatchesHtml += '<input class="default-variant-box-def" name="id" value="' + data.variants[0].id + '" type="hidden">';
         }

  
         if(data.variants.length >=1 ){

            colorSwatchesHtml += '<div class="price-swatch-div">';



            //code for price
            html = '<p class="boost-pfs-filter-product-item-price">';
            if (onSale) {

                html += '<span class="boost-pfs-filter-product-item-sale-price">' + Utils.formatMoney(data.price_min) + '</span>';
                html += '&nbsp;<s>' + Utils.formatMoney(data.compare_at_price_min) + '</s> ';
            } else {
                if (priceVaries) {
                    html += '<span class="boost-pfs-filter-product-item-price-from-text">'  + ' ' + '</span>';
                }
                html += '<span class="boost-pfs-filter-product-item-regular-price">' + Utils.formatMoney(data.price_min) + '</span>';
            }
            html += '</p>';

            colorSwatchesHtml += html;






            //input where we will add our variant swatch ID

             colorSwatchesHtml += '<input class="default-variant-id-pdp default-variant-box-def" id="default-variant-box-def" name="id" value="' +  data.variants[0].id + '" type="hidden">'   ;                    

              colorSwatchesHtml += '<div class="variant-swatches"><div class="variant-swatch-options">';

              var colorOption = data.options_with_values.findIndex(o => ['colour', 'color', 'shade'].includes(o.name.toLowerCase()));

              if (colorOption > -1) {
              // for(variant in data.variants){


                  var colors = [];
                  var optionName = 'option' + (colorOption + 1)
                  for(var variant of data.variants){
                    var color = variant[optionName];
  
                    if(!colors.includes(color)){

                        // var currentTitle = data.variants[x].title;
                     // console.log("current title is", currentTitle)                      
    
                      var swatchName =   encodeURIComponent($.trim(variant.title));
                      //console.log("data variant :", variant);
    
                      var fallbackImage = variant.image ? Utils.optimizeImage(variant.image, 'small') : Utils.getFeaturedImage(data.images_info, 'small');
               
      
      
                     // console.log("variant ID for current item : ", variant.id)
                      colorSwatchesHtml += '<label for="color-'+ variant.id + '"   class="variant-color-swatch variant-color-swatch-def"  data-variant-title=" '  + variant.title + ' " >';
                      colorSwatchesHtml += '<img swatch-name="'+swatchName+'" class="swatch-images" src="' + window.assetPath  + swatchName + '.jpg"   alt=" ' + variant.title + '" onerror="this.src=\'' +  fallbackImage  + '\'; "  >';
                      colorSwatchesHtml += '</label>';
      
                          colorSwatchesHtml += '<input type="radio" value="' + variant.id + '" class="variant-color-input"  name="id" id="color-' + variant.id + '"  style="display: none;">';
                          colors.push(color);
                          if (colors.length >=3) break;
                        }
                     
                  }

                  var option = data.options_with_values[colorOption];
                  if(option.values.length > 3){
                    var plusIconAmount = option.values.length - colors.length;
                    colorSwatchesHtml += '<a href="' + itemURL + '" style="color: black;text-decoration: underline;">';
                    colorSwatchesHtml += '+' + plusIconAmount + '';
                    colorSwatchesHtml += '</a>'

                  }
              }
                
  				//console.log('Data',data.available );
  
              colorSwatchesHtml += '</div></div></div>';
          }

	
            if (data.available){
            colorSwatchesHtml += '<input min="1" type="hidden" id="quantity" name="quantity" value="1"/>';    
            colorSwatchesHtml += '<input type="submit" value="Add to cart" class="add-to-cart-btn"/>';
            } else {
            colorSwatchesHtml += '<input type="submit" value="Sold Out" class="add-to-cart-btn" disabled/>';
          	}
  
         // console.log("color swatch html ", colorSwatchesHtml);
  
          //custom code end
  
  
  
          // if (boostPFSThemeConfig.custom.hasOwnProperty('display_item_swatch') && boostPFSThemeConfig.custom.display_item_swatch == true) {
          // 	if (typeof data.options_with_values != 'undefined' && data.options_with_values.length > 0) {
          // 		swatchArr = data.options_with_values.filter(function(option) {
          // 			return option.name == optionName;
          // 		});
          // 		if (swatchArr.length > 0) {
          // 			countSwatch = swatchArr[0].values.length;
  
          // 			if (swatchLimit > countSwatch) {
          // 				swatchLimit = countSwatch;
          // 			}
          // 			swatchValues = swatchArr[0].values;
  
          // 			colorSwatchesHtml += '<ul class="boost-pfs-filter-item-swatch">';
  
          // 			for (var sIndex = 0; sIndex < swatchLimit; sIndex++) {
          // 				swatchName = swatchValues[sIndex].title;
          // 				sImageIndex = swatchValues[sIndex].image || '';
          // 				if (sImageIndex != '') {
          // 					dataImgSrc = Utils.optimizeImage(data.images[sImageIndex], dataImgSize + 'x') + ' ' + dataImgSize + 'w';
          // 				}
  
  
          // 				if (boostPFSThemeConfig.custom.hasOwnProperty('swatch_color_display_type')) {
          // 					switch (boostPFSThemeConfig.custom.swatch_color_display_type) {
          // 						case 'swatch_color_display_type_image_color':
          // 							bgImageSrc = boostPFSAppConfig.general.file_url.replace(/\?/, Utils.slugify(filterSwatchTitle).replace(/\-/g, '_') + '-' + Utils.slugify(swatchName) + '.png?v=');
          // 							break;
          // 						case 'swatch_color_display_type_image_product':
          // 							bgImageSrc = Utils.getFeaturedImage(data.images_info, bgSize);
          // 							if (sImageIndex != '') {
          // 								bgImageSrc = Utils.optimizeImage(data.images[sImageIndex], bgSize);
          // 							}
          // 							break;
          // 						default:
          // 							bgImageSrc = '';
          // 					}
          // 				}
  
          // 				colorSwatchesHtml += '<li>';
          // 				colorSwatchesHtml += '<div class="boost-pfs-product-item-tooltip">' + swatchName + '</div>';
          // 				colorSwatchesHtml += '<span tabindex="0" aria-label="' + swatchName + '" ' +
          // 					'style="background-color: ' + swatchName + '; ';
          // 				if (bgImageSrc != '') {
          // 					colorSwatchesHtml += 'background-image: url(' + bgImageSrc + ');" ';
          // 				} else {
          // 					colorSwatchesHtml += '" ';
          // 				}
          // 				if (dataImgSrc != '') {
          // 					colorSwatchesHtml += 'data-img="' + dataImgSrc + '" ';
          // 				}
  
          // 				colorSwatchesHtml += '></span>';
          // 				colorSwatchesHtml += '</li>';
          // 			}
  
          // 			if (countSwatch > swatchLimit) {
          // 				colorSwatchesHtml += '<li class="boost-pfs-filter-item-swatch-more">';
          // 				colorSwatchesHtml += '<a href="{{itemUrl}}" title="' + viewMoreLabel + '">+' + (countSwatch - swatchLimit) + '</a>';
          // 				colorSwatchesHtml += '</li>';
          // 			}
  
          // 			colorSwatchesHtml += '</ul>';
          // 		}
          // 	}
          // }
          return colorSwatchesHtml;
      }
  
      // Build Color Swatches
      function eventColorSwatches(event) {
          jQ('.boost-pfs-filter-item-swatch li span').each(function() {
              var img = jQ(this).parents('.boost-pfs-filter-product-item-inner').find('.boost-pfs-filter-product-item-main-image');
              if (event == 'hover') {
                  jQ(this).hover(function() {
                      var newImage = jQ(this).data('img');
                      img.attr('srcset', newImage);
                  });
              }
              if (event == 'click') {
                  jQ(this).click(function() {
                      var newImage = jQ(this).data('img');
                      img.attr('srcset', newImage);
                  });
              }
              jQ(this).focus(function() {
                  if (jQ('body').hasClass('boost-pfs-ada')) {
                      var newImage = jQ(this).data('img');
                      img.attr('srcset', newImage);
                  }
              });
          });
      }
  
      function buildReview(data) {
          var html = '';
          if (boostPFSThemeConfig.custom.hasOwnProperty('show_product_review') &&
              boostPFSThemeConfig.custom.show_product_review == true) {
              html = '<span class="shopify-product-reviews-badge" data-id="{{itemId}}"></span>';
          }
          return html;
      }
  
      function buildActiveSwapClass(data) {
          if (!Utils.isMobile() && images.length > 1 &&
              boostPFSThemeConfig.custom.hasOwnProperty('active_image_swap') &&
              boostPFSThemeConfig.custom.active_image_swap == true) {
              return 'has-bc-swap-image';
          }
          return '';
      }
  
  
  
      /************************** END BUILD PRODUCT ITEM ELEMENTS **************************/
      /************************** BUILD TOOLBAR **************************/
      // Build Pagination
      ProductPaginationDefault.prototype.compileTemplate = function(totalProduct) {
          if (!totalProduct) totalProduct = this.totalProduct;
          // Get page info
          //console.log("pagination :", totalProduct);
          jQ(".collection-items-count").text(totalProduct + " ITEMS");
          var currentPage = parseInt(Globals.queryParams.page);
          var totalPage = Math.ceil(totalProduct / Globals.queryParams.limit);
          // If it has only one page, clear Pagination
          if (totalPage <= 1) {
              return '';
          }
  
          var paginationHtml = boostPFSTemplate.paginateHtml;
          // Build Previous
          var previousHtml = (currentPage > 1) ? boostPFSTemplate.previousActiveHtml : boostPFSTemplate.previousDisabledHtml;
          previousHtml = previousHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, currentPage - 1));
          paginationHtml = paginationHtml.replace(/{{previous}}/g, previousHtml);
          // Build Next
          var nextHtml = (currentPage < totalPage) ? boostPFSTemplate.nextActiveHtml : boostPFSTemplate.nextDisabledHtml;
          nextHtml = nextHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, currentPage + 1));
          paginationHtml = paginationHtml.replace(/{{next}}/g, nextHtml);
          // Create page items array
          var beforeCurrentPageArr = [];
          for (var iBefore = currentPage - 1; iBefore > currentPage - 3 && iBefore > 0; iBefore--) {
              beforeCurrentPageArr.unshift(iBefore);
          }
          if (currentPage - 4 > 0) {
              beforeCurrentPageArr.unshift('...');
          }
          if (currentPage - 4 >= 0) {
              beforeCurrentPageArr.unshift(1);
          }
          beforeCurrentPageArr.push(currentPage);
          var afterCurrentPageArr = [];
          for (var iAfter = currentPage + 1; iAfter < currentPage + 3 && iAfter <= totalPage; iAfter++) {
              afterCurrentPageArr.push(iAfter);
          }
          if (currentPage + 3 < totalPage) {
              afterCurrentPageArr.push('...');
          }
          if (currentPage + 3 <= totalPage) {
              afterCurrentPageArr.push(totalPage);
          }
          // Build page items
          var pageItemsHtml = '';
          var pageArr = beforeCurrentPageArr.concat(afterCurrentPageArr);
          for (var iPage = 0; iPage < pageArr.length; iPage++) {
              if (pageArr[iPage] == '...') {
                  pageItemsHtml += boostPFSTemplate.pageItemRemainHtml;
              } else {
                  pageItemsHtml += (pageArr[iPage] == currentPage) ? boostPFSTemplate.pageItemSelectedHtml : boostPFSTemplate.pageItemHtml;
              }
              pageItemsHtml = pageItemsHtml.replace(/{{itemTitle}}/g, pageArr[iPage]);
              pageItemsHtml = pageItemsHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, pageArr[iPage]));
          }
          paginationHtml = paginationHtml.replace(/{{pageItems}}/g, pageItemsHtml);
          return paginationHtml;
      };
  
      // Build Sorting
      ProductSorting.prototype.compileTemplate = function() {
          var html = '';
         // if (boostPFSThemeConfig.custom.show_sorting && boostPFSTemplate.hasOwnProperty('sortingHtml')) {
              var sortingArr = Utils.getSortingList();
              if (sortingArr) {
                  var paramSort = Globals.queryParams.sort || '';
                  // Build content
                  var sortingItemsHtml = '';
                  for (var k in sortingArr) {
                   
                      activeClass = '';
                      if (paramSort == k) {
                          activeClass = 'boost-pfs-filter-sort-item-active';
                      }
                      sortingItemsHtml += '<li><a href="#" data-sort="' + k + '" class="' + activeClass + '">' + sortingArr[k] + '</a></li>';
                  }
                  html = boostPFSTemplate.sortingHtml.replace(/{{sortingItems}}/g, sortingItemsHtml);
              }
          //}

        //  console.log("sorting : " , html)
          return html;

          
      };
  
      ProductSorting.prototype.render = function() {
          jQ(Selector.topSorting).html(this.compileTemplate());

         // console.log("compile temp", this.compileTemplate())
  
          if (jQ('.boost-pfs-filter-custom-sorting').hasClass('boost-pfs-filter-sort-active')) {
              jQ('.boost-pfs-filter-custom-sorting').toggleClass('boost-pfs-filter-sort-active');
          }
  
          var labelSort = '';
          var paramSort = Globals.queryParams.sort || '';
          var sortingList = Utils.getSortingList();
          if (paramSort.length > 0 && sortingList && sortingList[paramSort]) {
              labelSort = sortingList[paramSort];
          } else {
              labelSort = Labels.sorting_heading;
          }
  
          jQ('.boost-pfs-filter-custom-sorting button span span').text(labelSort);
      }
  
      // Build Sorting event
      ProductSorting.prototype.bindEvents = function() {
          var _this = this;
          jQ('.boost-pfs-filter-filter-dropdown a').click(function(e) {
              e.preventDefault();
              FilterApi.setParam('sort', jQ(this).data('sort'));
              FilterApi.setParam('page', 1);
              FilterApi.applyFilter('sort');
          });
  
          jQ(".boost-pfs-filter-custom-sorting > button").click(function() {
              if (!jQ('.boost-pfs-filter-filter-dropdown').is(':animated')) {
                  jQ('.boost-pfs-filter-filter-dropdown').toggle().parent().toggleClass('boost-pfs-filter-sort-active');
              }
          });
  
          jQ(Selector.filterTreeMobileButton).click(function() {
              jQ('.boost-pfs-filter-top-sorting-mobile .boost-pfs-filter-filter-dropdown').hide();
          });
      };
      // For Toolbar - Build Display type
      ProductDisplayType.prototype.compileTemplate = function() {
          var itemHtml = '<span>' + boostPFSThemeConfig.label.toolbar_viewas + '</span>';
          if (boostPFSThemeConfig.custom.product_item_type == 'grid') {
              itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'list', 'grid') + '" title="Grid view" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-grid" data-view="grid"><span class="icon-fallback-text"></span></a>';
              itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'grid', 'list') + '" title="List view" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-list" data-view="list"><span class="icon-fallback-text"></span></a>';
  
          } else {
              itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'grid', 'list') + '" title="List view" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-list" data-view="list"><span class="icon-fallback-text"></span></a>';
              itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'list', 'grid') + '" title="Grid view" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-grid" data-view="grid"><span class="icon-fallback-text"></span></a>';
  
          }
  
  
          itemHtml = itemHtml.replace(/{{class.productDisplayType}}/g, Class.productDisplayType);
  
          return itemHtml;
      };
  
      // Build Show Limit
      ProductLimit.prototype.compileTemplate = function() {
          var html = '';
          if (boostPFSThemeConfig.custom.show_limit && boostPFSTemplate.hasOwnProperty('showLimitHtml')) {
  
              var numberList = Settings.getSettingValue('general.showLimitList');
              if (numberList != '') {
                  // Build content
                  var showLimitItemsHtml = '';
                  var arr = numberList.split(',');
                  for (var k in sortingArr) {
                      showLimitItemsHtml += '<option value="' + arr[k].trim() + '">' + arr[k].trim() + '</option>';
                  }
                  html = boostPFSTemplate.showLimitHtml.replace(/{{showLimitItems}}/g, showLimitItemsHtml);
              }
          }
          return html;
      };
      // Build Breadcrumb
      Breadcrumb.prototype.compileTemplate = function(colData) {
          if (!colData) colData = this.collectionData;
          var breadcrumbItemsHtml = '';
          if (boostPFSTemplate.hasOwnProperty('breadcrumbHtml')) {
              if (typeof colData !== 'undefined' && colData.hasOwnProperty('collection')) {
                  var colInfo = colData.collection;
                  if (typeof this.collectionTags !== 'undefined' && this.collectionTags !== null) {
                      breadcrumbItemsHtml += boostPFSTemplate.breadcrumbItemLink.replace(/{{itemLink}}/g, '/collections/' + colInfo.handle).replace(/{{itemTitle}}/g, colInfo.title);
                      breadcrumbItemsHtml += " {{breadcrumbDivider}} ";
                      breadcrumbItemsHtml += boostPFSTemplate.breadcrumbItemSelected.replace(/{{itemTitle}}/g, this.collectionTags[0]);
                  } else {
                      breadcrumbItemsHtml += boostPFSTemplate.breadcrumbItemSelected.replace(/{{itemTitle}}/g, colInfo.title);
                  }
              } else {
                  breadcrumbItemsHtml += boostPFSTemplate.breadcrumbItemSelected.replace(/{{itemTitle}}/g, Settings.getSettingValue('label.defaultCollectionHeader'));
              }
          }
          return breadcrumbItemsHtml
      };
  
      /************************** END BUILD TOOLBAR **************************/
  
      // Add additional feature for product list, used commonly in customizing product list
      ProductList.prototype.afterRender = function(data) {
          if (!data) data = this.data;
  
          // Intergrate Review Shopify
          if (window.SPR &&
              typeof window.SPR.initDomEls == 'function' &&
              typeof window.SPR.loadBadges == 'function' &&
              boostPFSThemeConfig.custom.show_product_review) {
              window.SPR.initDomEls();
              window.SPR.loadBadges();
          }


    //   jQ(".boost-pfs-filter-products").append(`

    //   <div class="upsell-section__bottom-right">
    //     <div class="upsell_img_radford">
    //       <a href="/collections/makeup-1">
           
    //         <img src="${window.assetPath}radford-collection-page-upsell.jpg" alt>
    //       </a>
    //     </div>
    //     <h3>Daily Makeup</h3>
    //     <p>Victoria Radford is a celebrity makeup artist and skin expert driven by a fearless approach.</p>
    //     <a href="/collections/makeup-1" class="upsell__link">Shop Makeup</a>
    //   </div>
    //   `);

        //  console.log("after render")
      };
  
      // Build additional elements
      Filter.prototype.afterRender = function(data) {
          if (!data) data = this.data;
        
          var totalProduct = data.total_product + '<span> ITEMS</span>';
          if (data.total_product == 1) {
              totalProduct = data.total_product + '<span> ITEM</span>';
          }
          jQ('.collection-items-count').html(totalProduct);
  
          jQ('body').find('.boost-pfs-filter-skeleton-button').remove();
  
          // Prevent double tap on iOS
          var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
          if (isiOS) {
              Utils.isMobile() && jQ(".boost-pfs-filter-product-item").find("a").on("touchstart", function() {
                  isScrolling = !1
              }).on("touchmove", function() {
                  isScrolling = !0
              }).on("touchend", function() {
                  isScrolling || (window.location = jQ(this).attr("href"))
              });
          }
  
          // Build Image Swap. Put this function here to impprove the pagespeed.
          swapImage(data);
  
          // Build Equal Height
          if (Globals.queryParams.display !== 'list') {
              equalHeight(data);
          };
  
          jQ(window).resize(function() {
              if (Globals.queryParams.display !== 'list') {
                  equalHeight(data);
              }
          });
  
          // Build Event Color Swatch
          if (boostPFSThemeConfig.custom.swatch_color_event_change_image != 'none') {
              eventColorSwatches(boostPFSThemeConfig.custom.swatch_color_event_change_image);
          }
  
          if (typeof boostRemoveImageLoadingAnimation == 'function') {
              boostRemoveImageLoadingAnimation(jQ(Selector.products).find('[data-boost-image-loading-animation]'));
          }
      };
  
      ProductListPlaceholder.prototype.render = function() {
          // Set limit number for product skeleton
          var placeholderLimit = this.settings.productsPerRow || this.settings.placeholderProductPerRow;
          // Build placeholder items
          var placeholderItem = this.compileTemplate();
          this.$element = [];
          for (var i = 0; i < placeholderLimit; i++) {
              this.$element.push(jQ(placeholderItem));
          }
          // Show placeholder before send filter request OR hide it after get filter data
          if (!this.isFetchedProductData) {
              this.setShow();
          } else {
              this.setHide();
          }
      }
  
      ProductListPlaceholder.prototype.compileTemplateExtra = function() {
          var display = Globals.queryParams.display
          switch (display) {
              case 'list':
                  //Todo: Build placeholder for List mode
                  var template = boostPFSTemplate.productListPlaceholderHtml;
                  var imgRatioSetting = parseFloat(this.settings.placeholderImageRatio);
                  var imgRatio = imgRatioSetting > 0 ? imgRatioSetting : 1.4; // It mean w1:h1.4
                  /**
                   * Set product class for product skeleton (to set column, style, etc.)
                   * - If had defined product_grid_class in boostPFSThemeConfig => use this config ELSE use our setting
                   */
                  break;
          }
          return template
              .replace(/{{class.filterProductSkeleton}}/g, Class.filterProductSkeleton)
              .replace(/{{class.filterSkeleton}}/g, Class.filterSkeleton)
              .replace(/{{class.filterSkeletonText}}/g, Class.filterSkeletonText)
              .replace(/{{paddingTop}}/g, imgRatio * 100)
      }
  
      /* Prevent conflict with theme vendor js */
      Array.prototype.insert = function(a, b) {}
  
      /* Math qual Height */
      function equalHeight(data) {
          var equal_i = -1;
          var equal_els = [];
          var equal_element = null;
  
          // Equal Height Title
          jQ('.boost-pfs-filter-product-item').each(function(i, element) {
  
              var offsetTop = jQ(element).offset().top;
              if (!equal_element || equal_element.offset().top !== offsetTop) {
                  equal_element = jQ(element);
                  equal_i++;
              }
  
              if (!equal_els[equal_i]) {
                  equal_els[equal_i] = [];
              }
              equal_els[equal_i].push(element);
          });
  
          for (var i = 0; i < equal_els.length; i++) {
              var max = 0;
              var maxRatio = 0;
              var iLength = equal_els[i].length;
  
              for (var j = 0; j < equal_els[i].length; j++) {
                  var item = equal_els[i][j];
                  var height = jQ(item).find('.boost-pfs-filter-product-bottom-inner').height();
                  max = Math.max(max, height);
  
              }
  
              jQ(equal_els[i]).find('.boost-pfs-filter-product-bottom-inner').css({ 'min-height': max });
  
          }
  
          var equal_height = boostPFSFilterConfig.general.equal_height;
  
          if (equal_height != 'false') {
              var cropImagePosition = boostPFSFilterConfig.general.cropImagePossitionEqualHeight;
  
              var widthImage = jQ('.boost-pfs-filter-product-item').width();
              var indexData = 0;
  
              // For Ratio
              if (equal_height != 'false' && equal_height != 'auto') {
                  var heightImage = 0;
                  var widthImage = jQ('.boost-pfs-filter-product-item').width();
                  if (equal_height != 'false' && equal_height != 'auto') {
                      var ratioWidthHeight = boostPFSThemeConfig.custom.equal_height;
                  } else {
                      var ratioWidthHeight = '';
                  }
  
                  var ratioWidthHeightOther = boostPFSThemeConfig.custom.ratio_width_height_other;
                  if (ratioWidthHeightOther == '' && ratioWidthHeight == '') {
                      return null;
                  } else {
                      if (ratioWidthHeightOther == '') {
                          ratioWidthHeight = ratioWidthHeight.split(':');
                          ratioWidthHeight = parseInt(ratioWidthHeight[1]) / parseInt(ratioWidthHeight[0]);
                          heightImage = widthImage * ratioWidthHeight;
                      } else if (ratioWidthHeightOther != '') {
                          ratioWidthHeightOther = ratioWidthHeightOther.split(':');
                          ratioWidthHeightOther = parseInt(ratioWidthHeightOther[1]) / parseInt(ratioWidthHeightOther[0]);
                          heightImage = widthImage * ratioWidthHeightOther;
                      }
                  }
                  jQ('.boost-pfs-filter-product-item-image-link').css({ 'padding-top': heightImage + 'px' }).addClass('boost-pfs-filter-crop-image-position-' + cropImagePosition);;
  
              }
          }
      }
  
      // Swap Image
      function swapImage(data) {
          if (!Utils.isMobile()) {
              if (boostPFSThemeConfig.custom.hasOwnProperty('active_image_swap') &&
                  boostPFSThemeConfig.custom.active_image_swap == true) {
                  var dataSrcSetFlipImg = '',
                      dataSrcFlipImg = '',
                      flipImageAlt = '',
                      dataSizes = 'auto',
                      dataWidths = '',
                      html = '';
  
                  jQ(".boost-pfs-filter-product-item").each(function() {
                      var productItemSelector = jQ(this);
                      var imgSelector = productItemSelector.find('.boost-pfs-filter-product-item-main-image');
  
                      if (typeof imgSelector.data('img-flip-src') != 'undefined' &&
                          imgSelector.data('img-flip-src') != '') {
                          dataSrcFlipImg = imgSelector.data('img-flip-src');
                          dataSrcSetFlipImg = imgSelector.data('img-flip-srcset');
                          flipImageAlt = imgSelector.attr('alt');
                          dataWidths = imgSelector.data('widths');
                          html = '<img class="boost-pfs-filter-product-item-flip-image lazyload Image--lazyLoad"' +
                              'data-srcset="' + dataSrcSetFlipImg + '" ' +
                              'data-src="' + dataSrcFlipImg + '" ' +
                              'data-widths="[' + dataWidths + ']" ' +
                              'data-sizes="' + dataSizes + '" ' +
                              'src="' + boostPFSImgDefaultSrc + '" ' +
                              'alt="' + flipImageAlt + '" />';
  
                          productItemSelector.find('.boost-pfs-filter-product-item-image-link').prepend(html);
                      }
  
                  });
              }
          }
      }
  
      // Build Placeholder for the first load
      function boostRemoveImageLoadingAnimation($selector) {
          if ($selector.length) {
              $selector.removeAttr('data-boost-image-loading-animation');
          }
      }
  })();