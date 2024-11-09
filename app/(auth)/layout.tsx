import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="w-full bg-white rounded-lg shadow p-6" style={{ maxWidth: "80rem" }}>
      {children}
      </div>
    </div>
  );
}

export default AuthLayout;