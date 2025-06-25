"use client";

import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/validations";

export default function Home() {
  return (
    <div>
      <h1>Hello there we are doing some tests</h1>
      {/*<AuthForm*/}
      {/*  type="SIGN_IN"*/}
      {/*  defaultValues={{ email: "", password: "" }}*/}
      {/*  schema={signInSchema}*/}
      {/*/>*/}
    </div>
  );
}
