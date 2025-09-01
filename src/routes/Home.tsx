import React from "react";
import MenuLink from "../components/ui/MenuLink";
import UpDetailMain from "../assets/details/up-detail-main.png";
import LowenDetailMain from "../assets/details/lowen-detail-main.png";
import { Github, Instagram, Linkedin } from "lucide-react";

type AllowedTo =
  | "/profile"
  | "/skills"
  | "/formations"
  | "/projects"
  | "/"
  | "."
  | "..";

const items: { to: AllowedTo; label: string }[] = [
  { to: "/profile", label: "Perfil" },
  { to: "/skills", label: "Habilidades" },
  { to: "/formations", label: "Formações" },
  { to: "/projects", label: "Projetos" },
];

export default function Home() {
  const [selected, setSelected] = React.useState(items[0].to);

  return (
    <section className="flex min-h-[70dvh] gap-2 lg:gap-4 flex-col items-center justify-center text-center px-6">
      <div className="">
        <img src={UpDetailMain} alt="up detail skills" className="m-auto" />
        <h1
          className="uppercase text-4xl md:text-7xl font-black tracking-wide text-white select-none
          [text-shadow:0_0_24px_rgba(255,255,255,0.85),0_0_48px_rgba(255,255,255,0.35)]
          [filter:drop-shadow(0_0_16px_rgba(255,255,255,0.45))] my-2"
        >
          Tiago Forward
        </h1>
        <img src={LowenDetailMain} alt="up detail skills" className="m-auto" />
      </div>
      <div
        className="lg:mt-8 grid gap-4"
        role="menu"
        aria-label="Menu principal"
      >
        {items.map((it) => (
          <MenuLink
            key={it.to}
            to={it.to}
            selected={selected === it.to}
            onSelect={() => setSelected(it.to)}
          >
            {it.label}
          </MenuLink>
        ))}
      </div>
      <div className="flex justify-between items-end w-full max-w-2xl">
        <div className="flex items-center gap-1">
          <a href="https://github.com/tiago-forward" target="_blank">
            <Github size={14} />
          </a>
          <a
            href="https://www.linkedin.com/in/tiago-lacerda-devfrontend"
            target="_blank"
          >
            <Linkedin size={14} color="#0073B2" />
          </a>
          <a href="https://www.instagram.com/tiago_forward/" target="_blank">
            <Instagram size={14} color="#FC02AF" />
          </a>
        </div>
        <div></div>
      </div>
    </section>
  );
}
