import Image from "next/image";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { redirect } from "next/navigation";

export default function Home() {
  redirect('order');
}
