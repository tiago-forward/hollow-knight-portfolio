import UpDetailFormations from "../assets/details/up-detail.png";
import LowerDetailFormations from "../assets/details/lower-detail.png";
import CornerDetailFormations from "../assets/details/corner-detail.png";
import LeftOrRightDetailFormations from "../assets/details/left-or-right-detail.png";
import Certificado from "../assets/certificados/Análise e Desenvolvimento de Sistemas.png";
import Brooch from "../assets/brooch.png";
import BroochSlot from "../components/ui/BroochSlot";
import { useMemo, useState } from "react";

const CERTS = [
  {
    id: "ads",
    title: "Análise e Desenvolvimento de Sistemas",
    image: Certificado,
  },
  { id: "front", title: "Desenvolvimento Frontend", image: Certificado },
  { id: "net", title: "Redes de Computadores", image: Certificado },
  { id: "ux", title: "UI/UX Fundamentals", image: Certificado },
  { id: "null1", title: "", image: null },
  { id: "null2", title: "", image: null },
  { id: "null3", title: "", image: null },
  { id: "null4", title: "", image: null },
  { id: "null5", title: "", image: null },
];

export default function Formations() {
  const [selectedId, setSelectedId] = useState(CERTS[0]?.id ?? null);

  const selectedCert = useMemo(
    () => CERTS.find((c) => c.id === selectedId) ?? null,
    [selectedId],
  );

  return (
    <div className="mx-auto max-w-3xl p-2 lg:px-6 lg:py-6">
      <h2 className="absolute inset-0 top-2 lg:top-8 text-lg lg:text-xl text-center font-bold">
        Formações
      </h2>

      <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 mt-4 justify-between items-center">
        <div className="space-y-4 min-w-[300px]">
          <div className="space-y-2 lg:space-y-4">
            <h3 className="text-center mt-2">Destaque</h3>
            <div className="flex items-center justify-around">
              <img
                src={Certificado}
                alt="Centificado"
                className="w-14 [text-shadow:0_0_24px_rgba(255,255,255,0.85),0_0_48px_rgba(255,255,255,0.35)]
                [filter:drop-shadow(0_0_16px_rgba(255,255,255,0.45))]"
              />
              <img
                src={Certificado}
                alt="Centificado"
                className="w-14 [text-shadow:0_0_24px_rgba(255,255,255,0.85),0_0_48px_rgba(255,255,255,0.35)]
                [filter:drop-shadow(0_0_16px_rgba(255,255,255,0.45))]"
              />
              <div className="w-14">
                <img src={Brooch} alt="Brooch" className="w-auto" />
              </div>
            </div>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent" />
          <div
            className="
              grid grid-cols-5 lg:grid-cols-4
              place-items-center space-x-4
            "
          >
            {CERTS.map((cert) => (
              <div className="group m-auto" key={cert.id}>
                <BroochSlot
                  cert={cert}
                  isActive={cert.id === selectedId}
                  onActivate={setSelectedId}
                  overlaySrc={cert.image}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full max-w-xl flex-col items-center space-y-2">
          <h4 className="text-lg font-semibold">
            {selectedCert && selectedCert.title}
          </h4>

          {selectedCert && (
            <img
              src={selectedCert.image || undefined}
              alt={`${selectedCert.title}`}
              className="w-full rounded-lg shadow-[0_0_22px_rgba(255,255,255,.25)] max-w-[300px]"
            />
          )}
        </div>
      </div>

      <div aria-hidden>
        <img
          src={UpDetailFormations}
          alt="Up Detail Formations"
          className="absolute top-0 left-1/2 -translate-x-1/2 hidden lg:block"
        />

        <img
          src={LowerDetailFormations}
          alt="Lower Detail Formations"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pb-6 hidden lg:block"
        />
        <img
          src={CornerDetailFormations}
          alt="Corner Up Left Detail Formations"
          className="absolute top-0 left-0 rotate-180"
        />
        <img
          src={CornerDetailFormations}
          alt="Corner Up Right Detail Formations"
          className="absolute top-0 right-0 scale-x-[-1] rotate-180"
        />
        <img
          src={CornerDetailFormations}
          alt="Corner Lower Left Detail Formations"
          className="absolute bottom-0 left-0 pb-6 scale-x-[-1]"
        />

        <img
          src={CornerDetailFormations}
          alt="Corner Lower Right Detail Formations"
          className="absolute bottom-0 right-0 pb-6"
        />
        <img
          src={LeftOrRightDetailFormations}
          alt="Right Detail Formations"
          className="absolute top-1/2 right-0 -translate-y-1/2 rotate-180"
        />
        <img
          src={LeftOrRightDetailFormations}
          alt="Left Detail Formations"
          className="absolute top-1/2 left-0 -translate-y-1/2"
        />
      </div>
    </div>
  );
}
