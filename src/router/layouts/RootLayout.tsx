import { Outlet, useRouterState } from "@tanstack/react-router";
import Background from "../../components/ui/Background";
import BackButton from "../../components/ui/BackButton";
import Poster from "../../assets/background.png";

export default function RootLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  return (
    <Background
      videoSrc="/videos/background-video.webm"
      poster={Poster}
      className="max-w-7xl m-auto min-h-screen"
    >
      <div className={`flex flex-col min-h-dvh justify-between`}>
        {/* <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur supports-[backdrop-filter]:bg-white/5">
        <nav className="flex items-center gap-6 text-sm">
          <Link to="/" className="hover:text-white/90 transition-colors">
            Start
          </Link>
          <Link to="/profile" className="hover:text-white/90 transition-colors">
            Profile
          </Link>
        </nav>
      </header> */}

        <main className="mt-4 lg:mt-8">
          <Outlet />
        </main>

        {isHome ? (
          <footer className="px-6 py-8 text-center text-xs text-zinc-400 flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="max-w-2xl text-zinc-300">
              Um site minimalista inspirado no game Hollow Knight. Selecione uma
              opção para explorar o portfólio.
            </p>
            <p>© {new Date().getFullYear()} — Portfolio - Tiago Forward</p>
          </footer>
        ) : (
          <div className="px-6 pb-8 flex">
            <BackButton />
          </div>
        )}
      </div>
    </Background>
  );
}
