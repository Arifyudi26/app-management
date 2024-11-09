"use client";

import { useFormStatus } from "react-dom";
import { ButtonTypes } from "@/types/appManagement";

export default function Button(props: ButtonTypes) {
  const { pending } = useFormStatus();

  return (
    <button
      type={props.type}
      disabled={pending}
      className="w-full text-white bg-blue-700 font-medium rounded-lg px-5 py-2.5 text-center uppercase hover:bg-blue-800 relative"
    >
      {pending ? (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-5 h-5 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        props?.name
      )}
    </button>
  );
}
