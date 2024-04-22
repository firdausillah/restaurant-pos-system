import Image from "next/image";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="h-screen w-full absolute left-0 top-0 overflow-hide bg-white pt-[113px] md:pl-[80px] md:pt-[70px] ">
        <Content/>
      </main>
    </>
  );
}
