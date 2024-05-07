'use client';
import { useRef } from "react";
import Content from "../components/Content";
import Navbar from "../components/Navbar";

import { Provider } from 'react-redux';
import store from '../redux/Store';

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
      <Provider store={store}>
        <Navbar/>
        <main className="h-screen w-full absolute left-0 top-0 overflow-hide bg-white pt-[113px] md:pl-[80px] md:pt-[70px] ">
          <Content queryProp={searchParams?.query} categoryProp={searchParams?.category}/>
        </main>
      </Provider>
    </>
  );
}
