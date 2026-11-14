// Nav
const navLinks = document.getElementById('navLinks');
const burger = document.getElementById('burger');
burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(open));
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
}));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    navLinks.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
});

// Contact form is a demo
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('formNote').textContent = 'Thanks — message ready. Connect a form service or mailto to send it for real.';
  e.target.reset();
});

// Copy the address without leaving the page
const copyMail = document.getElementById('copyMail');
const copyNote = document.getElementById('copyNote');
if (copyMail) {
  let copyTimer;
  copyMail.addEventListener('click', async () => {
    const email = document.querySelector('.contact-mail').textContent.trim();
    let ok = false;
    try {
      if (navigator.clipboard) {
        await Promise.race([
          navigator.clipboard.writeText(email).then(() => { ok = true; }),
          new Promise(r => setTimeout(r, 700)),
        ]);
      }
    } catch {}
    if (!ok) {
      // file:// and odd embeds have no clipboard API; a selected field still copies
      const field = document.createElement('textarea');
      field.value = email;
      field.setAttribute('readonly', '');
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.appendChild(field);
      field.select();
      try { ok = document.execCommand('copy'); } catch {}
      field.remove();
    }
    copyNote.textContent = ok ? 'Copied — ' + email : 'Select the address above and copy it.';
    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => { copyNote.textContent = ''; }, 2400);
  });
}

const reduceMotion = document.documentElement.classList.contains('motion-off');

// The Motion: on/off switch in the topbar — applies after a reload
const motionToggle = document.getElementById('motionToggle');
if (motionToggle) {
  motionToggle.textContent = 'Motion: ' + (reduceMotion ? 'off' : 'on');
  motionToggle.addEventListener('click', () => {
    try { localStorage.setItem('motion', reduceMotion ? 'on' : 'off'); } catch {}
    location.reload();
  });
}

/* ---------- Hero: ink-line 3D object in the empty portrait slot ---------- */
// Mounts only when photo.jpg is missing, motion is allowed, and THREE loads.
// On any failure the portrait placeholder stays exactly as it was.
const hero3d = document.getElementById('hero3d');
if (hero3d && !reduceMotion) {
  import('https://cdnjs.cloudflare.com/ajax/libs/three.js/0.160.0/three.module.min.js')
    .then(THREE => {
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      hero3d.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 10);
      camera.position.set(0, 0, 4.6);

      // The page's own ink and olive, drawn as line art on the paper
      const group = new THREE.Group();
      group.add(new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1, 0)),
        new THREE.LineBasicMaterial({ color: 0x1e3b2f })
      ));
      group.add(new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.OctahedronGeometry(0.47, 0)),
        new THREE.LineBasicMaterial({ color: 0x1e3b2f, transparent: true, opacity: 0.4 })
      ));
      group.add(new THREE.Points(
        new THREE.IcosahedronGeometry(1, 0),
        new THREE.PointsMaterial({ color: 0x7f8c6a, size: 0.042 })
      ));
      scene.add(group);
      // The cursor leans the object before you even grab it
      hero3d.__follow = { gx: 0, gy: 0, x: 0, y: 0 };
      let introduced = false;

      function fit() {
        const w = hero3d.clientWidth, h = hero3d.clientHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      }
      fit();
      new ResizeObserver(fit).observe(hero3d);

      // Drag to turn; it keeps a slow spin of its own between grabs
      let dragging = false, px = 0, py = 0;
      const spin = { x: 0.3, y: -0.6 }, target = { x: 0.3, y: -0.6 };
      hero3d.addEventListener('pointerdown', e => {
        dragging = true; px = e.clientX; py = e.clientY;
        try { hero3d.setPointerCapture(e.pointerId); } catch {}
      });
      hero3d.addEventListener('pointermove', e => {
        if (!dragging) return;
        const r = hero3d.getBoundingClientRect();
        target.y += (e.clientX - px) / r.width * 2.4;
        target.x += (e.clientY - py) / r.height * 2;
        px = e.clientX; py = e.clientY;
      });
      const endDrag = () => { dragging = false; };
      hero3d.addEventListener('pointerup', endDrag);
      hero3d.addEventListener('pointercancel', endDrag);

      // Render only while the slot is actually on screen
      let running = false;
      new IntersectionObserver(entries => { running = entries[0].isIntersecting; }).observe(hero3d);

      let last = performance.now();
      function frame(now) {
        const dt = Math.min((now - last) / 1000, 0.05);
        last = now;
        if (running && !document.hidden) {
          if (!dragging) target.y += dt * 0.35;
          spin.x += (target.x - spin.x) * 0.08;
          spin.y += (target.y - spin.y) * 0.08;
          const f = hero3d.__follow;
          f.x += (f.gx - f.x) * 0.06;
          f.y += (f.gy - f.y) * 0.06;
          group.rotation.set(spin.x + f.y, spin.y + f.x, 0);
          renderer.render(scene, camera);
          if (!introduced) {
            introduced = true;
            hero3d.closest('.portrait').classList.add('is-3d');
            if (window.gsap) gsap.from(hero3d, { opacity: 0, scale: 0.94, duration: 0.8, ease: 'power3.out' });
          }
        }
        requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    })
    .catch(() => { /* offline or WebGL failed — the placeholder stays */ });
}

/* ---------- Projects: index rows drive the pinned preview ---------- */
const rows = Array.from(document.querySelectorAll('.work-row'));
const previews = Array.from(document.querySelectorAll('.preview-item'));
const previewIdx = document.getElementById('previewIdx');
const previewNum = document.getElementById('previewNum');
const previewName = document.getElementById('previewName');
let activeWork = 0;

function tickNum(el, to, pad, fromVal) {
  if (!window.gsap || reduceMotion) { el.textContent = String(to).padStart(pad, '0'); return; }
  const v = { n: parseInt(fromVal != null ? fromVal : el.textContent, 10) || 0 };
  gsap.to(v, {
    n: to, duration: 0.45, ease: 'power2.out', overwrite: true,
    onUpdate: () => { el.textContent = String(Math.round(v.n)).padStart(pad, '0'); },
  });
}

function setWork(i) {
  const prev = activeWork;
  activeWork = (i + rows.length) % rows.length;
  rows.forEach((row, k) => {
    const on = k === activeWork;
    row.classList.toggle('active', on);
    row.setAttribute('aria-selected', String(on));
  });
  previews.forEach(p => p.classList.toggle('active', Number(p.dataset.idx) === activeWork));
  if (prev !== activeWork) tickNum(previewNum, activeWork + 1, 2, String(prev + 1));
  else previewNum.textContent = String(activeWork + 1).padStart(2, '0');
  previewName.textContent = rows[activeWork].querySelector('h3').textContent;
  // Clip wipe only on a real change, so first paint stays static
  if (prev !== activeWork && window.gsap && !reduceMotion) {
    gsap.fromTo(previews[activeWork],
      { clipPath: 'inset(0 0 100% 0)' },
      { clipPath: 'inset(0 0 0% 0)', duration: 0.55, ease: 'power2.inOut' });
  }
}

rows.forEach((row, i) => {
  row.addEventListener('mouseenter', () => setWork(i));
  row.addEventListener('focus', () => setWork(i));
  row.addEventListener('click', () => setWork(i));
  row.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); rows[(i + 1) % rows.length].focus(); }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); rows[(i - 1 + rows.length) % rows.length].focus(); }
    if (e.key === 'Home') { e.preventDefault(); rows[0].focus(); }
    if (e.key === 'End') { e.preventDefault(); rows[rows.length - 1].focus(); }
  });
});
setWork(0);

/* ---------- Skills: fixed constellation, spotlight, sway, parallax ---------- */
const SKILLS = [
  { name: 'HTML / CSS', pct: 90, label: 'Frontend', how: 'Semantic markup and CSS grid for layouts that hold up from 320px to a projector. I test with the keyboard and check focus states before I call a page finished.', used: ['Pengaduan Sekolah', 'Lost & Found'], tools: ['Semantic HTML', 'Grid', 'Custom properties'] },
  { name: 'JavaScript', pct: 82, label: 'Frontend', how: 'Events, fetch, and state that survives a refresh. The Next.js port is where I learned to keep updates predictable instead of patching text by hand.', used: ['L&F port — Next.js', 'This portfolio'], tools: ['ES6', 'DOM', 'localStorage', 'fetch'] },
  { name: 'GSAP', pct: 75, label: 'Motion', how: 'ScrollTrigger reveals, staggers, and hover states with one easing curve. I animate transform and opacity only, and switch everything off for prefers-reduced-motion.', used: ['This portfolio', 'Section reveals'], tools: ['ScrollTrigger', 'Timelines', 'quickTo'] },
  { name: 'Python', pct: 78, label: 'Backend', how: 'Small CLI tools: argparse, file I/O, and a dry-run mode before anything moves. The file organiser writes an undo file so a mistake is recoverable.', used: ['File organiser'], tools: ['argparse', 'pathlib', 'pytest'] },
  { name: 'Git / GitHub', pct: 85, label: 'Workflow', how: 'Small commits with messages that explain why. Branches per feature, a README that says how to run the thing, and no committed secrets.', used: ['Every project here'], tools: ['Branches', 'Pull requests', 'Markdown'] },
  { name: 'Node / APIs', pct: 65, label: 'Backend', how: 'REST calls with loading and error states, plus a few small Express servers for class assignments. Still the area I am actively studying.', used: ['Class exercises', 'REST practice'], tools: ['Express', 'REST', 'JSON'] },
  { name: 'Docker', pct: 55, label: 'DevOps', how: 'I containerise the apps I hand in so they run the same on my laptop and on the classroom machines. Dockerfiles, Compose for a web app plus a database, and keeping the images small.', used: ['Pengaduan Sekolah', 'Class group project'], tools: ['Dockerfiles', 'Compose', 'Volumes'] },
  { name: 'PHP', pct: 68, label: 'Backend', how: 'Server-rendered pages and form handling: PHP 8, PDO with prepared statements, sessions, and validation on the server instead of trusting the browser. I keep queries in one place and escape output.', used: ['Lost & Found', 'Pengaduan Sekolah'], tools: ['PHP 8', 'PDO', 'Sessions'] },
];

const POSITIONS = [
  { x: 24, y: 27 },
  { x: 64, y: 18 },
  { x: 82, y: 44 },
  { x: 30, y: 77 },
  { x: 52, y: 56 },
  { x: 68, y: 81 },
  { x: 84, y: 62 },
  { x: 34, y: 44 },
];
const MOBILE_POSITIONS = [
  { x: 30, y: 22 },
  { x: 72, y: 16 },
  { x: 66, y: 47 },
  { x: 24, y: 82 },
  { x: 50, y: 58 },
  { x: 66, y: 87 },
  { x: 26, y: 67 },
  { x: 72, y: 31 },
];
const PAIRS = [[0, 1], [1, 2], [2, 5], [5, 4], [4, 3], [3, 0], [1, 4], [5, 6], [4, 6], [5, 7], [0, 7]];

const diagram = document.getElementById('skillsDiagram');
const nodes = Array.from(document.querySelectorAll('.node'));
const linesG = diagram.querySelector('g');
const detailMeta = document.getElementById('detailMeta');
const detailName = document.getElementById('detailName');
const detailHow = document.getElementById('detailHow');
const detailTools = document.getElementById('detailTools');
const detailUsed = document.getElementById('detailUsed');
const detailPct = document.getElementById('detailPct');
const detailTicks = document.getElementById('detailTicks');
let current = -1;
const swayTweens = [];

function positionNodes() {
  const layout = window.innerWidth <= 600 ? MOBILE_POSITIONS : POSITIONS;
  nodes.forEach((node, i) => {
    const p = layout[i];
    node.dataset.x = p.x;
    node.dataset.y = p.y;
    node.style.left = p.x + '%';
    node.style.top = p.y + '%';
    if (window.gsap) gsap.set(node, { xPercent: -50, yPercent: -50 });
    else node.style.transform = 'translate(-50%,-50%)';
  });
}
positionNodes();

let linesAnimated = false;
function drawLines(activeIdx, animate = false) {
  const W = diagram.clientWidth;
  const H = diagram.clientHeight;
  linesG.innerHTML = '';
  PAIRS.forEach(([a, b]) => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', nodes[a].dataset.x / 100 * W);
    line.setAttribute('y1', nodes[a].dataset.y / 100 * H);
    line.setAttribute('x2', nodes[b].dataset.x / 100 * W);
    line.setAttribute('y2', nodes[b].dataset.y / 100 * H);
    if (activeIdx >= 0 && (a === activeIdx || b === activeIdx)) line.setAttribute('class', 'lit');
    if (animate && window.gsap && !reduceMotion) {
      const len = Math.hypot(nodes[b].dataset.x / 100 * W - nodes[a].dataset.x / 100 * W,
        nodes[b].dataset.y / 100 * H - nodes[a].dataset.y / 100 * H);
      line.style.strokeDasharray = len;
      line.style.strokeDashoffset = len;
    }
    linesG.appendChild(line);
  });
  if (animate && window.gsap && !reduceMotion) {
    linesAnimated = true;
    gsap.to(linesG.children, {
      strokeDashoffset: 0, duration: 0.7, stagger: 0.07, ease: 'power2.inOut',
      scrollTrigger: { trigger: '#skillsDiagram', start: 'top 80%', once: true },
    });
  }
}

function buildTicks(pct) {
  const total = 12;
  const on = Math.round(pct / 100 * total);
  detailTicks.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const tick = document.createElement('i');
    if (i < on) tick.className = 'on';
    detailTicks.appendChild(tick);
  }
  if (window.gsap && !reduceMotion) {
    gsap.from(detailTicks.children, {
      scaleX: 0, opacity: 0, transformOrigin: 'left center',
      duration: 0.32, stagger: 0.028, ease: 'power2.out', overwrite: true,
    });
  }
}

function setPct(pct) {
  if (!window.gsap || reduceMotion) { detailPct.textContent = pct + '%'; return; }
  const v = { n: parseInt(detailPct.textContent, 10) || 0 };
  gsap.to(v, {
    n: pct, duration: 0.55, ease: 'power2.out', overwrite: true,
    onUpdate: () => { detailPct.textContent = Math.round(v.n) + '%'; },
  });
}

function spotlight(i) {
  current = i;
  nodes.forEach((node, k) => {
    const on = k === i;
    node.classList.toggle('active', on);
    node.setAttribute('aria-pressed', String(on));
    if (swayTweens[k]) on ? swayTweens[k].pause() : swayTweens[k].play();
    if (window.gsap) {
      gsap.to(node, { scale: on ? 1.12 : 0.93, opacity: on || i < 0 ? 1 : 0.55, duration: 0.24, ease: 'power1.out' });
    } else {
      node.style.opacity = on || i < 0 ? 1 : 0.55;
    }
  });
  drawLines(i);

  if (i < 0) return;
  const s = SKILLS[i];
  detailMeta.textContent = String(i + 1).padStart(2, '0') + ' / ' + String(SKILLS.length).padStart(2, '0') + ' — ' + s.label;
  detailName.textContent = s.name;
  detailHow.textContent = s.how;
  setPct(s.pct);
  detailTools.innerHTML = s.tools.map(t => '<li>' + t + '</li>').join('');
  detailUsed.innerHTML = s.used.map(u => '<li>' + u + '</li>').join('');
  buildTicks(s.pct);
}

nodes.forEach((node, i) => {
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  node.addEventListener('mouseenter', () => { if (finePointer) spotlight(i); });
  node.addEventListener('focus', () => spotlight(i));
  node.addEventListener('click', () => {
    spotlight(current === i ? -1 : i);
    // On mobile the panel sits under the map; bring it into view after a tap
    if (current >= 0 && window.innerWidth <= 900) {
      document.getElementById('skillDetail').scrollIntoView({ block: 'nearest', behavior: reduceMotion ? 'auto' : 'smooth' });
    }
  });
  node.addEventListener('keydown', e => {
    if (e.key === 'Escape') { spotlight(-1); node.blur(); }
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); nodes[(i + 1) % nodes.length].focus(); }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); nodes[(i - 1 + nodes.length) % nodes.length].focus(); }
  });
});
diagram.addEventListener('mouseleave', () => {
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) spotlight(-1);
});

// Initial panel content + first paint, then keep lines in sync with resize
detailTools.innerHTML = SKILLS[0].tools.map(t => '<li>' + t + '</li>').join('');
buildTicks(SKILLS[0].pct);
drawLines(-1, !linesAnimated);
window.addEventListener('resize', () => { positionNodes(); drawLines(current); });

/* ---------- Motion (optional; page is complete without it) ---------- */
if (window.gsap && !reduceMotion) {
  const hasScroll = !!window.ScrollTrigger;
  if (hasScroll) gsap.registerPlugin(ScrollTrigger);
  const EASE = 'power3.out';

  // Hero: name lines rise out of their masks, portrait wipes in behind them
  gsap.timeline({ defaults: { ease: EASE } })
    .from('.hero-name .line-inner', { yPercent: 108, duration: 1.05, stagger: 0.1 })
    .from('.hero-anim', { y: 18, opacity: 0, duration: 0.65, stagger: 0.07 }, 0.22)
    .from('.portrait', { clipPath: 'inset(0 0 100% 0)', duration: 0.9 }, 0.3)
    .from('.hero-ledger div', { y: 16, opacity: 0, duration: 0.55, stagger: 0.07 }, 0.55);

  if (hasScroll) {
    // Each section head: the rule draws across, title and note follow
    gsap.utils.toArray('.sec-head').forEach(head => {
      gsap.timeline({ scrollTrigger: { trigger: head, start: 'top 88%', once: true } })
        .from(head.querySelector('.sec-rule'), { scaleX: 0, duration: 0.7, ease: 'power2.inOut', immediateRender: false })
        .from(head.querySelectorAll('h2, .sec-note'), { y: 14, opacity: 0, duration: 0.5, stagger: 0.06, immediateRender: false }, 0.14);
    });

    // About: process label, then the four steps walk in
    gsap.timeline({ scrollTrigger: { trigger: '.process', start: 'top 88%', once: true } })
      .from('.process .label', { y: 12, opacity: 0, duration: 0.5, ease: EASE, immediateRender: false })
      .from('.process li', { y: 18, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out', immediateRender: false }, 0.12);

    // Contact: address, copy button, then both columns
    gsap.from('.copy-mail', {
      scrollTrigger: { trigger: '.contact-mail', start: 'top 90%', once: true },
      y: 10, opacity: 0, duration: 0.5, ease: EASE, immediateRender: false,
    });
    gsap.timeline({ scrollTrigger: { trigger: '.contact-grid', start: 'top 88%', once: true } })
      .from('.contact-info > *', { y: 16, opacity: 0, duration: 0.5, stagger: 0.07, ease: 'power2.out', immediateRender: false })
      .from('.contact-form > *', { y: 14, opacity: 0, duration: 0.45, stagger: 0.06, ease: 'power2.out', immediateRender: false }, 0.1);

    // Footer settles last
    gsap.from('.footer-inner > *', {
      scrollTrigger: { trigger: '.footer', start: 'top 95%', once: true },
      y: 14, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out', immediateRender: false,
    });

    ScrollTrigger.batch('.reveal', {
      start: 'top 88%',
      once: true,
      onEnter: batch => gsap.from(batch, { y: 24, opacity: 0, duration: 0.65, stagger: 0.09, ease: 'power2.out' }),
    });

    // Hero portrait drifts slower than the page
    gsap.to('.portrait', {
      y: -36, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.6 },
    });

    // Numbers count up when they enter the viewport
    document.querySelectorAll('[data-count]').forEach(el => {
      const end = parseInt(el.dataset.count, 10);
      const pad = parseInt(el.dataset.pad || '0', 10);
      const fmt = n => String(n).padStart(pad, '0');
      gsap.fromTo(el, { textContent: 0 }, {
        textContent: end, duration: 0.9, ease: 'power2.out', snap: { textContent: 1 },
        immediateRender: false,
        onUpdate: () => { el.textContent = fmt(Math.round(el.textContent)); },
        scrollTrigger: { trigger: el, start: 'top 95%', once: true },
      });
    });

    // The ticker leans with scroll velocity, then settles back
    ScrollTrigger.create({
      onUpdate: self => {
        gsap.to('.ticker', {
          skewX: gsap.utils.clamp(-2.5, 2.5, self.getVelocity() / -350),
          duration: 0.35, ease: 'power2.out', overwrite: 'auto',
        });
      },
    });

    // Projects: rows file in, preview panel settles in beside them
    gsap.from('#workList .work-row', {
      scrollTrigger: { trigger: '#workList', start: 'top 85%', once: true },
      y: 22, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
    });
    gsap.from('.work-preview', {
      scrollTrigger: { trigger: '.work', start: 'top 80%', once: true },
      y: 26, opacity: 0, duration: 0.7, ease: EASE,
    });

    // The mock inside the sticky preview drifts a few pixels with scroll
    gsap.fromTo('.preview-stage', { y: -7 }, {
      y: 7, ease: 'none',
      scrollTrigger: { trigger: '.work', start: 'top bottom', end: 'bottom top', scrub: 0.5 },
    });

    // Contact address wipes up from its baseline
    gsap.from('.contact-mail', {
      scrollTrigger: { trigger: '.contact-mail', start: 'top 90%', once: true },
      clipPath: 'inset(0 0 100% 0)', y: 16, duration: 0.8, ease: EASE,
    });

    // Skills nodes pop in
    gsap.from(nodes, {
      scrollTrigger: { trigger: '#skillsDiagram', start: 'top 85%', once: true },
      scale: 0.82, opacity: 0, duration: 0.5, stagger: 0.06, ease: EASE,
    });

    // Nav marks the section currently in view
    const navAnchors = Array.from(document.querySelectorAll('.nav-links a'));
    ['hero', 'about', 'skills', 'projects', 'contact'].forEach(id => {
      ScrollTrigger.create({
        trigger: '#' + id,
        start: 'top 50%',
        end: 'bottom 50%',
        onToggle: self => {
          if (!self.isActive) return;
          navAnchors.forEach(a => a.classList.toggle('is-current', a.getAttribute('href') === '#' + id));
        },
      });
    });

    // Rail shows reading progress
    gsap.to('.rail-progress span', {
      scaleY: 1, ease: 'none',
      scrollTrigger: { start: 0, end: 'max', scrub: 0.4 },
    });

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => ScrollTrigger.refresh());
    }
  }

  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (finePointer) {
    nodes.forEach((node, i) => {
      swayTweens[i] = gsap.to(node, {
        x: gsap.utils.random(-7, 7),
        y: gsap.utils.random(-6, 6),
        duration: gsap.utils.random(3.2, 4.6),
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: i * 0.3,
        paused: true,
      });
    });
    // Sway is ambient; start it only once the map is on screen
    if (hasScroll) {
      ScrollTrigger.create({
        trigger: '#skills',
        start: 'top 60%',
        once: true,
        onEnter: () => swayTweens.forEach(t => t.play()),
      });
    } else {
      swayTweens.forEach(t => t.play());
    }

    const pars = Array.from(document.querySelectorAll('.node-par'));
    const depths = [7, 5, 9, 6, 4, 8];
    const px = pars.map(el => gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power2.out' }));
    const py = pars.map(el => gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power2.out' }));
    diagram.addEventListener('mousemove', e => {
      const r = diagram.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      pars.forEach((_, i) => { px[i](nx * depths[i]); py[i](ny * depths[i] * 0.7); });
      gsap.to(linesG, { x: nx * 3, y: ny * 2, duration: 0.6, ease: 'power2.out' });
    });
    diagram.addEventListener('mouseleave', () => {
      pars.forEach((_, i) => { px[i](0); py[i](0); });
      gsap.to(linesG, { x: 0, y: 0, duration: 0.6 });
    });

    // Portrait tilts with the pointer, a couple of degrees at most
    const portrait = document.querySelector('.portrait');
    if (portrait) {
      const prx = gsap.quickTo(portrait, 'rotationX', { duration: 0.7, ease: 'power2.out' });
      const pry = gsap.quickTo(portrait, 'rotationY', { duration: 0.7, ease: 'power2.out' });
      gsap.set(portrait, { transformPerspective: 900 });
      let pr;
      portrait.addEventListener('mouseenter', () => { pr = portrait.getBoundingClientRect(); });
      portrait.addEventListener('mousemove', e => {
        if (!pr) pr = portrait.getBoundingClientRect();
        pry(((e.clientX - pr.left) / pr.width - 0.5) * 7);
        prx(((e.clientY - pr.top) / pr.height - 0.5) * -5);
      });
      portrait.addEventListener('mouseleave', () => { pr = null; prx(0); pry(0); });
    }

    // Preview panel follows the pointer over the whole work column
    const stage = document.querySelector('.preview-stage');
    const workCol = document.querySelector('.work-preview');
    if (stage && workCol) {
      const srx = gsap.quickTo(stage, 'rotationX', { duration: 0.8, ease: 'power2.out' });
      const sry = gsap.quickTo(stage, 'rotationY', { duration: 0.8, ease: 'power2.out' });
      gsap.set(stage, { transformPerspective: 1200 });
      workCol.addEventListener('mousemove', e => {
        const r = workCol.getBoundingClientRect();
        sry(((e.clientX - r.left) / r.width - 0.5) * 5);
        srx(((e.clientY - r.top) / r.height - 0.5) * -3.5);
      });
      workCol.addEventListener('mouseleave', () => { srx(0); sry(0); });
    }

    // The hero pointer leans the 3D object before you even grab it
    const heroGrid = document.querySelector('.hero-grid');
    if (hero3d && heroGrid) {
      heroGrid.addEventListener('mousemove', e => {
        const r = heroGrid.getBoundingClientRect();
        if (hero3d.__follow) {
          hero3d.__follow.gx = ((e.clientX - r.left) / r.width - 0.5) * 0.5;
          hero3d.__follow.gy = ((e.clientY - r.top) / r.height - 0.5) * 0.35;
        }
      });
      heroGrid.addEventListener('mouseleave', () => {
        if (hero3d.__follow) { hero3d.__follow.gx = 0; hero3d.__follow.gy = 0; }
      });
    }

    // Buttons pull a few pixels toward the pointer
    document.querySelectorAll('.btn, .to-top').forEach(el => {
      const mx = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power2.out' });
      const my = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power2.out' });
      let rect;
      el.addEventListener('mouseenter', () => { rect = el.getBoundingClientRect(); });
      el.addEventListener('mousemove', e => {
        if (!rect) rect = el.getBoundingClientRect();
        mx((e.clientX - rect.left - rect.width / 2) * 0.22);
        my((e.clientY - rect.top - rect.height / 2) * 0.22);
      });
      el.addEventListener('mouseleave', () => { rect = null; mx(0); my(0); });
    });
  }
}
