import { create } from "zustand";
import Cookies from "js-cookie";

// Load users from localStorage if available
const loadUsers = () => {
  if (typeof window !== "undefined") {
    const users = localStorage.getItem("registeredUsers");
    return users ? JSON.parse(users) : [];
  }
  return [];
};

interface AuthState {
  email: string;
  password: string;
  isAuthenticated: boolean;
  rememberMe: boolean;
  registeredUsers: { email: string; password: string }[];
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setRememberMe: (remember: boolean) => void;
  registerUser: (email: string, password: string) => void;
  deleteUser: (email: string) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  email: Cookies.get("rememberMe") === "true" ? Cookies.get("email") || "" : "",
  password: Cookies.get("rememberMe") === "true" ? Cookies.get("password") || "" : "",
  isAuthenticated: false,
  rememberMe: Cookies.get("rememberMe") === "true",
  registeredUsers: loadUsers(), // Load users from localStorage

  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),

  setRememberMe: (remember) => {
    set({ rememberMe: remember });
    if (!remember) {
      Cookies.remove("email");
      Cookies.remove("password");
      Cookies.remove("rememberMe");
    }
  },

  registerUser: (email, password) =>
    set((state) => {
      const updatedUsers = [...state.registeredUsers, { email, password }];
      localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers)); // Save to localStorage
      return { registeredUsers: updatedUsers };
    }),

  deleteUser: (email) =>
    set((state) => {
      const updatedUsers = state.registeredUsers.filter((user) => user.email !== email);
      localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers)); // Update localStorage
      return { registeredUsers: updatedUsers };
    }),

  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),

  logout: () =>
    set(() => {
      Cookies.remove("email");
      Cookies.remove("password");
      Cookies.remove("rememberMe");
      return { email: "", password: "", isAuthenticated: false, rememberMe: false };
    }),
}));

export default useAuthStore;
