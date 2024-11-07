"use client";

import FormRegister from "@/components/auth/form-register";
import { useFormState } from "react-dom";
import { signUpCredentials } from "@/lib/actions";

function Page() {
  const [state, formAction] = useFormState(signUpCredentials, null);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Create an Account</h1>
      <FormRegister state={state} formAction={formAction} />
    </div>
  );
}

export default Page;
