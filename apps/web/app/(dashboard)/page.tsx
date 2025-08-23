"use client";
import { Button } from "@workspace/ui/components/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <div className="flex items-center justify-center min-h-svh">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">Hello World/Web</h1>
          <UserButton />
          <OrganizationSwitcher hidePersonal />
        </div>
      </div>
    </>
  );
}
