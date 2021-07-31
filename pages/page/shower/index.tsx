import { API_URL } from "@/config/index";
import { useApi } from "pages/api/axios";
import { useEffect, useState } from "react";
import HTMLBuilder from "./builder";
export default function Shower() {
  const [HTML, setHTML] = useState();
  async function getHTML(id: number) {
    const res = await fetch(`${API_URL}/pages/${id}`);
    if (res.ok) {
      const data = await res.json();

      setHTML(data.html);
    }
  }

  useEffect(() => {
    getHTML(1);
  }, []);
  return <div>{HTML && <HTMLBuilder html={HTML} />}</div>;
}
