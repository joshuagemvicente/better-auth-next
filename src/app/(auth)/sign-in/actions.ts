"use server";

import { parseWithZod } from "@conform-to/zod";
import { signInSchema } from "@/lib/validations/auth";
import { auth } from "@/lib/auth.server";
import { NextResponse } from "next/server";

export async function signIn(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: signInSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const { headers } = await auth.api.signInEmail({
    returnHeaders: true,
    body: {
      email: submission.value.email,
      password: submission.value.password,
    },
  });

  return NextResponse.redirect(new URL("/dashboard"), {
    headers,
  });
  // return redirect("/dashboard", {
  //   headers,
  // });
}
