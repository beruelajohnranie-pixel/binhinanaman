const D=[
{id:"kamatis",tl:"Kamatis",en:"Tomato",e:"🍅",dp:"0.5–1 cm (seedbed)",wa:"Water regularly at the base; avoid wetting leaves and keep drainage good.",su:"Full sun (6+ hours).",g:"5–10 days",h:[90,120],m:[10,11,12,1,2],ph:[6,6.8],t:[18,30],s:[0,2,1],sun:6},
{id:"talong",tl:"Talong",en:"Eggplant",e:"🍆",dp:"0.5–1 cm (seedbed)",wa:"Keep soil evenly moist; mulch to hold moisture.",su:"Full sun (6+ hours).",g:"7–14 days",h:[90,120],m:[10,11,12,1,2,3],ph:[5.8,6.8],t:[24,32],s:[1,2,1],sun:6},
{id:"kangkong",tl:"Kangkong",en:"Water Spinach",e:"🌿",dp:"1–2 cm",wa:"Needs plenty of water; keep soil wet or shallowly flooded.",su:"Full sun to partial shade.",g:"3–7 days",h:[25,35],m:[1,2,3,4,5,6,7,8,9,10,11,12],ph:[5.5,7],t:[25,35],s:[2,2,0],sun:4,wet:1},
{id:"sitaw",tl:"Sitaw",en:"Yardlong Bean",e:"🌱",dp:"2–3 cm",wa:"Moderate watering; avoid waterlogging. Provide a trellis.",su:"Full sun (6+ hours).",g:"4–8 days",h:[55,70],m:[10,11,12,1,2,3],ph:[6,7],t:[22,34],s:[1,2,2],sun:6},
{id:"labanos",tl:"Labanos",en:"Radish",e:"🌰",dp:"1–1.5 cm",wa:"Keep soil evenly moist for tender roots.",su:"Full sun to partial shade.",g:"3–7 days",h:[25,40],m:[10,11,12,1,2],ph:[6,7],t:[15,28],s:[0,2,2],sun:4},
{id:"okra",tl:"Okra",en:"Okra",e:"🌶",dp:"2–3 cm",wa:"Water when the top soil is dry; tolerates short dry spells.",su:"Full sun (6+ hours).",g:"5–10 days",h:[50,65],m:[3,4,5,6,7,8,9,10],ph:[6,7],t:[24,36],s:[1,2,2],sun:6},
{id:"pechay",tl:"Pechay",en:"Pak Choi",e:"🥬",dp:"0.5–1 cm",wa:"Keep soil consistently moist, light daily watering.",su:"Full sun to partial shade.",g:"3–5 days",h:[25,35],m:[10,11,12,1,2,3],ph:[6,7],t:[18,30],s:[1,2,1],sun:4}];

/* ============================================================
   LISTAHAN NG BINHI (seeds.js): dito idagdag ang bagong binhi.
   Ang datos ay tantiya lamang; i-verify sa DA/BPI o agronomist.
   S(id, Tagalog, English, emoji, lalim, pagtubo, [anihan min,max], [buwan ng pagtatanim],
     [pH], [temp C], [Clay,Loam,Sandy: 0-2], oras ng araw, tubig H/M/L, basa(1 kung mahilig sa basa))
   Ang id ay dapat tugma sa pangalan ng klase sa AI model (maliit na titik, walang space).
   ============================================================ */
const WA={H:"Needs plenty of water; keep soil consistently moist or flooded.",M:"Moderate watering; keep soil evenly moist and avoid waterlogging.",L:"Water when the top soil is dry; tolerates short dry spells."};
const WAT={H:"Kailangan ng maraming tubig; panatilihing laging basa o binabaha ang lupa.",M:"Katamtamang pagdidilig; panatilihing pantay ang basa ng lupa at iwasan ang pagbabaha.",L:"Diligan kapag tuyo na ang ibabaw ng lupa; kaya ang maikling tagtuyot."};
const SU={6:"Full sun (6+ hours).",4:"Full sun to partial shade."},SUT={6:"Buong sikat ng araw (6+ oras).",4:"Buong sikat ng araw hanggang bahagyang lilim."},ALL=[1,2,3,4,5,6,7,8,9,10,11,12];
const S=(id,tl,en,e,dp,g,h,m,ph,t,s,sun,w,wet)=>D.push({id,tl,en,e,dp,wa:WA[w],wat:WAT[w],su:SU[sun],sut:SUT[sun],g,h,m,ph,t,s,sun,wet});
S("ampalaya","Ampalaya","Bitter Melon","🥒","1–2 cm","4–8 days",[60,80],[9,10,11,12,1,2],[6,6.7],[24,34],[1,2,1],6,"M");
S("upo","Upo","Bottle Gourd","🥒","2–3 cm","5–10 days",[60,90],[5,6,10,11,12],[6,7],[24,34],[1,2,1],6,"M");
S("patola","Patola","Sponge Gourd","🥒","2–3 cm","5–10 days",[60,80],[5,6,10,11,12,1],[6,7],[24,35],[1,2,1],6,"M");
S("kalabasa","Kalabasa","Squash","🎃","2–3 cm","5–10 days",[90,110],[10,11,12,1,5,6],[6,7],[22,32],[1,2,2],6,"M");
S("Pipino","Cucumber","🥒","1–2 cm","3–7 days",[45,60],[10,11,12,1,2,3],[6,7],[22,32],[1,2,2],6,"M");
S("sili","Sili","Chili Pepper","🌶️","0.5–1 cm (seedbed)","7–14 days",[90,120],[10,11,12,1,2,5,6],[6,7],[22,32],[1,2,1],6,"M");
S("sibuyas","Sibuyas","Onion","🧅","0.5–1 cm (seedbed)","7–12 days",[100,140],[11,12,1],[6,7],[15,28],[0,2,1],6,"M");
S("repolyo","Repolyo","Cabbage","🥬","0.5–1 cm (seedbed)","4–8 days",[70,100],[10,11,12,1,2],[6,7],[15,25],[1,2,0],6,"M");
S("karot","Karot","Carrot","🥕","0.5–1 cm","7–14 days",[70,90],[10,11,12,1,2],[6,6.8],[15,25],[0,2,2],6,"M");
S("mustasa","Mustasa","Mustard Greens","🥬","0.5–1 cm","3–5 days",[30,45],[10,11,12,1,2,3],[6,7],[15,28],[1,2,1],4,"M");
S("munggo","Munggo","Mung Bean","🌱","2–3 cm","3–7 days",[60,75],[11,12,1,2,3],[6,7],[25,35],[0,2,2],6,"L");
S("mani","Mani","Peanut","🥜","3–5 cm","5–10 days",[100,130],[10,11,12,1,5,6],[5.8,6.5],[24,33],[0,2,2],6,"M");
S("letsugas","Letsugas","Lettuce","🥬","0.3–0.5 cm","3–7 days",[40,60],[10,11,12,1,2],[6,7],[15,25],[1,2,1],4,"M");
S("malunggay","Malunggay","Moringa","🌿","1–2 cm","7–14 days",[180,240],ALL,[6,7.5],[25,36],[1,2,2],6,"L");
S("alugbati","Alugbati","Malabar Spinach","🌿","1–2 cm","7–14 days",[40,60],ALL,[6,7],[24,35],[1,2,1],4,"M");

S("bataw","Bataw","Hyacinth Bean","🌱","2–3 cm","5–10 days",[90,150],[9,10,11,12],[6,7],[22,32],[1,2,2],6,"L");
S("patani","Patani","Lima Bean","🌱","2–3 cm","5–10 days",[80,120],[10,11,12,1],[6,7],[20,30],[1,2,2],6,"M");
S("sigarilyas","Sigarilyas","Winged Bean","🌱","2–3 cm","7–14 days",[60,90],[5,6,7,10,11],[5.5,6.5],[24,32],[1,2,1],6,"M");
S("singkamas","Singkamas","Jicama","🌰","2–3 cm","7–14 days",[120,150],[5,6,7,8],[6,7],[24,32],[0,2,2],6,"M");
S("saluyot","Saluyot","Jute Mallow","🌿","0.5–1 cm","3–7 days",[40,60],[4,5,6,7,8,9],[6,7.5],[25,35],[1,2,2],6,"M");
S("mais","Matamis na Mais","Sweet Corn","🌽","2.5–4 cm","5–10 days",[65,85],[4,5,6,10,11,12],[5.8,7],[21,32],[1,2,1],6,"M");
S("pakwan","Pakwan","Watermelon","🍉","2–3 cm","4–8 days",[75,95],[10,11,12,1,2],[6,7],[24,35],[0,2,2],6,"M");
S("papaya","Papaya","Papaya","🍈","1–2 cm","14–28 days",[270,360],[5,6,10,11],[6,6.5],[22,32],[1,2,2],6,"M");
S("kundol","Kundol","Wax Gourd","🥒","2–3 cm","5–10 days",[100, 130],[10, 11, 12, 1, 2],[6, 7],[24, 32],[1, 2, 1],6,"M");
S("linga","Linga","Sesame","🌱","1–2 cm","3–7 days",[85, 100],[5, 6, 7],[5.5, 7.5],[25, 35],[0, 2, 2],6,"L");
S("sayote","Sayote","Chayote","🥒","Whole fruit, half-buried","14–30 days",[90, 150],[4, 5, 6],[6, 6.8],[18, 26],[0, 2, 1],4,"M");
S("baguio_beans","Baguio Beans","Snap Beans","🌱","2–3 cm","5–10 days",[50, 65],[10, 11, 12, 1, 2],[6, 7],[18, 28],[0, 2, 1],6,"M");
S("cauliflower","Cauliflower","Cauliflower","🥦","0.5–1 cm (seedbed)","4–7 days",[60, 90],[10, 11, 12, 1],[6, 7],[15, 24],[0, 2, 1],6,"M");
S("broccoli","Broccoli","Broccoli","🥦","0.5–1 cm (seedbed)","4–7 days",[60, 90],[10, 11, 12, 1],[6, 7],[15, 24],[0, 2, 1],6,"M");
S("katuray","Katuray","Sesbania (Agati)","🌿","1–2 cm","5–10 days",[180, 365],[5, 6, 7, 8],[5.5, 7.5],[25, 35],[1, 2, 2],6,"L");
S("himbabao","Himbabao","Himbabao","🌿","1 cm","14–30 days",[365, 730],[6, 7, 8],[6, 7],[24, 34],[1, 2, 1],4,"M");
S("kadyos","Kadyos","Pigeon Pea","🌱","2–3 cm","5–10 days",[120, 180],[5, 6, 7],[5, 7],[22, 32],[1, 2, 2],6,"L");
S("chicharo","Chicharo","Garden Pea","🌱","2–3 cm","5–10 days",[60, 80],[10, 11, 12, 1],[6, 7.5],[12, 22],[0, 2, 1],6,"M");
S("celery","Celery","Celery","🥬","Surface (0.3 cm)","10–21 days",[90, 120],[10, 11, 12, 1],[6, 7],[15, 24],[0, 2, 0],4,"H");
S("leeks","Leeks","Leeks","🧅","0.5–1 cm (seedbed)","7–14 days",[100, 150],[10, 11, 12, 1],[6, 7],[13, 24],[0, 2, 1],6,"M");
S("spring_onion","Spring Onion","Spring Onion","🧅","0.5–1 cm","7–12 days",[50, 70],[10, 11, 12, 1, 2],[6, 7],[15, 28],[0, 2, 1],6,"M");
S("mangga","Mangga","Mango","🥭","1–3 cm","10–20 days",[1460, 2190],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("guyabano","Guyabano","Soursop","🍈","1–3 cm","20–40 days",[1095, 1460],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("atis","Atis","Sugar Apple","🍈","1–3 cm","30–60 days",[1095, 1460],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("chico","Chico","Sapodilla","🟤","1–3 cm","20–40 days",[1460, 2190],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("avocado","Avocado","Avocado","🥑","1–3 cm","20–40 days",[1460, 2190],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("rambutan","Rambutan","Rambutan","🔴","1–3 cm","14–21 days",[1460, 2190],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("lanzones","Lanzones","Lanzones","🟡","1–3 cm","14–30 days",[2555, 3650],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("santol","Santol","Santol","🟠","1–3 cm","14–28 days",[1460, 2190],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("sineguelas","Sineguelas","Spanish Plum","🟠","1–3 cm","14–28 days",[1095, 1825],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("duhat","Duhat","Java Plum","🍇","1–3 cm","14–28 days",[1460, 2190],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("bayabas","Bayabas","Guava","🍏","1–3 cm","14–28 days",[730, 1095],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("calamansi","Calamansi","Calamansi","🍋","1–3 cm","14–28 days",[730, 1095],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("suha","Suha","Pomelo","🍊","1–3 cm","14–28 days",[1460, 2190],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("dalanghita","Dalanghita","Mandarin","🍊","1–3 cm","14–28 days",[1095, 1460],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("aratilis","Aratilis","Jamaica Cherry","🍒","1–3 cm","7–14 days",[365, 730],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("kaymito","Kaymito","Star Apple","🟣","1–3 cm","20–40 days",[1460, 2190],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("sampalok","Sampalok","Tamarind","🌰","1–3 cm","7–14 days",[1825, 2920],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("nangka","Nangka","Jackfruit","🍈","1–3 cm","14–30 days",[1095, 1825],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("marang","Marang","Marang","🍈","1–3 cm","14–30 days",[1460, 2190],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("durian","Durian","Durian","🍈","1–3 cm","14–30 days",[2190, 2920],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("mangosteen","Mangosteen","Mangosteen","🟣","1–3 cm","14–28 days",[3285, 4380],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("balimbing","Balimbing","Starfruit","⭐","1–3 cm","14–28 days",[1095, 1460],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("macopa","Macopa","Wax Apple","🍎","1–3 cm","14–28 days",[1095, 1460],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("kamias","Kamias","Bilimbi","🥒","1–3 cm","14–28 days",[730, 1095],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("bignay","Bignay","Bignay","🍒","1–3 cm","20–40 days",[1460, 2190],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("lipote","Lipote","Lipote","🍒","1–3 cm","20–40 days",[1460, 2190],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("kasoy","Kasoy","Cashew","🥜","1–3 cm","7–14 days",[1095, 1460],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("orange","Orange","Orange","🍊","1–3 cm","14–28 days",[1460, 2190],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("lemon","Lemon","Lemon","🍋","1–3 cm","14–28 days",[1460, 2190],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("dragon_fruit","Dragon Fruit","Dragon Fruit","🌵","1–3 cm","7–14 days",[365, 730],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("passion_fruit","Passion Fruit","Passion Fruit","🍇","1–3 cm","14–28 days",[180, 365],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("kiwi","Kiwi","Kiwi","🥝","1–3 cm","14–30 days",[1095, 1825],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("grapes","Grapes","Grapes","🍇","1–3 cm","14–30 days",[730, 1095],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("chesa","Chesa","Chesa (Canistel)","🟡","1–3 cm","20–40 days",[1460, 2190],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("mabolo","Mabolo","Velvet Apple","🍑","1–3 cm","20–40 days",[1460, 2190],[6, 7, 8, 9],[5.5, 7],[24, 34],[1, 2, 1],6,"M");
S("melon","Melon","Melon","🍈","2–3 cm","3–7 days",[65, 85],[10, 11, 12, 1, 2],[6, 7],[24, 32],[1, 2, 2],6,"M");
S("tapilan","Tapilan","Rice Bean","🌱","2–3 cm","5–10 days",[90,110],[6,7,8,9],[5,7],[22,32],[1,2,2],6,"L");
S("camansi","Kamansi","Camansi","🌳","2–3 cm","14–30 days",[1460,2190],[5,6,7,8],[5.5,7],[24,34],[1,2,1],6,"M");
S("apple","Mansanas","Apple","🍎","1–2 cm (cold-stratified)","20–40 days",[1460,2190],[5,6,7,8],[6,7],[15,24],[0,2,1],6,"M");
/* Tagalog na paglalarawan para sa unang 8 binhi */
const TLX={mais:["Diligan pagkatapos magtanim at panatilihing pantay ang basa, lalo na sa pagtubo at pamumulaklak.","Mas gusto ang buong sikat ng araw."],
kamatis:["Regular na diligan sa puno; iwasang mabasa ang dahon at panatilihing maayos ang drainage.","Buong sikat ng araw (6+ oras)."],
talong:["Panatilihing pantay ang basa ng lupa; gumamit ng mulch para manatili ang halumigmig.","Buong sikat ng araw (6+ oras)."],
kangkong:["Kailangan ng maraming tubig; panatilihing basa o mababaw na binabaha ang lupa.","Buong sikat ng araw hanggang bahagyang lilim."],
sitaw:["Katamtamang pagdidilig; iwasan ang pagbabaha. Maglagay ng trellis o tukod.","Buong sikat ng araw (6+ oras)."],
labanos:["Panatilihing pantay ang basa ng lupa para malambot ang ugat.","Buong sikat ng araw hanggang bahagyang lilim."],
okra:["Diligan kapag tuyo na ang ibabaw ng lupa; kaya ang maikling tagtuyot.","Buong sikat ng araw (6+ oras)."],
pechay:["Panatilihing laging basa ang lupa; magaan na pagdidilig araw-araw.","Buong sikat ng araw hanggang bahagyang lilim."]};
D.forEach(x=>{const t=TLX[x.base||x.id];if(t){x.wat=t[0];x.sut=t[1]}});
/* Mga kategorya (para sa filter sa Home) */
/* ===== Uri / Variety: bawat uri ay sariling class. Ang id ng uri = eksaktong pangalan ng Class sa Teachable Machine ===== */
const TY={
talong:["Talong","Eggplant",[["Talong","Long, glossy purple fruit with soft, mild flesh"]]],
sigarilyas:["Sigarilyas","Winged Bean",[["Sigarilyas","Green pods with four crisp wings"]]],
mani:["Mani","Peanut",[["Mani","Underground pods holding 2–3 nuts"]]],
sitaw:["Sitaw","Yardlong Bean",[["Sitaw Violet","Long violet-purple pods"],["Sitaw Puti","Long pale white-green pods"],["Sitaw Baguio","Shorter, tender green pods for cooler areas"]]],
bataw:["Bataw","Hyacinth Bean",[["Bataw Green","Flat, broad, light-green pods"],["Bataw Violet","Flat, broad, violet-purple pods"]]],
patani:["Patani","Lima Bean",[["Patani Puti","White, broad, flat beans"],["Patani Berde","Green beans"],["Patani Pula","Red beans"],["Patani Itim","Black beans"]]],
kundol:["Kundol","Wax Gourd",[["Kundol","Large green gourd with a waxy white coating"]]],
patola:["Patola","Sponge Gourd",[["Patola","Long, ridged green gourd; soft when cooked"]]],
upo:["Upo","Bottle Gourd",[["Upo","Smooth, pale-green, bottle-shaped gourd"]]],
kalabasa:["Kalabasa","Squash",[["Kalabasa","Round, ridged squash with sweet orange flesh"]]],
labanos:["Labanos","Radish",[["Labanos","Long white root with a peppery taste"]]],
mustasa:["Mustasa","Mustard Greens",[["Mustasa","Green leaves with a sharp, peppery taste"]]],
sibuyas:["Sibuyas","Onion",[["Sibuyas","Round bulb with layered, pungent flesh"]]],
kamatis:["Kamatis","Tomato",[["Kamatis","Round red fruit, juicy and slightly sour"]]],
linga:["Linga","Sesame",[["Linga Puti","Pale cream seeds with a mild nutty taste"],["Linga Itim","Black seeds with a stronger flavor"]]],
ampalaya:["Ampalaya","Bitter Gourd",[["Ampalaya","Green, bumpy gourd with a bitter taste"]]],
okra:["Okra","Okra",[["Okra","Green ridged pods, sticky when cut"]]],
pechay:["Pechay","Pechay (Bok Choy)",[["Pechay","Green leaves with white, crisp stalks"]]],
kangkong:["Kangkong","Water Spinach",[["Kangkong","Hollow stems with long green leaves"]]],
repolyo:["Repolyo","Cabbage",[["Repolyo","Round head of tightly packed pale-green leaves"]]],
sayote:["Sayote","Chayote",[["Sayote","Pear-shaped, light-green fruit with a mild taste"]]],
karot:["Carrots","Carrot",[["Carrots","Orange, crunchy, sweet root"]]],
baguio_beans:["Beans","Snap Beans (Baguio Beans)",[["Baguio Beans","Green, crisp, tender pods"]]],
malunggay:["Malunggay","Moringa",[["Malunggay","Small green leaves and long pods; very nutritious"]]],
sili:["Sili","Chili / Pepper",[["Bell Pepper","Large, thick and mild; green, red, or yellow",{h:[70,90]}],["Labuyo","Small, very hot red or green chili",{h:[90,120]}]]],
munggo:["Monggo","Mung Bean",[["Monggo","Small green beans in thin pods"]]],
cauliflower:["Cauliflower","Cauliflower",[["Cauliflower","Compact white head of flower buds"]]],
broccoli:["Broccoli","Broccoli",[["Broccoli","Green, tree-like head of flower buds"]]],
mais:["Mais","Corn",[["Waxy Corn","White, sticky / waxy texture",{h:[65,80]}],["Yellow Corn","Yellow, hard kernels",{h:[100,115]}],["Sweet Corn","Yellow, sweet kernels",{h:[65,85]}]]],
alugbati:["Alugbati","Malabar Spinach",[["Alugbati","Thick, glossy green or purple climbing leaves"]]],
saluyot:["Saluyot","Jute Leaves",[["Saluyot","Green leaves that turn slimy when cooked"]]],
katuray:["Katuray","Sesbania",[["Katuray","Tree with large flowers and long, thin pods eaten as vegetable"]]],
himbabao:["Himbabao","Philippine Mulberry",[["Himbabao","Leafy tree; leaves used in cooking and herbal drinks"]]],
kadyos:["Kadyos","Pigeon Pea",[["Kadyos","Green pods with small round beans"]]],
tapilan:["Tapilan","Rice Bean",[["Tapilan","Slim pods with small, slender beans"]]],
chicharo:["Chicharo","Peas",[["Green Peas","Round, green"],["Snow Pea","Flat, pale green"],["Snap Pea","Large, sweet"]]],
letsugas:["Lettuce","Lettuce",[["Iceberg Lettuce","Round, crunchy, pale green",{h:[80,100]}],["Romaine Lettuce","Long, dark green",{h:[60,75]}]]],
mangga:["Mangga","Mango",[["Pico / Piko","Small, elongated, sweet yellow mango"],["Katchamita","Long mango, sweet-sour, good green or ripe"],["Carabao Mango","Large, yellow when ripe, very sweet"],["Apple Mango","Round with red blush, sweet-tart"],["Indian Mango","Firm and sour; usually eaten green"]]],
papaya:["Papaya","Papaya",[["Papaya","Oblong fruit with sweet orange flesh"]]],
pakwan:["Pakwan","Watermelon",[["Sugar Baby","Small, round, dark-green rind, very sweet red flesh",{h:[75,90]}],["Crimson Sweet","Large, striped rind, sweet red flesh",{h:[80,95]}],["Seedless Watermelon","Red flesh with no or few seeds",{h:[85,100]}]]],
melon:["Melon","Melon",[["Cantaloupe","Netted rind with sweet orange flesh",{h:[75,90]}],["Honeydew","Smooth pale rind with sweet light-green flesh",{h:[90,110]}]]],
guyabano:["Guyabano","Soursop",[["Guyabano","Spiny green fruit with soft, sweet-sour white flesh"]]],
atis:["Atis","Sugar Apple",[["Atis","Bumpy green fruit with sweet, creamy white flesh"]]],
pipino:["Pipino","Cucumber",[["Pipino","Long green fruit, crisp and mild"]]],
chico:["Chico","Sapodilla",[["Chico","Brown, round fruit with very sweet soft flesh"]]],
avocado:["Avocado","Avocado",[["Avocado","Green pear-shaped fruit with creamy flesh"]]],
rambutan:["Rambutan","Rambutan",[["Rambutan","Red, hairy skin with white juicy flesh"]]],
lanzones:["Lanzones","Lanzones",[["Lanzones","Small pale-yellow fruits in clusters; sweet-sour"]]],
santol:["Santol","Santol",[["Santol","Round yellow fruit with sweet-sour white pulp"]]],
sineguelas:["Sineguelas","Spanish Plum",[["Sineguelas","Small red or yellow fruit, sweet-sour"]]],
duhat:["Duhat","Java Plum",[["Duhat","Small purple-black fruit, sweet and slightly sour"]]],
bayabas:["Bayabas","Guava",[["Bayabas","Round green fruit with white or pink flesh"]]],
calamansi:["Calamansi","Calamansi",[["Calamansi","Small round green citrus, very sour"]]],
suha:["Suha","Pomelo",[["Suha","Very large citrus with thick rind, sweet-sour"]]],
aratilis:["Aratilis","Jamaica Cherry",[["Aratilis","Tiny red fruit, soft and sweet"]]],
kaymito:["Kaymito","Star Apple",[["Kaymito","Purple or green fruit with milky, sweet flesh"]]],
sampalok:["Sampalok","Tamarind",[["Sampalok","Brown pods with sticky sweet-sour pulp"]]],
nangka:["Nangka / Langka","Jackfruit",[["Nangka","Very large spiky fruit with sweet yellow bulbs"]]],
camansi:["Kamansi","Camansi (Breadnut)",[["Kamansi","Round, green, spiky fruit; seeds are cooked and eaten"]]],
durian:["Durian","Durian",[["Durian","Large spiky fruit with strong smell and creamy flesh"]]],
mangosteen:["Mangosteen","Mangosteen",[["Mangosteen","Purple rind with white, sweet-sour segments"]]],
balimbing:["Balimbing","Starfruit",[["Balimbing","Yellow-green, star-shaped when sliced"]]],
macopa:["Macopa","Wax Apple",[["Macopa","Bell-shaped, red, crisp and mildly sweet"]]],
kamias:["Kamias","Bilimbi",[["Kamias","Small green fruit, very sour"]]],
lipote:["Lipote (Kalumpit)","Lipote",[["Lipote","Small purple-black fruit, sweet-sour"]]],
kasoy:["Kasoy","Cashew",[["Kasoy","Red or yellow fruit with a nut hanging below"]]],
orange:["Orange","Orange",[["Kist-Kiat / Dalanghita","Small orange with loose skin; sweet"],["Navel Orange","Large and seedless, with a navel at the bottom"],["Blood Orange","Red flesh, sweet-tart"],["Cara Cara Orange","Pinkish-red flesh, very sweet"],["Ponkan","Large mandarin, easy to peel, very sweet"]]],
lemon:["Lemon","Lemon",[["Lemon","Yellow oval citrus, very sour"]]],
dragon_fruit:["Dragon Fruit","Dragon Fruit",[["Dragon Fruit","Pink or red scaly skin with tiny black seeds in the flesh"]]],
passion_fruit:["Passion Fruit","Passion Fruit",[["Passion Fruit","Round purple or yellow fruit with tangy pulp"]]],
kiwi:["Kiwi","Kiwi",[["Kiwi","Brown fuzzy skin with green sweet-tart flesh"]]],
grapes:["Grapes","Grapes",[["Grapes","Small round fruits in bunches; green, red, or purple"]]],
strawberry:["Strawberry","Strawberry",[["Strawberry","Small, red, heart-shaped, sweet fruit"]]],
chesa:["Chesa","Canistel",[["Chesa","Yellow-orange fruit with dry, sweet, custard-like flesh"]]],
apple:["Mansanas","Apple",[["Green Apple","Green skin, crisp and tart"],["Red Apple","Red skin, crisp and sweet"]]],
mabolo:["Mabolo","Velvet Apple",[["Mabolo","Reddish-brown velvety skin with sweet creamy flesh"]]]};
(()=>{const slug=n=>n.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"");
const B=D.splice(0);B.forEach(b=>{const T=TY[b.id];if(!T)return;b.tl=T[0];b.en=T[1];b.types=T[2].map(u=>({name:u[0],desc:u[1],id:slug(u[0]),o:u[2]}));D.push(b)})})();
/* Best months magtanim (galing sa listahan ninyo). Palitan dito kung may babaguhin. */
const BESTM={"apple":[5,6,7,8],"camansi":[5,6,7,8],"talong":[2,3,4,9,10,11],"sigarilyas":[3,4,5,10,11,12],"mani":[1,2,5,6,11,12],"sitaw":[3,4,5,6],"bataw":[1,6,7,8,9,11,12],"patani":[1,3,4,5,10,11,12],"kundol":[1,5,6,7,11,12],"patola":[1,2,3,6,7,8],"upo":[1,2,3,6,7,8,9],"kalabasa":[1,2,5,6,11,12],"labanos":[11,12,1,2],"mustasa":[10,11,12,1,2],"sibuyas":[10,11,12,1],"kamatis":[10,11,12,1,2,3,4],"linga":[1,2,3,7,8,9],"ampalaya":[1,2,5,6,11,12],"okra":[3,4,5,6],"pechay":[10,11,12,1,2],"kangkong":[5,6,7,8,9,10],"repolyo":[10,11,12,1,2],"sayote":[10,11,12,1],"karot":[10,11,12,1],"baguio_beans":[10,11,12,1,2],"malunggay":[3,4,5,6],"sili":[10,11,12,1,2,3,4],"munggo":[1,2,5,6,11,12],"cauliflower":[10,11,12,1],"broccoli":[10,11,12,1],"pipino":[1,2,5,6,7,11,12],"mais":[1,2,5,6,11,12],"alugbati":[5,6,7,8,9],"saluyot":[3,4,5,6,10,11,12],"katuray":[6,7,8,9],"himbabao":[6,7,8,9],"kadyos":[6,7,8,9],"tapilan":[6,7,8,9],"chicharo":[10,11,12,1],"letsugas":[10,11,12,1,2],"papaya":[5,6],"pakwan":[11,12,1,2],"melon":[11,12,1,2],"kiwi":[10,11,12,1],"grapes":[11,12,1,2],"strawberry":[10,11,12,1],"mangga":[5,6,7,8],"guyabano":[5,6,7,8],"atis":[5,6,7,8],"chico":[5,6,7,8],"avocado":[5,6,7,8],"rambutan":[5,6,7,8],"lanzones":[5,6,7,8],"santol":[5,6,7,8],"sineguelas":[5,6,7,8],"duhat":[5,6,7,8],"bayabas":[5,6,7,8],"calamansi":[5,6,7,8],"suha":[5,6,7,8],"dalanghita":[5,6,7,8],"aratilis":[5,6,7,8],"kaymito":[5,6,7,8],"sampalok":[5,6,7,8],"nangka":[5,6,7,8],"marang":[5,6,7,8],"durian":[5,6,7,8],"mangosteen":[5,6,7,8],"balimbing":[5,6,7,8],"macopa":[5,6,7,8],"kamias":[5,6,7,8],"bignay":[5,6,7,8],"lipote":[5,6,7,8],"kasoy":[5,6,7,8],"orange":[5,6,7,8],"lemon":[5,6,7,8],"dragon_fruit":[5,6,7,8],"passion_fruit":[5,6,7,8],"chesa":[5,6,7,8],"mabolo":[5,6,7,8]};
D.forEach(x=>{{const k=x.base||x.id;if(BESTM[k])x.m=BESTM[k]}});
const CAT={Gulay:["kundol","sayote","cauliflower","broccoli","leeks","spring_onion","celery","kamatis","talong","okra","ampalaya","upo","patola","kalabasa","pipino","sili","sibuyas","karot","labanos","singkamas","mais"],
Madahon:["himbabao","katuray","kangkong","pechay","mustasa","repolyo","letsugas","alugbati","saluyot","malunggay"],
Beans:["tapilan","baguio_beans","kadyos","chicharo","linga","sitaw","munggo","mani","bataw","patani","sigarilyas"],Prutas:["apple","pipino","camansi","pakwan","papaya","mangga","guyabano","atis","chico","avocado","rambutan","lanzones","santol","sineguelas","duhat","bayabas","calamansi","suha","dalanghita","aratilis","kaymito","sampalok","nangka","marang","durian","mangosteen","balimbing","macopa","kamias","bignay","lipote","kasoy","orange","lemon","dragon_fruit","passion_fruit","kiwi","grapes","chesa","mabolo","melon"]};
D.forEach(x=>{x.cat=Object.keys(CAT).find(k=>CAT[k].includes(x.base||x.id))||"Iba pa"});

