import Image from "next/image";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { redirect } from "next/navigation";

export default function Home() {
  <main className="h-screen w-full absolute left-0 top-0 overflow-hide bg-white pt-[113px] md:pl-[80px] md:pt-[70px] ">
    {redirect('order')}
  </main>
}
