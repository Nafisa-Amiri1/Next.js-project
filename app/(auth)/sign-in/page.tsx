// "use client"
// import React from "react"
// import { AuthForm } from "@/components/forms/AuthForm"
// import { SignInSchema } from "@/lib/validations";

// const SignIn = () => {
//     return (
//         <AuthForm
//             formType="SIGN_IN"
//             schema={SignInSchema}
//             defaultValues={{ email: '', password: '' }}
//             onSubmit={async (data) => {
//                 console.log({ success: true, data });

//                 return {
//                     success: true,
//                 };
//             }}
//         />

//     )
// }
// export default SignIn;


"use client";

import React from "react";
import { z } from "zod";
import { AuthForm } from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validations";

type SignInType = z.infer<typeof SignInSchema>;

const SignIn = () => {
    return (
        <AuthForm<SignInType>
            formType="SIGN_IN"
            schema={SignInSchema}
            defaultValues={{ email: "", password: "" }}
            onSubmit={async (data) => {
                console.log({ success: true, data });
                return { success: true };
            }}
            fields={[
                { name: "email", label: "Email Address", type: "email" },
                { name: "password", label: "Password", type: "password" },
            ]}
        />
    );
};

export default SignIn;
