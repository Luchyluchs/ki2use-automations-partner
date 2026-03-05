// Accurate Kölner Dom silhouette based on the iconic Rhine-side view
// Pencil-drawing style wireframe with detailed Gothic spires and nave

export interface DomDrawConfig {
  canvasWidth: number;
  canvasHeight: number;
  primaryHsl: string;
  accentHsl: string;
}

export const drawCologneCathedral = (
  ctx: CanvasRenderingContext2D,
  config: DomDrawConfig
) => {
  const { canvasWidth, canvasHeight, primaryHsl } = config;

  const baseScale = Math.min(canvasWidth, canvasHeight) / 1600;
  const scale = Math.max(baseScale, 0.3);

  // Position bottom-right
  const offsetX = canvasWidth - 520 * scale - 30;
  const offsetY = canvasHeight - 5;

  ctx.save();
  ctx.translate(offsetX, offsetY);
  ctx.scale(scale, -scale); // flip Y so positive = up

  ctx.strokeStyle = `hsla(${primaryHsl}, 0.13)`;
  ctx.lineWidth = 1.2 / scale;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';

  // ===== MAIN OUTLINE =====
  ctx.beginPath();
  // Start bottom-left
  ctx.moveTo(30, 0);
  // Left tower base wall
  ctx.lineTo(30, 160);
  // Left tower setback
  ctx.lineTo(20, 160);
  ctx.lineTo(20, 240);
  // Another setback
  ctx.lineTo(10, 240);
  ctx.lineTo(10, 300);
  // Octagonal transition
  ctx.lineTo(15, 310);
  ctx.lineTo(5, 320);

  // Left spire - characteristic crocketed edges (zigzag profile)
  // The spires have small protruding crockets every ~30px
  const leftSpireCx = 55;
  drawSpireLeft(ctx, 5, 320, leftSpireCx, 680);

  // Cross on left spire
  ctx.moveTo(leftSpireCx, 680);
  ctx.lineTo(leftSpireCx, 695);
  ctx.moveTo(leftSpireCx - 6, 688);
  ctx.lineTo(leftSpireCx + 6, 688);

  ctx.stroke();

  // Right side of left spire (separate path)
  ctx.beginPath();
  ctx.moveTo(leftSpireCx, 695);
  drawSpireRight(ctx, 105, 320, leftSpireCx, 680);
  ctx.lineTo(100, 310);
  ctx.lineTo(95, 300);
  ctx.lineTo(95, 240);
  ctx.lineTo(85, 240);
  ctx.lineTo(85, 160);
  ctx.lineTo(75, 160);

  // Nave connection (left side)
  ctx.lineTo(75, 140);
  ctx.lineTo(90, 140);
  ctx.lineTo(90, 120);

  // Small pinnacles along nave roof
  // Pinnacle 1
  ctx.lineTo(100, 120);
  ctx.lineTo(105, 145);
  ctx.lineTo(110, 120);

  // Nave stepped roof going right
  ctx.lineTo(130, 120);
  ctx.lineTo(130, 150);
  ctx.lineTo(135, 170);
  // Small crossing spire (Vierungsturm)
  ctx.lineTo(140, 195);
  ctx.lineTo(145, 210);
  ctx.lineTo(148, 230);
  ctx.lineTo(150, 245);
  ctx.lineTo(152, 230);
  ctx.lineTo(155, 210);
  ctx.lineTo(160, 195);
  ctx.lineTo(165, 175);

  // Transept and choir area with multiple small spires
  ctx.lineTo(175, 160);
  ctx.lineTo(180, 175);
  ctx.lineTo(185, 190);
  ctx.lineTo(188, 175);
  ctx.lineTo(195, 155);

  // More pinnacles along east end
  ctx.lineTo(205, 155);
  ctx.lineTo(210, 175);
  ctx.lineTo(215, 155);
  ctx.lineTo(225, 145);
  ctx.lineTo(230, 160);
  ctx.lineTo(235, 175);
  ctx.lineTo(240, 160);
  ctx.lineTo(250, 145);

  // Choir pinnacles
  ctx.lineTo(260, 145);
  ctx.lineTo(265, 165);
  ctx.lineTo(268, 180);
  ctx.lineTo(271, 165);
  ctx.lineTo(280, 150);

  ctx.lineTo(290, 150);
  ctx.lineTo(295, 170);
  ctx.lineTo(300, 150);

  ctx.lineTo(310, 140);
  ctx.lineTo(315, 155);
  ctx.lineTo(320, 140);

  // Transition to right tower
  ctx.lineTo(340, 135);
  ctx.lineTo(350, 140);
  ctx.lineTo(360, 140);
  ctx.lineTo(370, 160);
  ctx.lineTo(375, 160);
  ctx.lineTo(375, 240);
  ctx.lineTo(365, 240);
  ctx.lineTo(365, 300);

  // Right tower octagonal transition
  ctx.lineTo(360, 310);
  ctx.lineTo(355, 320);

  const rightSpireCx = 405;
  drawSpireLeft(ctx, 355, 320, rightSpireCx, 675);

  // Right cross
  ctx.moveTo(rightSpireCx, 675);
  ctx.lineTo(rightSpireCx, 690);
  ctx.moveTo(rightSpireCx - 6, 683);
  ctx.lineTo(rightSpireCx + 6, 683);

  ctx.stroke();

  // Right side of right spire
  ctx.beginPath();
  ctx.moveTo(rightSpireCx, 690);
  drawSpireRight(ctx, 455, 320, rightSpireCx, 675);
  ctx.lineTo(450, 310);
  ctx.lineTo(445, 300);
  ctx.lineTo(445, 240);
  ctx.lineTo(435, 240);
  ctx.lineTo(435, 160);
  ctx.lineTo(425, 160);
  ctx.lineTo(425, 0);

  // Ground line
  ctx.lineTo(30, 0);
  ctx.stroke();

  // ===== GOTHIC WINDOWS =====
  ctx.strokeStyle = `hsla(${primaryHsl}, 0.07)`;
  ctx.lineWidth = 0.8 / scale;

  // Left tower - large pointed arch windows (3 levels)
  drawPointedArch(ctx, 52, 40, 18, 50);
  drawPointedArch(ctx, 52, 100, 16, 45);
  drawPointedArch(ctx, 52, 170, 14, 40);
  drawPointedArch(ctx, 52, 220, 12, 35);

  // Right tower windows
  drawPointedArch(ctx, 402, 40, 18, 50);
  drawPointedArch(ctx, 402, 100, 16, 45);
  drawPointedArch(ctx, 402, 170, 14, 40);
  drawPointedArch(ctx, 402, 220, 12, 35);

  // Nave side windows
  for (let i = 0; i < 5; i++) {
    drawPointedArch(ctx, 120 + i * 45, 40, 10, 28);
  }

  // ===== HORIZONTAL LEVEL LINES =====
  ctx.strokeStyle = `hsla(${primaryHsl}, 0.05)`;
  ctx.lineWidth = 0.6 / scale;

  // Left tower horizontal bands
  [160, 240, 300].forEach(y => {
    ctx.beginPath();
    ctx.moveTo(20, y);
    ctx.lineTo(90, y);
    ctx.stroke();
  });

  // Right tower horizontal bands
  [160, 240, 300].forEach(y => {
    ctx.beginPath();
    ctx.moveTo(365, y);
    ctx.lineTo(445, y);
    ctx.stroke();
  });

  // Nave cornice line
  ctx.beginPath();
  ctx.moveTo(90, 120);
  ctx.lineTo(360, 135);
  ctx.stroke();

  // ===== FLYING BUTTRESSES (very faint) =====
  ctx.strokeStyle = `hsla(${primaryHsl}, 0.04)`;

  // Left buttresses
  drawButtress(ctx, 85, 50, 100, 100);
  drawButtress(ctx, 85, 80, 105, 120);

  // Right buttresses
  drawButtress(ctx, 370, 50, 355, 100);
  drawButtress(ctx, 370, 80, 350, 120);

  ctx.restore();
};

/** Draw left edge of a crocketed spire from base to tip */
function drawSpireLeft(
  ctx: CanvasRenderingContext2D,
  baseX: number, baseY: number,
  tipX: number, tipY: number
) {
  const steps = 10;
  const crocketSize = 4;
  for (let i = 0; i < steps; i++) {
    const t1 = i / steps;
    const t2 = (i + 1) / steps;
    const x1 = baseX + (tipX - baseX) * t1;
    const y1 = baseY + (tipY - baseY) * t1;
    const x2 = baseX + (tipX - baseX) * t2;
    const y2 = baseY + (tipY - baseY) * t2;
    // Line to crocket bump
    const midY = (y1 + y2) / 2;
    const midX = (x1 + x2) / 2;
    ctx.lineTo(x1, y1);
    ctx.lineTo(midX - crocketSize, midY);
    ctx.lineTo(midX, midY + crocketSize * 1.5);
    ctx.lineTo(midX + crocketSize * 0.5, midY);
  }
  ctx.lineTo(tipX, tipY);
}

/** Draw right edge of a crocketed spire from tip to base */
function drawSpireRight(
  ctx: CanvasRenderingContext2D,
  baseX: number, baseY: number,
  tipX: number, tipY: number
) {
  const steps = 10;
  const crocketSize = 4;
  for (let i = 0; i < steps; i++) {
    const t1 = i / steps;
    const t2 = (i + 1) / steps;
    const x1 = tipX + (baseX - tipX) * t1;
    const y1 = tipY + (baseY - tipY) * t1;
    const x2 = tipX + (baseX - tipX) * t2;
    const y2 = tipY + (baseY - tipY) * t2;
    const midY = (y1 + y2) / 2;
    const midX = (x1 + x2) / 2;
    ctx.lineTo(x1, y1);
    ctx.lineTo(midX + crocketSize, midY);
    ctx.lineTo(midX, midY + crocketSize * 1.5);
    ctx.lineTo(midX - crocketSize * 0.5, midY);
  }
  ctx.lineTo(baseX, baseY);
}

/** Draw a pointed Gothic arch */
function drawPointedArch(
  ctx: CanvasRenderingContext2D,
  cx: number, bottomY: number,
  halfWidth: number, height: number
) {
  ctx.beginPath();
  ctx.moveTo(cx - halfWidth, bottomY);
  ctx.lineTo(cx - halfWidth, bottomY + height * 0.6);
  ctx.lineTo(cx, bottomY + height);
  ctx.lineTo(cx + halfWidth, bottomY + height * 0.6);
  ctx.lineTo(cx + halfWidth, bottomY);
  ctx.stroke();
  // Center mullion
  ctx.beginPath();
  ctx.moveTo(cx, bottomY);
  ctx.lineTo(cx, bottomY + height * 0.85);
  ctx.stroke();
}

/** Draw a flying buttress arc */
function drawButtress(
  ctx: CanvasRenderingContext2D,
  x1: number, y1: number,
  x2: number, y2: number
) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  const cpx = (x1 + x2) / 2;
  const cpy = Math.max(y1, y2) + 20;
  ctx.quadraticCurveTo(cpx, cpy, x2, y2);
  ctx.stroke();
}
