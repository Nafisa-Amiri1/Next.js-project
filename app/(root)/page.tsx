"use client";

import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import { signOut } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetchSession = async () => {
      const session = await auth();
      console.log(session); // فقط برای بررسی
    };
    fetchSession();
  }, []);

  const handleLogout = async () => {
    await signOut({ callbackUrl: ROUTES.SIGN_IN });
  };

  return (
    <div className="px-10 pt-[100px]">
      <Button
        onClick={handleLogout}
        className="bg-white hover:bg-blue-200 text-black rounded-lg cursor-pointer "
      >
        Log out
      </Button>
    </div>
  );
}
