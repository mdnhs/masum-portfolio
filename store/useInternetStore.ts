import { create } from "zustand";

interface InternetStore {
  isOnlineStore: unknown;
  setIsOnlineStore: (alreadySelectedAirport: unknown) => void;
}

const useInternetStore = create<InternetStore>()((set) => ({
  isOnlineStore: true,
  setIsOnlineStore: (by) => set(() => ({ isOnlineStore: by })),
}));

export default useInternetStore;
