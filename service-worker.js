"use strict";var precacheConfig=[["/payper/index.html","8713712051278d32211453c94dec88b6"],["/payper/static/css/main.51377b07.css","ae142997cf851e4368469751169098cc"],["/payper/static/js/main.2d2e98f9.js","aab062b987b6e03ef18aa6a82ddf1925"],["/payper/static/media/kokokotlin.33a7dba3.jpg","33a7dba32d9d0f76540836f87c84c453"],["/payper/static/media/lentach.4e6c7205.jpg","4e6c7205b0921c71d5d26711a504285c"],["/payper/static/media/logo.8e90fef7.png","8e90fef79f95c33522ce9c3d6cdf71b6"],["/payper/static/media/meme.6d51f34b.jpg","6d51f34be6d1c5697a90fc73f0ce5d8c"],["/payper/static/media/orange.a8c666ea.jpg","a8c666ea53936848ceb4435213212f49"],["/payper/static/media/paper.f47f461f.jpg","f47f461f35b89fd00c3c870abc8b97fb"],["/payper/static/media/paperHeader.949c16f2.jpg","949c16f2e5b25977bcee38add5c43c32"],["/payper/static/media/popcorn.d8c0eac9.png","d8c0eac97ad6247fee328038d4b44dfa"],["/payper/static/media/sharePOP.3b681416.png","3b681416aedb738ef1c75f2464a7879b"],["/payper/static/media/wine.b9e231fd.png","b9e231fdf0201dc18598bf14c629b821"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/payper/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});