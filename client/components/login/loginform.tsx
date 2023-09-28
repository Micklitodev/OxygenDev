"use client";

import Link from "next/link";
import { useState } from "react";

import { LoginInput } from "@/lib/types";

import Input from "../ui/input";
import Label from "../ui/label";
import { Card, CardContent } from "../ui/card";
import Button from "../ui/button";

const LoginForm: React.FC = (): JSX.Element => {
  const [formState, setFormState] = useState<LoginInput>({
    email: "",
    password: "",
  });

  const handleFormSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      console.log("hittingsubmit");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<any>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <Card>
        <CardContent>
          <h2 className="text-2xl font-semibold">Login</h2>
          <div className="flex flex-col my-2">
            <Label htmlFor="email">Email address:</Label>
            <Input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col my-2">
            <Label htmlFor="password">Password:</Label>
            <Input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end">
            <Button
              onSubmit={handleFormSubmit}
              type="submit"
              className="w-full bg-black text-white"
            >
              Submit
            </Button>
          </div>
          <div className="mt-2">
            <em style={{ fontSize: 13 }}>
              <Link href="page/signup" className="text-gray-200">
                Need to create an account? Click Here!
              </Link>
            </em>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default LoginForm;
