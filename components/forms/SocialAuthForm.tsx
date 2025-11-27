"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";
import React from "react";

import ROUTES from "@/constants/routes";
import { toast } from "sonner";
import { Button } from "../ui/button";



const SocialAuthForms = () => {
    const buttonClass = " bg-[#ffffff] dark:bg-[#1f272f] text-[#000000] dark:text-[#ffffff] rounded-2xl min-h-12 flex-1  px-4 py-3.5 body-medium cursor-pointer "
    //SIGN_IN 
    const handleSignIn = async (provider: "github" | "google"  ) => {
        try {
            await signIn(provider, {
                callbackUrl: ROUTES.HOME,
        
            });
        } catch (error) {
            console.log(error);

            toast(
                `Sign-in Failed: ${error instanceof Error
                    ? error.message
                    : "An error occured during sign-in"
                }`
            );
        }
    };

    return (
        <div className='mt-10 flex flex-wrap gap-2.5 '>

            <Button
                className={buttonClass}
                onClick={() => handleSignIn("github")}
            >
                <Image
                    src='/icon/github.png'
                    alt='github Logo'
                    width={33}
                    height={33}
                    className='invert-colors mr-2.5 object-contain'
                />
                <span>Log in with GitHub</span>
            </Button>

            <Button
                className={buttonClass}
                onClick={() => handleSignIn('google')}
            >
                <Image
                    src='/icon/google.png'
                    alt='google Logo'
                    width={30}
                    height={30}
                    className='invert-colors mr-2.5 object-contain'
                />
                <span>Log in with Google</span>
            </Button>
        </div>
    );
};

export default SocialAuthForms;