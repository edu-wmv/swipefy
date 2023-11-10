import { create } from 'zustand';

type State = {
  user: null | {
    access_token: string;
    refresh_token: string;
  }
  setUser: (user: State['user']) => void;
}

export const useStore = create<State>((set) => ({
	user: null,
	setUser: (user) => set({ user })
}));