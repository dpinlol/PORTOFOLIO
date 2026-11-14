import * as THREE from "three";
import type { Project } from "../data/projects";
import { mulberry32 } from "./math";

export type CanvasPainter = {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  random: () => number;
};

export function makePainter(width: number, height: number, seed = 7): CanvasPainter {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas 2D is not available");
  return { canvas, ctx, random: mulberry32(seed) };
}

function finishTexture(
  canvas: HTMLCanvasElement,
  anisotropy: number,
  repeat = false,
): THREE.CanvasTexture {
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = anisotropy;
  texture.needsUpdate = true;
  if (repeat) {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
  }
  return texture;
}

function grain(
  painter: CanvasPainter,
  amount = 9000,
  alpha = 0.05,
  dark = "81, 72, 62",
): void {
  const { ctx, random } = painter;
  ctx.save();
  for (let i = 0; i < amount; i += 1) {
    const x = random() * ctx.canvas.width;
    const y = random() * ctx.canvas.height;
    const r = random() * 1.6 + 0.2;
    ctx.fillStyle = `rgba(${dark}, ${alpha * (0.35 + random())})`;
    ctx.fillRect(x, y, r, r);
  }
  ctx.restore();
}

export function linenTexture(anisotropy: number): THREE.CanvasTexture {
  const size = 768;
  const painter = makePainter(size, size, 11);
  const { ctx, random } = painter;

  ctx.fillStyle = "#e9dfcc";
  ctx.fillRect(0, 0, size, size);

  // woven threads
  for (let i = 0; i < size; i += 3) {
    const value = 0.035 + random() * 0.04;
    ctx.fillStyle = `rgba(81, 72, 62, ${value})`;
    ctx.fillRect(0, i, size, 1);
    ctx.fillStyle = `rgba(255, 250, 236, ${value * 1.25})`;
    ctx.fillRect(i, 0, 1, size);
  }

  // slubs and soft stains in the weave
  for (let i = 0; i < 28; i += 1) {
    const x = random() * size;
    const y = random() * size;
    const radius = 8 + random() * 90;
    const stain = ctx.createRadialGradient(x, y, 0, x, y, radius);
    stain.addColorStop(0, `rgba(165, 138, 112, ${0.018 + random() * 0.035})`);
    stain.addColorStop(1, "rgba(165, 138, 112, 0)");
    ctx.fillStyle = stain;
    ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
  }

  grain(painter, 22000, 0.045);

  return finishTexture(painter.canvas, anisotropy, true);
}

export function woodTexture(anisotropy: number): THREE.CanvasTexture {
  const painter = makePainter(512, 512, 23);
  const { ctx, random } = painter;

  ctx.fillStyle = "#6d5138";
  ctx.fillRect(0, 0, 512, 512);

  for (let i = 0; i < 190; i += 1) {
    const y = random() * 512;
    const amplitude = 2 + random() * 9;
    const width = 0.5 + random() * 2.2;
    ctx.beginPath();
    ctx.strokeStyle = `rgba(${random() > 0.5 ? "38, 26, 17" : "154, 122, 86"}, ${0.05 + random() * 0.16})`;
    ctx.lineWidth = width;
    for (let x = -10; x <= 522; x += 8) {
      const wave = Math.sin(x * (0.008 + random() * 0.001) + i) * amplitude;
      const yy = y + wave * 0.15 + Math.sin((x + i * 37) * 0.004) * 2;
      if (x === -10) ctx.moveTo(x, yy);
      else ctx.lineTo(x, yy);
    }
    ctx.stroke();
  }

  // a few knots
  for (let i = 0; i < 3; i += 1) {
    const x = random() * 512;
    const y = random() * 512;
    ctx.strokeStyle = "rgba(38, 26, 17, .16)";
    ctx.lineWidth = 1.2;
    for (let r = 4; r < 24; r += 4) {
      ctx.beginPath();
      ctx.ellipse(x, y, r * 1.8, r, 0.3, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  grain(painter, 12000, 0.06, "30, 20, 12");

  return finishTexture(painter.canvas, anisotropy, true);
}

export function wallTexture(anisotropy: number): THREE.CanvasTexture {
  const painter = makePainter(768, 768, 41);
  const { ctx, random } = painter;

  ctx.fillStyle = "#2c2a24";
  ctx.fillRect(0, 0, 768, 768);

  const wash = ctx.createLinearGradient(0, 0, 0, 768);
  wash.addColorStop(0, "rgba(83, 73, 58, .35)");
  wash.addColorStop(0.55, "rgba(44, 42, 36, .08)");
  wash.addColorStop(1, "rgba(15, 14, 12, .42)");
  ctx.fillStyle = wash;
  ctx.fillRect(0, 0, 768, 768);

  for (let i = 0; i < 120; i += 1) {
    const x = random() * 768;
    const y = random() * 768;
    const radius = 20 + random() * 120;
    const patch = ctx.createRadialGradient(x, y, 0, x, y, radius);
    patch.addColorStop(0, `rgba(120, 103, 82, ${0.008 + random() * 0.018})`);
    patch.addColorStop(1, "rgba(120, 103, 82, 0)");
    ctx.fillStyle = patch;
    ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
  }

  grain(painter, 18000, 0.06, "12, 11, 9");

  return finishTexture(painter.canvas, anisotropy, true);
}

/* ------------------------------------------------------------------ */
/* portrait study                                                      */
/* ------------------------------------------------------------------ */

export function portraitTexture(anisotropy: number): THREE.CanvasTexture {
  const painter = makePainter(1280, 1600, 83);
  const { ctx, random } = painter;

  // painted ground
  ctx.fillStyle = "#e8dcc5";
  ctx.fillRect(0, 0, 1280, 1600);

  for (let i = 0; i < 46; i += 1) {
    const x = random() * 1280;
    const width = 20 + random() * 130;
    ctx.fillStyle = `rgba(${random() > 0.62 ? "165, 138, 112" : "216, 201, 179"}, ${0.02 + random() * 0.06})`;
    ctx.fillRect(x, 0, width, 1600);
  }

  // a low warm horizon, like a studio wall
  const horizon = ctx.createLinearGradient(0, 820, 0, 1600);
  horizon.addColorStop(0, "rgba(165, 138, 112, 0)");
  horizon.addColorStop(0.48, "rgba(165, 138, 112, .13)");
  horizon.addColorStop(1, "rgba(122, 96, 73, .24)");
  ctx.fillStyle = horizon;
  ctx.fillRect(0, 820, 1280, 780);

  ctx.save();
  ctx.translate(640, 0);

  // moon / palette disc behind the head
  ctx.beginPath();
  ctx.arc(-30, 520, 296, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(165, 138, 112, .13)";
  ctx.fill();

  // shoulders
  ctx.beginPath();
  ctx.moveTo(-410, 1600);
  ctx.bezierCurveTo(-380, 1150, -260, 1000, -70, 946);
  ctx.lineTo(70, 946);
  ctx.bezierCurveTo(270, 1000, 390, 1160, 420, 1600);
  ctx.closePath();
  ctx.fillStyle = "rgba(198, 179, 151, .92)";
  ctx.fill();
  ctx.strokeStyle = "rgba(81, 72, 62, .85)";
  ctx.lineWidth = 6;
  ctx.stroke();

  // neck
  ctx.beginPath();
  ctx.moveTo(-72, 848);
  ctx.bezierCurveTo(-66, 928, -48, 966, -30, 990);
  ctx.lineTo(34, 990);
  ctx.bezierCurveTo(54, 960, 68, 918, 70, 846);
  ctx.closePath();
  ctx.fillStyle = "rgba(232, 218, 197, .98)";
  ctx.fill();
  ctx.strokeStyle = "rgba(81, 72, 62, .75)";
  ctx.lineWidth = 4;
  ctx.stroke();

  // head, deliberately abstract: a contour, not a likeness
  ctx.beginPath();
  ctx.moveTo(-8, 250);
  ctx.bezierCurveTo(116, 244, 196, 338, 198, 488);
  ctx.bezierCurveTo(200, 640, 152, 800, 50, 858);
  ctx.bezierCurveTo(8, 882, -30, 884, -66, 866);
  ctx.bezierCurveTo(-162, 812, -208, 662, -206, 508);
  ctx.bezierCurveTo(-204, 352, -124, 256, -8, 250);
  ctx.closePath();
  ctx.fillStyle = "rgba(241, 231, 214, 1)";
  ctx.fill();
  ctx.strokeStyle = "rgba(81, 72, 62, .95)";
  ctx.lineWidth = 5.5;
  ctx.stroke();

  // soft shadow where the head meets the neck
  const chinShadow = ctx.createRadialGradient(0, 900, 20, 0, 900, 260);
  chinShadow.addColorStop(0, "rgba(81, 72, 62, .20)");
  chinShadow.addColorStop(1, "rgba(81, 72, 62, 0)");
  ctx.fillStyle = chinShadow;
  ctx.fillRect(-280, 760, 560, 340);

  // hair mass, a few sweeping strokes
  ctx.beginPath();
  ctx.moveTo(-198, 474);
  ctx.bezierCurveTo(-232, 320, -154, 208, -10, 202);
  ctx.bezierCurveTo(102, 198, 190, 268, 202, 390);
  ctx.bezierCurveTo(150, 330, 70, 306, -18, 320);
  ctx.bezierCurveTo(-104, 334, -158, 388, -198, 474);
  ctx.closePath();
  ctx.fillStyle = "rgba(81, 72, 62, .78)";
  ctx.fill();

  // one gestural line where the face would be, plus contour hatching
  ctx.strokeStyle = "rgba(81, 72, 62, .8)";
  ctx.lineWidth = 3.4;
  ctx.beginPath();
  ctx.moveTo(-112, 526);
  ctx.bezierCurveTo(-52, 546, 20, 548, 104, 516);
  ctx.stroke();

  ctx.strokeStyle = "rgba(81, 72, 62, .26)";
  ctx.lineWidth = 2;
  for (let i = 0; i < 17; i += 1) {
    const y = 360 + i * 24;
    ctx.beginPath();
    ctx.moveTo(-198 + i * 2, y);
    ctx.bezierCurveTo(-152 + i, y + 10, -148 + i, y + 34, -186 + i * 1.5, y + 56);
    ctx.stroke();
  }

  // clay brushstroke across the chest
  ctx.beginPath();
  ctx.moveTo(-360, 1220);
  ctx.bezierCurveTo(-120, 1140, 170, 1180, 376, 1090);
  ctx.bezierCurveTo(300, 1270, -80, 1330, -360, 1220);
  ctx.closePath();
  ctx.fillStyle = "rgba(150, 116, 84, .58)";
  ctx.fill();

  // folds that give the torso weight
  ctx.strokeStyle = "rgba(81, 72, 62, .28)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(-286, 1290);
  ctx.bezierCurveTo(-130, 1340, 120, 1360, 310, 1280);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-224, 1470);
  ctx.bezierCurveTo(-80, 1430, 100, 1430, 246, 1480);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-120, 1060);
  ctx.bezierCurveTo(-60, 1180, -40, 1330, -56, 1460);
  ctx.strokeStyle = "rgba(81, 72, 62, .18)";
  ctx.lineWidth = 2.4;
  ctx.stroke();

  // a thin ink gesture that becomes the signature
  ctx.beginPath();
  ctx.moveTo(240, 1410);
  ctx.bezierCurveTo(292, 1360, 300, 1444, 348, 1392);
  ctx.strokeStyle = "rgba(41, 40, 35, .82)";
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.restore();

  // weight along the lower edge of the canvas
  const base = ctx.createLinearGradient(0, 1380, 0, 1600);
  base.addColorStop(0, "rgba(81, 72, 62, 0)");
  base.addColorStop(1, "rgba(81, 72, 62, .16)");
  ctx.fillStyle = base;
  ctx.fillRect(0, 1380, 1280, 220);

  // drips and splatter
  for (let i = 0; i < 90; i += 1) {
    const x = random() * 1280;
    const y = 1000 + random() * 560;
    const r = 0.8 + random() * 3.8;
    ctx.fillStyle = `rgba(81, 72, 62, ${0.04 + random() * 0.13})`;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  for (let i = 0; i < 7; i += 1) {
    const x = 280 + random() * 720;
    const length = 30 + random() * 150;
    ctx.fillStyle = `rgba(81, 72, 62, ${0.025 + random() * 0.05})`;
    ctx.fillRect(x, 900, 1.5 + random() * 2, length);
  }

  grain(painter, 30000, 0.045);

  // canvas weave, laid over the paint
  for (let i = 0; i < 1600; i += 1) {
    const x = random() * 1280;
    const y = random() * 1600;
    ctx.fillStyle = `rgba(255, 250, 236, ${0.01 + random() * 0.022})`;
    ctx.fillRect(x, y, 1, 1);
  }

  return finishTexture(painter.canvas, anisotropy);
}

/* ------------------------------------------------------------------ */
/* project artworks                                                    */
/* ------------------------------------------------------------------ */

function drawCover(
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  x: number,
  y: number,
  w: number,
  h: number,
): void {
  const scale = Math.max(w / image.naturalWidth, h / image.naturalHeight);
  const width = image.naturalWidth * scale;
  const height = image.naturalHeight * scale;
  const dx = x + (w - width) / 2;
  const dy = y;
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.clip();
  ctx.drawImage(image, dx, dy, width, height);
  ctx.restore();
}

function drawBrowserFrame(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  url: string,
): void {
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(x, y, w, h);
  ctx.fillStyle = "#e7e2d7";
  ctx.fillRect(x, y, w, 46);
  const dots = ["#d9a297", "#d8c48f", "#a9c0a5"];
  dots.forEach((color, i) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x + 22 + i * 18, y + 23, 5, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.fillStyle = "#f7f4ec";
  ctx.fillRect(x + 98, y + 10, w - 160, 26);
  ctx.fillStyle = "#8b8375";
  ctx.font = "500 13px 'DM Sans', Arial, sans-serif";
  ctx.textAlign = "left";
  ctx.fillText(url, x + 112, y + 28);
}

function drawLostFound(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number): void {
  drawBrowserFrame(ctx, x, y, w, h, "lostandfound.app");

  const top = y + 46;
  const innerW = w;
  ctx.fillStyle = "#f6fbf8";
  ctx.fillRect(x, top, innerW, h - 46);

  // site header
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(x, top, innerW, 74);
  ctx.fillStyle = "#0f766e";
  ctx.font = "800 28px 'DM Sans', Arial, sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("Lost & Found", x + 38, top + 47);
  ctx.font = "500 15px 'DM Sans', Arial, sans-serif";
  ctx.fillStyle = "#134e4a";
  ctx.fillText("Beranda", x + innerW - 330, top + 45);
  ctx.fillText("Barang", x + innerW - 242, top + 45);
  ctx.fillStyle = "#0f766e";
  ctx.fillRect(x + innerW - 152, top + 23, 58, 30);
  ctx.fillStyle = "#ffffff";
  ctx.font = "600 13px 'DM Sans', Arial, sans-serif";
  ctx.fillText("Masuk", x + innerW - 140, top + 43);
  ctx.strokeStyle = "#0f766e";
  ctx.lineWidth = 1.4;
  ctx.strokeRect(x + innerW - 78, top + 23, 52, 30);
  ctx.fillStyle = "#0f766e";
  ctx.fillText("Daftar", x + innerW - 66, top + 43);

  // hero
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(x, top + 74, innerW, 250);
  ctx.fillStyle = "#134e4a";
  ctx.font = "800 47px 'DM Sans', Arial, sans-serif";
  ctx.fillText("Temukan atau laporkan", x + 38, top + 160);
  ctx.fillStyle = "#0f766e";
  ctx.fillText("barang hilang.", x + 38, top + 212);
  ctx.fillStyle = "#64748b";
  ctx.font = "400 17px 'DM Sans', Arial, sans-serif";
  ctx.fillText("Satu tempat untuk barang hilang dan temuan di sekolah.", x + 38, top + 248);

  // search
  ctx.fillStyle = "#f0fdf9";
  ctx.strokeStyle = "#cce7e0";
  ctx.lineWidth = 1;
  ctx.fillRect(x + 38, top + 270, innerW - 76, 48);
  ctx.strokeRect(x + 38, top + 270, innerW - 76, 48);
  ctx.fillStyle = "#94a3b8";
  ctx.font = "400 15px 'DM Sans', Arial, sans-serif";
  ctx.fillText("Cari nama barang, lokasi, atau pelapor…", x + 54, top + 300);

  // stats
  const stats: [string, string][] = [
    ["Total laporan", "2"],
    ["Disetujui", "1"],
    ["Diklaim", "0"],
  ];
  const statW = (innerW - 76 - 24) / 3;
  stats.forEach(([label, value], i) => {
    const sx = x + 38 + i * (statW + 12);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(sx, top + 346, statW, 88);
    ctx.strokeStyle = "#d7ece6";
    ctx.strokeRect(sx, top + 346, statW, 88);
    ctx.fillStyle = "#64748b";
    ctx.font = "500 12px 'DM Sans', Arial, sans-serif";
    ctx.fillText(label, sx + 18, top + 375);
    ctx.fillStyle = "#0f766e";
    ctx.font = "800 30px 'DM Sans', Arial, sans-serif";
    ctx.fillText(value, sx + 18, top + 412);
  });

  // items
  const items: [string, string, string, string][] = [
    ["Dompet Coklat", "Hilang · Kantin", "PENDING", "Dompet kulit isi KTP"],
    ["Kunci Motor", "Ditemukan · Parkiran", "APPROVED", "Kunci Yamaha + gantungan"],
  ];
  const cardW = (innerW - 76 - 18) / 2;
  items.forEach(([title, meta, status, desc], i) => {
    const cx = x + 38 + i * (cardW + 18);
    const cy = top + 458;
    const cardH = 250;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(cx, cy, cardW, cardH);
    ctx.strokeStyle = "#d7ece6";
    ctx.strokeRect(cx, cy, cardW, cardH);
    ctx.fillStyle = i === 0 ? "#ffe4e6" : "#ccfbf1";
    ctx.fillRect(cx, cy, cardW, 92);
    ctx.fillStyle = i === 0 ? "#be123c" : "#0f766e";
    ctx.font = "800 30px 'DM Sans', Arial, sans-serif";
    ctx.fillText(i === 0 ? "◇" : "⌘", cx + 24, cy + 60);
    ctx.fillStyle = "#134e4a";
    ctx.font = "700 21px 'DM Sans', Arial, sans-serif";
    ctx.fillText(title, cx + 22, cy + 130);
    ctx.fillStyle = "#64748b";
    ctx.font = "400 14px 'DM Sans', Arial, sans-serif";
    ctx.fillText(meta, cx + 22, cy + 156);
    ctx.fillText(desc, cx + 22, cy + 180);
    ctx.fillStyle = status === "PENDING" ? "#e11d48" : "#0f766e";
    ctx.fillRect(cx + 22, cy + 204, status === "PENDING" ? 92 : 104, 26);
    ctx.fillStyle = "#ffffff";
    ctx.font = "700 11px 'DM Sans', Arial, sans-serif";
    ctx.fillText(status, cx + 34, cy + 222);
  });

  // bottom nav hint
  ctx.fillStyle = "#f0fdf9";
  ctx.fillRect(x, y + h - 58, innerW, 58);
  ctx.fillStyle = "#64748b";
  ctx.font = "400 12px 'DM Sans', Arial, sans-serif";
  ctx.fillText("© 2026 Lost & Found · XII PPLG 2", x + 38, y + h - 24);
}

function drawLibrary(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number): void {
  drawBrowserFrame(ctx, x, y, w, h, "perpustakaan.sekolah/admin/buku");

  const top = y + 46;
  ctx.fillStyle = "#f8f9fa";
  ctx.fillRect(x, top, w, h - 46);

  // bootstrap navbar
  ctx.fillStyle = "#212529";
  ctx.fillRect(x, top, w, 64);
  ctx.fillStyle = "#ffffff";
  ctx.font = "500 19px 'DM Sans', Arial, sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("Perpustakaan Sekolah Digital", x + 34, top + 39);
  ctx.font = "400 14px 'DM Sans', Arial, sans-serif";
  ctx.fillStyle = "#d3d3d3";
  ctx.fillText("Buku", x + w - 330, top + 38);
  ctx.fillText("Transaksi", x + w - 278, top + 38);
  ctx.fillText("Anggota", x + w - 188, top + 38);
  ctx.fillStyle = "#ffffff";
  ctx.font = "400 12px 'DM Sans', Arial, sans-serif";
  ctx.fillText("admin (admin)", x + w - 110, top + 37);

  // page heading
  ctx.fillStyle = "#212529";
  ctx.font = "600 28px 'DM Sans', Arial, sans-serif";
  ctx.fillText("Data Buku", x + 34, top + 120);
  ctx.fillStyle = "#0d6efd";
  ctx.fillRect(x + w - 168, top + 92, 134, 38);
  ctx.fillStyle = "#ffffff";
  ctx.font = "500 14px 'DM Sans', Arial, sans-serif";
  ctx.fillText("+ Tambah Buku", x + w - 152, top + 117);

  // table
  const tableX = x + 34;
  const tableW = w - 68;
  const tableY = top + 158;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(tableX, tableY, tableW, 46);
  ctx.strokeStyle = "#dee2e6";
  ctx.lineWidth = 1;
  ctx.strokeRect(tableX, tableY, tableW, 46);
  const cols = [
    ["Kode", 0.11],
    ["Judul", 0.32],
    ["Pengarang", 0.52],
    ["Penerbit", 0.7],
    ["Tahun", 0.83],
    ["Aksi", 0.92],
  ] as const;
  ctx.fillStyle = "#495057";
  ctx.font = "600 12px 'DM Sans', Arial, sans-serif";
  cols.forEach(([label, ratio]) => {
    ctx.fillText(label, tableX + tableW * ratio - (ratio === 0.11 ? -16 : 0), tableY + 28);
  });

  const rows = [
    ["BK001", "Pemrograman Web Modern", "Andi Rahman", "Erlangga", "2023"],
    ["BK002", "Basis Data untuk Pemula", "Budi Santoso", "Informatika", "2022"],
    ["BK003", "Algoritma & Pemrograman", "Citra Lestari", "Grasindo", "2024"],
  ];
  rows.forEach((row, i) => {
    const ry = tableY + 46 + i * 58;
    ctx.fillStyle = i % 2 === 1 ? "#f8f9fa" : "#ffffff";
    ctx.fillRect(tableX, ry, tableW, 58);
    ctx.strokeStyle = "#dee2e6";
    ctx.strokeRect(tableX, ry, tableW, 58);
    ctx.fillStyle = "#495057";
    ctx.font = "400 13px 'DM Sans', Arial, sans-serif";
    ctx.fillText(row[0]!, tableX + 16, ry + 34);
    ctx.fillStyle = "#212529";
    ctx.font = "500 13px 'DM Sans', Arial, sans-serif";
    ctx.fillText(row[1]!, tableX + tableW * 0.32, ry + 34);
    ctx.font = "400 13px 'DM Sans', Arial, sans-serif";
    ctx.fillStyle = "#495057";
    ctx.fillText(row[2]!, tableX + tableW * 0.52, ry + 34);
    ctx.fillText(row[3]!, tableX + tableW * 0.7, ry + 34);
    ctx.fillText(row[4]!, tableX + tableW * 0.83, ry + 34);
    ctx.fillStyle = "#0d6efd";
    ctx.fillRect(tableX + tableW * 0.9, ry + 14, 44, 28);
    ctx.fillStyle = "#dc3545";
    ctx.fillRect(tableX + tableW * 0.9 + 50, ry + 14, 44, 28);
    ctx.fillStyle = "#ffffff";
    ctx.font = "500 10px 'DM Sans', Arial, sans-serif";
    ctx.fillText("Ubah", tableX + tableW * 0.9 + 8, ry + 32);
    ctx.fillText("Hapus", tableX + tableW * 0.9 + 56, ry + 32);
  });

  // alerts underneath
  ctx.fillStyle = "#d1e7dd";
  ctx.fillRect(tableX, tableY + 46 + rows.length * 58 + 20, tableW, 42);
  ctx.fillStyle = "#0f5132";
  ctx.font = "400 13px 'DM Sans', Arial, sans-serif";
  ctx.fillText("Data buku berhasil dimuat dari database.", tableX + 16, tableY + 46 + rows.length * 58 + 47);
}

function drawStudy(
  ctx: CanvasRenderingContext2D,
  variant: "lostfound" | "library",
  x: number,
  y: number,
  w: number,
  h: number,
): void {
  if (variant === "lostfound") drawLostFound(ctx, x, y, w, h);
  else drawLibrary(ctx, x, y, w, h);
}

/** The same interface study used on the canvas, rendered flat for the case study dialog. */
export function studyPreview(variant: "lostfound" | "library"): string {
  const painter = makePainter(1280, 820, 211);
  painter.ctx.fillStyle = "#ffffff";
  painter.ctx.fillRect(0, 0, 1280, 820);
  drawStudy(painter.ctx, variant, 0, 0, 1280, 820);
  return painter.canvas.toDataURL("image/jpeg", 0.9);
}

function drawFallbackArt(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  index: string,
): void {
  ctx.fillStyle = "#e5d8c1";
  ctx.fillRect(x, y, w, h);
  ctx.strokeStyle = "rgba(81, 72, 62, .18)";
  ctx.lineWidth = 1;
  for (let i = 0; i < 22; i += 1) {
    const yy = y + 40 + i * 46;
    ctx.beginPath();
    ctx.moveTo(x + 40, yy);
    ctx.bezierCurveTo(x + w * 0.35, yy - 22, x + w * 0.62, yy + 26, x + w - 40, yy - 4);
    ctx.stroke();
  }
  ctx.fillStyle = "rgba(81, 72, 62, .82)";
  ctx.font = "300 220px 'Fraunces', Georgia, serif";
  ctx.textAlign = "center";
  ctx.fillText(index, x + w / 2, y + h / 2 + 70);
}

export function projectTexture(
  project: Project,
  image: HTMLImageElement | undefined,
  anisotropy: number,
): THREE.CanvasTexture {
  const painter = makePainter(1280, 1600, 100 + Number(project.index));
  const { ctx, random } = painter;

  ctx.fillStyle = "#ece2d0";
  ctx.fillRect(0, 0, 1280, 1600);

  // paper tone and weave
  const wash = ctx.createLinearGradient(0, 0, 1280, 1600);
  wash.addColorStop(0, "rgba(255, 250, 240, .28)");
  wash.addColorStop(0.55, "rgba(216, 201, 179, .08)");
  wash.addColorStop(1, "rgba(165, 138, 112, .16)");
  ctx.fillStyle = wash;
  ctx.fillRect(0, 0, 1280, 1600);

  // header
  ctx.fillStyle = "#51483e";
  ctx.textAlign = "left";
  ctx.font = "500 22px 'DM Sans', Arial, sans-serif";
  ctx.fillText(project.index, 80, 92);
  ctx.textAlign = "right";
  ctx.fillStyle = "#8a6f57";
  ctx.fillText(project.year, 1200, 92);

  // artwork opening
  const artX = 80;
  const artY = 128;
  const artW = 1120;
  const artH = 1040;
  ctx.fillStyle = "#e2d5bf";
  ctx.fillRect(artX - 10, artY - 10, artW + 20, artH + 20);
  ctx.strokeStyle = "rgba(81, 72, 62, .34)";
  ctx.lineWidth = 1.5;
  ctx.strokeRect(artX - 10, artY - 10, artW + 20, artH + 20);

  if (project.preview.kind === "image" && image) {
    drawCover(ctx, image, artX, artY, artW, artH);
  } else if (project.preview.kind === "image") {
    drawFallbackArt(ctx, artX, artY, artW, artH, project.index);
  } else {
    drawStudy(ctx, project.preview.variant, artX, artY, artW, artH);
  }

  // a light glaze unifies screenshots with the painted canvas
  ctx.fillStyle = "rgba(242, 235, 221, .06)";
  ctx.fillRect(artX, artY, artW, artH);
  ctx.strokeStyle = "rgba(242, 235, 221, .3)";
  ctx.lineWidth = 1;
  ctx.strokeRect(artX + 0.5, artY + 0.5, artW - 1, artH - 1);

  // caption
  ctx.textAlign = "left";
  ctx.fillStyle = "#292823";
  ctx.font = "400 78px 'Fraunces', Georgia, serif";
  ctx.fillText(project.title, 80, 1292);

  ctx.fillStyle = "#8a6f57";
  ctx.font = "500 25px 'DM Sans', Arial, sans-serif";
  ctx.fillText(project.category.toUpperCase(), 82, 1344);

  ctx.fillStyle = "#6a5f53";
  ctx.font = "400 22px 'DM Sans', Arial, sans-serif";
  ctx.fillText(project.medium, 82, 1384);

  ctx.strokeStyle = "rgba(81, 72, 62, .3)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(80, 1450);
  ctx.lineTo(1200, 1450);
  ctx.stroke();

  ctx.fillStyle = "#8a6f57";
  ctx.font = "500 18px 'DM Sans', Arial, sans-serif";
  ctx.fillText("CASE STUDY", 80, 1492);
  ctx.textAlign = "right";
  ctx.fillStyle = "#51483e";
  ctx.font = "italic 400 24px 'Fraunces', Georgia, serif";
  ctx.fillText("D.", 1200, 1494);

  // paper grain and a few paint marks along the matte
  grain(painter, 24000, 0.042);
  for (let i = 0; i < 5; i += 1) {
    const x = 80 + random() * 1120;
    const y = 1410 + random() * 60;
    ctx.fillStyle = `rgba(165, 138, 112, ${0.08 + random() * 0.12})`;
    ctx.fillRect(x, y, 6 + random() * 40, 2 + random() * 5);
  }

  return finishTexture(painter.canvas, anisotropy);
}

export async function loadImage(src: string): Promise<HTMLImageElement | undefined> {
  return new Promise((resolve) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = () => resolve(image);
    image.onerror = () => resolve(undefined);
    image.src = src;
  });
}
