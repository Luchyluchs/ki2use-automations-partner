// Accurate Kölner Dom (Cologne Cathedral) silhouette for canvas rendering
// Based on the iconic twin-spire Gothic cathedral profile

export interface DomDrawConfig {
  canvasWidth: number;
  canvasHeight: number;
  primaryHsl: string;
  accentHsl: string;
}

/**
 * Draws the outline of Cologne Cathedral as a single continuous stroke path.
 * The silhouette captures the iconic twin spires, flying buttresses,
 * nave roof, transept, and Gothic window tracery.
 */
export const drawCologneCathedral = (
  ctx: CanvasRenderingContext2D,
  config: DomDrawConfig
) => {
  const { canvasWidth, canvasHeight, primaryHsl } = config;

  // Responsive scale: cathedral ~25% of smaller viewport dimension
  const baseScale = Math.min(canvasWidth, canvasHeight) / 2000;
  const scale = Math.max(baseScale, 0.25); // minimum visibility

  // Position: bottom-center-right
  const domNativeWidth = 500;
  const domNativeHeight = 700;
  const offsetX = canvasWidth - (domNativeWidth * scale) - 40;
  const offsetY = canvasHeight - 10;

  ctx.save();
  ctx.translate(offsetX, offsetY);
  ctx.scale(scale, scale);

  // Main silhouette outline
  ctx.strokeStyle = `hsla(${primaryHsl}, 0.12)`;
  ctx.lineWidth = 1.5 / scale;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';

  // Draw the cathedral outline as a single path (bottom-left, going clockwise)
  ctx.beginPath();

  // Ground line start (left side)
  ctx.moveTo(0, 0);

  // Left tower base
  ctx.lineTo(0, -180);

  // Left tower - buttress step
  ctx.lineTo(-10, -180);
  ctx.lineTo(-10, -280);

  // Left tower upper section with setbacks
  ctx.lineTo(5, -280);
  ctx.lineTo(5, -340);
  ctx.lineTo(-5, -340);
  ctx.lineTo(-5, -400);

  // Left spire - tapered with crockets (small bumps)
  ctx.lineTo(10, -400);
  ctx.lineTo(8, -440);
  ctx.lineTo(15, -440);
  ctx.lineTo(12, -480);
  ctx.lineTo(18, -480);
  ctx.lineTo(14, -520);
  ctx.lineTo(20, -520);
  ctx.lineTo(16, -560);
  ctx.lineTo(20, -560);
  ctx.lineTo(15, -610);
  ctx.lineTo(18, -610);

  // Left spire tip with finial cross
  ctx.lineTo(40, -690);
  ctx.lineTo(40, -700); // cross top

  // Left cross
  ctx.moveTo(34, -694);
  ctx.lineTo(46, -694);
  ctx.moveTo(40, -700);

  // Come back down right side of left spire
  ctx.lineTo(62, -610);
  ctx.lineTo(65, -610);
  ctx.lineTo(64, -560);
  ctx.lineTo(60, -560);
  ctx.lineTo(64, -520);
  ctx.lineTo(58, -520);
  ctx.lineTo(68, -480);
  ctx.lineTo(62, -480);
  ctx.lineTo(72, -440);
  ctx.lineTo(65, -440);
  ctx.lineTo(70, -400);
  ctx.lineTo(85, -400);

  // Between left spire and nave
  ctx.lineTo(85, -340);
  ctx.lineTo(75, -340);
  ctx.lineTo(75, -280);
  ctx.lineTo(90, -280);
  ctx.lineTo(90, -180);

  // Nave roof (between towers) - stepped Gothic roofline
  ctx.lineTo(110, -180);
  ctx.lineTo(110, -220);

  // Small pinnacle left of nave
  ctx.lineTo(115, -240);
  ctx.lineTo(120, -220);

  ctx.lineTo(120, -200);
  ctx.lineTo(140, -200);

  // Nave roof ridge
  ctx.lineTo(140, -250);
  ctx.lineTo(155, -280);
  ctx.lineTo(160, -300);

  // Central small spire/fleche
  ctx.lineTo(165, -320);
  ctx.lineTo(170, -340);
  ctx.lineTo(175, -350);

  // Nave crossing pinnacle
  ctx.lineTo(180, -340);
  ctx.lineTo(185, -320);

  // Continue nave roof
  ctx.lineTo(190, -300);
  ctx.lineTo(200, -270);
  ctx.lineTo(220, -250);

  // Transept area
  ctx.lineTo(240, -250);
  ctx.lineTo(250, -270);
  ctx.lineTo(260, -300);

  // Another small pinnacle
  ctx.lineTo(265, -320);
  ctx.lineTo(270, -330);
  ctx.lineTo(275, -320);
  ctx.lineTo(280, -300);

  ctx.lineTo(290, -270);
  ctx.lineTo(310, -250);
  ctx.lineTo(330, -230);
  ctx.lineTo(345, -210);
  ctx.lineTo(360, -200);
  ctx.lineTo(380, -200);

  // Small pinnacle right of nave
  ctx.lineTo(380, -220);
  ctx.lineTo(385, -240);
  ctx.lineTo(390, -220);
  ctx.lineTo(390, -180);

  // Right tower base
  ctx.lineTo(410, -180);
  ctx.lineTo(410, -280);
  ctx.lineTo(425, -280);
  ctx.lineTo(425, -340);
  ctx.lineTo(415, -340);
  ctx.lineTo(415, -400);

  // Right spire (mirror of left, slightly shorter for authenticity)
  ctx.lineTo(430, -400);
  ctx.lineTo(428, -440);
  ctx.lineTo(435, -440);
  ctx.lineTo(432, -480);
  ctx.lineTo(438, -480);
  ctx.lineTo(434, -520);
  ctx.lineTo(440, -520);
  ctx.lineTo(436, -560);
  ctx.lineTo(440, -560);
  ctx.lineTo(435, -610);
  ctx.lineTo(438, -610);

  // Right spire tip
  ctx.lineTo(460, -685);
  ctx.lineTo(460, -695);

  ctx.stroke();

  // Right cross
  ctx.beginPath();
  ctx.moveTo(454, -689);
  ctx.lineTo(466, -689);
  ctx.stroke();

  // Continue right side down
  ctx.beginPath();
  ctx.moveTo(460, -695);
  ctx.lineTo(482, -610);
  ctx.lineTo(485, -610);
  ctx.lineTo(484, -560);
  ctx.lineTo(480, -560);
  ctx.lineTo(486, -520);
  ctx.lineTo(480, -520);
  ctx.lineTo(488, -480);
  ctx.lineTo(482, -480);
  ctx.lineTo(492, -440);
  ctx.lineTo(485, -440);
  ctx.lineTo(490, -400);
  ctx.lineTo(505, -400);

  // Right tower descent
  ctx.lineTo(505, -340);
  ctx.lineTo(495, -340);
  ctx.lineTo(495, -280);
  ctx.lineTo(510, -280);
  ctx.lineTo(510, -180);
  ctx.lineTo(500, -180);
  ctx.lineTo(500, 0);

  // Ground line back
  ctx.lineTo(0, 0);
  ctx.stroke();

  // === Gothic window details (very subtle) ===
  ctx.strokeStyle = `hsla(${primaryHsl}, 0.07)`;
  ctx.lineWidth = 1 / scale;

  // Left tower windows - pointed arches
  const gothicArch = (cx: number, by: number, w: number, h: number) => {
    ctx.beginPath();
    ctx.moveTo(cx - w, -by);
    ctx.lineTo(cx - w, -(by + h * 0.65));
    ctx.lineTo(cx, -(by + h));
    ctx.lineTo(cx + w, -(by + h * 0.65));
    ctx.lineTo(cx + w, -by);
    ctx.stroke();
  };

  // Left tower windows
  gothicArch(40, 60, 15, 40);
  gothicArch(40, 120, 15, 40);
  gothicArch(40, 200, 12, 35);
  gothicArch(40, 260, 10, 30);

  // Right tower windows
  gothicArch(460, 60, 15, 40);
  gothicArch(460, 120, 15, 40);
  gothicArch(460, 200, 12, 35);
  gothicArch(460, 260, 10, 30);

  // Nave windows
  gothicArch(160, 60, 12, 30);
  gothicArch(200, 60, 12, 30);
  gothicArch(250, 60, 12, 30);
  gothicArch(300, 60, 12, 30);
  gothicArch(350, 60, 12, 30);

  // Rose window (circular) on the nave
  ctx.beginPath();
  ctx.arc(250, -160, 18, 0, Math.PI * 2);
  ctx.stroke();

  // Inner rose detail
  ctx.beginPath();
  ctx.arc(250, -160, 10, 0, Math.PI * 2);
  ctx.stroke();

  // === Flying buttress lines (very faint) ===
  ctx.strokeStyle = `hsla(${primaryHsl}, 0.04)`;

  // Left side buttresses
  ctx.beginPath();
  ctx.moveTo(90, -100);
  ctx.lineTo(115, -160);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(90, -60);
  ctx.lineTo(120, -130);
  ctx.stroke();

  // Right side buttresses
  ctx.beginPath();
  ctx.moveTo(410, -100);
  ctx.lineTo(385, -160);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(410, -60);
  ctx.lineTo(380, -130);
  ctx.stroke();

  ctx.restore();
};
