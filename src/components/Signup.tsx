"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { BackgroundGradient } from "./ui";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
};

export default function Signup() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
  };

  return (
    <section id="signup" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <BackgroundGradient className="p-8 rounded-3xl">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Be the First to Know When We Launch!
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Sign up for updates and exclusive offers.
          </p>
          {isSubmitted ? (
            <div className="text-center text-2xl text-teal-600 font-semibold">
              Thank you! We'll notify you when we go live.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="max-w-lg mx-auto space-y-4"
            >
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white py-2 rounded-md hover:from-blue-600 hover:to-teal-500 transition-all"
              >
                Join the Waitlist
              </button>
            </form>
          )}
        </BackgroundGradient>
      </div>
    </section>
  );
}
