import { ReactNode } from 'react';
import Image from "next/image"
import SocialAuthForms from "@/components/forms/SocialAuthForm";

// const SocialAuthForms = dynamic(() => import('@/components/forms/SocialAuthForm'), { ssr: false });

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[url('/images/auth-light.png')] dark:bg-[url('/images/auth-dark.png')]
        bg-cover bg-center bg-no-repeat px-4 py-10">
            <section className="border border-black bg-[#f3f5f8] dark:bg-[#0C1015] shadow-light100_dark100 min-w-full rounded-[10px]
             px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8 ">
                <div className='flex items-center justify-between gap-2'>
                    <div className='space-y-2.5'>
                        <h1 className="text-2xl font-bold text-dark-100 dark:text-light-900">
                            Join DevFlow
                        </h1>
                        <p className='text-dark-100 dark:text-light-900'>
                            To get your questions answered
                        </p>
                    </div>
                    <Image src="/images/logoDavFlow1.png"
                        alt='DevFlow logo'
                        width={53}
                        height={53}
                        className='object-contain'
                    />
                </div>
                {children}
              <SocialAuthForms />
            </section>
        </main>
    );
}
export default AuthLayout;