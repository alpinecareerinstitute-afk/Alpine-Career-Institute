/* 📷 APNA INSTAGRAM LINK YAHAN LIKHO (poora link, jaise https://www.instagram.com/alpine_coaching) */
const INSTAGRAM = "https://www.instagram.com/alpinecareerinstitute";
document.querySelectorAll('[data-insta]').forEach(a => { a.href = INSTAGRAM; a.target = '_blank'; a.rel = 'noopener'; });

/* 🏆 TOPPERS KI LIST: har topper ke liye naam, class, subject aur percentage yahan badlo.
   Subject nahi dikhana ho to subject: '' likh do.
   Photo isi folder mein hai (T1 ... T15, jpg ya png dono chalenge). Naya topper: ek line copy karo.
   Kisi ko hatana ho to uski line delete kar do. */
const TOPPERS = [
  { img: 'T1', name: 'VAISHNAVI', cls: 'Class 12', subject: 'CHEMISTRY', score: '82%' },
  { img: 'T2', name: 'SHIVANI SINGH', cls: 'Class 10', subject: 'SCIENCE', score: '89.2%' },
  { img: 'T3', name: 'SHAGUN RAJAWAT', cls: 'Class  10', subject: 'SCIENCE', score: '86.2%' },
  { img: 'T4', name: 'HAPPY', cls: 'Class 12', subject: 'CHEMISTRY', score: '91%' },
  { img: 'T5', name: 'MEDHAVI', cls: 'Class 10', subject: 'SCIENCE', score: '92%' },
  { img: 'T6', name: 'MAYANK', cls: 'Class 10', subject: 'SCIENCE', score: '91%' },
  { img: 'T7', name: 'HARSH VARSHAN', cls: 'Class 10', subject: 'SCIENCE', score: '90%' },
  { img: 'T8', name: 'DIPIKA', cls: 'Class 10', subject: 'SCIENCE', score: '94%' },
  { img: 'T9', name: 'CHETANIYA PANDEY', cls: 'Class 10', subject: 'SCIENCE', score: '92%' },
  { img: 'T10', name: 'AYUSH YADAV', cls: 'Class 10', subject: 'SCIENCE', score: '90%' },
  { img: 'T11', name: 'AYUSHI', cls: 'Class 10', subject: 'SCIENCE', score: '88%' },
  { img: 'T12', name: 'ASTHA', cls: 'Class 10', subject: 'SCIENCE', score: '95%' },
  { img: 'T13', name: 'APARNA YADAV', cls: 'Class 10', subject: 'SCIENCE', score: '92%' },
  { img: 'T14', name: 'AKANSHA PANDEY', cls: 'Class 10', subject: 'SCIENCE', score: '94.2%' },
  { img: 'T15', name: 'AANCHAL PANDEY', cls: 'Class 10', subject: 'SCIENCE', score: '82.2%' }
];
/* photo .jpg, .png, .jpeg ya .webp kisi bhi format mein ho to chalegi */
const EXTS = ['jpg', 'png', 'jpeg', 'webp', 'JPG', 'PNG', 'JPEG', 'WEBP']; /* bade akshar wale (.JPG) bhi chalenge */
function nextExt(img) {
  const base = img.dataset.base || img.getAttribute('src').replace(/\.[^./]+$/, '');
  const i = +(img.dataset.i || 0) + 1;
  img.dataset.base = base;
  if (i < EXTS.length) { img.dataset.i = i; img.src = `${base}.${EXTS[i]}`; } else img.remove();
}
const topsBox = document.getElementById('tops');
if (topsBox) topsBox.innerHTML = TOPPERS.map(t =>
  `<div class="top"><div class="pic">🎓<img src="${t.img}.jpg" data-base="${t.img}" data-i="0" alt="${t.name}" onerror="nextExt(this)"></div><div class="score">${t.score}</div><h3>${t.name}</h3><span>${t.cls}</span>${t.subject ? `<b class="tsub">${t.subject}</b>` : ''}</div>`
).join('');

/* 🖼️ GALLERY: photos ab index.html mein hain ("OUR GALLERY" section, <figure> lines). Wahin src badlo ya nayi line jodo.
   class="g-item hide" wali photos "Show more photos" button dabane par dikhti hain. */
const galBox = document.getElementById('gallery-grid');
if (galBox) {
  const more = document.getElementById('gmore');
  if (more) {
    if (!galBox.querySelector('.hide')) more.remove();
    else more.onclick = () => { galBox.querySelectorAll('.hide').forEach(f => f.classList.remove('hide')); more.remove(); };
  }
}

/* 🔔 TICKER (upar chalti patti): yahan likha text badlo, ya naya jodo */
/* 🪔 DIWALI THEME: true = chalu, false = band. DIWALI_UNTIL ki date ke baad apne aap band ho jati hai.
   (Diwali 2026: 8 November. Panchang se tithi ek baar dekh lena. Dates yahan badal sakte ho.) */
const DIWALI_ON = true, DIWALI_DATE = '2026-11-08', DIWALI_UNTIL = '2026-11-15';
const diwaliActive = DIWALI_ON && new Date() <= new Date(DIWALI_UNTIL + 'T23:59:59');
if (diwaliActive) { document.documentElement.classList.add('diwali'); document.title = '🪔 ' + document.title; }
else ['dwCard', 'fwChem', 'dwish', 'fw'].forEach(id => { const e = document.getElementById(id); if (e) e.remove(); });
const daysToDiwali = () => Math.ceil((new Date(DIWALI_DATE + 'T00:00:00') - new Date().setHours(0, 0, 0, 0)) / 864e5);
function dchipUpdate() {
  const c = document.getElementById('dchip'); if (!c) return; const d = daysToDiwali(), hi = document.documentElement.lang === 'hi';
  c.textContent = d > 1 ? (hi ? `🪔 दीपावली में ${d} दिन बाकी` : `🪔 Diwali in ${d} days`) : d === 1 ? (hi ? '🪔 कल दीपावली है!' : '🪔 Diwali is tomorrow!') : d === 0 ? (hi ? '🪔 शुभ दीपावली!' : '🪔 Happy Diwali!') : (hi ? '🪔 दीपावली की शुभकामनाएँ' : '🪔 Diwali greetings');
}

/* 📢 NOTICE: yahan kuch likhoge to sabse upar ek ghoshna patti aayegi (jaise 'New batch 1 November se shuru'). Khali chhodo to nahi dikhegi. */
const NOTICE = '';
const TICKER = ['ENROLL NOW!', 'CBSE / ICSE BOARD', 'CLASS 1 TO 12', 'ENGLISH CLASSES AVAILABLE', 'MORNING BATCHES FOR K.V SECOND SHIFT', 'CALL 88299 56645'];
const ttrack = document.getElementById('ttrack');
if (ttrack) ttrack.innerHTML = [...TICKER, ...TICKER].map(t => `<span>${t}</span>`).join('');

/* 🕒 BATCH TIMINGS & FEES: jab tak list khali hai, ye section chhupa rehta hai.
   Aise likho (har class ke liye ek line):
   { cls: 'Class 9 – 12', timing: '4:00 PM – 6:00 PM', fee: '₹ 1000 / month' }, */
const BATCHES = [];

/* ⭐ REVIEWS: jab tak list khali hai, ye section chhupa rehta hai.
   Aise likho: { name: 'Parent of Rahul, Class 10', text: 'Bahut accha padhate hain.' }, */
const REVIEWS = [];

const addNav = (href, label) => { const b = document.querySelector('#links .btn'); if (b) { const a = document.createElement('a'); a.href = href; a.textContent = label; b.before(a); } };
if (BATCHES.length) {
  const sec = document.getElementById('timings'), tabs = document.getElementById('ttabs'), panel = document.getElementById('tpanel');
  sec.hidden = false; addNav('#timings', 'Fees');
  const showB = i => {
    const b = BATCHES[i];
    tabs.querySelectorAll('button').forEach((x, j) => x.classList.toggle('on', i === j));
    panel.innerHTML = `<div class="tcell"><span>🕒 Timing</span><b>${b.timing || '-'}</b></div><div class="tcell"><span>💰 Fees</span><b>${b.fee || '-'}</b></div><a class="btn" href="#contact">Enquire now</a>`;
    panel.classList.remove('swap'); void panel.offsetWidth; panel.classList.add('swap');
  };
  BATCHES.forEach((b, i) => { const x = document.createElement('button'); x.textContent = b.cls; x.onclick = () => showB(i); tabs.appendChild(x); });
  showB(0);
}
if (REVIEWS.length) {
  document.getElementById('reviews').hidden = false; addNav('#reviews', 'Reviews');
  document.getElementById('rgrid').innerHTML = REVIEWS.map(r => `<div class="rcard"><p>${r.text}</p><b>${r.name}</b></div>`).join('');
}

/* 👩‍🏫 TEACHERS: jab tak list khali hai, ye section chhupa rehta hai.
   Aise likho (photo isi folder mein, jaise teacher1.jpg):
   { name: 'Naam', role: 'Maths Teacher', qual: 'M.Sc, B.Ed', photo: 'teacher1' }, */
const FACULTY = [];
if (FACULTY.length) {
  document.getElementById('faculty').hidden = false; addNav('#faculty', 'Teachers');
  document.getElementById('fcards').innerHTML = FACULTY.map(f => `<div class="fc"><div class="fpic">🧑‍🏫<img src="${f.photo}.jpg" data-base="${f.photo}" data-i="0" alt="${f.name}" onerror="nextExt(this)"></div><h3>${f.name}</h3><b>${f.role || ''}</b><small>${f.qual || ''}</small></div>`).join('');
}

/* 🧠 QUIZ: class chuno, 10 random sawal (questions.js ke bank se). Naye sawal har baar, purane sawal tab tak nahi aate jab tak bank khatam na ho. */
const QUIZ_COUNT = 10;
/* Kis class ke kitne sawal aayein: [class, kitne]. Jaise Class 10 chuno to 7 sawal Class 10 ke aur 3 Class 9 ke. */
const MIX = { 9: [[9, 10]], 10: [[10, 7], [9, 3]], 11: [[11, 6], [10, 2], [9, 2]], 12: [[12, 5], [11, 3], [10, 1], [9, 1]] };
const shuffle = arr => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
let seen = {};
try { seen = JSON.parse(localStorage.getItem('alpineSeen') || '{}'); } catch (e) {}
const saveSeen = () => { try { const k = Object.keys(seen); if (k.length > 800) k.slice(0, 400).forEach(x => delete seen[x]); localStorage.setItem('alpineSeen', JSON.stringify(seen)); } catch (e) {} };
/* ek sawal nikalo. Pehle static list (BANK), phir table/maths generators (GEN). Kuch bhi galat ho to chhod ke aage badh jata hai. */
const subjectsFor = (lvl, group) => lvl <= 10 ? ['Science', 'Maths'] : ['Physics', 'Chemistry', group];
const gensFor = (lvl, sub) => { const g = typeof GEN !== 'undefined' ? GEN[lvl] : null; return !g ? [] : Array.isArray(g) ? (sub === 'Maths' ? g : []) : (g[sub] || []); };
const listFor = (lvl, sub) => (typeof BANK !== 'undefined' && BANK[lvl] && BANK[lvl][sub]) || [];
function getQ(lvl, group, used) {
  const subs = subjectsFor(lvl, group);
  for (let t = 0; t < 60; t++) {
    const sub = pk(subs); let q = null;
    try {
      const gens = gensFor(lvl, sub), arr = listFor(lvl, sub);
      if (gens.length && (!arr.length || Math.random() < .65)) {
        for (let k = 0; k < 14; k++) { q = pk(gens)(); if (q && !seen[q[0]] && !used.has(q[0])) break; }
      } else if (arr.length) {
        let fresh = arr.filter(x => !seen[x[0]] && !used.has(x[0]));
        if (!fresh.length) { arr.forEach(x => delete seen[x[0]]); fresh = arr.filter(x => !used.has(x[0])); }
        q = fresh.length ? pk(fresh) : null;
      }
    } catch (e) { q = null; }
    if (!q || q.length < 5 || used.has(q[0])) continue;
    used.add(q[0]); seen[q[0]] = 1; return q;
  }
  return null;
}
function buildRound(cls, group) {
  if (typeof BANK === 'undefined' || typeof GEN === 'undefined') throw new Error('questions.js load nahi hui');
  const used = new Set(), all = [];
  MIX[cls].forEach(([lvl, n]) => { for (let i = 0; i < n; i++) { const q = getQ(lvl, group, used); if (q) all.push(q); } });
  /* agar kisi level ke sawal kam pad gaye to baaki levels se bhar do */
  const lv = MIX[cls].map(m => m[0]);
  for (let t = 0; all.length < QUIZ_COUNT && t < 40; t++) { const q = getQ(pk(lv), group, used); if (q) all.push(q); }
  if (!all.length) throw new Error('Class ' + cls + ' ke liye koi sawal nahi mila (questions.js check karo)');
  saveSeen();
  return shuffle(all).map(q => ({ q: q[0], o: shuffle(q.slice(1).map((t, i) => ({ t, ok: i === 0 }))) }));
}
const qStats = () => { try { return JSON.parse(localStorage.getItem('alpineQStats') || '{"taken":0,"best":0}'); } catch (e) { return { taken: 0, best: 0 }; } };
const recordStats = sc => { const st = qStats(); st.taken++; st.best = Math.max(st.best, sc); try { localStorage.setItem('alpineQStats', JSON.stringify(st)); } catch (e) {} };
const statLine = () => { const st = qStats(); return st.taken ? `<small class="qstat">Quizzes taken: ${st.taken} · Your best score: ${st.best}/${QUIZ_COUNT}</small>` : ''; };
function certificate(name, score, total, label) {
  const c = document.createElement('canvas'); c.width = 1200; c.height = 850; const x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, 1200, 850); g.addColorStop(0, '#0050b3'); g.addColorStop(1, '#35b6ff'); x.fillStyle = g; x.fillRect(0, 0, 1200, 850);
  x.fillStyle = '#fff'; x.fillRect(30, 30, 1140, 790); x.strokeStyle = '#fcc200'; x.lineWidth = 8; x.strokeRect(52, 52, 1096, 746);
  x.textAlign = 'center'; x.fillStyle = '#0050b3'; x.font = '800 56px sans-serif'; x.fillText('ALPINE Career Institute', 600, 165);
  x.fillStyle = '#1d2630'; x.font = '700 34px sans-serif'; x.fillText('Certificate of Participation', 600, 235);
  x.fillStyle = '#5b6672'; x.font = '24px sans-serif'; x.fillText('This is to certify that', 600, 320);
  let fs = 68; x.font = `800 ${fs}px sans-serif`; while (x.measureText(name).width > 980 && fs > 30) { fs -= 4; x.font = `800 ${fs}px sans-serif`; }
  x.fillStyle = '#0050b3'; x.fillText(name, 600, 410);
  x.fillStyle = '#fcc200'; x.fillRect(300, 432, 600, 5);
  x.fillStyle = '#5b6672'; x.font = '24px sans-serif'; x.fillText(`took part in the ALPINE Practice Quiz (${label}) and scored`, 600, 495);
  x.fillStyle = '#0050b3'; x.font = '800 120px sans-serif'; x.fillText(`${score} / ${total}`, 600, 635);
  x.fillStyle = '#1d2630'; x.font = '22px sans-serif'; x.fillText(new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }), 600, 725);
  x.fillStyle = '#5b6672'; x.fillText('सही पढ़ें, सही सीखें', 600, 765);
  c.toBlob(b => { const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'ALPINE-quiz-certificate.png'; a.click(); toast('Certificate downloaded 🎓'); }, 'image/png');
}
const qbox = document.getElementById('qbox');
if (qbox) {
  let cls = 0, group = '', round = [], qi = 0, score = 0;
  const label = () => `Class ${cls}${cls >= 11 ? ' · ' + (group === 'Maths' ? 'Maths (PCM)' : 'Biology (PCB)') : ''}`;
  const start = () => {
    try { round = buildRound(cls, group); qi = 0; score = 0; draw(); }
    catch (err) { qbox.innerHTML = `<h3>⚠️ Quiz load nahi ho paya</h3><p class="qnote">${err.message}. <b>questions.js</b> file ko <b>index.html</b> ke saath usi folder mein rakho aur page refresh karo.</p><button class="btn ghost2" id="qchg2" type="button">Change class</button>`; document.getElementById('qchg2').onclick = pickClass; }
  };
  const pickClass = () => {
    qbox.innerHTML = '<h3>Choose your class</h3><div class="qopts">' + [9, 10, 11, 12].map(c => `<button data-c="${c}">Class ${c}</button>`).join('') + '</div>' + statLine();
    qbox.querySelectorAll('button').forEach(b => b.onclick = () => { cls = +b.dataset.c; cls >= 11 ? pickGroup() : start(); });
  };
  const pickGroup = () => {
    qbox.innerHTML = `<h3>Class ${cls}: choose your group</h3><p class="qnote">Physics and Chemistry questions are included. Pick one more subject:</p><div class="qopts"><button data-g="Maths">Maths (PCM)</button><button data-g="Biology">Biology (PCB)</button></div><button class="qback" id="qb">← Back</button>`;
    qbox.querySelectorAll('[data-g]').forEach(b => b.onclick = () => { group = b.dataset.g; start(); });
    document.getElementById('qb').onclick = pickClass;
  };
  const draw = () => {
    if (qi >= round.length) {
      recordStats(score); const good = score >= round.length * .8, msg = good ? 'Excellent! 🎉' : score >= round.length / 2 ? 'Good try! 👍' : 'Keep practising! 💪';
      qbox.innerHTML = `<div class="qres"><small>${label()}</small><div class="qscore">${score}/${round.length}</div><h3>${msg}</h3><p>Want to score even better? Join ALPINE.</p><a class="btn" href="#contact">Join now</a> <button class="btn ghost2" id="qshare" type="button">📤 Share score</button> <button class="btn ghost2" id="qcert" type="button">🎓 Certificate</button> <button class="btn ghost2" id="qagain">Try new questions</button> <button class="btn ghost2" id="qchg">Change class</button></div>`;
      document.getElementById('qagain').onclick = start; document.getElementById('qchg').onclick = pickClass;
      document.getElementById('qshare').onclick = () => window.open('https://wa.me/?text=' + encodeURIComponent(`I scored ${score}/${round.length} in the ALPINE Career Institute quiz (${label()})! Try it: ${location.href}`), '_blank');
      document.getElementById('qcert').onclick = () => { let nm = ''; try { nm = window.prompt('Name for the certificate:', (document.getElementById('fname') || {}).value || ''); } catch (e) {} nm = (nm || '').trim().slice(0, 40); if (nm) certificate(nm, score, round.length, label()); };
      if (good) { const r = qbox.getBoundingClientRect(); confetti(r.left + r.width / 2, r.top + 60); }
      return;
    }
    const q = round[qi];
    qbox.innerHTML = `<div class="qbar"><i style="width:${qi / round.length * 100}%"></i></div><small>${label()} · Question ${qi + 1} of ${round.length}</small><h3>${q.q}</h3><div class="qopts">${q.o.map((o, i) => `<button data-i="${i}">${o.t}</button>`).join('')}</div>`;
    qbox.querySelectorAll('.qopts button').forEach(b => b.onclick = () => {
      const pick = q.o[+b.dataset.i]; if (pick.ok) score++;
      qbox.querySelectorAll('.qopts button').forEach((x, i) => { x.disabled = true; if (q.o[i].ok) x.classList.add('ok'); });
      if (!pick.ok) b.classList.add('no');
      setTimeout(() => { qi++; draw(); }, 1000);
    });
  };
  pickClass();
}

/* save number + share */
const vcfBtn = document.getElementById('vcf'), shareBtn = document.getElementById('share');
if (vcfBtn) vcfBtn.onclick = () => {
  const v = `BEGIN:VCARD\nVERSION:3.0\nFN:ALPINE Career Institute\nORG:ALPINE Career Institute\nTEL;TYPE=CELL:+918829956645\nEMAIL:alpinecareerinstitute@gmail.com\nADR;TYPE=WORK:;;Sadhana Sadan B-140 UPSIDC Navipur;Kanpur;Uttar Pradesh;209311;India\n${location.protocol.startsWith('http') ? 'URL:' + location.href + '\n' : ''}END:VCARD`;
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([v], { type: 'text/vcard' })); a.download = 'ALPINE-Career-Institute.vcf'; a.click();
};
if (shareBtn) shareBtn.onclick = () => {
  const text = 'ALPINE Career Institute, Kanpur: CBSE / ICSE coaching for Class 1 to 12.';
  if (navigator.share) navigator.share({ title: 'ALPINE Career Institute', text, url: location.href }).catch(() => {});
  else window.open('https://wa.me/?text=' + encodeURIComponent(text + ' ' + location.href), '_blank');
};

/* Footer year */
document.getElementById('yr').textContent = new Date().getFullYear();

/* Mobile menu */
const burger = document.getElementById('burger'), links = document.getElementById('links');
burger.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

/* Navbar turns solid on scroll */
const nav = document.getElementById('nav');
if (!nav.classList.contains('solid')) {
  const onScroll = () => nav.classList.toggle('solid', scrollY > 40);
  addEventListener('scroll', onScroll); onScroll();
}

/* Count-up numbers (home page) */
const nums = document.querySelectorAll('[data-n]');
if (nums.length) {
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, end = +el.dataset.n; let n = 0;
    const step = Math.max(1, Math.ceil(end / 50));
    const t = setInterval(() => {
      n = Math.min(end, n + step);
      el.textContent = n + (el.dataset.s || '');
      if (n >= end) clearInterval(t);
    }, 30);
    io.unobserve(el);
  }), { threshold: .6 });
  nums.forEach(n => io.observe(n));
}

/* Gallery: reveal + lightbox */
const items = document.querySelectorAll('.g-item');
if (items.length) {
  const reveal = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('show'), (e.target.dataset.i % 3) * 120);
      reveal.unobserve(e.target);
    }
  }), { threshold: .15 });
  items.forEach((it, i) => { it.dataset.i = i; reveal.observe(it); });

  const lb = document.getElementById('lb'), lbImg = lb.querySelector('img');
  let list = [], li = 0;
  const showAt = i => { li = (i + list.length) % list.length; lbImg.src = list[li].querySelector('img').src; };
  items.forEach(it => it.addEventListener('click', () => {
    list = [...items].filter(f => { const im = f.querySelector('img'); return im && im.naturalWidth && !f.classList.contains('hide'); });
    if (!list.includes(it)) return; // empty slot
    showAt(list.indexOf(it)); lb.classList.add('open');
  }));
  lb.querySelector('.prev').addEventListener('click', e => { e.stopPropagation(); showAt(li - 1); });
  lb.querySelector('.next').addEventListener('click', e => { e.stopPropagation(); showAt(li + 1); });
  lb.addEventListener('click', () => lb.classList.remove('open'));
  addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') lb.classList.remove('open');
    if (e.key === 'ArrowRight') showAt(li + 1);
    if (e.key === 'ArrowLeft') showAt(li - 1);
  });

}

/* Contact form: class -> subject dropdowns, then WhatsApp */
/* 📚 COURSES BADLO TO YAHAN BHI BADLO: class ka naam aur uske subjects */
const CLASS_SUBJECTS = {
  'Class 1 – 5': ['All subjects'],
  'Class 6 – 8': ['Math', 'Science', 'English'],
  'Class 9 – 12': ['Physics', 'Maths', 'Chemistry', 'Biology', 'Accountancy', 'BST (Business Studies)', 'Economics', 'English']
};
const form = document.getElementById('form');
if (form) {
  const clsSel = document.getElementById('fclass'), subSel = document.getElementById('fsub');
  const opt = (v, text = v, sel = false) => { const o = document.createElement('option'); o.value = v; o.textContent = text; o.selected = sel; return o; };
  Object.keys(CLASS_SUBJECTS).forEach(k => clsSel.appendChild(opt(k)));
  clsSel.addEventListener('change', () => {
    const list = CLASS_SUBJECTS[clsSel.value];
    subSel.innerHTML = ''; subSel.disabled = false;
    if (list.length === 1) subSel.appendChild(opt(list[0], list[0], true));
    else {
      const ph = opt('', 'Select subject', true); ph.disabled = true; subSel.appendChild(ph);
      list.forEach(x => subSel.appendChild(opt(x)));
      subSel.appendChild(opt('Multiple subjects (write in message)'));
    }
    subSel.classList.remove('pop'); void subSel.offsetWidth; subSel.classList.add('pop');
  });
  form.addEventListener('submit', e => {
    e.preventDefault();
    const text = `Hello ALPINE Career Institute, I am ${fname.value}. Class: ${clsSel.value}. Subject: ${subSel.value}. ${fmsg.value}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank');
  });
}

/* Toppers slider: auto-slide, arrows, pause on hover/touch */
const track = document.getElementById('tops');
if (track) {
  const step = () => track.querySelector('.top').offsetWidth + 24;
  const go = dir => {
    const end = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    if (dir > 0 && end) track.scrollTo({ left: 0 });
    else if (dir < 0 && track.scrollLeft <= 4) track.scrollTo({ left: track.scrollWidth });
    else track.scrollBy({ left: dir * step() });
  };
  document.getElementById('tnext').onclick = () => go(1);
  document.getElementById('tprev').onclick = () => go(-1);
  let timer = setInterval(() => go(1), 2800);
  const hold = () => clearInterval(timer);
  const play = () => { clearInterval(timer); timer = setInterval(() => go(1), 2800); };
  track.addEventListener('mouseenter', hold); track.addEventListener('mouseleave', play);
  track.addEventListener('touchstart', hold, { passive: true }); track.addEventListener('touchend', play);
}

/* ===== EXTRA ANIMATIONS ===== */
/* scroll progress bar */
const bar = document.createElement('div'); bar.className = 'progress'; document.body.appendChild(bar);

/* tag elements for scroll reveal */
const tag = (sel, cls, gap) => document.querySelectorAll(sel).forEach((el, i) => {
  el.classList.add('rv'); if (cls) el.classList.add(cls);
  el.style.setProperty('--d', (i * gap) + 's');
});
tag('.head', '', 0);
tag('.stats .stat', 'z', .12);
tag('.courses .card', 'z', .12);
tag('.why li', 'l', .15);
tag('.ibox', 'z', 0);
tag('.note', '', .15);
tag('.fphoto', 'l', 0);
tag('.fbio', 'r', 0);
tag('.cbox .info', 'l', 0);
tag('.cbox form', 'r', 0);
tag('.step', 'z', .12);
tag('.fc', 'z', .12);
tag('.rcard', 'z', .12);
tag('.qbox', 'z', 0);
tag('details', '', .1);
tag('.mapbox', '', 0);
tag('footer', '', 0);
const rvIO = new IntersectionObserver(entries => entries.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target; el.classList.add('show'); if (el.classList.contains('head')) el.classList.add('ul');
  rvIO.unobserve(el);
  /* remove reveal classes afterwards so hover effects stay snappy */
  setTimeout(() => el.classList.remove('rv', 'show', 'l', 'r', 'z'), 1800 + parseFloat(el.style.getPropertyValue('--d') || 0) * 1000);
}), { threshold: .15 });
document.querySelectorAll('.rv').forEach(el => rvIO.observe(el));

/* 3D tilt on cards (mouse devices only) */
if (matchMedia('(hover:hover)').matches) {
  document.querySelectorAll('.card,.stat,.top,.g-item').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      el.style.transition = 'transform .1s';
      el.style.transform = `perspective(700px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg) translateY(-8px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transition = ''; el.style.transform = ''; });
  });
}

/* floating WhatsApp button (home page, where the number is set) */
let wa = null;
if (typeof WHATSAPP !== 'undefined') {
  wa = document.createElement('a'); wa.className = 'wa'; wa.textContent = '💬';
  wa.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hello ALPINE, I want to know more.')}`;
  wa.target = '_blank'; wa.setAttribute('aria-label', 'Chat on WhatsApp'); document.body.appendChild(wa);
}

/* scroll: progress bar, parallax, WhatsApp button */
const peaks = document.querySelector('.peaks'), bubs = document.querySelectorAll('.bub');
let tick = false;
addEventListener('scroll', () => {
  if (tick) return; tick = true;
  requestAnimationFrame(() => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (scrollY / max * 100) + '%';
    if (wa) wa.classList.toggle('show', scrollY > 300);
    if (peaks && scrollY < 1000) {
      bubs.forEach((b, i) => b.style.translate = `0 ${scrollY * (.08 + i * .05)}px`);
    }
    tick = false;
  });
}, { passive: true });

/* form button feedback */
if (form) form.addEventListener('submit', () => {
  const b = form.querySelector('button'), old = b.textContent;
  b.textContent = 'Opening WhatsApp ✓'; b.classList.add('sent');
  setTimeout(() => { b.textContent = old; b.classList.remove('sent'); }, 2500);
});

/* founder photo: wipe-in reveal */
const fp = document.querySelector('.fphoto');
if (fp) new IntersectionObserver((en, o) => en.forEach(e => { if (e.isIntersecting) { fp.classList.add('in'); o.disconnect(); } }), { threshold: .3 }).observe(fp);

/* rotating subject word in hero */
const rot = document.getElementById('rot');
if (rot) {
  const words = ['Physics', 'Maths', 'Chemistry', 'Biology', 'Accountancy', 'Economics', 'English'];
  let wi = 0;
  setInterval(() => { wi = (wi + 1) % words.length; rot.textContent = words[wi]; rot.classList.remove('swap'); void rot.offsetWidth; rot.classList.add('swap'); }, 2200);
}

/* hero light follows the mouse */
const heroEl = document.querySelector('.hero');

/* mobile bar WhatsApp link, scroll-to-top button, menu highlight */
if (typeof WHATSAPP !== 'undefined') document.querySelectorAll('[data-wa]').forEach(a => a.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hello ALPINE, I want to know more.')}`);
const up = document.createElement('button'); up.className = 'totop'; up.textContent = '↑'; up.setAttribute('aria-label', 'Back to top');
up.onclick = () => scrollTo({ top: 0, behavior: 'smooth' }); document.body.appendChild(up);
addEventListener('scroll', () => up.classList.toggle('show', scrollY > 600), { passive: true });
const spy = new IntersectionObserver(en => en.forEach(e => {
  if (e.isIntersecting) links.querySelectorAll('a').forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('section[id]').forEach(sec => spy.observe(sec));

/* magnetic buttons, hero parallax, confetti */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, hover = matchMedia('(hover:hover)').matches;
if (hover && !reduce) {
  document.querySelectorAll('.btn').forEach(b => {
    b.addEventListener('mousemove', e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .18}px,${(e.clientY - r.top - r.height / 2) * .3}px)`; });
    b.addEventListener('mouseleave', () => b.style.transform = '');
  });
}
function confetti(x, y) {
  if (reduce) return;
  const cols = ['#fcc200', '#35b6ff', '#0050b3', '#ffffff', '#25d366'];
  for (let i = 0; i < 32; i++) {
    const p = document.createElement('span');
    p.style.cssText = `position:fixed;left:${x}px;top:${y}px;width:9px;height:14px;border-radius:2px;background:${cols[i % 5]};z-index:1000;pointer-events:none`;
    document.body.appendChild(p);
    const a = Math.random() * Math.PI * 2, d = 90 + Math.random() * 190;
    p.animate([{ transform: 'translate(0,0) rotate(0)', opacity: 1 }, { transform: `translate(${Math.cos(a) * d}px,${Math.sin(a) * d + 120}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }],
      { duration: 900 + Math.random() * 700, easing: 'cubic-bezier(.2,.8,.3,1)' }).onfinish = () => p.remove();
  }
}
document.querySelectorAll('.hero .cta .btn, #form button').forEach(b => b.addEventListener('click', e => confetti(e.clientX, e.clientY)));

/* card spotlight + custom cursor ring (desktop) */
document.querySelectorAll('.card,.step,.stat,.rcard').forEach(el => {
  el.classList.add('glow');
  el.addEventListener('mousemove', e => { const r = el.getBoundingClientRect(); el.style.setProperty('--gx', (e.clientX - r.left) + 'px'); el.style.setProperty('--gy', (e.clientY - r.top) + 'px'); });
});
if (hover && !reduce) {
  const ring = document.createElement('div'); ring.className = 'cur'; document.body.appendChild(ring);
  let cx = -50, cy = -50, tx = -50, ty = -50;
  addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; ring.classList.toggle('big', !!e.target.closest('a,button,summary,.g-item,.card,.top')); }, { passive: true });
  (function loop() { cx += (tx - cx) * .18; cy += (ty - cy) * .18; ring.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`; requestAnimationFrame(loop); })();
}

/* scroll ring on back-to-top button + sparkle trail */
addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  up.style.setProperty('--p', max > 0 ? scrollY / max * 100 : 0);
}, { passive: true });
if (hover && !reduce) {
  let last = 0;
  addEventListener('mousemove', e => {
    const n = performance.now(); if (n - last < 45) return; last = n;
    const d = document.createElement('i'); d.className = 'spk';
    d.style.left = e.clientX + 'px'; d.style.top = e.clientY + 'px';
    d.style.background = Math.random() < .5 ? '#fcc200' : '#35b6ff';
    document.body.appendChild(d); setTimeout(() => d.remove(), 700);
  }, { passive: true });
}

/* ===== STUDY TOOLS ===== */
const pcRows = document.getElementById('pcRows');
if (pcRows) {
  const out = document.getElementById('pcOut');
  const addRow = () => { const d = document.createElement('div'); d.className = 'pcr'; d.innerHTML = '<input class="pcn" placeholder="e.g. Maths"><input class="pco" type="number" min="0" placeholder="Marks"><input class="pct" type="number" min="1" value="100" aria-label="Total marks">'; pcRows.appendChild(d); };
  for (let i = 0; i < 5; i++) addRow();
  document.getElementById('pcAdd').onclick = addRow;
  pcRows.addEventListener('input', () => {
    let o = 0, t = 0;
    pcRows.querySelectorAll('.pcr').forEach(r => { const a = parseFloat(r.querySelector('.pco').value), b = parseFloat(r.querySelector('.pct').value); if (!isNaN(a) && b > 0) { o += Math.min(a, b); t += b; } });
    if (!t) { out.textContent = 'Enter marks to see your percentage.'; return; }
    const p = o / t * 100, msg = p >= 90 ? 'Outstanding! 🌟' : p >= 75 ? 'Very good! 👏' : p >= 60 ? 'Good, keep going! 👍' : p >= 33 ? 'Pass. Aim higher! 💪' : 'Needs more practice. We can help! 📚';
    out.innerHTML = `<div class="pcbig">${p.toFixed(2)}%</div><div class="pbar"><i style="width:${Math.min(p, 100)}%"></i></div><small>${o} / ${t} marks · ${msg}</small>`;
  });
}
const spCls = document.getElementById('spCls');
if (spCls) {
  const SUBJ = { 'Class 6 – 8': ['Math', 'Science', 'English'], 'Class 9 – 10': ['Maths', 'Science', 'English'], 'Class 11 – 12 · Maths (PCM)': ['Physics', 'Chemistry', 'Maths', 'English'], 'Class 11 – 12 · Biology (PCB)': ['Physics', 'Chemistry', 'Biology', 'English'] };
  Object.keys(SUBJ).forEach(k => { const o = document.createElement('option'); o.value = k; o.textContent = k; spCls.appendChild(o); });
  const spR = document.getElementById('spR'), spH = document.getElementById('spH'), spOut = document.getElementById('spOut');
  const plan = () => {
    spH.textContent = spR.value;
    if (!spCls.value) { spOut.textContent = 'Select your class to get a plan.'; return; }
    const total = spR.value * 60, rev = Math.round(total * .15 / 5) * 5, subs = SUBJ[spCls.value], each = Math.round((total - rev) / subs.length / 5) * 5;
    const rows = [...subs.map(x => [x, each]), ['Revision', rev]], mx = Math.max(...rows.map(r => r[1]));
    spOut.innerHTML = rows.map(([x, m]) => `<div class="sprow"><span>${x}</span><div class="pbar"><i style="width:${m / mx * 100}%"></i></div><b>${m} min</b></div>`).join('') + '<small>💡 Study 50 minutes, then take a 10-minute break.</small>';
  };
  spCls.onchange = plan; spR.oninput = plan; plan();
}

/* button ripple */
document.addEventListener('click', e => {
  const b = e.target.closest('.btn'); if (!b || reduce) return;
  const r = b.getBoundingClientRect(), d = Math.max(r.width, r.height), s = document.createElement('span');
  s.className = 'rip'; s.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - r.left - d / 2}px;top:${e.clientY - r.top - d / 2}px`;
  b.appendChild(s); setTimeout(() => s.remove(), 600);
});

/* ===== EXAM COUNTDOWN ===== */
const cdDate = document.getElementById('cdDate');
if (cdDate) {
  const out = document.getElementById('cdOut');
  const show = () => {
    if (!cdDate.value) { out.textContent = 'Pick your exam date to start the countdown.'; return; }
    const d = Math.ceil((new Date(cdDate.value + 'T00:00:00') - new Date().setHours(0, 0, 0, 0)) / 864e5);
    if (d < 0) { out.textContent = 'This date has passed. Pick a new date.'; return; }
    if (d === 0) { out.innerHTML = '<div class="pcbig">Today!</div><small>All the best! 🍀</small>'; return; }
    out.innerHTML = `<div class="pcbig">${d}</div><small>days left (${Math.floor(d / 7)} weeks ${d % 7} days). ${d > 60 ? 'Plenty of time. Start steady! 🌱' : d > 30 ? 'Time to speed up! 🚀' : d > 7 ? 'Focus on revision and practice tests. 🔥' : 'Final sprint! Revise and rest well. 💪'}</small>`;
    try { localStorage.setItem('alpineExam', cdDate.value); } catch (e) {}
  };
  try { const v = localStorage.getItem('alpineExam'); if (v) cdDate.value = v; } catch (e) {}
  cdDate.onchange = show; show();
}

/* ===== FORMULA FLASHCARDS (naye cards jodne ho to ek line copy karo: ['Naam', 'Formula']) ===== */
const FORMULAS = [
  ['Area of a circle', 'πr²'], ['Circumference of a circle', '2πr'], ['Pythagoras theorem', 'a² + b² = c²'],
  ['Quadratic formula', 'x = (−b ± √(b² − 4ac)) / 2a'], ['(a + b)²', 'a² + 2ab + b²'], ['a² − b²', '(a + b)(a − b)'],
  ['nth term of an AP', 'a + (n − 1)d'], ['Sum of n terms of an AP', 'n/2 [2a + (n − 1)d]'], ['sin²θ + cos²θ', '1'],
  ['Volume of a sphere', '4/3 πr³'], ['Curved surface area of a cylinder', '2πrh'], ['Distance formula', '√[(x₂ − x₁)² + (y₂ − y₁)²]'],
  ['Speed', 'Distance / Time'], ['Newton\'s second law', 'F = ma'], ['Ohm\'s law', 'V = IR'], ['Kinetic energy', '½mv²'],
  ['Density', 'Mass / Volume'], ['First equation of motion', 'v = u + at'], ['Second equation of motion', 's = ut + ½at²'],
  ['Pressure', 'Force / Area'], ['Power', 'Work / Time'], ['pH', '−log[H⁺]'], ['Number of moles', 'Mass / Molar mass'], ['Boyle\'s law', 'P₁V₁ = P₂V₂']
];
const flipEl = document.getElementById('flip');
if (flipEl) {
  let order = shuffle(FORMULAS), i = 0;
  const f = document.getElementById('fFront'), bk = document.getElementById('fBack'), cnt = document.getElementById('fCount');
  const put = () => { f.textContent = order[i][0]; bk.textContent = order[i][1]; cnt.textContent = `${i + 1} / ${order.length}`; };
  const go = n => { flipEl.classList.remove('on'); setTimeout(() => { i = (i + n + order.length) % order.length; if (n > 0 && i === 0) order = shuffle(FORMULAS); put(); }, 250); };
  flipEl.onclick = () => flipEl.classList.toggle('on');
  document.getElementById('fNext').onclick = () => go(1); document.getElementById('fPrev').onclick = () => go(-1);
  put();
}

/* ===== HERO: jude hue chamakte dots ===== */
const cv = document.getElementById('net');
if (cv && !reduce && heroEl) {
  const ctx = cv.getContext('2d'); let W, H, pts = [], run = true;
  const size = () => { W = cv.width = heroEl.clientWidth; H = cv.height = heroEl.clientHeight; const n = Math.min(48, Math.floor(W * H / 26000)); pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4 })); };
  size(); addEventListener('resize', size);
  new IntersectionObserver(e => run = e[0].isIntersecting).observe(heroEl);
  (function loop() {
    if (run) {
      ctx.clearRect(0, 0, W, H);
      pts.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.fillStyle = 'rgba(255,255,255,.55)'; ctx.beginPath(); ctx.arc(p.x, p.y, 1.8, 0, 7); ctx.fill();
        for (let j = i + 1; j < pts.length; j++) { const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y); if (d < 120) { ctx.strokeStyle = `rgba(252,194,0,${.28 * (1 - d / 120)})`; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); } }
      });
    }
    requestAnimationFrame(loop);
  })();
}

/* ============ MORE TOOLS ============ */
/* 🔄 Unit converter */
const ucType = document.getElementById('ucType');
if (ucType) {
  const UNITS = { Length: { mm: .001, cm: .01, m: 1, km: 1000, inch: .0254, foot: .3048, mile: 1609.344 }, Mass: { mg: 1e-6, g: .001, kg: 1, quintal: 100, tonne: 1000, pound: .45359237 }, Time: { second: 1, minute: 60, hour: 3600, day: 86400 }, Speed: { 'm/s': 1, 'km/h': 1 / 3.6, mph: .44704 }, Temperature: { '°C': 0, '°F': 0, K: 0 } };
  const ucVal = document.getElementById('ucVal'), ucFrom = document.getElementById('ucFrom'), ucTo = document.getElementById('ucTo'), ucOut = document.getElementById('ucOut');
  const fill = (sel, keys, pick) => { sel.innerHTML = keys.map((k, i) => `<option${i === pick ? ' selected' : ''}>${k}</option>`).join(''); };
  const conv = () => {
    const v = parseFloat(ucVal.value), t = ucType.value, f = ucFrom.value, to = ucTo.value;
    if (isNaN(v)) { ucOut.value = ''; return; }
    let r;
    if (t === 'Temperature') { const c = f === '°C' ? v : f === '°F' ? (v - 32) * 5 / 9 : v - 273.15; r = to === '°C' ? c : to === '°F' ? c * 9 / 5 + 32 : c + 273.15; }
    else r = v * UNITS[t][f] / UNITS[t][to];
    ucOut.value = r.toLocaleString('en-IN', { maximumSignificantDigits: 8 });
  };
  Object.keys(UNITS).forEach(k => ucType.add(new Option(k)));
  const setUnits = () => { const k = Object.keys(UNITS[ucType.value]); fill(ucFrom, k, 0); fill(ucTo, k, 1); conv(); };
  ucType.onchange = setUnits; [ucVal, ucFrom, ucTo].forEach(e => e.oninput = conv);
  document.getElementById('ucSwap').onclick = () => { const a = ucFrom.value; ucFrom.value = ucTo.value; ucTo.value = a; conv(); };
  setUnits();
}

/* ⏱️ Focus timer */
const tmTxt = document.getElementById('tmTxt');
if (tmTxt) {
  const ring = document.getElementById('tmRing'), btn = document.getElementById('tmStart'), C = 2 * Math.PI * 52;
  ring.style.strokeDasharray = C;
  let total = 1500, left = 1500, timer = null, endAt = 0;
  const draw = () => { tmTxt.textContent = `${String(Math.floor(left / 60)).padStart(2, '0')}:${String(left % 60).padStart(2, '0')}`; ring.style.strokeDashoffset = C * (1 - left / total); };
  const stop = () => { clearInterval(timer); timer = null; btn.textContent = 'Start'; document.title = pageTitle; };
  const beep = () => { try { const a = new (window.AudioContext || window.webkitAudioContext)(), o = a.createOscillator(), g = a.createGain(); o.connect(g); g.connect(a.destination); o.frequency.value = 880; g.gain.value = .08; o.start(); setTimeout(() => { o.stop(); a.close(); }, 600); } catch (e) {} };
  btn.onclick = () => {
    if (timer) { stop(); btn.textContent = 'Resume'; return; }
    endAt = Date.now() + left * 1000; btn.textContent = 'Pause';
    timer = setInterval(() => {
      left = Math.max(0, Math.round((endAt - Date.now()) / 1000)); draw(); document.title = `⏱ ${tmTxt.textContent}`;
      if (left <= 0) { stop(); tmTxt.textContent = 'Done!'; beep(); const r = tmTxt.getBoundingClientRect(); confetti(r.left + r.width / 2, r.top + 30); }
    }, 500);
  };
  document.getElementById('tmReset').onclick = () => { stop(); left = total; draw(); };
  document.querySelectorAll('#tmModes button').forEach(b => b.onclick = () => {
    stop(); document.querySelectorAll('#tmModes button').forEach(x => x.classList.toggle('on', x === b)); total = left = +b.dataset.m * 60; draw();
  });
  draw();
}

/* ⚡ Math Blitz */
const mbBox = document.getElementById('mbBox');
if (mbBox) {
  let best = 0; try { best = +localStorage.getItem('alpineBlitz') || 0; } catch (e) {}
  const mk = () => { const t = pk([0, 1, 2]); let a, b; if (t === 0) { a = ri(10, 60); b = ri(10, 60); return { txt: `${a} + ${b}`, ans: a + b }; } if (t === 1) { a = ri(30, 99); b = ri(10, a - 1); return { txt: `${a} − ${b}`, ans: a - b }; } a = ri(2, 12); b = ri(2, 12); return { txt: `${a} × ${b}`, ans: a * b }; };
  const idle = msg => { mbBox.innerHTML = `<p class="qnote2">${msg}</p><button class="btn" id="mbGo" type="button">Start</button><small class="fhint">Best score: ${best}</small>`; document.getElementById('mbGo').onclick = play; };
  const play = () => {
    let score = 0, q = mk(); const endAt = Date.now() + 30000;
    mbBox.innerHTML = '<div class="mbtop"><b id="mbS">Score: 0</b><b id="mbT">30s</b></div><div class="pbar"><i id="mbBar" style="width:100%"></i></div><div class="mbq" id="mbQ"></div><input id="mbIn" type="number" inputmode="numeric" autocomplete="off" placeholder="Type the answer"><button class="btn small ghost2" id="mbSkip" type="button">Skip</button>';
    const Q = document.getElementById('mbQ'), I = document.getElementById('mbIn');
    const next = () => { q = mk(); Q.textContent = q.txt + ' = ?'; I.value = ''; };
    next(); I.focus({ preventScroll: true });
    I.oninput = () => { if (I.value !== '' && +I.value === q.ans) { score++; document.getElementById('mbS').textContent = 'Score: ' + score; Q.classList.remove('ok'); void Q.offsetWidth; Q.classList.add('ok'); next(); } };
    document.getElementById('mbSkip').onclick = () => { next(); I.focus({ preventScroll: true }); };
    const iv = setInterval(() => {
      const left = Math.max(0, endAt - Date.now()); document.getElementById('mbT').textContent = Math.ceil(left / 1000) + 's'; document.getElementById('mbBar').style.width = left / 300 + '%';
      if (left <= 0) {
        clearInterval(iv); let msg = `Time up! You solved ${score}.`;
        if (score > best) { best = score; msg = `New best: ${score}! 🎉`; try { localStorage.setItem('alpineBlitz', best); } catch (e) {} const r = mbBox.getBoundingClientRect(); confetti(r.left + r.width / 2, r.top + 40); }
        idle(msg);
      }
    }, 100);
  };
  idle('Solve as many as you can in 30 seconds!');
}

/* 🧪 Element finder: saare 118 elements, periodic table ki tarah */
const elGrid = document.getElementById('elGrid');
if (elGrid) {
  const ELM = [['H','Hydrogen','1.008'],['He','Helium','4.003'],['Li','Lithium','6.94'],['Be','Beryllium','9.012'],['B','Boron','10.81'],['C','Carbon','12.011'],['N','Nitrogen','14.007'],['O','Oxygen','15.999'],['F','Fluorine','18.998'],['Ne','Neon','20.180'],['Na','Sodium','22.990'],['Mg','Magnesium','24.305'],['Al','Aluminium','26.982'],['Si','Silicon','28.085'],['P','Phosphorus','30.974'],['S','Sulphur','32.06'],['Cl','Chlorine','35.45'],['Ar','Argon','39.948'],['K','Potassium','39.098'],['Ca','Calcium','40.078'],['Sc','Scandium','44.956'],['Ti','Titanium','47.867'],['V','Vanadium','50.942'],['Cr','Chromium','51.996'],['Mn','Manganese','54.938'],['Fe','Iron','55.845'],['Co','Cobalt','58.933'],['Ni','Nickel','58.693'],['Cu','Copper','63.546'],['Zn','Zinc','65.38'],['Ga','Gallium','69.723'],['Ge','Germanium','72.630'],['As','Arsenic','74.922'],['Se','Selenium','78.971'],['Br','Bromine','79.904'],['Kr','Krypton','83.798'],['Rb','Rubidium','85.468'],['Sr','Strontium','87.62'],['Y','Yttrium','88.906'],['Zr','Zirconium','91.224'],['Nb','Niobium','92.906'],['Mo','Molybdenum','95.95'],['Tc','Technetium','[98]'],['Ru','Ruthenium','101.07'],['Rh','Rhodium','102.91'],['Pd','Palladium','106.42'],['Ag','Silver','107.87'],['Cd','Cadmium','112.41'],['In','Indium','114.82'],['Sn','Tin','118.71'],['Sb','Antimony','121.76'],['Te','Tellurium','127.60'],['I','Iodine','126.90'],['Xe','Xenon','131.29'],['Cs','Caesium','132.91'],['Ba','Barium','137.33'],['La','Lanthanum','138.91'],['Ce','Cerium','140.12'],['Pr','Praseodymium','140.91'],['Nd','Neodymium','144.24'],['Pm','Promethium','[145]'],['Sm','Samarium','150.36'],['Eu','Europium','151.96'],['Gd','Gadolinium','157.25'],['Tb','Terbium','158.93'],['Dy','Dysprosium','162.50'],['Ho','Holmium','164.93'],['Er','Erbium','167.26'],['Tm','Thulium','168.93'],['Yb','Ytterbium','173.05'],['Lu','Lutetium','174.97'],['Hf','Hafnium','178.49'],['Ta','Tantalum','180.95'],['W','Tungsten','183.84'],['Re','Rhenium','186.21'],['Os','Osmium','190.23'],['Ir','Iridium','192.22'],['Pt','Platinum','195.08'],['Au','Gold','196.97'],['Hg','Mercury','200.59'],['Tl','Thallium','204.38'],['Pb','Lead','207.2'],['Bi','Bismuth','208.98'],['Po','Polonium','[209]'],['At','Astatine','[210]'],['Rn','Radon','[222]'],['Fr','Francium','[223]'],['Ra','Radium','[226]'],['Ac','Actinium','[227]'],['Th','Thorium','232.04'],['Pa','Protactinium','231.04'],['U','Uranium','238.03'],['Np','Neptunium','[237]'],['Pu','Plutonium','[244]'],['Am','Americium','[243]'],['Cm','Curium','[247]'],['Bk','Berkelium','[247]'],['Cf','Californium','[251]'],['Es','Einsteinium','[252]'],['Fm','Fermium','[257]'],['Md','Mendelevium','[258]'],['No','Nobelium','[259]'],['Lr','Lawrencium','[266]'],['Rf','Rutherfordium',''],['Db','Dubnium',''],['Sg','Seaborgium',''],['Bh','Bohrium',''],['Hs','Hassium',''],['Mt','Meitnerium',''],['Ds','Darmstadtium',''],['Rg','Roentgenium',''],['Cn','Copernicium',''],['Nh','Nihonium',''],['Fl','Flerovium',''],['Mc','Moscovium',''],['Lv','Livermorium',''],['Ts','Tennessine',''],['Og','Oganesson','']];
  const CATN = { nm: 'Nonmetal', ng: 'Noble gas', ak: 'Alkali metal', ae: 'Alkaline earth metal', md: 'Metalloid', hl: 'Halogen', pm: 'Post-transition metal', tm: 'Transition metal', ln: 'Lanthanide', ac: 'Actinide' };
  const catOf = z => [2, 10, 18, 36, 54, 86, 118].includes(z) ? 'ng' : [3, 11, 19, 37, 55, 87].includes(z) ? 'ak' : [4, 12, 20, 38, 56, 88].includes(z) ? 'ae' : [5, 14, 32, 33, 51, 52].includes(z) ? 'md' : [9, 17, 35, 53, 85, 117].includes(z) ? 'hl' : [1, 6, 7, 8, 15, 16, 34].includes(z) ? 'nm' : [13, 31, 49, 50, 81, 82, 83, 84, 113, 114, 115, 116].includes(z) ? 'pm' : z >= 57 && z <= 71 ? 'ln' : z >= 89 && z <= 103 ? 'ac' : 'tm';
  const posOf = z => z === 1 ? [1, 1] : z === 2 ? [1, 18] : z <= 4 ? [2, z - 2] : z <= 10 ? [2, z + 8] : z <= 12 ? [3, z - 10] : z <= 18 ? [3, z] : z <= 36 ? [4, z - 18] : z <= 54 ? [5, z - 36] : z <= 56 ? [6, z - 54] : z <= 71 ? [9, z - 54] : z <= 86 ? [6, z - 68] : z <= 88 ? [7, z - 86] : z <= 103 ? [10, z - 86] : [7, z - 100];
  const stateOf = z => z > 103 ? 'Unknown (synthetic)' : [35, 80].includes(z) ? 'Liquid' : [1, 2, 7, 8, 9, 10, 17, 18, 36, 54, 86].includes(z) ? 'Gas' : 'Solid';
  const out = document.getElementById('elOut'), q = document.getElementById('elQ'), chips = document.getElementById('elChips');
  let filter = '';
  elGrid.innerHTML = ELM.map((e, i) => { const z = i + 1, [r, c] = posOf(z); return `<button type="button" class="pt ${catOf(z)}" data-z="${z}" style="grid-row:${r};grid-column:${c}" title="${e[1]}"><i>${z}</i><b>${e[0]}</b></button>`; }).join('')
    + '<div class="ptgap"></div><span class="ptnote" style="grid-row:6;grid-column:3">57–71</span><span class="ptnote" style="grid-row:7;grid-column:3">89–103</span>';
  chips.innerHTML = Object.keys(CATN).map(k => `<button type="button" class="chip2 ${k}" data-k="${k}">${CATN[k]}</button>`).join('');
  const refresh = () => {
    const t = q.value.trim().toLowerCase();
    elGrid.querySelectorAll('.pt').forEach(b => {
      const z = +b.dataset.z, e = ELM[z - 1], okQ = !t || e[0].toLowerCase() === t || e[1].toLowerCase().includes(t) || String(z) === t, okC = !filter || catOf(z) === filter;
      b.classList.toggle('dim', !(okQ && okC));
    });
  };
  elGrid.querySelectorAll('.pt').forEach(b => b.onclick = () => {
    const z = +b.dataset.z, e = ELM[z - 1], [r, c] = posOf(z), f = (z >= 57 && z <= 71) || (z >= 89 && z <= 103);
    elGrid.querySelectorAll('.pt').forEach(x => x.classList.toggle('sel', x === b));
    out.innerHTML = `<b class="pcbig" style="font-size:2rem">${e[1]} (${e[0]})</b><br>Atomic number: <b>${z}</b> · Atomic mass: <b>${e[2] || 'synthetic, radioactive'}</b><br>Type: ${CATN[catOf(z)]} · State at room temperature: ${stateOf(z)}<br>Period: <b>${r > 7 ? r - 3 : r}</b> · Group: <b>${f ? 'f-block' : c}</b>` + (e[2].startsWith('[') ? '<br><small>[ ] = mass number of the most stable known isotope (radioactive).</small>' : '');
  });
  chips.querySelectorAll('.chip2').forEach(c => c.onclick = () => { filter = filter === c.dataset.k ? '' : c.dataset.k; chips.querySelectorAll('.chip2').forEach(x => x.classList.toggle('on', x.dataset.k === filter)); refresh(); });
  q.oninput = refresh;
}

/* 📐 Quadratic solver */
const qa = document.getElementById('qa');
if (qa) {
  const qb = document.getElementById('qb'), qc = document.getElementById('qc'), qOut = document.getElementById('qOut');
  const n = x => String(Math.round(x * 10000) / 10000);
  const solve = () => {
    if ([qa, qb, qc].some(i => i.value === '')) { qOut.textContent = 'Enter a, b and c.'; return; }
    const a = +qa.value, b = +qb.value, c = +qc.value;
    if (a === 0) { qOut.innerHTML = b === 0 ? 'Not an equation (a and b are both 0).' : `a = 0, so this is linear: x = <b>${n(-c / b)}</b>`; return; }
    const D = b * b - 4 * a * c;
    if (D > 0) { const r = Math.sqrt(D); qOut.innerHTML = `Discriminant D = ${n(D)} → two real roots<br>x₁ = <b>${n((-b + r) / (2 * a))}</b><br>x₂ = <b>${n((-b - r) / (2 * a))}</b>`; }
    else if (D === 0) qOut.innerHTML = `Discriminant D = 0 → one repeated root<br>x = <b>${n(-b / (2 * a))}</b>`;
    else qOut.innerHTML = `Discriminant D = ${n(D)} → complex roots<br>x = <b>${n(-b / (2 * a))} ± ${n(Math.sqrt(-D) / (2 * Math.abs(a)))}i</b>`;
  };
  [qa, qb, qc].forEach(i => i.oninput = solve); solve();
}

/* ✅ Daily goals */
const tdList = document.getElementById('tdList');
if (tdList) {
  const tdIn = document.getElementById('tdIn'), tdBar = document.getElementById('tdBar'), tdTxt = document.getElementById('tdTxt');
  let todos = []; try { todos = JSON.parse(localStorage.getItem('alpineTodo') || '[]'); } catch (e) {}
  const save = () => { try { localStorage.setItem('alpineTodo', JSON.stringify(todos)); } catch (e) {} };
  const rend = () => {
    tdList.innerHTML = '';
    todos.forEach((t, i) => {
      const li = document.createElement('li'); if (t.d) li.className = 'done';
      const cb = document.createElement('input'); cb.type = 'checkbox'; cb.checked = t.d;
      cb.onchange = () => { const r = cb.getBoundingClientRect(); t.d = cb.checked; save(); rend(); if (t.d && todos.every(x => x.d)) confetti(r.left, r.top); };
      const sp = document.createElement('span'); sp.textContent = t.t;
      const x = document.createElement('button'); x.type = 'button'; x.textContent = '✕'; x.setAttribute('aria-label', 'Delete task'); x.onclick = () => { todos.splice(i, 1); save(); rend(); };
      li.append(cb, sp, x); tdList.appendChild(li);
    });
    const done = todos.filter(t => t.d).length;
    tdBar.style.width = todos.length ? done / todos.length * 100 + '%' : '0';
    tdTxt.textContent = todos.length ? `${done} of ${todos.length} done${done === todos.length ? ' 🎉' : ''}` : 'No tasks yet.';
  };
  document.getElementById('tdAdd').onclick = () => { const v = tdIn.value.trim(); if (!v) return; todos.push({ t: v, d: false }); tdIn.value = ''; save(); rend(); };
  tdIn.onkeydown = e => { if (e.key === 'Enter') document.getElementById('tdAdd').click(); };
  rend();
}

/* 🧮 Scientific calculator (eval nahi, apna surakshit parser) */
const scIn = document.getElementById('scIn');
if (scIn) {
  const scOut = document.getElementById('scOut'), scDeg = document.getElementById('scDeg'), btns = document.getElementById('scBtns');
  let ans = 0, justEq = false;
  function evalExpr(src, deg) {
    const s = src.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-').replace(/π/g, 'pi').replace(/√/g, 'sqrt').replace(/\s+/g, '').toLowerCase();
    const R = x => deg ? x * Math.PI / 180 : x, A = x => deg ? x * 180 / Math.PI : x;
    const F = { sin: x => Math.sin(R(x)), cos: x => Math.cos(R(x)), tan: x => Math.tan(R(x)), asin: x => A(Math.asin(x)), acos: x => A(Math.acos(x)), atan: x => A(Math.atan(x)), log: Math.log10, ln: Math.log, sqrt: Math.sqrt, abs: Math.abs };
    let i = 0; const peek = () => s[i];
    const fail = () => { throw new Error('bad'); };
    function expr() { let v = term(); while (peek() === '+' || peek() === '-') { const o = s[i++]; const r = term(); v = o === '+' ? v + r : v - r; } return v; }
    function term() { let v = unary(); for (;;) { const c = peek(); if (c === '*' || c === '/') { i++; const r = unary(); v = c === '*' ? v * r : v / r; } else if (c && /[a-z(]/.test(c)) { v *= unary(); } else break; } return v; }
    function pow() { const b = post(); if (peek() === '^') { i++; return Math.pow(b, unary()); } return b; }
    function unary() { if (peek() === '-') { i++; return -unary(); } if (peek() === '+') { i++; return unary(); } return pow(); }
    function post() { let v = prim(); while (peek() === '%') { i++; v /= 100; } if (peek() === '!') { i++; if (v < 0 || v > 170 || v !== Math.floor(v)) fail(); let f = 1; for (let k = 2; k <= v; k++) f *= k; v = f; } return v; }
    function prim() {
      const c = peek();
      if (c === '(') { i++; const v = expr(); if (peek() !== ')') fail(); i++; return v; }
      if (/[0-9.]/.test(c || '')) { const m = /^(\d+\.?\d*|\.\d+)(e[+-]?\d+)?/.exec(s.slice(i)); if (!m) fail(); i += m[0].length; return parseFloat(m[0]); }
      const m = /^[a-z]+/.exec(s.slice(i)); if (!m) fail(); const name = m[0]; i += name.length;
      if (name === 'pi') return Math.PI; if (name === 'e') return Math.E; if (name === 'ans') return ans;
      if (!F[name]) fail();
      return F[name](peek() === '(' ? prim() : unary());
    }
    const v = expr(); if (i < s.length) fail(); return v;
  }
  const fmt = v => { if (!isFinite(v)) return 'Error'; if (Math.abs(v) < 1e-12) return '0'; return String(+v.toPrecision(10)); };
  const live = () => { if (!scIn.value.trim()) { scOut.textContent = '0'; return; } try { scOut.textContent = fmt(evalExpr(scIn.value, scDeg.checked)); } catch (e) { scOut.textContent = '…'; } };
  const rows = [['sin(', 'cos(', 'tan(', 'log(', 'ln(', '√('], ['π', 'e', '^', '(', ')', '÷'], ['7', '8', '9', '×', '⌫', 'C'], ['4', '5', '6', '−', '+', '='], ['1', '2', '3', '0', '.', 'Ans']];
  btns.innerHTML = rows.flat().map(k => `<button type="button" data-k="${k}" class="${/[0-9.]/.test(k) ? '' : k === '=' ? 'eq' : 'op'}">${k}</button>`).join('');
  btns.onclick = e => {
    const b = e.target.closest('button'); if (!b) return; const k = b.dataset.k;
    if (justEq && !['+', '−', '×', '÷', '^', '⌫', '=', 'C'].includes(k)) scIn.value = ''; /* '=' ke baad naya number naya hisaab shuru karta hai */
    justEq = false;
    if (k === 'C') scIn.value = ''; else if (k === '⌫') scIn.value = scIn.value.slice(0, -1);
    else if (k === '=') { try { const v = evalExpr(scIn.value, scDeg.checked); ans = v; scIn.value = fmt(v); justEq = true; } catch (er) { scOut.textContent = 'Error'; return; } }
    else scIn.value += k;
    live();
  };
  scIn.oninput = () => { justEq = false; live(); }; scDeg.onchange = live;
  scIn.onkeydown = e => { if (e.key === 'Enter') btns.querySelector('.eq').click(); };
}

/* 📏 Geometry calculator */
const gmShape = document.getElementById('gmShape');
if (gmShape) {
  const P = Math.PI, n = x => String(+x.toFixed(4));
  const SH = {
    'Circle': [['Radius r'], r => [['Area πr²', P * r * r], ['Circumference 2πr', 2 * P * r]]],
    'Rectangle': [['Length l', 'Breadth b'], (l, b) => [['Area l×b', l * b], ['Perimeter 2(l+b)', 2 * (l + b)], ['Diagonal √(l²+b²)', Math.hypot(l, b)]]],
    'Triangle': [['Base b', 'Height h'], (b, h) => [['Area ½×b×h', b * h / 2]]],
    'Right triangle': [['Side a', 'Side b'], (a, b) => [['Hypotenuse √(a²+b²)', Math.hypot(a, b)], ['Area ½×a×b', a * b / 2]]],
    'Cube': [['Side a'], a => [['Volume a³', a ** 3], ['Total surface area 6a²', 6 * a * a]]],
    'Cylinder': [['Radius r', 'Height h'], (r, h) => [['Volume πr²h', P * r * r * h], ['Curved surface area 2πrh', 2 * P * r * h], ['Total surface area 2πr(r+h)', 2 * P * r * (r + h)]]],
    'Cone': [['Radius r', 'Height h'], (r, h) => { const l = Math.hypot(r, h); return [['Slant height √(r²+h²)', l], ['Volume ⅓πr²h', P * r * r * h / 3], ['Curved surface area πrl', P * r * l], ['Total surface area πr(r+l)', P * r * (r + l)]]; }],
    'Sphere': [['Radius r'], r => [['Volume 4/3 πr³', 4 / 3 * P * r ** 3], ['Surface area 4πr²', 4 * P * r * r]]]
  };
  const gmIn = document.getElementById('gmIn'), gmOut = document.getElementById('gmOut');
  Object.keys(SH).forEach(k => gmShape.add(new Option(k, k)));
  const calc = () => {
    const vals = [...gmIn.querySelectorAll('input')].map(i => parseFloat(i.value));
    if (vals.some(v => isNaN(v) || v <= 0)) { gmOut.textContent = 'Enter the values (greater than 0) to see the answers.'; return; }
    gmOut.innerHTML = SH[gmShape.value][1](...vals).map(([l, v]) => `<div class="gmrow"><span>${l}</span><b>${n(v)}</b></div>`).join('');
  };
  const build = () => { gmIn.innerHTML = SH[gmShape.value][0].map(l => `<label>${l}<input type="number" min="0" step="any" placeholder="0"></label>`).join(''); gmIn.querySelectorAll('input').forEach(i => i.oninput = calc); calc(); };
  gmShape.onchange = build; build();
}

/* 🎯 Target marks planner */
const tgOut = document.getElementById('tgOut');
if (tgOut) {
  const ids = ['tgGot', 'tgDone', 'tgNext', 'tgPct'].map(i => document.getElementById(i));
  const go = () => {
    const [got, done, next, pct] = ids.map(i => parseFloat(i.value));
    if ([got, done, next, pct].some(isNaN) || done <= 0 || next <= 0) { tgOut.textContent = 'Fill all four boxes.'; return; }
    const need = pct / 100 * (done + next) - got;
    if (need <= 0) tgOut.innerHTML = `<div class="pcbig">0</div><small>You have already reached ${pct}%! 🎉 Even a pass in the next exam keeps you above the target.</small>`;
    else if (need > next) tgOut.innerHTML = `<div class="pcbig">${+need.toFixed(1)}</div><small>needed, but the next exam is only out of ${next}. This target is not possible with one more exam. Try a lower target. 💪</small>`;
    else tgOut.innerHTML = `<div class="pcbig">${+need.toFixed(1)} / ${next}</div><div class="pbar"><i style="width:${need / next * 100}%"></i></div><small>You need about <b>${(need / next * 100).toFixed(1)}%</b> in the next exam to reach ${pct}% overall.</small>`;
  };
  ids.forEach(i => i.oninput = go);
}

/* tools ko tabs mein badlo */
const tg = document.querySelector('.tgrid');
if (tg) {
  const cards = [...tg.querySelectorAll('.tcard')], bar = document.createElement('div'); bar.className = 'ttabbar';
  const sel = i => { cards.forEach((c, j) => c.classList.toggle('on', i === j)); [...bar.children].forEach((b, j) => b.classList.toggle('on', i === j)); };
  cards.forEach((c, i) => { const b = document.createElement('button'); b.type = 'button'; b.textContent = c.querySelector('h3').textContent.trim(); b.onclick = () => sel(i); bar.appendChild(b); });
  tg.before(bar); tg.classList.add('tabbed'); sel(0);
}

/* ============ MORE EFFECTS ============ */
const pageTitle = document.title;
document.addEventListener('visibilitychange', () => { if (!document.querySelector('#tmTxt') || document.title.indexOf('⏱') !== 0) document.title = document.hidden ? '📚 Come back to ALPINE!' : pageTitle; });

/* headings: shabd ek-ek karke upar se aate hain */
document.querySelectorAll('.head h2').forEach(h => {
  h.innerHTML = h.textContent.trim().split(/\s+/).map((w, i) => `<span class="w"><i style="--k:${i}">${w.replace(/&/g, '&amp;')}</i></span>`).join(' ');
});

/* toppers ke upar naam + percentage ki chalti patti */
const sl = document.querySelector('.slider');
if (sl && typeof TOPPERS !== 'undefined') {
  const it = TOPPERS.map(t => `<span>${t.name}<b>${t.score}</b></span>`).join(''), d = document.createElement('div');
  d.className = 'rstrip'; d.innerHTML = `<div class="rtrack">${it + it}</div>`; sl.before(d);
}

/* click par gol lehar */
document.addEventListener('click', e => {
  if (reduce) return; const b = document.createElement('i'); b.className = 'burst';
  b.style.left = e.clientX + 'px'; b.style.top = e.clientY + 'px'; document.body.appendChild(b); setTimeout(() => b.remove(), 650);
});

/* side ke section dots (desktop) */
const dots = document.createElement('nav'); dots.className = 'dots'; dots.setAttribute('aria-label', 'Sections');
[['about', 'About'], ['founder', 'Founder'], ['courses', 'Courses'], ['toppers', 'Toppers'], ['gallery', 'Gallery'], ['quiz', 'Quiz'], ['tools', 'Tools'], ['faq', 'FAQ'], ['contact', 'Contact']].forEach(([id, l]) => {
  const a = document.createElement('a'); a.href = '#' + id; a.dataset.l = l; a.setAttribute('aria-label', l); dots.appendChild(a);
});
document.body.appendChild(dots);
const dotSpy = new IntersectionObserver(en => en.forEach(e => { if (e.isIntersecting) dots.querySelectorAll('a').forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id)); }), { rootMargin: '-45% 0px -50% 0px' });
dots.querySelectorAll('a').forEach(a => { const s = document.querySelector(a.getAttribute('href')); if (s) dotSpy.observe(s); });

/* WhatsApp par chhota "baat karo" bubble (desktop, ek baar) */
if (wa && hover) {
  let shown = false; try { shown = sessionStorage.getItem('alpineBub'); } catch (e) {}
  if (!shown) setTimeout(() => {
    const bub = document.createElement('a'); bub.className = 'wabub'; bub.href = wa.href; bub.target = '_blank'; bub.rel = 'noopener'; bub.textContent = '👋 Have a question? Chat with us!';
    document.body.appendChild(bub); requestAnimationFrame(() => bub.classList.add('show'));
    try { sessionStorage.setItem('alpineBub', '1'); } catch (e) {}
    setTimeout(() => { bub.classList.remove('show'); setTimeout(() => bub.remove(), 600); }, 9000);
  }, 8000);
}

/* ============ NAYE FEATURES ============ */
/* toast (chhota message) */
function toast(msg) {
  const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show')); setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, 2300);
}

/* phone / email copy buttons */
document.querySelectorAll('.info a[href^="tel:"], .info a[href^="mailto:"]').forEach(a => {
  const b = document.createElement('button'); b.type = 'button'; b.className = 'copyb'; b.textContent = '📋'; b.title = 'Copy'; b.setAttribute('aria-label', 'Copy ' + a.textContent.trim());
  b.onclick = () => { const v = a.textContent.trim(); (navigator.clipboard ? navigator.clipboard.writeText(v) : Promise.reject()).catch(() => { const i = document.createElement('input'); i.value = v; document.body.appendChild(i); i.select(); try { document.execCommand('copy'); } catch (e) {} i.remove(); }).finally(() => toast('Copied: ' + v)); };
  a.after(b);
});

/* thought of the day */
const THOUGHTS = ['Small steps every day lead to big results.', 'Practice makes progress, not just perfect.', 'Every expert was once a beginner.', 'Ask your doubts today, so exams feel easy tomorrow.', 'Consistency beats last-minute cramming.', 'Mistakes are proof that you are trying.', 'A little revision every day beats a lot of worry before the exam.', 'Focus on understanding, marks will follow.', 'Your only competition is who you were yesterday.', 'Start now. Even 20 focused minutes count.'];
const thoughtEl = document.getElementById('thought');
if (thoughtEl) thoughtEl.textContent = '💡 Thought of the day: ' + THOUGHTS[Math.floor(Date.now() / 864e5) % THOUGHTS.length];

/* form shake on error */
['form', 'pform'].forEach(id => { const f = document.getElementById(id); if (f) f.querySelectorAll('input,select,textarea').forEach(i => i.addEventListener('invalid', () => { f.classList.remove('shake'); void f.offsetWidth; f.classList.add('shake'); })); });

/* ticker scroll karne par tez ho jata hai */
const tkEl = document.querySelector('.ttrack');
if (tkEl && !reduce && tkEl.getAnimations) {
  let ly = scrollY, rate = 1;
  addEventListener('scroll', () => { const v = Math.abs(scrollY - ly); ly = scrollY; rate = Math.min(5, rate + v / 14); }, { passive: true });
  (function loop() { rate += (1 - rate) * .05; tkEl.getAnimations().forEach(a => a.playbackRate = rate); requestAnimationFrame(loop); })();
}

/* demo class enquiry popup (ek session mein ek baar) */
const POPUP_DELAY = 25000;
const pop = document.getElementById('popup');
if (pop) {
  const pcls = document.getElementById('pcls'), pform = document.getElementById('pform');
  Object.keys(CLASS_SUBJECTS).forEach(k => pcls.add(new Option(k, k)));
  let done = false; try { done = sessionStorage.getItem('alpinePop'); } catch (e) {}
  const close = () => { pop.classList.remove('open'); setTimeout(() => pop.hidden = true, 350); try { sessionStorage.setItem('alpinePop', '1'); } catch (e) {} };
  const open = () => { if (done || !pop.hidden) return; const dw = document.getElementById('dwish'); if (dw && !dw.hidden) { setTimeout(open, 6000); return; } done = true; pop.hidden = false; requestAnimationFrame(() => { pop.classList.add('open'); document.getElementById('pname').focus({ preventScroll: true }); }); };
  setTimeout(open, POPUP_DELAY);
  document.getElementById('pclose').onclick = close;
  pop.addEventListener('click', e => { if (e.target === pop) close(); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && pop.classList.contains('open')) close(); });
  pform.addEventListener('submit', e => {
    e.preventDefault();
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hello ALPINE Career Institute, I am ${document.getElementById('pname').value}. I want a demo class for ${pcls.value}.`)}`, '_blank');
    confetti(innerWidth / 2, innerHeight / 2); toast('Opening WhatsApp ✓'); close();
  });
}

/* ============ NOTICE BAR, GREETING, STEP LINE, FAQ SEARCH ============ */
const noticeTxt = NOTICE || (diwaliActive ? '🪔 शुभ दीपावली! Happy Diwali from ALPINE Career Institute 🪔' : '');
if (noticeTxt) {
  const nb = document.createElement('div'); nb.className = 'notice'; nb.innerHTML = '<span></span><button type="button" aria-label="Close">✕</button>'; nb.firstChild.textContent = (NOTICE ? '📢 ' : '') + noticeTxt;
  document.body.prepend(nb); document.documentElement.style.setProperty('--nh', '40px');
  nb.querySelector('button').onclick = () => { nb.remove(); document.documentElement.style.setProperty('--nh', '0px'); };
}
const greetEl = document.getElementById('greet');
const greetText = () => { const hr = new Date().getHours(), hi = document.documentElement.lang === 'hi'; return hr < 12 ? (hi ? 'सुप्रभात 👋' : 'Good morning 👋') : hr < 17 ? (hi ? 'नमस्कार 👋' : 'Good afternoon 👋') : (hi ? 'शुभ संध्या 👋' : 'Good evening 👋'); };
if (greetEl) greetEl.textContent = greetText();

const stepLine = document.getElementById('stepline'), stepGrid = document.querySelector('.stepgrid');
if (stepLine && stepGrid) {
  const steps = [...stepGrid.querySelectorAll('.step')];
  const upd = () => {
    const r = stepGrid.getBoundingClientRect(), p = Math.max(0, Math.min(1, (innerHeight * .85 - r.top) / (r.height + innerHeight * .25)));
    stepLine.style.setProperty('--sp', p * 100); steps.forEach((el, i) => el.classList.toggle('lit', p * 100 >= (i + 1) * 25 - 12));
  };
  addEventListener('scroll', upd, { passive: true }); upd();
}
const faqQ = document.getElementById('faqQ');
if (faqQ) faqQ.addEventListener('input', () => {
  const t = faqQ.value.trim().toLowerCase(); let n = 0;
  document.querySelectorAll('#faq details').forEach(d => { const ok = !t || d.textContent.toLowerCase().includes(t); d.hidden = !ok; if (ok) n++; });
  document.getElementById('faqNone').hidden = n > 0;
});

/* ============ HINDI / ENGLISH ============ */
/* [selector, Hindi text, options]  options: i = kaun sa (0 se), ph = placeholder, tn = pehla text hissa, html = HTML ke saath */
const HI = [
  ['#links a[href="#about"]', 'हमारे बारे में'], ['#links a[href="#founder"]', 'संस्थापक'], ['#links a[href="#courses"]', 'कोर्स'], ['#links a[href="#toppers"]', 'टॉपर्स'], ['#links a[href="#gallery"]', 'गैलरी'], ['#links a[href="#quiz"]', 'क्विज़'], ['#links a[href="#tools"]', 'टूल्स'], ['#links a[href="#faq"]', 'सवाल-जवाब'], ['#links .btn', 'अभी जुड़ें'],
  ['.hero h1', '<span>ALPINE</span> के साथ आगे बढ़ें', { html: 1 }],
  ['.hero .tag-hi + p', 'ALPINE Career Institute में कक्षा 1 से 12 तक CBSE / ICSE की कोचिंग, अनुभवी शिक्षकों और हर विद्यार्थी के लिए साफ़ योजना के साथ।'],
  ['.hero .rotor', 'विशेषज्ञ कोचिंग: ', { tn: 1 }],
  ['.hero .cta .btn', 'डेमो क्लास बुक करें'], ['.hero .cta .btn', 'हमारी गैलरी देखें', { i: 1 }],
  ['#about .head h2', 'ऐसी पढ़ाई जो अपनी लगे'],
  ['#about .head p', 'ALPINE Career Institute कक्षा 1 से 12 (CBSE और ICSE) के विद्यार्थियों को सही तरीक़े से सीखने में मदद करता है। हमारा मंत्र है “सही पढ़ें, सही सीखें”।'],
  ['.stats .stat span', 'परिणाम, हमारी प्रतिबद्धता'], ['.stats .stat span', 'कक्षाएँ', { i: 1 }], ['.stats .stat span', 'बोर्ड: CBSE और ICSE', { i: 2 }], ['.stats .stat span', 'कक्षा 9–12 के विषय', { i: 3 }],
  ['.fbio .role', 'संस्थापक से मिलिए'], ['.fbadge', 'संस्थापक एवं शिक्षक'],
  ['.fbio p', 'अमित सिंह भदौरिया ने ALPINE Career Institute की शुरुआत एक सीधे विश्वास के साथ की: जब अवधारणाएँ साफ़ हों और पढ़ाई सही तरीक़े से हो, तो हर विद्यार्थी अच्छा कर सकता है। वे एक इंजीनियर की गहराई और प्रशिक्षित शिक्षक के धैर्य को साथ लेकर चलते हैं।'],
  ['.fbio p', 'उनकी कक्षाओं में रटने पर नहीं, समझने पर ज़ोर दिया जाता है। विद्यार्थियों को सवाल पूछने, नियमित अभ्यास करने और किसी भी परीक्षा का आत्मविश्वास से सामना करने के लिए प्रोत्साहित किया जाता है।', { i: 1 }],
  ['.fbio blockquote', '“बेहतर विद्यार्थी, उज्ज्वल भविष्य।”'], ['.fbio .cta a', 'कॉल करें 88299 56645'],
  ['#courses .head h2', 'हमारे कोर्स'], ['#courses .head p', 'हर कक्षा के लिए CBSE / ICSE बोर्ड कोचिंग। हर कोर्स में नोट्स, टेस्ट और डाउट सेशन शामिल हैं।'],
  ['.courses .card h3', 'कक्षा 1 – 5'], ['.courses .card h3', 'कक्षा 6 – 8', { i: 1 }], ['.courses .card h3', 'कक्षा 9 – 12', { i: 2 }],
  ['.courses .card:nth-child(1) .subs span', 'सभी विषय'],
  ['.note', '🗣️ अंग्रेज़ी की कक्षाएँ उपलब्ध हैं'], ['.note', '🌅 K.V की दूसरी शिफ़्ट के विद्यार्थियों के लिए सुबह की बैच उपलब्ध हैं', { i: 1 }],
  ['#toppers .head h2', 'हमारे टॉपर्स'], ['#toppers .head p', 'हर उस विद्यार्थी पर गर्व जिसने मेहनत की और शिखर तक पहुँचा।'],
  ['#steps .head h2', 'कैसे जुड़ें'], ['#steps .head p', 'हमारे साथ पढ़ाई शुरू करने के चार आसान कदम।'],
  ['.step h3', 'संपर्क करें'], ['.step h3', 'डेमो क्लास', { i: 1 }], ['.step h3', 'एडमिशन', { i: 2 }], ['.step h3', 'सीखें और चमकें', { i: 3 }],
  ['.step p', 'हमें कॉल करें या WhatsApp पर मैसेज करें।'], ['.step p', 'शिक्षकों से मिलें और हमारी पढ़ाई का तरीक़ा देखें।', { i: 1 }], ['.step p', 'अपनी कक्षा और विषय चुनें।', { i: 2 }], ['.step p', 'नियमित कक्षाएँ, टेस्ट और डाउट सेशन।', { i: 3 }],
  ['.why .head h2', 'विद्यार्थी ALPINE को क्यों चुनते हैं'],
  ['.why li b', 'अनुभवी शिक्षक'], ['.why li b', 'स्मार्ट लर्निंग', { i: 1 }], ['.why li b', 'बेहतर परिणाम', { i: 2 }], ['.why li b', 'उज्ज्वल भविष्य', { i: 3 }],
  ['.why li span', 'ऐसे शिक्षक जो हर अवधारणा साफ़ समझाते हैं।'], ['.why li span', 'आसान तरीक़े जो पढ़ाई को सरल बनाते हैं।', { i: 1 }], ['.why li span', 'अंक सुधारने के लिए नियमित अभ्यास और मार्गदर्शन।', { i: 2 }], ['.why li span', 'बोर्ड परीक्षा और करियर के लिए मज़बूत नींव।', { i: 3 }],
  ['#gallery .head h2', 'हमारी गैलरी'], ['#gallery .head p', 'कक्षाएँ, उत्सव और उपलब्धियाँ। किसी भी फ़ोटो पर टैप करके बड़ा देखें।'], ['#gmore', 'और फ़ोटो देखें'],
  ['.itext h2', 'ALPINE को Instagram पर फ़ॉलो करें'], ['.itext p', 'अपडेट, परिणाम और पढ़ाई के टिप्स के लिए @alpinecareerinstitute को फ़ॉलो करें।'], ['.insta .btn', 'फ़ॉलो करें'],
  ['#quiz .head h2', 'खुद को परखें'], ['#quiz .head p', 'अपनी कक्षा चुनें और 10 छोटे सवालों के जवाब दें। हर बार नए सवाल!'],
  ['#tools .head h2', 'मुफ़्त स्टडी टूल्स'], ['#tools .head p:not(.thought)', 'विद्यार्थियों के लिए 14 मुफ़्त टूल्स। नीचे से कोई भी चुनकर आज़माएँ।'],
  ['#faq .head h2', 'अक्सर पूछे जाने वाले सवाल'], ['#faqQ', 'कोई सवाल खोजें...', { ph: 1 }], ['#faqNone', 'कोई मिलता-जुलता सवाल नहीं मिला। कृपया कॉल या WhatsApp करें।'],
  ['#faq summary', 'आप कौन-सी कक्षाएँ और बोर्ड पढ़ाते हैं?'], ['#faq .ans', 'हम कक्षा 1 से 12 तक CBSE और ICSE बोर्ड के विद्यार्थियों को पढ़ाते हैं।'],
  ['#faq summary', 'कौन-कौन से विषय उपलब्ध हैं?', { i: 1 }], ['#faq .ans', 'कक्षा 1–5: सभी विषय। कक्षा 6–8: गणित, विज्ञान और अंग्रेज़ी। कक्षा 9–12: भौतिकी, गणित, रसायन, जीव विज्ञान, एकाउंटेंसी, BST (बिज़नेस स्टडीज़), अर्थशास्त्र और अंग्रेज़ी।', { i: 1 }],
  ['#faq summary', 'क्या अंग्रेज़ी की कक्षाएँ उपलब्ध हैं?', { i: 2 }], ['#faq .ans', 'जी हाँ, अंग्रेज़ी की कक्षाएँ उपलब्ध हैं।', { i: 2 }],
  ['#faq summary', 'क्या K.V की दूसरी शिफ़्ट के विद्यार्थियों के लिए सुबह की बैच है?', { i: 3 }], ['#faq .ans', 'जी हाँ, K.V की दूसरी शिफ़्ट के विद्यार्थियों के लिए सुबह की बैच उपलब्ध हैं।', { i: 3 }],
  ['#faq summary', 'एडमिशन कैसे लें?', { i: 4 }], ['#faq .ans', 'हमें +91 88299 56645 पर कॉल करें, WhatsApp पर मैसेज करें या नीचे का फ़ॉर्म भरें। हम आपका मार्गदर्शन करेंगे।', { i: 4 }],
  ['#faq summary', 'संस्थान कहाँ है?', { i: 5 }], ['#faq .ans', 'साधना सदन B-140, UPSIDC नवीपुर, गौरी हॉस्पिटल के पास, कानपुर (D), उ.प्र. – 209311।', { i: 5 }],
  ['#contact .head h2', 'आइए या मैसेज करें'],
  ['.info p b', 'पता:'], ['.info p b', 'फ़ोन / WhatsApp:', { i: 1 }], ['.info p b', 'ईमेल:', { i: 2 }], ['.info p b', 'संस्थापक:', { i: 4 }], ['.info p b', 'समय:', { i: 5 }],
  ['.info a[href*="google.com/maps"]', '📍 Google Maps पर देखें →'], ['#vcf', '📇 हमारा नंबर सेव करें'], ['#share', '📤 दोस्तों को शेयर करें'],
  ['#fname', 'आपका नाम', { ph: 1 }], ['#fmsg', 'आपका संदेश', { ph: 1 }], ['#fclass option:first-child', 'कक्षा चुनें'], ['#form button', 'WhatsApp पर भेजें'],
  ['.ptag', '🎓 एडमिशन चालू हैं'], ['.pbox h3', 'डेमो क्लास बुक करें'], ['.pbox p', 'अपनी कक्षा बताइए। हम WhatsApp पर जवाब देंगे।'], ['#pname', 'आपका नाम', { ph: 1 }], ['#pcls option:first-child', 'कक्षा चुनें'], ['#pform button', 'WhatsApp पर भेजें'],
  ['.mbar a', '📞 कॉल करें'], ['.mbar a', '💬 WhatsApp', { i: 1 }]
];
function setLang(l) {
  document.documentElement.lang = l === 'hi' ? 'hi' : 'en';
  HI.forEach(([sel, txt, o = {}]) => {
    const el = document.querySelectorAll(sel)[o.i || 0]; if (!el) return;
    const key = o.ph ? 'enPh' : o.tn ? 'enTn' : 'enHtml';
    if (el.dataset[key] === undefined) el.dataset[key] = o.ph ? el.placeholder : o.tn ? el.firstChild.nodeValue : el.innerHTML;
    if (l === 'en') { if (o.ph) el.placeholder = el.dataset[key]; else if (o.tn) el.firstChild.nodeValue = el.dataset[key]; else el.innerHTML = el.dataset[key]; return; }
    if (o.ph) el.placeholder = txt;
    else if (o.tn) el.firstChild.nodeValue = txt;
    else if (el.matches('.head h2')) el.innerHTML = txt.split(/\s+/).map((w, i) => `<span class="w"><i style="--k:${i}">${w}</i></span>`).join(' ');
    else if (o.html) el.innerHTML = txt; else el.textContent = txt;
  });
  if (greetEl) greetEl.textContent = greetText();
  dchipUpdate();
  langBtn.textContent = l === 'hi' ? 'EN' : 'हिन्दी'; langBtn.setAttribute('aria-label', l === 'hi' ? 'Switch to English' : 'हिन्दी में देखें');
  try { localStorage.setItem('alpineLang', l); } catch (e) {}
}
const langBtn = document.createElement('button'); langBtn.type = 'button'; langBtn.className = 'lang'; langBtn.id = 'lang';
const joinBtn = document.querySelector('#links .btn'); if (joinBtn) joinBtn.before(langBtn);
langBtn.onclick = () => { const next = document.documentElement.lang === 'hi' ? 'en' : 'hi'; setLang(next); toast(next === 'hi' ? 'भाषा: हिन्दी' : 'Language: English'); };
let savedLang = 'en'; try { savedLang = localStorage.getItem('alpineLang') || 'en'; } catch (e) {}
setLang(savedLang === 'hi' ? 'hi' : 'en');

/* toppers ke percentage 0 se ginte hue aate hain */
if (typeof IntersectionObserver !== 'undefined' && !reduce) {
  const sIO = new IntersectionObserver(en => en.forEach(e => {
    if (!e.isIntersecting) return; const el = e.target; sIO.unobserve(el);
    const m = el.textContent.match(/^([\d.]+)(.*)$/); if (!m) return;
    const end = parseFloat(m[1]), dec = (m[1].split('.')[1] || '').length, t0 = performance.now();
    (function step(t) { const p = Math.min(1, (t - t0) / 1000); el.textContent = (end * (1 - Math.pow(1 - p, 3))).toFixed(dec) + m[2]; if (p < 1) requestAnimationFrame(step); })(t0);
  }), { threshold: .8 });
  document.querySelectorAll('.top .score').forEach(el => sIO.observe(el));
}
/* halke formula doodles peeche tairte hain */
[['quiz', ['∫', 'π', '√x', '∑']], ['tools', ['x²', 'E=mc²', 'Δ', '∞']], ['faq', ['?', 'H₂O', 'f(x)']]].forEach(([id, list]) => {
  const sec = document.getElementById(id); if (!sec) return;
  list.forEach((t, i) => { const d = document.createElement('span'); d.className = 'doodle'; d.textContent = t; d.style.cssText = `left:${6 + i * 24 + (i % 2) * 6}%;top:${i % 2 ? 62 : 8}%;animation-delay:${-i * 3}s`; sec.appendChild(d); });
});

/* ============ 🪔 DIWALI THEME ============ */
if (diwaliActive) {
  /* countdown chip */
  if (greetEl) { const chip = document.createElement('p'); chip.className = 'in greet dchip'; chip.id = 'dchip'; greetEl.after(chip); dchipUpdate(); }

  /* diya ki jhalar + rangoli + string lights (hero mein) */
  if (heroEl) {
    const lights = document.createElement('div'); lights.className = 'dlights';
    const n = innerWidth < 600 ? 14 : 28, cols = ['#fcc200', '#ff7a1a', '#ff3d6e', '#35b6ff', '#3ddc84'];
    const pts = Array.from({ length: n }, (_, i) => { const f = i / (n - 1); return [f * 100, 8 + Math.abs(Math.sin(f * Math.PI * 3)) * 22]; });
    lights.innerHTML = `<svg viewBox="0 0 100 40" preserveAspectRatio="none"><polyline fill="none" stroke="rgba(255,255,255,.35)" stroke-width=".25" points="${pts.map(p => p[0] + ',' + p[1]).join(' ')}"/></svg>` + pts.map((p, i) => `<i style="left:${p[0]}%;top:${(p[1] * 1.5).toFixed(1)}px;color:${cols[i % 5]};animation-delay:${(i % 7) * .25}s"></i>`).join('');
    heroEl.appendChild(lights);
    const row = document.createElement('div'); row.className = 'diyarow';
    const nd = innerWidth < 600 ? 5 : 9, mid = nd >> 1;
    row.setAttribute('role', 'group'); row.setAttribute('aria-label', 'Tap each diya to light it');
    row.innerHTML = Array.from({ length: nd }, (_, i) => `<button type="button" class="dy${i === mid ? ' lit' : ''}" aria-label="Light diya ${i + 1}" aria-pressed="${i === mid}"><i></i><b></b></button>`).join('');
    heroEl.appendChild(row);
    const lit = () => row.querySelectorAll('.lit').length, setGlow = () => heroEl.style.setProperty('--glow', lit() / nd);
    setGlow();
    row.addEventListener('click', e => {
      const d = e.target.closest('.dy'); if (!d) return; e.stopPropagation();
      if (!d.classList.contains('lit')) { d.classList.add('lit'); d.setAttribute('aria-pressed', 'true'); const r = d.getBoundingClientRect(); window.fireworks && window.fireworks(r.left + r.width / 2, Math.max(120, r.top - 90)); }
      setGlow();
      if (lit() === nd && !row.dataset.done) { row.dataset.done = 1; toast('शुभ दीपावली! Every diya is lit 🪔'); [0, 1, 2].forEach(k => setTimeout(() => window.fireworks && window.fireworks(innerWidth * (.25 + k * .25), innerHeight * .28), k * 320)); }
    });
    /* hero ke floating science symbols ki jagah tyohar ke nishan */
    const FEST = ['🪔', 'ॐ', '✨', 'श्री', '🎆', '❂'];
    heroEl.querySelectorAll('.sym').forEach((s, i) => s.textContent = FEST[i % FEST.length]);
    const emb = heroEl.querySelector('.emblem');
    if (emb) {
      let petals = ''; for (let k = 0; k < 12; k++) petals += `<ellipse cx="0" cy="-62" rx="9" ry="22" transform="rotate(${k * 30})"/><circle cx="0" cy="-90" r="3" transform="rotate(${k * 30 + 15})"/>`;
      emb.insertAdjacentHTML('afterbegin', `<svg class="rangoli" viewBox="-100 -100 200 200" fill="none" stroke="#fcc200" stroke-width="1.2">${petals}<circle r="40"/><circle r="98" stroke-dasharray="2 5"/></svg>`);
    }
  }

  /* fireworks */
  const fw = document.getElementById('fw');
  if (fw) {
    const fctx = fw.getContext('2d'); let parts = [], raf = 0, heroSeen = true;
    const fit = () => { fw.width = innerWidth; fw.height = innerHeight; }; fit(); addEventListener('resize', fit);
    const loop = () => {
      fctx.clearRect(0, 0, fw.width, fw.height); parts = parts.filter(p => p.life > 0);
      parts.forEach(p => { p.x += p.vx; p.y += p.vy; p.vy += .045; p.vx *= .985; p.life -= .013; fctx.globalAlpha = Math.max(p.life, 0); fctx.fillStyle = p.col; fctx.beginPath(); fctx.arc(p.x, p.y, 2.3, 0, 7); fctx.fill(); });
      fctx.globalAlpha = 1; raf = parts.length ? requestAnimationFrame(loop) : 0; if (!raf) fctx.clearRect(0, 0, fw.width, fw.height);
    };
    window.fireworks = (x, y, c) => {
      if (reduce) return; const col = c || pk(['#fcc200', '#ff7a1a', '#ff3d6e', '#35b6ff', '#ffffff', '#3ddc84']), c2 = pk(['#fcc200', '#ffffff']);
      for (let i = 0; i < 54; i++) { const a = Math.PI * 2 * i / 54 + Math.random() * .15, v = 1.6 + Math.random() * 3.4; parts.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: 1, col: i % 3 ? col : c2 }); }
      if (!raf) raf = requestAnimationFrame(loop);
    };
    if (heroEl) {
      new IntersectionObserver(e => heroSeen = e[0].isIntersecting).observe(heroEl);
      heroEl.addEventListener('click', e => window.fireworks(e.clientX, e.clientY));
      setInterval(() => { if (heroSeen && !document.hidden) window.fireworks(innerWidth * (.15 + Math.random() * .7), innerHeight * (.14 + Math.random() * .32)); }, 2800);
      setTimeout(() => { if (heroSeen) window.fireworks(innerWidth * .5, innerHeight * .3); }, 2300);
    }
  }

  /* shubh deepawali wish (ek session mein ek baar) */
  const dwish = document.getElementById('dwish');
  if (dwish) {
    const dLight = document.getElementById('dLight'), dMsg = document.getElementById('dMsg');
    let seenW = false; try { seenW = sessionStorage.getItem('alpineDwish'); } catch (e) {}
    const shut = () => { dwish.classList.remove('open'); setTimeout(() => dwish.hidden = true, 350); try { sessionStorage.setItem('alpineDwish', '1'); } catch (e) {} };
    const show = () => { if (seenW) return; dwish.hidden = false; requestAnimationFrame(() => dwish.classList.add('open')); };
    setTimeout(show, 4800);
    dLight.onclick = () => {
      if (dwish.classList.contains('lit')) { shut(); return; }
      dwish.classList.add('lit'); dMsg.textContent = 'May your life be filled with light, joy and success! ✨'; dLight.textContent = 'Thank you 🙏';
      const r = dwish.querySelector('.diya').getBoundingClientRect(); for (let k = 0; k < 3; k++) setTimeout(() => window.fireworks && window.fireworks(r.left + r.width / 2 + (k - 1) * 90, r.top - 30 - k * 20), k * 260); confetti(r.left + r.width / 2, r.top);
    };
    document.getElementById('dclose').onclick = shut;
    dwish.addEventListener('click', e => { if (e.target === dwish) shut(); });
    addEventListener('keydown', e => { if (e.key === 'Escape' && dwish.classList.contains('open')) shut(); });
  }

  /* 🪔 Diwali greeting card maker */
  const dwCv = document.getElementById('dwCanvas');
  if (dwCv) {
    const x = dwCv.getContext('2d'), nameIn = document.getElementById('dwName');
    const THEMES = { Gold: ['#3a0d52', '#8a1f4d', '#ff8a1f'], Royal: ['#06143a', '#0a3c8a', '#35b6ff'], Night: ['#120826', '#2b1058', '#ff3d6e'] };
    let theme = 'Gold';
    const stars = Array.from({ length: 70 }, (_, i) => [(i * 137.5) % 1080, (i * 89.3) % 760, 1 + (i % 3)]);
    const draw = () => {
      const t = THEMES[theme], g = x.createLinearGradient(0, 0, 0, 1080); g.addColorStop(0, t[0]); g.addColorStop(.6, t[1]); g.addColorStop(1, t[2]); x.fillStyle = g; x.fillRect(0, 0, 1080, 1080);
      x.fillStyle = 'rgba(255,255,255,.8)'; stars.forEach(s => { x.globalAlpha = .25 + (s[2] / 6); x.beginPath(); x.arc(s[0], s[1], s[2], 0, 7); x.fill(); }); x.globalAlpha = 1;
      const gl = x.createRadialGradient(540, 560, 10, 540, 560, 420); gl.addColorStop(0, 'rgba(255,196,70,.65)'); gl.addColorStop(1, 'rgba(255,196,70,0)'); x.fillStyle = gl; x.fillRect(0, 100, 1080, 900);
      x.strokeStyle = 'rgba(255,214,120,.22)'; x.lineWidth = 3; for (let k = 0; k < 28; k++) { const a = k * Math.PI / 14; x.beginPath(); x.moveTo(540 + Math.cos(a) * 120, 560 + Math.sin(a) * 120); x.lineTo(540 + Math.cos(a) * 440, 560 + Math.sin(a) * 440); x.stroke(); }
      const bw = x.createLinearGradient(380, 640, 700, 760); bw.addColorStop(0, '#ffd45e'); bw.addColorStop(1, '#d9822b'); x.fillStyle = bw; x.beginPath(); x.ellipse(540, 660, 170, 85, 0, 0, Math.PI); x.fill();
      x.fillStyle = '#ffe9a8'; x.beginPath(); x.ellipse(540, 660, 170, 26, 0, 0, 7); x.fill(); x.fillStyle = '#b8651a'; x.beginPath(); x.ellipse(540, 662, 130, 16, 0, 0, 7); x.fill();
      x.save(); x.shadowColor = '#ffb020'; x.shadowBlur = 50; const fl = x.createLinearGradient(0, 470, 0, 650); fl.addColorStop(0, '#fff3a0'); fl.addColorStop(1, '#ff8a1f'); x.fillStyle = fl; x.beginPath(); x.moveTo(540, 450); x.bezierCurveTo(470, 540, 480, 610, 540, 655); x.bezierCurveTo(600, 610, 610, 540, 540, 450); x.fill(); x.restore();
      x.textAlign = 'center'; x.fillStyle = '#ffd45e'; x.font = '800 130px Hind, sans-serif'; x.fillText('शुभ दीपावली', 540, 240);
      x.fillStyle = '#fff'; x.font = '700 64px sans-serif'; x.fillText('Happy Diwali', 540, 335);
      x.font = '34px sans-serif'; x.fillStyle = 'rgba(255,255,255,.92)'; x.fillText('Wishing you light, joy and success', 540, 850);
      const nm = nameIn.value.trim(); if (nm) { x.fillStyle = '#ffd45e'; x.font = '700 52px sans-serif'; x.fillText('— ' + nm, 540, 925); }
      x.fillStyle = 'rgba(255,255,255,.75)'; x.font = '26px sans-serif'; x.fillText('ALPINE Career Institute · सही पढ़ें, सही सीखें', 540, 1030);
    };
    const blob = cb => dwCv.toBlob(cb, 'image/png');
    nameIn.oninput = draw;
    const styles = document.getElementById('dwStyles'); styles.innerHTML = Object.keys(THEMES).map(k => `<button type="button" data-t="${k}" class="${k === theme ? 'on' : ''}">${k}</button>`).join('');
    styles.onclick = e => { const b = e.target.closest('button'); if (!b) return; theme = b.dataset.t; styles.querySelectorAll('button').forEach(z => z.classList.toggle('on', z === b)); draw(); };
    const save = () => blob(b => { const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'ALPINE-Diwali-card.png'; a.click(); toast('Card downloaded 🪔'); });
    document.getElementById('dwDl').onclick = save;
    document.getElementById('dwShare').onclick = () => blob(b => {
      const f = new File([b], 'ALPINE-Diwali-card.png', { type: 'image/png' });
      if (navigator.canShare && navigator.canShare({ files: [f] })) navigator.share({ files: [f], title: 'Happy Diwali', text: 'शुभ दीपावली! Happy Diwali 🪔' }).catch(() => {});
      else { save(); toast('Download the card and share it on WhatsApp'); }
    });
    draw(); if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);
  }

  /* ===== 🎆 Firework colour chemistry card (sirf Diwali mein) ===== */
  const fwChips = document.getElementById('fwChips');
  if (fwChips && window.fireworks) {
    const FWC = [
      ['Sr', 'Strontium', 'red', '#ff3b3b', 'Strontium salts burn a deep crimson red.'],
      ['Ca', 'Calcium', 'orange', '#ff8a1f', 'Calcium salts give a warm orange.'],
      ['Na', 'Sodium', 'golden yellow', '#ffd21f', 'Sodium gives an intense golden yellow, the colour of an old street lamp.'],
      ['Ba', 'Barium', 'green', '#3ddc84', 'Barium salts give a bright green.'],
      ['Cu', 'Copper', 'blue', '#35b6ff', 'Copper compounds give blue, the hardest colour for makers to get right.'],
      ['Fe', 'Iron, Al, Mg', 'gold and white sparks', '#fff1b8', 'Burning iron throws gold sparks and aluminium or magnesium throws white ones, like a phooljhadi.']
    ];
    const fwOut = document.getElementById('fwOut');
    fwChips.innerHTML = FWC.map((f, i) => `<button type="button" data-i="${i}"><i style="background:${f[3]};color:${f[3]}"></i>${f[0]}</button>`).join('');
    fwChips.onclick = e => {
      const b = e.target.closest('button'); if (!b) return; const f = FWC[+b.dataset.i];
      fwChips.querySelectorAll('button').forEach(z => z.classList.toggle('on', z === b));
      fwOut.innerHTML = `<b>${f[0]} · ${f[1]}</b> gives <b style="color:${f[3] === '#fff1b8' ? '#b8741a' : f[3]}">${f[2]}</b>. ${f[4]}`;
      [0, 1, 2].forEach(k => setTimeout(() => window.fireworks(innerWidth * (.3 + k * .2), innerHeight * (.25 + (k % 2) * .12), f[3]), k * 240));
    };
  }
}

/* ===== HERO MOVEMENT: ek hi smooth loop, aur sirf tab jab hero dikh raha ho ===== */
if (heroEl) {
  /* upar se neeche sahi order mein (pehle countdown chip aane par CTA sabse pehle aa jaata tha) */
  heroEl.querySelectorAll('.in').forEach((el, i) => el.style.animationDelay = (1.1 + i * .12).toFixed(2) + 's');
  const emb2 = heroEl.querySelector('.emblem'), m = { tx: .7, ty: .3, x: .7, y: .3, raf: 0 };
  const step = () => {
    m.x += (m.tx - m.x) * .1; m.y += (m.ty - m.y) * .1;
    heroEl.style.setProperty('--mx', (m.x * 100).toFixed(1) + '%'); heroEl.style.setProperty('--my', (m.y * 100).toFixed(1) + '%');
    if (emb2 && !reduce) emb2.style.translate = `${((m.x - .5) * -26).toFixed(1)}px ${((m.y - .5) * -20).toFixed(1)}px`;
    m.raf = Math.abs(m.tx - m.x) + Math.abs(m.ty - m.y) > .002 ? requestAnimationFrame(step) : 0;
  };
  heroEl.addEventListener('pointermove', e => {
    if (e.pointerType === 'touch') return;
    const r = heroEl.getBoundingClientRect(); m.tx = (e.clientX - r.left) / r.width; m.ty = (e.clientY - r.top) / r.height;
    if (!m.raf) m.raf = requestAnimationFrame(step);
  });
  new IntersectionObserver(en => heroEl.classList.toggle('off', !en[0].isIntersecting)).observe(heroEl);
}
