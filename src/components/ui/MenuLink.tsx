import React from "react";
import { Link, type LinkProps } from "@tanstack/react-router";
import ArrowRight from "../../assets/details/arrow-right.png";
import ArrowLeft from "../../assets/details/arrow-left.png";

// MenuLink sem borda/ring, com glow igual ao BackButton.
// Quando `selected` for true, aplica o brilho branco permanente.

type MenuLinkProps = Omit<LinkProps, "className"> & {
  children: React.ReactNode;
  selected?: boolean;
  onSelect?: () => void;
};

export default function MenuLink({
  children,
  to,
  selected,
  onSelect,
  ...props
}: MenuLinkProps) {
  return (
    <Link
      {...props}
      to={to}
      role="menuitem"
      onMouseEnter={onSelect}
      onFocus={onSelect}
      className={[
        "group relative mx-auto inline-flex items-center justify-center cursor-pointer select-none",
        "px-4 py-3 uppercase tracking-wide transition duration-150",
        // cor base e estados
        selected
          ? "text-white"
          : "text-zinc-200 hover:text-white focus-visible:text-white",
        // glow igual ao BackButton
        "[text-shadow:0_2px_12px_rgba(255,255,255,0.25)]",
        selected
          ? "[text-shadow:0_2px_20px_rgba(255,255,255,0.90)]"
          : "hover:[text-shadow:0_2px_18px_rgba(255,255,255,0.65)] focus-visible:[text-shadow:0_2px_20px_rgba(255,255,255,0.90)]",
        // acessibilidade
        "focus-visible:outline-none",
      ].join(" ")}
    >
      {/* marcador esquerdo */}
      <div
        aria-hidden
        className={[
          "pointer-events-none absolute -left-8 select-none transition-opacity duration-150",
          selected
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100",
        ].join(" ")}
      >
        <img src={ArrowLeft} alt="Arrow" className="mt-1" />
      </div>

      <span className="select-none">{children}</span>

      {/* marcador direito */}
      <div
        aria-hidden
        className={[
          "pointer-events-none absolute -right-8 select-none transition-opacity duration-150",
          selected
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100",
        ].join(" ")}
      >
        <img src={ArrowRight} alt="Arrow" />
      </div>
    </Link>
  );
}
