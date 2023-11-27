import { create } from 'zustand';

type State = {
  user: {
    access_token: string | null;
    refresh_token: string | null;
    isUserLoggedIn: boolean;
  };
  setUser: (user: State['user']) => void;
}

export const useAuthStore = create<State>((set) => ({
	user: {
		access_token: null,
		refresh_token: null,
		isUserLoggedIn: false,
	},
	setUser: (user) => set({ user }),
}));
