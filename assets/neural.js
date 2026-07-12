/* Abstract neural-network motif.
   Renders drifting nodes + connecting lines onto any <canvas data-neural> element.
   Configurable via data-* attributes:
     data-node       node fill color           (default rgba(160,60,50,.7))
     data-line       connecting-line color     (default rgba(160,60,50,.18))
     data-count      node count at 1280px wide (default 34)  -> scales with area
     data-link       max link distance in px   (default 150)
     data-speed      drift speed multiplier     (default 1)
     data-pulse      "1" to send travelling pulses along edges (default off)
     data-dot        base node radius in px     (default 2)
   Respects prefers-reduced-motion (renders one static frame).
*/
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function hexa(str, fallback) { return str || fallback; }

  class Field {
    constructor(canvas) {
      this.c = canvas;
      this.ctx = canvas.getContext('2d');
      this.node = hexa(canvas.dataset.node, 'rgba(165,62,50,.75)');
      this.line = hexa(canvas.dataset.line, 'rgba(165,62,50,.16)');
      this.baseCount = parseFloat(canvas.dataset.count || '34');
      this.link = parseFloat(canvas.dataset.link || '150');
      this.speed = parseFloat(canvas.dataset.speed || '1');
      this.dot = parseFloat(canvas.dataset.dot || '2');
      this.pulse = canvas.dataset.pulse === '1';
      this.pulses = [];
      this.t = 0;
      this.resize();
      window.addEventListener('resize', () => this.resize());
      if (reduce) { this.step(true); }
      else { this.loop(); }
    }

    resize() {
      const r = this.c.getBoundingClientRect();
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.w = Math.max(1, r.width);
      this.h = Math.max(1, r.height);
      this.c.width = this.w * this.dpr;
      this.c.height = this.h * this.dpr;
      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      const target = Math.round(this.baseCount * (this.w * this.h) / (1280 * 720));
      const n = Math.max(8, Math.min(target, 120));
      this.nodes = Array.from({ length: n }, () => ({
        x: Math.random() * this.w,
        y: Math.random() * this.h,
        vx: (Math.random() - .5) * .25 * this.speed,
        vy: (Math.random() - .5) * .25 * this.speed,
        r: this.dot * (0.6 + Math.random() * 0.9),
        ph: Math.random() * Math.PI * 2,
      }));
    }

    step(staticFrame) {
      const { ctx, w, h, nodes } = this;
      ctx.clearRect(0, 0, w, h);
      this.t += 0.016;

      // edges
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        if (!staticFrame) {
          a.x += a.vx; a.y += a.vy;
          if (a.x < -20) a.x = w + 20; if (a.x > w + 20) a.x = -20;
          if (a.y < -20) a.y = h + 20; if (a.y > h + 20) a.y = -20;
        }
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < this.link) {
            const o = (1 - d / this.link);
            ctx.strokeStyle = this.line;
            ctx.globalAlpha = o;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      // travelling pulses
      if (this.pulse && !staticFrame) {
        if (Math.random() < 0.02 && this.pulses.length < 6 && nodes.length > 2) {
          const a = nodes[(Math.random() * nodes.length) | 0];
          let best = null, bd = this.link;
          for (const b of nodes) {
            if (b === a) continue;
            const d = Math.hypot(a.x - b.x, a.y - b.y);
            if (d < bd) { bd = d; best = b; }
          }
          if (best) this.pulses.push({ a, b: best, p: 0 });
        }
        this.pulses = this.pulses.filter(pl => {
          pl.p += 0.02;
          if (pl.p >= 1) return false;
          const x = pl.a.x + (pl.b.x - pl.a.x) * pl.p;
          const y = pl.a.y + (pl.b.y - pl.a.y) * pl.p;
          ctx.fillStyle = this.node;
          ctx.globalAlpha = Math.sin(pl.p * Math.PI);
          ctx.beginPath();
          ctx.arc(x, y, this.dot * 1.4, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
          return true;
        });
      }

      // nodes
      for (const a of nodes) {
        const tw = staticFrame ? 1 : (0.7 + 0.3 * Math.sin(this.t * 1.4 + a.ph));
        ctx.fillStyle = this.node;
        ctx.globalAlpha = tw;
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    loop() {
      this.step(false);
      requestAnimationFrame(() => this.loop());
    }
  }

  function init() {
    document.querySelectorAll('canvas[data-neural]').forEach(c => {
      if (!c.__field) c.__field = new Field(c);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
  window.NeuralField = { init };
})();
