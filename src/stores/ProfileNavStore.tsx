import { create } from "zustand";

export type Section = "sobre" | "objetivo" | "experiência";

type ProfileNavState = {
  sections: Section[];
  index: number;
  prevSection: () => void;
  nextSection: () => void;
  setSection: (sec: Section) => void;
  setIndex: (i: number) => void;
};

const wrap = (i: number, len: number) => ((i % len) + len) % len;

export const useProfileNavStore = create<ProfileNavState>((set) => ({
  sections: ["sobre", "objetivo", "experiência"],
  index: 0,
  prevSection: () =>
    set((state) => {
      const len = state.sections.length;
      return { index: wrap(state.index - 1, len) };
    }),

  nextSection: () =>
    set((state) => {
      const len = state.sections.length;
      return { index: wrap(state.index + 1, len) };
    }),

  setSection: (sec) =>
    set(({ sections }) => {
      const i = sections.indexOf(sec);
      return i === -1 ? {} : { index: i, current: sec };
    }),

  setIndex: (i) =>
    set((state) => {
      const len = state.sections.length;
      return { index: wrap(i, len) };
    }),
}));
