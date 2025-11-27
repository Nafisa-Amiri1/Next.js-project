"use client";

import React from "react";
import { z } from "zod";
import { AuthForm } from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations"; // فرض: این schema اینجا تعریف شده

type SignUpType = z.infer<typeof SignUpSchema>;

const SignUp = () => {
    return (
        <AuthForm<SignUpType>
            formType="SIGN_UP"
            schema={SignUpSchema}
            defaultValues={{
                username: "",
                name: "",
                email: "",
                password: "",
            }}
            onSubmit={async (data) => {
                // اینجا درخواست ارسال به سرور یا منطق دیگر را بگذار
                console.log("Sign up data:", data);
                // مثال پاسخ موفق
                return { success: true };
            }}
            fields={[
                { name: "username", label: "Username", type: "text" },
                { name: "name", label: "Full Name", type: "text" },
                { name: "email", label: "Email Address", type: "email" },
                { name: "password", label: "Password", type: "password" },
            ]}
        />
    );
};

export default SignUp;
