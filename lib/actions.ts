"use server";

import { registerScheme } from "./zod";
import { hashSync } from "bcrypt-ts";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const signUpCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  const validateFields = registerScheme.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validateFields.data;
  const hashedPassword = hashSync(password, 10);

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    console.error("Error during registration:", error);
    return {
      success: false,
      message: "An error occurred during registration",
    };
  }

  redirect("/login");
};
