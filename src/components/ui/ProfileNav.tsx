"use client";

import ArrowRight from "../../assets/details/arrow-right.png";
import ArrowLeft from "../../assets/details/arrow-left.png";
import { useProfileNavStore } from "../../stores/ProfileNavStore";

export default function ProfileNav() {
  const sections = useProfileNavStore((sec) => sec.sections);
  const index = useProfileNavStore((sec) => sec.index);
  const prevSection = useProfileNavStore((sec) => sec.prevSection);
  const nextSection = useProfileNavStore((sec) => sec.nextSection);

  return (
    <div className="flex items-center justify-between w-full">
      <button
        onClick={prevSection}
        className="p-2 rounded-full transition group"
        aria-label="Próxima seção"
      >
        <div
          aria-hidden
          className={[
            "cursor-pointer select-none transition-opacity duration-150 group-hover:",
          ].join(" ")}
        >
          <img src={ArrowLeft} alt="Arrow" className="mt-1 w-8 h-auto" />
        </div>
      </button>
      <h2 className="select-none uppercase text-4xl font-bold">
        {sections[index]}
      </h2>
      <button
        onClick={nextSection}
        className="p-2 rounded-full transition relative group"
        aria-label="Próxima seção"
      >
        <div
          aria-hidden
          className={[
            "cursor-pointer select-none transition-opacity duration-150 group-hover:",
          ].join(" ")}
        >
          <img src={ArrowRight} alt="Arrow" className="w-8 h-auto" />
        </div>
      </button>
    </div>
  );
}
