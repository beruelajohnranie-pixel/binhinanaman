const V="binhiscan-v6";/* palitan ang V (v2, v3...) tuwing may bagong model o code */
const CORE=["./","index.html","style.css","seeds.js","app.js","manifest.webmanifest","icon-192.png","icon-512.png","lib/tf.min.js","model/model.json","model/metadata.json","model/weights.bin"];
self.addEventListener("install",e=>e.waitUntil((async()=>{const c=await caches.open(V);await Promise.all(CORE.map(u=>c.add(u).catch(()=>{})));
try{const r=await fetch("model/model.json");if(r.ok){await c.put("model/model.json",r.clone());const j=await r.json(),f=["model/labels.json","model/metadata.json"];
(j.weightsManifest||[]).forEach(g=>g.paths.forEach(p=>f.push("model/"+p)));await Promise.all(f.map(u=>c.add(u).catch(()=>{})))}}catch(x){}
self.skipWaiting()})()));
self.addEventListener("activate",e=>e.waitUntil((async()=>{for(const k of await caches.keys())if(k!=V)await caches.delete(k);await clients.claim()})()));
self.addEventListener("fetch",e=>{if(e.request.method!="GET")return;e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(n=>{if(n.ok){const k=n.clone();caches.open(V).then(x=>x.put(e.request,k))}return n}).catch(()=>caches.match("index.html"))))});
