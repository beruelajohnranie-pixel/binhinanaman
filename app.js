const find=id=>D.find(x=>x.id==id),$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
/* ===== WIKA / LANGUAGE (Settings) ===== */
const L={
en:{hdsub:"AI-Based Seed Identification and Intelligent Planting Information System",welcome:"Welcome to BinhiScan",welcomeP:"Identify supported seeds, view planting instructions, and keep your scan results in one place.",
scanSeed:"Scan a seed",viewGuides:"View planting guides",savedScans:"Saved scans",seedsCat:"Seeds in catalog",commonH:"Common seeds <small>/ Common seeds in the Philippines</small>",commonP:"Search or tap a seed to view its planting guide.",
search:"Search seed… (e.g. ampalaya)",noSeed:"No seed found.",
scanH:"Scan Seed",scanP:"Choose one method to identify a seed.",scanCam:"Scan Camera",uploadPhoto:"🖼 Upload Photo",camNote:"The camera needs your permission.",
guideH:"Planting Guide",guideP:"Choose a seed to view its planting information. These are general estimates; follow local agricultural advice.",selectSeed:"Select seed",
soilH:"Soil Assessment",soilP:"Add a soil photo (optional) and answer the checklist. A photo is a visual reference only; it cannot measure pH or nutrients.",upload:"🖼 Upload",takePhoto:"📷 Take photo",
q1:"1 · Crop",q2:"2 · Soil appearance",q3:"3 · Moisture now",q4:"4 · Sunlight per day",q5:"5 · Current weather",
clay:"Clay",loam:"Loam",sandy:"Sandy",dry:"Dry",moist:"Moist",wet:"Waterlogged",sun3:"Under 4 hours",sun5:"4–6 hours",sun7:"6+ hours",wSunny:"Sunny",wCloudy:"Cloudy",wRainy:"Rainy",wCool:"Cool",
checkSuit:"Check suitability",photoNote:"Photo added as a visual reference only. Choose the soil type and moisture below.",
seasonH:"Planting Season Check",seasonP:"Checks the current month against seasonal guidance stored in this app. It does not use live weather forecasts.",today:"Today's date on this device",chooseSeed:"Choose seed",checkSeason:"Check season",seasonNote:"Best time depends on variety, local climate, rainfall, and farm conditions.",
setH:"Settings",langL:"Language",histH:"Scan History",histP:"Scan results are stored on this device only. Clearing browser data may remove them.",exportH:"Export history",clearH:"Clear history",noScans:"No scans yet.",viewGuide:"View guide",histCleared:"History cleared",histCopied:"History copied",noCopy:"Copy not available here",noScansTxt:"No scans",
tHome:"Home",tGuide:"Guide",tScan:"Scan",tSoil:"Soil",tSeason:"Season",settings:"Settings",
tips:"<b>Tips for a clear scan</b><br>• Good lighting<br>• One seed type, centered<br>• Close and in focus<br>• Plain background",tryAgain:"Try again",demoBtn:"Try demo scan (random, UI check only)",
hint:"Place the seed inside the frame",camBlocked:"Camera is blocked. Click the 🔒 in the address bar › Camera › Allow, then press the green button.",camNone:"No camera found on this device. Use 🖼 to choose a photo.",camBusy:"Another app is using the camera (e.g. Zoom or Teams). Close it, then press the green button.",camFail:"Could not open the camera. Press the green button to try again, or use 🖼.",
analyzing:"Analyzing…",downloading:p=>"Downloading the AI (one time only)… "+p+"%",
ready:n=>n?`✓ AI model ready · recognizes ${n} seeds.`:`⚠ No trained model in model/ yet. Scanning is off until it is added.`,
noSeedPhoto:"No seed detected in the photo.",notSure:(p,n)=>`Not sure which seed this is (${p}% for ${n}).`,noSupported:"No supported seed detected.",tryCloser:"Try a closer, brighter shot of one seed type.",
errModel:"The AI model files could not be loaded. Please try again later.",errTf:"TensorFlow.js could not load. Check your internet connection and refresh.",errZs:"The built-in AI could not load. Check your internet (about 90 MB on first use) and try again.",errScan:"Scan failed. Please try again.",noModel:"No trained model installed yet. Add it to the model/ folder.",
back:"‹ Back",demoTag:"DEMO · random result, not real AI",confidence:"confidence",soilBtn:"Check soil suitability",done:"Done",
noData:"⚠ No planting data for this seed yet. Add it to seeds.js.",harvest:(a,b)=>a>=730?`Fruits in about ${Math.round(a/365)}–${Math.round(b/365)} years`:`Harvest in ${a}–${b} days`,
rDepth:"Planting depth",rWater:"Watering",rSun:"Sunlight",rGerm:"Estimated germination",rSoil:"Soil & pH",rMonths:"Best months",about:"about ",
result:"Result",estimate:"Estimate only. Confirm with a real soil test and local agricultural advice.",
lSoil:"Soil type",lPh:"Soil pH (estimated)",lTemp:"Temperature",lMoist:"Moisture",lSun:"Sunlight",lSeason:"Season",
soilIdeal:s=>`Ideal for ${s}.`,soilOk:"Acceptable; mix in compost.",soilBad:"Not ideal. Improve with compost or use raised beds.",
phIn:(p,a,b)=>`~${p} is within ${a}–${b}.`,phLow:(p,a,b)=>`~${p} is acidic; add agricultural lime. Ideal ${a}–${b}.`,phHigh:(p,a,b)=>`~${p} is alkaline; add compost. Ideal ${a}–${b}.`,
tOk:(t,a,b)=>`About ${t}°C is suitable (${a}–${b}°C).`,tNo:(t,a,b)=>`About ${t}°C; ideal is ${a}–${b}°C.`,
mWetOk:s=>`Wet soil suits ${s}.`,mWetNo:"Waterlogged soil risks rot. Improve drainage.",mDryNo:s=>`Too dry; ${s} needs wet soil.`,mDryWn:"Dry soil; irrigate before and after sowing.",mOk:"Soil moisture is good.",
sOk:s=>`Enough sun for ${s}.`,sLow:(s,h)=>`Slightly low; ${s} prefers ${h}+ hours.`,sNo:s=>`Too shady for ${s}.`,
seOk:m=>`${m} is within the planting months.`,seNo:m=>`${m} is outside the best months.`,
vOk:"Suitable to plant",vWn:"Possible with care",vNo:"Not recommended",
goodTime:"Good time to plant",notBest:"Not the best month",
inRange:(m,s)=>`${m} is within the recommended planting months for ${s}.`,outRange:(m,s,n)=>`${m} is outside the recommended months for ${s}. Next good month: ${n}.`,
months:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec",loc:"en-US",
cat:{Lahat:"All",Gulay:"Vegetables",Madahon:"Leafy",Beans:"Beans",Prutas:"Fruits",Herbs:"Herbs"},
pdf:c=>c},
tl:{hdsub:"Sistemang Pang-impormasyon sa Pagkilala ng Binhi at Matalinong Pagtatanim gamit ang AI",welcome:"Maligayang pagdating sa BinhiScan",welcomeP:"Kilalanin ang mga binhi, tingnan ang gabay sa pagtatanim, at itago ang mga resulta ng iyong scan.",
scanSeed:"I-scan ang binhi",viewGuides:"Tingnan ang mga gabay sa pagtatanim",savedScans:"Mga naka-save na scan",seedsCat:"Mga binhi sa listahan",commonH:"Karaniwang binhi <small>/ sa Pilipinas</small>",commonP:"Maghanap o pindutin ang binhi para makita ang gabay sa pagtatanim.",
search:"Maghanap ng binhi… (hal. ampalaya)",noSeed:"Walang nakitang binhi.",
scanH:"I-scan ang Binhi",scanP:"Pumili ng isang paraan para makilala ang binhi.",scanCam:"Gamitin ang Camera",uploadPhoto:"🖼 Mag-upload ng Larawan",camNote:"Kailangan ng camera ang iyong pahintulot.",
guideH:"Gabay sa Pagtatanim",guideP:"Pumili ng binhi para makita ang impormasyon sa pagtatanim. Mga tantiya lamang ito; sundin ang payo ng lokal na agrikultura.",selectSeed:"Pumili ng binhi",
soilH:"Pagsusuri ng Lupa",soilP:"Magdagdag ng larawan ng lupa (opsyonal) at sagutan ang checklist. Gabay lamang sa paningin ang larawan; hindi nito nasusukat ang pH o sustansya.",upload:"🖼 Mag-upload",takePhoto:"📷 Kumuha ng larawan",
q1:"1 · Pananim",q2:"2 · Uri ng lupa",q3:"3 · Basa ng lupa ngayon",q4:"4 · Sikat ng araw bawat araw",q5:"5 · Panahon ngayon",
clay:"Clay (malagkit)",loam:"Loam (katamtaman)",sandy:"Sandy (mabuhangin)",dry:"Tuyo",moist:"Basa-basa",wet:"Binabaha",sun3:"Wala pang 4 na oras",sun5:"4–6 na oras",sun7:"6+ oras",wSunny:"Maaraw",wCloudy:"Maulap",wRainy:"Maulan",wCool:"Malamig",
checkSuit:"Suriin kung angkop",photoNote:"Gabay lamang sa paningin ang larawan. Piliin sa ibaba ang uri at basa ng lupa.",
seasonH:"Pagsusuri ng Panahon ng Pagtatanim",seasonP:"Sinusuri ang kasalukuyang buwan batay sa gabay na nakalagay sa app. Hindi ito gumagamit ng live na weather forecast.",today:"Petsa ngayon sa device na ito",chooseSeed:"Pumili ng binhi",checkSeason:"Suriin ang panahon",seasonNote:"Nakadepende ang pinakamainam na oras sa uri ng binhi, klima, ulan, at kalagayan ng bukid.",
setH:"Settings",langL:"Wika",histH:"Kasaysayan ng Scan",histP:"Sa device na ito lang naka-save ang mga resulta ng scan. Maaaring mabura ang mga ito kapag nilinis ang browser data.",exportH:"I-export ang kasaysayan",clearH:"Burahin ang kasaysayan",noScans:"Wala pang scan.",viewGuide:"Tingnan ang gabay",histCleared:"Nabura na ang kasaysayan",histCopied:"Nakopya ang kasaysayan",noCopy:"Hindi available ang pagkopya dito",noScansTxt:"Walang scan",
tHome:"Home",tGuide:"Gabay",tScan:"Scan",tSoil:"Lupa",tSeason:"Panahon",settings:"Settings",
tips:"<b>Mga tip para sa malinaw na scan</b><br>• Maliwanag ang ilaw<br>• Isang uri ng binhi, nasa gitna<br>• Malapit at malinaw ang focus<br>• Simpleng background",tryAgain:"Subukan ulit",demoBtn:"Subukan ang demo scan (random, pang-check ng UI lang)",
hint:"Ilagay ang binhi sa loob ng frame",camBlocked:"Naka-block ang camera. I-click ang 🔒 sa address bar › Camera › Allow, tapos pindutin ang berdeng button.",camNone:"Walang nakitang camera sa device na ito. Gamitin ang 🖼 para pumili ng larawan.",camBusy:"Ginagamit ng ibang app ang camera (hal. Zoom o Teams). Isara ito, tapos pindutin ang berdeng button.",camFail:"Hindi mabuksan ang camera. Pindutin ang berdeng button para subukan ulit, o gamitin ang 🖼.",
analyzing:"Sinusuri…",downloading:p=>"Dina-download ang AI (isang beses lang)… "+p+"%",
ready:n=>n?`✓ Handa na ang AI model · nakikilala ang ${n} binhi.`:`⚠ Wala pang trained model sa model/. Hindi pa gagana ang scan.`,
noSeedPhoto:"Walang nakitang binhi sa larawan.",notSure:(p,n)=>`Hindi sigurado kung anong binhi ito (${p}% para sa ${n}).`,noSupported:"Walang nakitang suportadong binhi.",tryCloser:"Subukan ang mas malapit at mas maliwanag na kuha ng isang uri ng binhi.",
errModel:"Hindi ma-load ang mga file ng AI model. Pakisubukan ulit mamaya.",errTf:"Hindi ma-load ang TensorFlow.js. Tingnan ang internet at i-refresh.",errZs:"Hindi ma-load ang built-in AI. Tingnan ang internet (mga 90 MB sa unang gamit) at subukan ulit.",errScan:"Hindi natuloy ang scan. Pakisubukan ulit.",noModel:"Wala pang na-install na trained model. Ilagay sa folder na model/.",
back:"‹ Bumalik",demoTag:"DEMO · random na resulta, hindi totoong AI",confidence:"kumpiyansa",soilBtn:"Suriin ang lupa",done:"Tapos na",
noData:"⚠ Wala pang planting data ang binhing ito. Idagdag ito sa seeds.js.",harvest:(a,b)=>a>=730?`Mamumunga sa mga ${Math.round(a/365)}–${Math.round(b/365)} taon`:`Aanihin sa loob ng ${a}–${b} araw`,
rDepth:"Lalim ng pagtatanim",rWater:"Pagdidilig",rSun:"Sikat ng araw",rGerm:"Tinatayang pagtubo",rSoil:"Lupa at pH",rMonths:"Pinakamainam na buwan",about:"mga ",
result:"Resulta",estimate:"Tantiya lamang. Kumpirmahin sa tunay na soil test at payo ng lokal na agrikultura.",
lSoil:"Uri ng lupa",lPh:"pH ng lupa (tantiya)",lTemp:"Temperatura",lMoist:"Basa ng lupa",lSun:"Sikat ng araw",lSeason:"Panahon",
soilIdeal:s=>`Angkop para sa ${s}.`,soilOk:"Puwede; haluan ng compost.",soilBad:"Hindi angkop. Dagdagan ng compost o gumamit ng nakataas na taniman.",
phIn:(p,a,b)=>`Ang ~${p} ay pasok sa ${a}–${b}.`,phLow:(p,a,b)=>`Ang ~${p} ay maasim; dagdagan ng agricultural lime. Mainam ang ${a}–${b}.`,phHigh:(p,a,b)=>`Ang ~${p} ay alkaline; dagdagan ng compost. Mainam ang ${a}–${b}.`,
tOk:(t,a,b)=>`Ang mga ${t}°C ay angkop (${a}–${b}°C).`,tNo:(t,a,b)=>`Mga ${t}°C; mainam ang ${a}–${b}°C.`,
mWetOk:s=>`Angkop sa ${s} ang basang lupa.`,mWetNo:"Maaaring mabulok kapag binabaha ang lupa. Ayusin ang drainage.",mDryNo:s=>`Masyadong tuyo; kailangan ng ${s} ng basang lupa.`,mDryWn:"Tuyo ang lupa; diligan bago at pagkatapos magtanim.",mOk:"Maganda ang basa ng lupa.",
sOk:s=>`Sapat ang araw para sa ${s}.`,sLow:(s,h)=>`Medyo kulang; mas gusto ng ${s} ang ${h}+ oras.`,sNo:s=>`Masyadong malilim para sa ${s}.`,
seOk:m=>`Ang ${m} ay pasok sa mga buwan ng pagtatanim.`,seNo:m=>`Ang ${m} ay wala sa pinakamainam na buwan.`,
vOk:"Angkop magtanim",vWn:"Puwede kung aalagaan",vNo:"Hindi inirerekomenda",
goodTime:"Magandang panahon magtanim",notBest:"Hindi ang pinakamainam na buwan",
inRange:(m,s)=>`Ang ${m} ay pasok sa inirerekomendang buwan ng pagtatanim ng ${s}.`,outRange:(m,s,n)=>`Ang ${m} ay wala sa inirerekomendang buwan para sa ${s}. Susunod na magandang buwan: ${n}.`,
months:"Ene Peb Mar Abr May Hun Hul Ago Set Okt Nob Dis",loc:"fil-PH",
cat:{Lahat:"Lahat",Gulay:"Gulay",Madahon:"Madahon",Beans:"Beans",Prutas:"Prutas",Herbs:"Herbs"}}};
let lang="en";try{lang=localStorage.getItem("bs_lang")||"en"}catch(e){}if(!L[lang])lang="en";
const t=(k,...a)=>{const v=L[lang][k]!==undefined?L[lang][k]:L.en[k];return typeof v=="function"?v(...a):v};
const MO=()=>t("months").split(" ");
const dTx=s=>lang=="tl"?(s.replace("(seedbed)","(punlaan)").replace(/ days?$/," araw")):s;
const wTx=s=>lang=="tl"&&s.wat?s.wat:s.wa, uTx=s=>lang=="tl"&&s.sut?s.sut:s.su;
const NOW=new Date().getMonth()+1,CL=["Clay","Loam","Sandy"];
const WX={Sunny:33,Cloudy:29,Rainy:26,Cool:20};
let hist=[];try{hist=JSON.parse(localStorage.getItem("bs_h")||"[]")}catch(e){}
hist=hist.filter(h=>D.some(s=>s.id==h.id));
const saveH=()=>{try{localStorage.setItem("bs_h",JSON.stringify(hist))}catch(e){}};
function toast(m){const e=$("#toast");e.textContent=m;e.classList.add("on");setTimeout(()=>e.classList.remove("on"),2200)}
const opts=[...D].sort((a,b)=>a.en.localeCompare(b.en)).map(s=>`<option value="${s.id}">${s.en}${s.multi?" – "+s.type:""}</option>`).join("");
["#gs","#cs","#ses"].forEach(i=>$(i).innerHTML=opts);
let TR=[];
let CATF="Lahat";const CATS=["Lahat","Gulay","Madahon","Beans","Prutas"];
$("#cats").onclick=e=>{const b=e.target.closest("[data-c]");if(b){CATF=b.dataset.c;renderSeeds()}};
function renderSeeds(){const q=($("#sq").value||"").toLowerCase();
$("#cats").innerHTML=CATS.map(c=>`<button class="chip ${c==CATF?"on":""}" data-c="${c}">${t("cat")[c]}</button>`).join("");
$("#seeds").innerHTML=D.filter(s=>(s.id+s.tl+s.en).toLowerCase().includes(q)&&(CATF=="Lahat"||s.cat==CATF)).map(s=>`<button class="chip ${TR.includes(s.id)?"ai":""}" data-s="${s.id}">${s.e} ${s.en}${s.multi?" – "+s.type:""}${TR.includes(s.id)?" ✓":""}</button>`).join("")||`<span class="note">${t("noSeed")}</span>`;
$("#nc").textContent=D.length}
$("#sq").oninput=renderSeeds;
getLabels().then(l=>{TR=[...new Set([...TR,...l])];renderSeeds()}).catch(()=>{});
const cal=s=>MO().map((m,i)=>`<i class="${s.m.includes(i+1)?"y":""} ${i+1==NOW?"n":""}">${m}</i>`).join("");
const row=(a,b)=>`<div class="gr"><b>${a}</b><p>${b}</p></div>`;
const GT={};
function guide(s0,both,tid){tid=tid||(!both&&s0.types.length>1?(GT[s0.id]||s0.types[0].id):null);const u=tid&&s0.types.find(x=>x.id==tid),s=u&&u.o?{...s0,...u.o}:s0;return (s.custom?`<p class="note">${t("noData")}</p>`:"")+`<div class="gh"><span>${s.e}</span><div><h3>${s.tl==s.en?s.en:s.tl+" / "+s.en}</h3><small>${t("harvest",s.h[0],s.h[1])}</small></div></div>`+(both?"":typesUI(s0,tid))+row(t("rDepth"),t("about")+dTx(s.dp))+row(t("rWater"),wTx(s))+row(t("rSun"),uTx(s))+row(t("rGerm"),t("about")+dTx(s.g))+row(t("rSoil"),CL.filter((_,i)=>s.s[i]==2).join(" / ")+" · pH "+s.ph[0]+"–"+s.ph[1])+`<div class="gr"><b>${t("rMonths")}</b><div class="cal">${cal(s)}</div></div>`}
function cur(){const p=$$(".pg.on")[0];return p?p.id.slice(2):"home"}
function go(p,id){$$(".pg").forEach(x=>x.classList.toggle("on",x.id=="p-"+p));$$(".tab [data-go]").forEach(b=>b.classList.toggle("on",b.dataset.go==p));
if(id){["#gs","#cs","#ses"].forEach(i=>$(i).value=id)}
if(p=="home")$("#ns").textContent=hist.length;if(p=="scan"){aiStatus();openCam()}if(p=="guide")$("#gout").innerHTML=guide(find($("#gs").value));if(p=="settings")renderH();
$("#sout").hidden=true;$("#sout2").innerHTML="";scrollTo(0,0)}
document.addEventListener("click",e=>{const b=e.target.closest("[data-go]");if(b){e.preventDefault();ov(null);go(b.dataset.go)}});
$("#hb").onclick=()=>{ov(null);go("settings")};$("#gs").onchange=()=>$("#gout").innerHTML=guide(find($("#gs").value));$("#gout").onclick=e=>{const b=e.target.closest("[data-t]");if(b){GT[$("#gs").value]=b.dataset.t;$("#gout").innerHTML=guide(find($("#gs").value))}};
$("#seeds").onclick=e=>{const b=e.target.closest("[data-s]");if(b)go("guide",b.dataset.s)};

$("#sbt").onclick=()=>{const s=find($("#ses").value),ok=s.m.includes(NOW),nx=[...s.m,...s.m.map(x=>x+12)].find(x=>x>NOW),M=MO();
$("#sout2").innerHTML=`<div style="margin-top:16px"><span class="verdict ${ok?"ok":"wn"}">${ok?t("goodTime"):t("notBest")}</span><p>${ok?t("inRange",M[NOW-1],s.en):t("outRange",M[NOW-1],s.en,M[(nx-1)%12])}</p><div class="cal">${cal(s)}</div></div>`};
$("#chk").onclick=()=>{const s=find($("#cs").value),sv=s.s[CL.indexOf($("#so").value)],ph=({Clay:6.8,Loam:6.5,Sandy:6})[$("#so").value],mo=$("#mo").value,sn=+$("#sn").value,tm=WX[$("#wx").value],inS=s.m.includes(NOW),M=MO();let r=[],p=0;
const A=(l,a,b,n)=>{r.push([l,a,b]);p+=n};
sv==2?A("ok",t("lSoil"),t("soilIdeal",s.en),25):sv==1?A("wn",t("lSoil"),t("soilOk"),15):A("no",t("lSoil"),t("soilBad"),4);
ph>=s.ph[0]&&ph<=s.ph[1]?A("ok",t("lPh"),t("phIn",ph,s.ph[0],s.ph[1]),20):A("wn",t("lPh"),ph<s.ph[0]?t("phLow",ph,s.ph[0],s.ph[1]):t("phHigh",ph,s.ph[0],s.ph[1]),9);
tm>=s.t[0]&&tm<=s.t[1]?A("ok",t("lTemp"),t("tOk",tm,s.t[0],s.t[1]),20):A("no",t("lTemp"),t("tNo",tm,s.t[0],s.t[1]),5);
mo=="Waterlogged"?(s.wet?A("ok",t("lMoist"),t("mWetOk",s.en),15):A("no",t("lMoist"),t("mWetNo"),2)):mo=="Dry"?(s.wet?A("no",t("lMoist"),t("mDryNo",s.en),3):A("wn",t("lMoist"),t("mDryWn"),9)):A("ok",t("lMoist"),t("mOk"),15);
sn>=s.sun?A("ok",t("lSun"),t("sOk",s.en),10):sn>=s.sun-2?A("wn",t("lSun"),t("sLow",s.en,s.sun),6):A("no",t("lSun"),t("sNo",s.en),2);
inS?A("ok",t("lSeason"),t("seOk",M[NOW-1]),10):A("wn",t("lSeason"),t("seNo",M[NOW-1]),3);
const v=p>=75?["ok",t("vOk")]:p>=50?["wn",t("vWn")]:["no",t("vNo")],I={ok:"✓",wn:"!",no:"✕"};
const o=$("#sout");o.hidden=false;o.innerHTML=`<h2>${t("result")} <small>— ${s.en}</small></h2><div class="gauge ${v[0]}"><svg viewBox="0 0 160 90"><path d="M10 80A70 70 0 0 1 150 80" fill="none" stroke="var(--line)" stroke-width="12" stroke-linecap="round"/><path d="M10 80A70 70 0 0 1 150 80" fill="none" stroke="var(--c)" stroke-width="12" stroke-linecap="round" stroke-dasharray="${p/100*220} 220"/></svg><b>${p}</b></div><div style="text-align:center"><span class="verdict ${v[0]}">${v[1]}</span></div>`+r.map(c=>`<div class="chk ${c[0]}"><i>${I[c[0]]}</i><div><b>${c[1]}</b><span>${c[2]}</span></div></div>`).join("")+`<p class="note">${t("estimate")}</p>`;o.scrollIntoView({behavior:"smooth"})};
function renderH(){$("#hl").innerHTML=hist.length?hist.map((h,i)=>{const s=find(h.id);return `<div class="hr"><div><b>${s.e} ${s.tl} (${s.en})</b><small>${h.ts} · ${h.c.toFixed(1)}%</small></div><button class="btn g" data-h="${h.id}">${t("viewGuide")}</button></div>`}).join(""):`<p class="note" style="margin-top:14px">${t("noScans")}</p>`;$$("[data-h]").forEach(b=>b.onclick=()=>go("guide",b.dataset.h))}
$("#clr").onclick=()=>{hist=[];saveH();renderH();toast(t("histCleared"))};
$("#exp").onclick=async()=>{const x=hist.map(h=>`${h.ts} - ${find(h.id).tl} (${find(h.id).en}) - ${h.c}%`).join("\n")||t("noScansTxt");try{await navigator.clipboard.writeText(x);toast(t("histCopied"))}catch(e){toast(t("noCopy"))}};
// ---- Scan ----
let stream=null;const ov=n=>["cam","ana","res"].forEach(x=>$("#"+x).classList.toggle("on",x==n));
const stopCam=()=>{clearTimeout(live);live=null;if(stream)stream.getTracks().forEach(t=>t.stop());stream=null};
async function openCam(){ov("cam");$("#tipbox").hidden=true;$("#hint").textContent=t("hint");
try{stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"}},audio:false});$("#vid").srcObject=stream;liveStart()}catch(e){stream=null;const n=e&&e.name;$("#hint").textContent=n=="NotAllowedError"?t("camBlocked"):n=="NotFoundError"?t("camNone"):n=="NotReadableError"?t("camBusy"):t("camFail")}}
$("#bcam").onclick=openCam;$("#retry").onclick=openCam;$("#dm").onclick=()=>{demoOnce=true;scan(lastFile)};$("#cb").onclick=()=>{stopCam();ov(null)};$("#ab").onclick=()=>ov(null);
$("#tips").onclick=()=>$("#tipbox").hidden=!$("#tipbox").hidden;
$("#shut").onclick=()=>{if(!stream){if(matchMedia("(pointer:coarse)").matches)$("#camin").click();else openCam();return}const v=$("#vid"),c=document.createElement("canvas");c.width=v.videoWidth;c.height=v.videoHeight;c.getContext("2d").drawImage(v,0,0);c.toBlob(b=>{stopCam();scan(b)},"image/jpeg",.9)};
["up","up2","camin"].forEach(id=>$("#"+id).onchange=e=>{stopCam();scan(e.target.files[0]);e.target.value=""});
/* ===== SARILING AI MODEL (TensorFlow.js) =====
   Galing sa training/train.py. Ilagay ang laman ng training/out/tfjs/ sa folder na model/
   (model.json, mga .bin, labels.json). Walang Claude o API na ginagamit. */
const MIN_CONF=0.75;   // pinakamababang kumpiyansa; itaas kung madalas mali
let net=null,labels=null;
async function getLabels(){for(const f of["labels.json","metadata.json"]){try{const r=await fetch("model/"+f);if(!r.ok)continue;const j=await r.json(),l=Array.isArray(j)?j:j.labels;if(Array.isArray(l)&&l.length)return l.map(x=>String(x).trim().toLowerCase())}catch(e){}}throw 0}
async function loadModel(){if(typeof tf==="undefined")throw{code:"notf"};if(net)return net;
try{labels=await getLabels();net=await tf.loadLayersModel("model/model.json");return net}catch(e){console.error(e);throw{code:"model"}}}   // o galing sa folder na model/
function crop(src){const w=src.videoWidth||src.naturalWidth,h=src.videoHeight||src.naturalHeight,s=Math.min(w,h);
return tf.tidy(()=>tf.browser.fromPixels(src).slice([Math.floor((h-s)/2),Math.floor((w-s)/2),0],[s,s,3]).resizeBilinear([224,224]).toFloat().div(127.5).sub(1))}
async function predict(src,tta,base){const T=base?await loadAny(base):null,m=T?T.m:await loadModel(),labs=T?T.l:labels;
const p=tf.tidy(()=>{const x=crop(src),v=[x];if(tta)v.push(x.reverse(1),x.reverse(0),x.reverse([0,1]));return m.predict(tf.stack(v)).mean(0)});
const pr=Array.from(await p.data());p.dispose();const o=pr.map((c,i)=>[c,i]).sort((a,b)=>b[0]-a[0]);
return{top:o.slice(0,3),conf:o[0][0],margin:o[0][0]-o[1][0],name:labs[o[0][1]].toLowerCase()}}
async function identifyModel(f){const img=new Image();img.src=URL.createObjectURL(f);await img.decode();
const r=await predict(img,true),s=D.find(x=>x.id==r.name),a=r.top[0],b=r.top[1];
if(r.name=="not_seed"||r.name.includes("hindi"))return{id:null,reason:()=>t("noSeedPhoto")};
if(!s||r.conf<MIN_CONF||r.margin<.2)return{id:null,reason:()=>t("notSure",Math.round(r.conf*100),labels[a[1]])+" ("+labels[b[1]]+" "+Math.round(b[0]*100)+"%)"};
lastTy=null;if(s.types.length>1){try{const q=await predict(img,true,"model/types/"+s.id);if(q.conf>=.6&&q.margin>=.15)lastTy={name:q.name,conf:q.conf}}catch(e){}}
return{id:s.id,c:r.conf*100}}
let lastN=0,lastTy=null;const TMC={};
async function loadAny(b){if(!TMC[b])TMC[b]=(async()=>{const m=await tf.loadLayersModel(b+"/model.json");let l=null;for(const f of["labels.json","metadata.json"]){try{const r=await fetch(b+"/"+f);if(!r.ok)continue;const j=await r.json(),a=Array.isArray(j)?j:j.labels;if(a&&a.length){l=a.map(x=>String(x).trim().toLowerCase());break}}catch(e){}}if(!l)throw 0;return{m,l}})();try{return await TMC[b]}catch(e){delete TMC[b];throw e}}
function typesUI(s,tid){if(s.types.length<2)return"";const u=s.types.find(x=>x.id==tid)||s.types[0];return`<div class="gr"><b>${lang=="tl"?"Uri":"Type"}</b><div class="chips" style="margin-top:8px">`+s.types.map(x=>`<button class="chip${x.id==u.id?" on":""}" data-t="${x.id}">${x.name}</button>`).join("")+`</div><p class="note" style="margin:8px 0 0">${u.desc}</p></div>`}
function typesList(s){const L=s.types||[];if(!L.length)return"";return row(lang=="tl"?(L.length>1?"Mga uri":"Uri"):(L.length>1?"Types":"Type"),L.map(u=>`<b>${u.name}</b> – ${u.desc}`).join("<br>"))}
function typeHtml(s){const u=s.types.length==1?s.types[0]:(lastTy&&s.types.find(x=>x.id==lastTy.name));
if(u)return`<p style="margin:10px 0 0"><b>${lang=="tl"?"Uri":"Type"}:</b> ${u.name}</p><p class="note" style="margin:4px 0 0">${u.desc}</p>`;
return`<p style="margin:10px 0 0"><b>${lang=="tl"?"Uri":"Type"}:</b> <small class="note">${lang=="tl"?"(piliin ang uri)":"(tap to choose)"}</small></p><div class="chips" style="justify-content:center;margin-top:8px">`+s.types.map(x=>`<button class="chip" data-t="${x.id}">${x.name}</button>`).join("")+`</div>`}
/* Hanapin at i-outline (dilaw) ang bawat binhi: background = median ng gilid ng larawan, hinihiwalay gamit ang Otsu threshold */
async function outlined(f){const im=new Image();im.src=URL.createObjectURL(f);await im.decode();
const W=Math.min(480,im.naturalWidth),H=Math.round(im.naturalHeight*W/im.naturalWidth),c=document.createElement("canvas");c.width=W;c.height=H;
const g=c.getContext("2d",{willReadFrequently:true});g.drawImage(im,0,0,W,H);const id=g.getImageData(0,0,W,H),d=id.data,N=W*H;
const bs=[];for(let x=0;x<W;x++)bs.push(x*4,((H-1)*W+x)*4);for(let y=0;y<H;y++)bs.push(y*W*4,(y*W+W-1)*4);
const med=k=>{const a=bs.map(i=>d[i+k]).sort((p,q)=>p-q);return a[a.length>>1]},B=[med(0),med(1),med(2)];
const dist=new Float32Array(N),hist=new Uint32Array(256);
for(let i=0;i<N;i++){const e=Math.hypot(d[i*4]-B[0],d[i*4+1]-B[1],d[i*4+2]-B[2]);dist[i]=e;hist[Math.min(255,e|0)]++}
let sum=0;for(let t=0;t<256;t++)sum+=t*hist[t];let wb=0,sb=0,best=0,th=40;
for(let t=0;t<256;t++){wb+=hist[t];if(!wb)continue;const wf=N-wb;if(!wf)break;sb+=t*hist[t];const v=wb*wf*(sb/wb-(sum-sb)/wf)**2;if(v>best){best=v;th=t}}
th=Math.max(th,30);const m=new Uint8Array(N);for(let i=0;i<N;i++)m[i]=dist[i]>th?1:0;
const seen=new Uint8Array(N),keep=new Uint8Array(N);let n=0;const st=[];
for(let s=0;s<N;s++){if(!m[s]||seen[s])continue;const px=[];st.push(s);seen[s]=1;
while(st.length){const p=st.pop();px.push(p);const x=p%W;
if(x>0&&m[p-1]&&!seen[p-1]){seen[p-1]=1;st.push(p-1)}if(x<W-1&&m[p+1]&&!seen[p+1]){seen[p+1]=1;st.push(p+1)}
if(p>=W&&m[p-W]&&!seen[p-W]){seen[p-W]=1;st.push(p-W)}if(p<N-W&&m[p+W]&&!seen[p+W]){seen[p+W]=1;st.push(p+W)}}
if(px.length>N*.003&&px.length<N*.5){n++;for(const p of px)keep[p]=1}}
if(!n||n>60)return null;
for(let p=0;p<N;p++){if(!keep[p])continue;const x=p%W;
if(x==0||x==W-1||p<W||p>=N-W||!keep[p-1]||!keep[p+1]||!keep[p-W]||!keep[p+W])for(const q of[p,p+1,p+W]){if(q<N){d[q*4]=255;d[q*4+1]=214;d[q*4+2]=10}}}
g.putImageData(id,0,0);return{url:c.toDataURL("image/jpeg",.92),n}}
let live=null;
async function liveStart(){clearTimeout(live);const h=$("#hint");if(!(await hasTrained()))return;try{await loadModel()}catch(e){return}
let last=null,n=0;const tick=async()=>{if(!stream||!$("#cam").classList.contains("on"))return;const v=$("#vid");
if(v.videoWidth){try{const r=await predict(v,false),s=D.find(x=>x.id==r.name);
if(s&&r.conf>=MIN_CONF&&r.margin>=.2){h.textContent=`${s.e} ${lang=="tl"?s.tl:s.en} · ${Math.round(r.conf*100)}%`;h.classList.add("lock");n=r.name==last?n+1:1;last=r.name;if(n>=4){$("#shut").click();return}}
else{h.textContent=t("hint");h.classList.remove("lock");last=null;n=0}}catch(e){}}
live=setTimeout(tick,300)};tick()}
/* ===== AI MODE ===== "model" = totoong machine learning (galing sa training/train.py) | "demo" = random, pang-check ng UI lang */
let AI_MODE="model",demoOnce=false,lastFile=null;
async function demoScan(){await new Promise(r=>setTimeout(r,2200));const s=D[Math.floor(Math.random()*D.length)];return{id:s.id,c:80+Math.random()*18,demo:true}}
let lastDemo=false;
let modelWhy="";
async function hasTrained(){modelWhy="";const U=f=>new URL("model/"+f,location.href).href;
try{await getLabels()}catch(e){modelWhy="metadata.json not found: "+U("metadata.json");return false}
try{const r=await fetch(U("model.json"));if(!r.ok){modelWhy="model.json error "+r.status+": "+U("model.json");return false}return true}catch(e){modelWhy="network error: "+U("model.json");return false}}
async function identify(f){if(AI_MODE=="demo"||demoOnce){demoOnce=false;return demoScan()}return(await hasTrained())?identifyModel(f):{id:null,reason:()=>t("noModel")+(modelWhy?"\n["+modelWhy+"]":"")}}
async function scan(file){if(!file)return;lastFile=file;$("#dm").hidden=true;let url=URL.createObjectURL(file);lastN=0;lastTy=null;$("#aimg").src=url;$("#sw").style.display="";$("#retry").hidden=true;$("#atx").textContent=t("analyzing");ov("ana");
const fail=t=>{$("#sw").style.display="none";$("#atx").innerHTML=t;$("#retry").hidden=false};
try{const o=await outlined(file);if(o){url=o.url;lastN=o.n;$("#aimg").src=url}}catch(e){}
try{const r=await identify(file);if(!r||!find(r.id)){fail((r&&r.reason?r.reason():t("noSupported"))+"<br><small style='font:400 13px var(--sans);color:var(--mut)'>"+t("tryCloser")+"</small>");return}
const c=Math.max(0,Math.min(100,+r.c||0));hist.unshift({id:r.id,c,ts:new Date().toLocaleString(t("loc"))});hist=hist.slice(0,30);saveH();lastDemo=!!r.demo;openRes(r.id,c,url)}
catch(e){console.error(e);const m=e.code=="model",nt=e.code=="notf";fail(m?t("errModel"):nt?t("errTf"):e.code=="zs"?t("errZs"):t("errScan"));if(m){$("#dm").hidden=false}}}
function openRes(id,c,img){const s=find(id),R=$("#res");R.innerHTML=`<div class="in"><button class="btn g" id="rbk" style="width:auto;padding:11px 18px;margin-bottom:12px">${t("back")}</button><div class="card" style="text-align:center">${lastDemo?`<span class="verdict wn">${t("demoTag")}</span>`:""}<div class="circ sm"><img src="${img}" alt=""></div><h2 style="font-size:28px">${s.tl}</h2><p style="margin:0">${s.en}</p>${typeHtml(s)}${lastN?`<small class="note">🔍 ${lastN} ${lang=="tl"?"binhi ang nakita":"seeds detected"}</small>`:""}<div class="cf"><span style="font-weight:700">${Math.round(c)}%</span><div class="bar"><i style="width:${c}%"></i></div><small class="note">${t("confidence")}</small></div></div><div class="card">${guide(s,true,lastTy&&lastTy.name)}</div><button class="btn" id="rsoil">${t("soilBtn")}</button><button class="btn g" id="rdone">${t("done")}</button></div>`;
ov("res");R.scrollTop=0;R.onclick=e=>{const b=e.target.closest("[data-t]");if(b){lastTy={name:b.dataset.t,conf:1};openRes(id,c,img)}};$("#rbk").onclick=()=>ov(null);$("#rdone").onclick=()=>{ov(null);go("home")};$("#rsoil").onclick=()=>{ov(null);go("soil",id)}}
function soilPhoto(f){if(!f)return;$("#sthumb").innerHTML=`<img class="thumb" src="${URL.createObjectURL(f)}" alt=""><p class="note" style="margin:8px 0 0">${t("photoNote")}</p>`}
$("#sp1").onchange=e=>soilPhoto(e.target.files[0]);$("#sp2").onchange=e=>soilPhoto(e.target.files[0]);

async function aiStatus(){const el=$("#ready");let n=0;try{n=(await getLabels()).filter(x=>x!="not_seed").length}catch(e){}
el.className="ready";el.innerHTML=t("ready",n)}

/* ===== APPLY LANGUAGE ===== */
function applyLang(){
document.documentElement.lang=lang=="tl"?"fil":"en";
$$("[data-i]").forEach(el=>el.innerHTML=t(el.dataset.i));
$("#sq").placeholder=t("search");$("#hb").setAttribute("aria-label",t("settings"));
$("#dt").textContent=new Date().toLocaleDateString(t("loc"),{month:"long",day:"numeric",year:"numeric"});
$$("#lang [data-l]").forEach(b=>b.classList.toggle("on",b.dataset.l==lang));
if(!$("#ana").classList.contains("on"))$("#atx").textContent=t("analyzing");
renderSeeds();aiStatus();
const p=cur();if(p=="guide")$("#gout").innerHTML=guide(find($("#gs").value));if(p=="settings")renderH();if(p=="home")$("#ns").textContent=hist.length;
$("#sout").hidden=true;$("#sout2").innerHTML=""}
$("#lang").onclick=e=>{const b=e.target.closest("[data-l]");if(!b)return;lang=b.dataset.l;try{localStorage.setItem("bs_lang",lang)}catch(e){}applyLang()};
applyLang();
go("home");

/* ===== HOMEPAGE: 10s BinhiScan splash -> Get Started ===== */
function landing(){const L=$("#land");if(!L)return;
const LOGO='<svg class="logo" viewBox="0 0 100 100"><circle cx="50" cy="46" r="38" fill="#efe7c6"/><path d="M5 50Q50 120 95 50Q50 92 5 50Z" fill="#2f7d32"/><path d="M11 53Q50 104 89 53Q50 88 11 53Z" fill="#86c442"/><path class="st" d="M50 78C50 64 48 52 52 35" fill="none" stroke="#1c2a1c" stroke-width="3.4" stroke-linecap="round"/><path class="lf1" d="M50 63C40 65 31 59 27 48C40 46 48 53 50 63Z" fill="#3a9a3a"/><path class="lf2" d="M52 40C47 24 55 10 69 5C73 22 66 36 52 40Z" fill="#ee8a2b"/></svg>';
const dots=Array.from({length:16},(_,i)=>`<i style="--x:${(i*37+8)%96}%;--s:${3+(i%4)*2}px;--d:${9+(i%5)*2.2}s;--l:${(i*0.9)%7}s"></i>`).join("");
const name="BinhiScan".split("").map((c,i)=>`<span style="--i:${i}">${c}</span>`).join("");
L.innerHTML=`<div class="lbg">${dots}</div>
<section class="ls"><div class="lseed"><span class="rg"></span><span class="rg"></span><span class="rg"></span><span class="core"></span>${LOGO}<u></u></div>
<h1 class="lname" aria-label="BinhiScan">${name}</h1><p class="ltag2">Kilalanin · Itanim · Palaguin</p><div class="lbar"><i></i></div></section>
<section class="lg2"><div class="lw">
<div class="lorb it" style="--k:0"><div class="o1"><i></i></div><div class="o2"><i></i></div><div class="c">${LOGO}</div></div>
<h1 class="it" style="--k:1">Kilalanin ang binhi.<em>Itanim nang tama.</em></h1>
<p class="sb it" style="--k:2">Identify the seed. Learn how to plant it.</p>
<div class="lpills it" style="--k:3"><span><svg class="ic"><use href="#i-cam"/></svg>Scan</span><span><svg class="ic"><use href="#i-guide"/></svg>Planting guide</span><span><svg class="ic"><use href="#i-sun"/></svg>Best months</span></div>
<button class="btn it" id="lgo" style="--k:4">Get Started <svg class="ic" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button></div></section>`;
setTimeout(()=>L.classList.add("go"),10000);
$("#lgo").onclick=()=>{L.classList.add("off");go("home")}}
landing();
