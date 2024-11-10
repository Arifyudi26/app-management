"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "@app/components/Sidebar";
import Header from "@app/components/Header";
import { SessionProvider } from "next-auth/react";
import { store } from "../../../store/store";
import { Provider } from "react-redux";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <SessionProvider>
      <Provider store={store}>
        <div className="flex">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="relative flex flex-1 flex-col lg:ml-72.5">
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main>
              <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                {children}
              </div>
            </main>
          </div>
        </div>
      </Provider>
    </SessionProvider>
  );
}
