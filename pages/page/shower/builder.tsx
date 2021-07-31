import { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { API_URL } from "@/config/index";

export default function HTMLBuilder({ html }: any) {
  const [content, setContent] = useState("");

  async function getHTML(id: number) {
    console.log("id", id);

    const res = await fetch(`${API_URL}/pages/${id}`);
    if (res.ok) {
      const data = await res.json();
      return data.html;
    }
  }

  let x = "1";
  let y = "2";

  useEffect(() => {
    let pattern = /{([\s\S]*?)}/g;
    let HTMLSlugs = html && html.match(pattern);
    let newHTML: any;

    HTMLSlugs.map((slug: string, index: number) => {
      // console.log('slug', slug);
      // console.log('slug results', results);
      let slugForLoading = slug.replace(/[{}]/g, "");
      console.log("slug", slug, "index==", index);

      if (index === 0) {
        getHTML(index + 2).then((res) => {
          newHTML = html && html.replace(slug, res);
          setContent(newHTML);
        });
      } else {
        getHTML(index + 2).then((res) => {
          newHTML = newHTML && newHTML.replace(slug, res);
          setContent(newHTML);
        });
      }
    });
  }, [html]);

  useEffect(() => {
    console.log("content", content);
  }, [content]);

  return <div>{content && content}</div>;
}
