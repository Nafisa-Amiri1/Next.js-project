"use client";

// import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldValues, DefaultValues, Path } from "react-hook-form";
import { ZodTypeAny } from "zod/v3";
import { ZodType } from "zod";
// import { ZodSchema } from "zod/v3";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import ROUTES from "@/constants/routes";

// Props for generic AuthForm

interface AuthFormProps<T extends FieldValues> {
    schema: ZodTypeAny | ZodType<T>; // ✅ avoids explicit `any`
    defaultValues: DefaultValues<T>;
    onSubmit: (data: T) => Promise<{ success: boolean }>;
    formType: "SIGN_IN" | "SIGN_UP";
    fields: {
        name: Path<T>;
        label: string;
        type?: string;
        description?: string;
    }[];
}

const AuthForm = <T extends FieldValues>({
    // schema,
    defaultValues,
    formType,
    onSubmit,
    fields,
}: AuthFormProps<T>) => {
    const form = useForm<T>({
        // resolver: zodResolver(Schema),
        defaultValues,
    });

    const handleSubmit = async (data: T) => {
        await onSubmit(data);
    };

    const buttonText = formType === "SIGN_IN" ? "Sign In" : "Sign Up";

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                {fields.map(({ name, label, type = "text", description }) => (
                    <FormField
                        key={name}
                        control={form.control}
                        name={name}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{label}</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type={type}
                                        required
                                        className="text-base font-normal bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 focus:outline-none min-h-12 rounded-md"
                                    />
                                </FormControl>
                                {description && <FormDescription>{description}</FormDescription>}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                ))}

                <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="w-full min-h-12 rounded-xl px-4 py-3 font-inter text-base font-medium text-neutral-100 bg-linear-to-r from-[#fe7107] via-[#f37f30] to-[#e69254]"
                >
                    {form.formState.isSubmitting
                        ? formType === "SIGN_IN" ? "Signing In..." : "Signing Up..."
                        : buttonText}
                </Button>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                    {formType === "SIGN_IN" ? (
                        <>
                            Do not have an account?{" "}
                            <Link
                                href={ROUTES.SIGN_UP}
                                className="text-[#ea7826] hover:underline font-bold text-base"
                            >
                                Sign up
                            </Link>
                        </>
                    ) : (
                        <>
                            Already have an account?{" "}
                            <Link
                                href={ROUTES.SIGN_IN}
                                className="text-[#ea7826] hover:underline font-bold text-base"
                            >
                                Sign in
                            </Link>
                        </>
                    )}
                </p>
            </form>
        </Form>
    );
};

export { AuthForm };
