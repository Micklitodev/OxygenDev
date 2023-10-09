"use client";

import { useEffect } from "react";

export default function Success() {
  let error: any;

  useEffect(() => {
    setTimeout(() => {
      window.location.assign("/page/dashboard");
    }, 2000);
  });

  return (
    <>
      <div className="h-screen text-center flex flex-col justify-center items-center">
        {error ? (
          <div className="bg-red-500 text-white p-8  max-w-md mx-auto">
            <h1 className="text-3xl font-bold">Session Expired</h1>
          </div>
        ) : (
          <div className=" border border-purple-500 p-8 rounded-lg max-w-md mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Thank You for Subscribing to Oxygen Dev
            </h1>
            <div>
              <h2 className="text-xl mb-4"></h2>
              <h4 className="text-gray-500">redirecting...</h4>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
