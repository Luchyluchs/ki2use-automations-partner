// Minimalist geometric Kölner Dom silhouette path data
// Designed as wireframe lines for canvas rendering

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

  // Scale based on canvas size – dom height ~30% of viewport
  const scale = Math.min(canvasWidth, canvasHeight) / 1200;
  const domHeight = 420 * scale;
  const domWidth = 320 * scale;

  // Position: bottom-right, slightly inset
  const offsetX = canvasWidth - domWidth - 60 * scale;
  const offsetY = canvasHeight - 20 * scale;

  ctx.save();
  ctx.translate(offsetX, offsetY);
  ctx.strokeStyle = `hsla(${primaryHsl}, 0.15)`;
  ctx.lineWidth = 1.2;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';

  const s = scale;

  // Helper
  const line = (x1: number, y1: number, x2: number, y2: number) => {
    ctx.beginPath();
    ctx.moveTo(x1 * s, -y1 * s);
    ctx.lineTo(x2 * s, -y2 * s);
    ctx.stroke();
  };

  const spire = (cx: number, baseY: number, tipY: number, width: number) => {
    // Main spire triangle
    line(cx - width, baseY, cx, tipY);
    line(cx + width, baseY, cx, tipY);
    // Cross at top
    line(cx, tipY, cx, tipY + 15);
    line(cx - 4, tipY + 8, cx + 4, tipY + 8);
    // Horizontal bands
    const bands = 4;
    for (let i = 1; i <= bands; i++) {
      const t = i / (bands + 1);
      const y = baseY + (tipY - baseY) * t;
      const w = width * (1 - t) * 0.9;
      line(cx - w, y, cx + w, y);
    }
  };

  // === Left Tower ===
  // Base rectangle
  line(0, 0, 0, 200);
  line(0, 200, 60, 200);
  line(60, 200, 60, 0);
  // Spire
  spire(30, 200, 400, 25);

  // === Right Tower ===
  line(260, 0, 260, 200);
  line(260, 200, 320, 200);
  line(320, 200, 320, 0);
  // Spire
  spire(290, 200, 395, 25);

  // === Nave (middle section) ===
  line(60, 0, 60, 140);
  line(260, 0, 260, 140);
  line(60, 140, 260, 140);
  // Roof ridge
  line(60, 140, 160, 190);
  line(260, 140, 160, 190);

  // === Base line ===
  line(0, 0, 320, 0);

  // === Window details (Gothic arches) ===
  const gothicWindow = (cx: number, bottomY: number, w: number, h: number) => {
    // Two vertical lines
    line(cx - w, bottomY, cx - w, bottomY + h * 0.7);
    line(cx + w, bottomY, cx + w, bottomY + h * 0.7);
    // Pointed arch top
    line(cx - w, bottomY + h * 0.7, cx, bottomY + h);
    line(cx + w, bottomY + h * 0.7, cx, bottomY + h);
  };

  // Left tower windows
  gothicWindow(30, 40, 12, 35);
  gothicWindow(30, 100, 12, 35);
  gothicWindow(30, 155, 10, 28);

  // Right tower windows
  gothicWindow(290, 40, 12, 35);
  gothicWindow(290, 100, 12, 35);
  gothicWindow(290, 155, 10, 28);

  // Nave windows
  gothicWindow(120, 50, 10, 30);
  gothicWindow(160, 50, 10, 30);
  gothicWindow(200, 50, 10, 30);
  gothicWindow(160, 95, 12, 32);

  // === Buttress lines (side detail) ===
  line(60, 0, 75, 50);
  line(60, 50, 75, 100);
  line(260, 0, 245, 50);
  line(260, 50, 245, 100);

  // Secondary wireframe accent with even lower opacity
  ctx.strokeStyle = `hsla(${primaryHsl}, 0.08)`;

  // Vertical structural lines in towers
  line(15, 0, 15, 200);
  line(45, 0, 45, 200);
  line(275, 0, 275, 200);
  line(305, 0, 305, 200);

  // Horizontal floor lines in nave
  line(60, 45, 260, 45);
  line(60, 90, 260, 90);

  ctx.restore();
};
