// src/components/ui/SkyBackground.tsx
import { useEffect, useRef } from "react";

const SkyBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const progressRef = useRef(0);
  const sectionRefs = useRef<{
	servicesTop?: number;
	servicesBot?: number;
	projectsTop?: number;
	projectsBot?: number;
	backgroundTop?: number;
	backgroundBot?: number;
  }>({});

  useEffect(() => {
	const canvas = canvasRef.current;
	if (!canvas) return;
	const ctx = canvas.getContext("2d")!;

	let width = window.innerWidth;
	let height = window.innerHeight;
	let targetProgress = 0;

	// ── helpers ────────────────────────────────────────────────
	const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

	const lerpColor = (c1: string, c2: string, t: number): string => {
	  const hex = (s: string) => {
		const h = s.replace("#", "");
		if (h.length === 3) return h.split("").map((x) => x + x).join("");
		return h;
	  };
	  const h1 = hex(c1),
		h2 = hex(c2);
	  const r1 = parseInt(h1.substr(0, 2), 16),
		g1 = parseInt(h1.substr(2, 2), 16),
		b1 = parseInt(h1.substr(4, 2), 16);
	  const r2 = parseInt(h2.substr(0, 2), 16),
		g2 = parseInt(h2.substr(2, 2), 16),
		b2 = parseInt(h2.substr(4, 2), 16);
	  return `rgb(${Math.round(lerp(r1, r2, t))},${Math.round(lerp(g1, g2, t))},${Math.round(lerp(b1, b2, t))})`;
	};

	// ── clouds ─────────────────────────────────────────────────
	const clouds = [
	  { x: 0.2, y: 0.15, size: 120, speed: 12 },
	  { x: 0.7, y: 0.25, size: 150, speed: -10 },
	  { x: 0.5, y: 0.08, size: 100, speed: 15 },
	  { x: 0.85, y: 0.4, size: 180, speed: -8 },
	  { x: 0.3, y: 0.45, size: 90, speed: 11 },
	];

	const drawCloud = (
	  ctx: CanvasRenderingContext2D,
	  x: number,
	  y: number,
	  size: number,
	  color: string,
	  alpha: number
	) => {
	  ctx.save();
	  ctx.globalAlpha = alpha;
	  ctx.fillStyle = color;
	  const r = size / 6;
	  ctx.beginPath();
	  ctx.arc(x, y, r, 0, Math.PI * 2);
	  ctx.arc(x + r * 1.4, y - r * 0.5, r * 1.1, 0, Math.PI * 2);
	  ctx.arc(x + r * 2.8, y, r * 0.9, 0, Math.PI * 2);
	  ctx.arc(x + r * 1.8, y + r * 0.7, r, 0, Math.PI * 2);
	  ctx.arc(x + r * 0.7, y + r * 0.4, r * 0.8, 0, Math.PI * 2);
	  ctx.fill();
	  ctx.restore();
	};

	// ── stars ──────────────────────────────────────────────────
	const starPositions: {
	  x: number;
	  y: number;
	  brightness: number;
	  twinkleSpeed: number;
	}[] = [];

	const generateStars = () => {
	  starPositions.length = 0;
	  for (let i = 0; i < 150; i++) {
		starPositions.push({
		  x: Math.random() * width,
		  y: Math.random() * height * 0.85,
		  brightness: 0.4 + Math.random() * 0.6,
		  twinkleSpeed: 0.01 + Math.random() * 0.03,
		});
	  }
	};

	// ── COLORS (key stops: 0, 0.5, 1) ─────────────────────────
	// Each stop has three colour variants: day, sunset, night
	const colorStops = [
	  {
		pos: 0, // top
		day: "#b3d9ff",
		sunset: "#ff9e5e",
		night: "#0a0f24",
	  },
	  {
		pos: 0.5, // middle
		day: "#cbe4ff",
		sunset: "#ff5f3e",
		night: "#1a1040",
	  },
	  {
		pos: 1, // bottom
		day: "#dceeff",
		sunset: "#4a1090",
		night: "#02010a",
	  },
	];

	const getGradientColor = (stop: (typeof colorStops)[0], progress: number) => {
	  // 0->0.5: day->sunset, 0.5->1: sunset->night
	  if (progress <= 0.5) {
		const t = progress / 0.5;
		return lerpColor(stop.day, stop.sunset, t);
	  } else {
		const t = (progress - 0.5) / 0.5;
		return lerpColor(stop.sunset, stop.night, t);
	  }
	};

	// ── MAIN DRAW ──────────────────────────────────────────────
	const draw = (progress: number) => {
	  ctx.clearRect(0, 0, width, height);

	  // vertical gradient
	  const grad = ctx.createLinearGradient(0, 0, 0, height);
	  colorStops.forEach((stop) => {
		grad.addColorStop(
		  stop.pos,
		  getGradientColor(stop, progress)
		);
	  });
	  ctx.fillStyle = grad;
	  ctx.fillRect(0, 0, width, height);

	  // clouds (with fade out threshold)
	  const cloudAlpha = progress < 0.65 ? 1 : Math.max(0, 1 - (progress - 0.65) / 0.15);
	  const cloudColor = progress < 0.5 ? "#ffffff" : "#eccfae";
	  const now = performance.now() / 1000; // seconds

	  clouds.forEach((c) => {
		const offset = now * c.speed; // continuous movement (pixels)
		const baseX = c.x * width;
		// primary cloud
		let x1 = (baseX + offset) % (width + 200) - 100; // wrap around
		// secondary cloud to fill gap
		let x2 = x1 + (offset > 0 ? -width - 200 : width + 200);

		// draw both copies to prevent gap
		drawCloud(ctx, x1, c.y * height, c.size, cloudColor, cloudAlpha);
		drawCloud(ctx, x2, c.y * height, c.size, cloudColor, cloudAlpha);
	  });

	  // stars
	  const starAlpha = Math.max(0, (progress - 0.6) * 2.5); // start appearing at 0.6
	  starPositions.forEach((star) => {
		const twinkle =
		  star.brightness *
		  (0.7 + 0.3 * Math.sin(now * 4 * star.twinkleSpeed));
		ctx.fillStyle = `rgba(255,255,255,${twinkle * starAlpha})`;
		ctx.beginPath();
		ctx.arc(star.x, star.y, 1.2, 0, Math.PI * 2);
		ctx.fill();
	  });

	  progressRef.current = progress;
	};

	// ── RESIZE ──────────────────────────────────────────────────
	const resize = () => {
	  width = window.innerWidth;
	  height = window.innerHeight;
	  canvas.width = width;
	  canvas.height = height;
	  generateStars();
	  recalcSections(); // update section positions on resize
	  draw(progressRef.current);
	};

	// ── SECTION AWARE PROGRESS ─────────────────────────────────
	const recalcSections = () => {
	  const servicesEl = document.getElementById("services-section");
	  const projectsEl = document.getElementById("projects-section");
	  const backgroundEl = document.getElementById("background-section");

	  const sTop = servicesEl?.offsetTop ?? 0;
	  const sBot = sTop + (servicesEl?.offsetHeight ?? 0);
	  const pTop = projectsEl?.offsetTop ?? sBot;
	  const pBot = pTop + (projectsEl?.offsetHeight ?? 0);
	  const bTop = backgroundEl?.offsetTop ?? pBot;
	  const bBot = bTop + (backgroundEl?.offsetHeight ?? 0);

	  sectionRefs.current = {
		servicesTop: sTop,
		servicesBot: sBot,
		projectsTop: pTop,
		projectsBot: pBot,
		backgroundTop: bTop,
		backgroundBot: bBot,
	  };
	};

	// Initial section measurement (needs DOM ready)
	// We'll call recalcSections after a short delay for safety
	setTimeout(recalcSections, 100);

	const updateProgress = () => {
		const { servicesTop = 0, backgroundTop = 1600 } =
			sectionRefs.current;
		const scroll = window.scrollY;
		const viewH = window.innerHeight;

		const rawProgress = (scroll + viewH / 2 - servicesTop) /
			(backgroundTop - servicesTop);
		targetProgress = Math.min(1, Math.max(0, rawProgress));
	};

	window.addEventListener("resize", resize);
	window.addEventListener("scroll", updateProgress, { passive: true });
	resize(); // initial draw & setup

	// ── animation loop ──────────────────────────────────────────
	const animate = () => {
	  // smooth interpolation
	  const smooth = lerp(progressRef.current, targetProgress, 0.06);
	  draw(smooth);
	  animFrameRef.current = requestAnimationFrame(animate);
	};
	animate();

	return () => {
	  window.removeEventListener("resize", resize);
	  window.removeEventListener("scroll", updateProgress);
	  cancelAnimationFrame(animFrameRef.current);
	};
  }, []);

  return (
	<canvas
	  ref={canvasRef}
	  style={{
		position: "fixed",
		top: 0,
		left: 0,
		width: "100vw",
		height: "100vh",
		zIndex: -1,
		pointerEvents: "none",
	  }}
	/>
  );
};

export default SkyBackground;