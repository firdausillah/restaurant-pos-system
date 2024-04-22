import Content from "../components/Content";

export default function Page({
  searchParams,
}:{
  searchParams?: {
    query?: string;
    category?: string
  };

}) {
  // const query = searchParams?.query;
  // const category = searchParams?.category;
  // console.log(searchParams);
  return (
    <>
      {/* <Navbar/> */}
      <main className="h-screen w-full absolute left-0 top-0 overflow-hide bg-white pt-[113px] md:pl-[80px] md:pt-[70px] ">
        <Content queryProp={searchParams?.query} categoryProp={searchParams?.category}/>
      </main>
    </>
  );
}
