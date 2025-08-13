import { AuthLayout } from "@/models/auth/ui/layouts/auth-layout";
import React from "react";

const LayoutAuth = ({ children }: { children: React.ReactNode }) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default LayoutAuth;
