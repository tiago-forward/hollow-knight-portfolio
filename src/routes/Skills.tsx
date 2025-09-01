// Skills.tsx
import { useEffect, useRef, useState } from "react";
import UpDetailSkills from "../assets/details/up-detail-skills.png";
import ScrollGlyph from "../assets/scroll-icon.png"; // <-- seu ícone do scroll
import { hardSkills } from "../contants";

export default function Skills() {
  const listRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [thumbY, setThumbY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Atualiza posição do thumb conforme scroll
  useEffect(() => {
    const el = listRef.current;
    const onScroll = () => {
      if (!el || !trackRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = el;
      const maxScroll = scrollHeight - clientHeight;
      const pct = maxScroll > 0 ? scrollTop / maxScroll : 0;

      const trackH = trackRef.current.clientHeight;
      const thumbH = 28; // altura aproximada do seu ícone (px). Ajuste se preciso.
      const maxY = Math.max(0, trackH - thumbH);
      setThumbY(pct * maxY);
    };

    onScroll();
    el?.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    return () => {
      el?.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Drag do thumb
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isDragging || !listRef.current || !trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const y = e.clientY - rect.top;

      const thumbH = 28;
      const clamped = Math.min(
        Math.max(0, y - thumbH / 2),
        rect.height - thumbH,
      );
      setThumbY(clamped);

      const pct = rect.height > thumbH ? clamped / (rect.height - thumbH) : 0;
      const el = listRef.current;
      const maxScroll = el.scrollHeight - el.clientHeight;
      el.scrollTop = pct * maxScroll;
    };

    const onUp = () => setIsDragging(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [isDragging]);

  return (
    <div className="mx-auto max-w-3xl p-2 lg:px-6 lg:py-6">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold text-center">Habilidades</h2>
        <img src={UpDetailSkills} alt="up detail skills" className="m-auto" />

        {/* ===== LISTA COM SCROLL CUSTOM ===== */}
        <div className="relative mt-4">
          {/* Lista scrollável (scrollbar nativa oculta via classes) */}
          <div
            ref={listRef}
            className="
              custom-scroll space-y-4 max-h-[60dvh] overflow-y-auto pr-6 mt-4
              [scrollbar-width:none] [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {hardSkills.map((skill, idx) => (
              <div key={idx} className="flex items-center space-x-8">
                <div className="w-12 h-12 flex items-center justify-center">
                  {skill.icon}
                </div>
                <div>
                  <p className="uppercase text-lg font-semibold text-yellow-200 tracking-wide">
                    {skill.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Trilha (linha) da barra personalizada */}
          <div
            ref={trackRef}
            aria-hidden
            className="pointer-events-none absolute top-4 right-2.5 h-full w-[1px] bg-white/60"
          />

          {/* Thumb (ícone) — clicável para drag */}
          <button
            type="button"
            aria-label="scroll"
            onMouseDown={() => setIsDragging(true)}
            className="absolute -right-1 translate-y-0 cursor-grab active:cursor-grabbing"
            style={{
              top: thumbY,
            }}
          >
            <img
              src={ScrollGlyph}
              alt="Scroll Glyph"
              className="pointer-events-none h-14 select-none z-10"
            />
          </button>
        </div>
      </div>

      {/* Estilos para esconder a scrollbar nativa (fallback) */}
      <style>{`
        .custom-scroll { scrollbar-width: none; -ms-overflow-style: none; }
        .custom-scroll::-webkit-scrollbar { width: 0; height: 0; }
      `}</style>
    </div>
  );
}
