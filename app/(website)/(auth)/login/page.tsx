"use client";
import Container from "@/app/landing/components/layouts/Container";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Illustration from "../assets/illustration.svg";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface FormInput {
  email: string;
  password: string;
}

interface FormError {
  email: string;
  password: string;
}

const page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormInput>({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState<FormError>({
    email: "",
    password: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(formData);
    setFormError(errors);
    if (Object.values(formError).every((error) => !error)) {
      const stringFormData = JSON.stringify(formData);
      console.log(stringFormData);
      try {
        const response = await fetch(
          "https://monalytics-api.onrender.com/monalytics-api/api/v1/company/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
            mode: "no-cors",
          }
        );

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        router.push("/app");
      } catch (error) {
        console.error("Error sending sign-up request:", error);
      }
    }
  };

  const validate = (formInput: FormInput): FormError => {
    const errors: FormError = {
      email: "",
      password: "",
    };
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!formInput.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(formInput.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!formInput.password) {
      errors.password = "Password is required!";
    }
    return errors;
  };

  return (
    <Container className="flex gap-10 p-14">
      <form
        className="flex flex-1 flex-col gap-8 lg:px-20 lg:pt-16"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-1">
          <p className="text-2xl font-bold sm:text-3xl">Sign In</p>
          <p className="text-themeGrayText  text-sm  font-medium sm:text-base">
            Welcome please enter your details
          </p>
        </div>

        <div className="flex flex-col gap-8 text-sm sm:text-base">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInput}
              id="email"
              className="p-2 w-full outline-none border border-gray-300 rounded lg:w-auto"
            />
            <p className="text-red-500 text-lg">{formError.email}</p>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInput}
              id="password"
              className="p-2 w-full outline-none border border-gray-300 rounded lg:w-auto"
            />
            <p className="text-red-500 text-lg">{formError.password}</p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <button className="bg-themeBlack text-themeWhite px-8 py-2 rounded-md">
            Sign In
          </button>
          <button className="flex gap-2 items-center justify-center bg-transparent border-2 border-gray-300 text-themeBlack px-8 py-2 rounded">
            <FcGoogle className="text-xl" />
            Sign In with Google
          </button>

          <p className="text-center" onClick={() => router.push("/register")}>
            Do not have an account?{" "}
            <span className="font-bold hover:cursor-pointer">Sign Up</span>
          </p>
        </div>
      </form>

      <div className="hidden w-full  md:flex md:items-center md:justify-center md:flex-1 ">
        <Image src={Illustration} alt="illustration" loading="lazy" />
      </div>
    </Container>
  );
};

export default page;
