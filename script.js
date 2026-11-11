// Hero slider
const slides=[...document.querySelectorAll('.slide')],dots=[...document.querySelectorAll('.dots span')];let hi=0,timer;
function showHero(n){hi=(n+slides.length)%slides.length;slides.forEach((s,i)=>s.classList.toggle('active',i===hi));dots.forEach((d,i)=>d.classList.toggle('on',i===hi))}
function auto(){clearInterval(timer);timer=setInterval(()=>showHero(hi+1),5000)}
hPrev.onclick=()=>{showHero(hi-1);auto()};hNext.onclick=()=>{showHero(hi+1);auto()};
dots.forEach((d,i)=>d.onclick=()=>{showHero(i);auto()});auto();

// Best sellers
const products=[['Fabric Accent Chair',20,'fa-chair'],['Luxury King Bed Frame',25,'fa-bed'],['Glass Top Center Table',15,'fa-couch'],['Outdoor Patio Set',25,'fa-table'],['Space-Saving Wall Desk',15,'fa-lamp-desk']];
track.innerHTML=products.map(p=>`<div class="prod"><div class="img"><i class="fa-solid ${p[2]==='fa-lamp-desk'?'fa-lightbulb':p[2]}"></i></div><p>${p[0]}</p><div class="st">${'<i class="fa-regular fa-star"></i> '.repeat(5)}</div><p>$${p[1]}.00</p></div>`).join('');
pPrev.onclick=()=>track.scrollBy({left:-300,behavior:'smooth'});pNext.onclick=()=>track.scrollBy({left:300,behavior:'smooth'});

// Countdown (ends in 54 days)
const end=Date.now()+54*864e5+5*36e5+29*6e4+37e3,pad=n=>String(n).padStart(2,'0');
setInterval(()=>{let t=Math.max(0,end-Date.now());d.textContent=Math.floor(t/864e5);h.textContent=pad(Math.floor(t%864e5/36e5));m.textContent=pad(Math.floor(t%36e5/6e4));s.textContent=pad(Math.floor(t%6e4/1e3))},1000);

// Testimonials
const T=[['“From browsing to delivery, everything felt effortless. The furniture looks incredibly elegant in our new home.”','Meera'],['“Our living room finally feels complete. The quality and finish are far beyond what I expected.”','Karthik'],['“Warm bedroom that finally feels like my own space. The attention to detail is incredible.”','Archana'],['“Beautiful pieces, fast delivery and a team that truly cares. Highly recommended.”','Priya']];let ti=0;
function showT(n){ti=(n+T.length)%T.length;quote.textContent=T[ti][0];who.textContent=T[ti][1];idx.textContent=pad(ti+1)}
tPrev.onclick=()=>showT(ti-1);tNext.onclick=()=>showT(ti+1);showT(0);

// Newsletter
nl.onsubmit=e=>{e.preventDefault();nlMsg.textContent='Thank you for subscribing!'};