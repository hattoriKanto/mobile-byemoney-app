import {create} from 'zustand';

type AuthStore = {
  isAuth: boolean;
  setIsAuth: (status: boolean) => void;
};

export const useAuthStore = create<AuthStore>()(set => ({
  isAuth: false,
  setIsAuth: status => set({isAuth: status}),
}));
