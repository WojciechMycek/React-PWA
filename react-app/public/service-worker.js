const CACHE_NAME = "silverjewelry-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/favicon.ico",
  "/images/placeholder.jpg",
  "/images/srebro_pierscionek.jpg",
  "/images/srebro_naszyjnik.jpeg",
  "/images/srebro_kolczyki.jpeg",
  "/images/srebro_bransoletka.jpg",
  "/images/srebro_zestaw.jpg",
  "/images/srebro_nowosc.jpg",
  "/images/srebro_oksydowane.jpg",
  "/images/drewno_naszyjnik.jpg",
  "/images/drewno_bransoletka.jpg",
  "/images/drewno_kolczyki.jpg",
  "/images/drewno_etniczny.jpg",
  "/images/drewno_nowosc.jpg",
  "/images/drewno_minimal.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache opened");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Usuwanie starego cache:", cache);
            return caches.delete(cache);
          }
        })
      )
    )
  );
});
