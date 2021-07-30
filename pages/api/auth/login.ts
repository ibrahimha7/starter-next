import cookie from "cookie";
import { API_URL } from "@/config/index";

export default async (req: any, res: any) => {
  if (req.method === "POST") {
    const { identifier, password } = req.body;

    const strapiRes = await fetch(`${API_URL}/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    const data = await strapiRes.json();

    if (strapiRes.ok) {
      // Set Cookie
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", data.jwt, {
          httpOnly: true, // to be only used by the browser not js code (help secure the token from the CORS attack)
          secure: process.env.NODE_ENV !== "development", // to be run with https only
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: "strict",
          path: "/", // to be accessible everywhere
        })
      );

      res.status(200).json({ user: data.user });
    } else {
      res
        .status(data.statusCode)
        .json({ message: data.message[0].messages[0].message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
