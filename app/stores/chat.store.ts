import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface BearState {
  search: boolean;
  setSearch: (search: boolean) => void;
  research: boolean;
  setResearch: (research: boolean) => void;
}

const useChatStore = create<BearState>()(
  devtools(
    (set) => ({
      search: false,
      setSearch: (search: boolean) => {
        set(() => {
          return { search };
        });
      },
      research: false,
      setResearch: (research: boolean) => {
        set(() => {
          return { research };
        });
      },
    }),
    {
      name: "chat-storage",
    }
  )
);

export default useChatStore;
