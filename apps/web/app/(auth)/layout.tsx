import React from "react";

const LayoutAuth = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default LayoutAuth;
