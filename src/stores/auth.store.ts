import {create} from 'zustand';

type AuthStore = {
  isAuth: boolean | null;
  setIsAuth: (status: boolean) => void;
};

export const useAuthStore = create<AuthStore>()(set => ({
  isAuth: null,
  setIsAuth: status => set({isAuth: status}),
}));
