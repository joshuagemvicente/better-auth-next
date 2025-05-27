"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useFormState } from "react-dom";
import { parseWithZod } from "@conform-to/zod";
import { useForm } from "@conform-to/react";
import Link from "next/link";

export function SignInForm() {
  const [lastResult, action] = useFormState(signIn, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: signInSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <Card className="w-full max-w-md bg-white/80 backdrop-blur-xl border-0 shadow-2xl shadow-black/5">
      <div className="p-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
            <div className="w-8 h-8 bg-white rounded-lg"></div>
          </div>
          <h1 className="text-2xl font-light text-gray-900 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500 font-light">
            Sign in to continue to your account
          </p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="h-12 border-gray-200 focus:border-gray-400 focus:ring-0 rounded-xl bg-gray-50/50 transition-all duration-200"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="h-12 border-gray-200 focus:border-gray-400 focus:ring-0 rounded-xl bg-gray-50/50 transition-all duration-200"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-500"
              />
              <Label htmlFor="remember" className="text-sm text-gray-600">
                Remember me
              </Label>
            </div>
            <button
              type="button"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Forgot password?
            </button>
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Sign In
          </Button>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            {"Don't have an account?"}{" "}
            <Link
              href="/sign-up"
              className="text-gray-900 font-medium hover:underline transition-all duration-200"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </Card>
  );
}
