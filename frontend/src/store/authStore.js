import { create } from "zustand";

const useAuthStore = create((set) => (
    {
        isLoggedIn: localStorage.getItem("token"),
        userData: JSON.parse(localStorage.getItem("user")),
        login: () => set({ isLoggedIn: true, userData: JSON.parse(localStorage.getItem("user"))}),
        logout: () => set({ isLoggedIn: false, userData: null }),
    }
));

export default useAuthStore;
