import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ShopVerse" },
    { name: "description", content: "ShopVerse" },
  ];
}

export default function Home() {
  return <Welcome />;
}
