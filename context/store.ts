import { create } from 'zustand';

type State = {
  user: null | {
    access_token: string | null;
    refresh_token: string | null;
    isUserLoggedIn: boolean;
  };
  setUser: (user: State['user']) => void;
  isAuthCompleted: boolean;
  setAuthCompleted: (isAuthCompleted: boolean) => void;
}

export const useAuthStore = create<State>((set) => ({
	user: null,
	setUser: (user) => set({ user }),
	isAuthCompleted: false,
	setAuthCompleted: (isAuthCompleted) => set({ isAuthCompleted })
}));
