"use client";

import { useOrganization } from "@clerk/nextjs";
import { ReactNode } from "react";
import { AuthLayout } from "../layouts/auth-layout";
import { OrgSelectView } from "../views/org-selection-view";

export const OrganizationGuard = ({ children }: { children: ReactNode }) => {
  const { organization } = useOrganization();
  console.log("Current organization:", organization);

  if (!organization) {
    return (
      <AuthLayout>
        <OrgSelectView />
      </AuthLayout>
    );
  }

  return <>{children}</>;
};
