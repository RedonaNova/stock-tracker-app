"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import InputField from "@/components/forms/InputField";
import FooterLink from "@/components/forms/FooterLink";
// import { signInWithEmail, signUpWithEmail } from "@/lib/actions/auth.actions";
import { toast } from "sonner";
// import { signInEmail } from "better-auth/api";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      //   const result = await signInWithEmail(data);
      //   if (result.success) router.push("/");
      console.log(data);
    } catch (e) {
      console.error(e);
      toast.error("Sign in failed", {
        description: e instanceof Error ? e.message : "Failed to sign in.",
      });
    }
  };

  return (
    <>
      <h1 className="form-title">Тавтай морилно уу</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          name="email"
          label="И-мэйл"
          placeholder="bold@gmail.com"
          register={register}
          error={errors.email}
          validation={{
            required: "И-мэйл заавал оруулна уу",
            pattern: /^\w+@\w+\.\w+$/,
          }}
        />

        <InputField
          name="password"
          label="Нууц үг"
          placeholder="Нууц үг оруулна уу"
          type="password"
          register={register}
          error={errors.password}
          validation={{ required: "Нууц үг заавал оруулна уу", minLength: 8 }}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Нэвтэрч байна.." : "Нэвтрэх"}
        </Button>

        <FooterLink
          text="Хаяг байхгүй юу?"
          linkText="Бүртгүүлэх"
          href="/sign-up"
        />
      </form>
    </>
  );
};
export default SignIn;
