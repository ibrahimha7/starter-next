import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NEXT_URL } from "@/config/index";

const AuthContext: any = createContext();

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  const router = useRouter();

  useEffect(() => checkUserLoggedIn(), []);

  // Register user
  const register = async (user: any) => {
    const res = await fetch(`${NEXT_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      router.push("/account/dashboard");
    } else {
      setError(data.message);
      setError(null);
    }
  };

  // Login user
  const login = async ({ email: identifier, password }: any) => {
    const res = await fetch(`${NEXT_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      router.push("/account/dashboard");
    } else {
      setError(data.message);
      setError(null);
    }
  };

  // Logout user
  const logout = async () => {
    const res = await fetch(`${NEXT_URL}/api/auth/logout`, {
      method: "POST",
    });

    if (res.ok) {
      setUser(null);
      router.push("/");
    }
  };

  // Check if user is logged in
  const checkUserLoggedIn: any = async (user: any) => {
    const res = await fetch(`${NEXT_URL}/api/auth/user`);
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
    } else {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
