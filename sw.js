// 拼音大冒险 - Service Worker（离线缓存）
const CACHE_NAME = 'pinyin-adventure-v2';

// 需要缓存的所有文件
const TO_CACHE = [
  './pinyin-adventure.html',
  './manifest.json',
  // 63 个拼音音频文件
  './audio/a.wav','./audio/ai.wav','./audio/an.wav','./audio/ang.wav',
  './audio/ao.wav','./audio/b.wav','./audio/c.wav','./audio/ch.wav',
  './audio/chi.wav','./audio/ci.wav','./audio/d.wav','./audio/e.wav',
  './audio/ei.wav','./audio/en.wav','./audio/eng.wav','./audio/er.wav',
  './audio/f.wav','./audio/g.wav','./audio/h.wav','./audio/i.wav',
  './audio/ie.wav','./audio/in.wav','./audio/ing.wav','./audio/iu.wav',
  './audio/j.wav','./audio/k.wav','./audio/l.wav','./audio/m.wav',
  './audio/n.wav','./audio/o.wav','./audio/ong.wav','./audio/ou.wav',
  './audio/p.wav','./audio/q.wav','./audio/r.wav','./audio/ri.wav',
  './audio/s.wav','./audio/sh.wav','./audio/shi.wav','./audio/si.wav',
  './audio/t.wav','./audio/u.wav','./audio/ui.wav','./audio/un.wav',
  './audio/w.wav','./audio/wu.wav','./audio/x.wav',
  './audio/y.wav','./audio/ye.wav','./audio/yi.wav','./audio/yin.wav',
  './audio/ying.wav','./audio/yu.wav','./audio/yuan.wav','./audio/yue.wav',
  './audio/yun.wav','./audio/z.wav','./audio/zh.wav','./audio/zhi.wav',
  './audio/zi.wav','./audio/ü.wav','./audio/üe.wav','./audio/ün.wav',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
});
