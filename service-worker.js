importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);
workbox.precaching.precacheAndRoute([
  'index.html',
  'offline.html',
  'buscador.html',
  'ropa.json',
  'icon/offline.png',
  'css/bootstrap.min.css',
  'js/bootstrap.min.js',
  'jquery-3.6.1.min.js',
  'img/LOGO CV SHOP.png',
]);

workbox.routing.registerRoute(
  ({request}) => request.destination === 'image',//'image' es el dato predeterminado con el que vamos a trabajar
  new workbox.strategies.CacheFirst()//indica la estartegia a utilizar
);
/*
//Solo lo consulte en cache
workbox.routing.registerRoute(
  ({request}) => request.destination === 'document',
  new workbox.strategies.CacheFirst()
);
//lo consulte primero en la red
workbox.routing.registerRoute(
  ({request}) => request.destination === 'document',
  new workbox.strategies.NetworkOnly()
);
*/
workbox.routing.registerRoute(
  ({request}) => request.destination === 'document',
  new workbox.strategies.NetworkFirst()
);
//Si hay respuesta que genere error
workbox.routing.setCatchHandler(async context=>{
  console.log("entro");
  console.log(context);
  console.log(context.request);
  if (context.request.destination === 'image'){
    return workbox.precaching.matchPrecache('icon/offline.png');
  }
  else if (context.request.destination === 'document'){
    return workbox.precaching.matchPrecache('/offline.html');
  }
  //if(event.request.url)
  return Response.error();
});
/*var cacheName = 'appV2';
var contenidoCache = [
    'index.html',
    'buscador.html',
    'archivo.js',
    'app.js', 
    'service-worker.js', 
    'manifest.webmanifest',
    'nosotros.html',
    'ropa.json',
    'script.js',
    'jquery-3.6.1.min.js',
    'css/bootstrap.min.css',
    'js/bootstrap.min.js'
  ];
self.addEventListener('install', (e) => {
  console.log("instalado");
  e.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    await cache.addAll(contenidoCache);
  })())
});

self.addEventListener("fetch", (e) => {
  e.respondWith((async () => {
      const r = await caches.match(e.request);
      if (r) return r;
      const response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      cache.put(e.request, response.clone());
      return response;
    })());
});

self.addEventListener("fetch", (e) => {
  e.respondWith((async () => {
    const r = await cachself.addEventListener("install", (e) => {
      console.log("instaldo");
      e.waitUntil((async () => {
        const cache = await caches.open(cacheName);
        await cache.addAll(contenidoCache);
      }))
    })
  })())
});*/
