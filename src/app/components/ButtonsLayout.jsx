"use client";

import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { testAtom } from "@/atom";
import Link from "next/link";

const ButtonsLayout = ({ pageName, route }) => {
  const [test, setTest] = useAtom(testAtom);
  return (
    <main className="w-screen h-screen flex font-medium">
      <section className="m-auto h-[400px] w-[300px] relative text-center text-white">
        <div className=" uppercase">Color actual: {test}</div>
        <div className="mt-20 text-5xl capitalize">{pageName}</div>

        <div className=" bottom-0 absolute w-full text-center py-4 text-black ">
          <div className=" grid grid-cols-2 gap-2">
            <button
              onClick={() => setTest("rojo")}
              className="w-full text-center bg-white rounded-lg py-4 hover:bg-red-600 hover:text-white transition-all"
            >
              Rojo
            </button>
            <button
              onClick={() => setTest("verde")}
              className="w-full text-center bg-white rounded-lg py-4 hover:bg-lime-500 hover:text-white transition-all"
            >
              Verde
            </button>
          </div>

          <Link href={route !== "/" ? `/${route}` : "/"}>
            <div className="bg-white rounded-lg py-4 hover:contrast-75 mt-2">
              Go to{" "}
              <span className="capitalize">
                {route !== "/" ? route : "home"}
              </span>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
};
export default ButtonsLayout;
