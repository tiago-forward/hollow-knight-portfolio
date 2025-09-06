import Brooch from "../../assets/brooch.png";

type Props = {
  cert: { id: string; title: string };
  isActive: boolean;
  onActivate: (id: string) => void;
  overlaySrc?: string | null; // imagem opcional
};

export default function BroochSlot({
  cert,
  isActive,
  onActivate,
  overlaySrc,
}: Props) {
  return (
    <div className="w-16 h-16">
      <button
        type="button"
        aria-label={cert.title}
        title={cert.title}
        tabIndex={0}
        onMouseEnter={() => onActivate(cert.id)}
        onFocus={() => onActivate(cert.id)}
        onClick={() => onActivate(cert.id)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onActivate(cert.id);
        }}
        className={[
          "relative block w-full h-full rounded-full cursor-pointer",
          "overflow-visible", // permite a overlay maior sair do botão
          "transition-transform focus:outline-none focus:ring-2 focus:ring-white/70",
          isActive ? "scale-105" : "hover:scale-105",
        ].join(" ")}
      >
        {/* aro/luz do brooch (fica por baixo da imagem) */}
        <span
          aria-hidden
          className={[
            "absolute inset-0 rounded-full z-0",
            "ring-2 ring-white/60",
            "shadow-[0_0_18px_rgba(255,255,255,.55)]",
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100",
            "transition-opacity w-6 h-6 m-auto",
          ].join(" ")}
        />
        <img
          src={Brooch}
          alt=""
          className="relative z-10 w-6 h-6 m-auto object-contain select-none"
        />
        {overlaySrc && (
          <img
            src={overlaySrc}
            alt={cert.title}
            className={[
              "pointer-events-none select-none",
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
              "z-20 w-[130%] h-[130%] object-contain", // ajuste 110–160% conforme desejar
              "drop-shadow-[0_6px_16px_rgba(0,0,0,.40)]", // sombra cinza da imagem
            ].join(" ")}
          />
        )}
      </button>
    </div>
  );
}
