import { create } from "zustand";

type CoverImageStore = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  onReplace: (url: string) => void;
  url?: string;
};

export const useCoverImage = create<CoverImageStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false, url: undefined }),
  onOpen: () => set({ isOpen: true, url: undefined }),
  onReplace: (url: string) => set({ isOpen: true, url }),
  url: undefined,
}));
