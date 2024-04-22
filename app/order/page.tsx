import Content from "../components/Content";
import Navbar from "../components/Navbar";

export default function Page({
  searchParams,
}:{
  searchParams?: {
    query?: string;
    category?: string
  };

}) {
  
  return (
    <>
      <Navbar/>
      <main className="h-screen w-full absolute left-0 top-0 overflow-hide bg-white pt-[113px] md:pl-[80px] md:pt-[70px] ">
        <Content queryProp={searchParams?.query} categoryProp={searchParams?.category}/>
      </main>
    </>
  );
}
