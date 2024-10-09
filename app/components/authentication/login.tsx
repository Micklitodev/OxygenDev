"use client";

import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import Input from "../ui/input";
import Button from "../ui/button";
import { LoginInput } from "@/lib/types";
import { mutate } from "@/app/actions/mutation";
import { LOGIN } from "@/lib/fragments/mutations";

import Auth from "@/utils/auth";

const LoginForm: React.FC = (): JSX.Element => {
  const [formState, setFormState] = useState<LoginInput>({
    email: "",
    password: "",
  });

  const Fetch = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const VARS = {
        ...formState,
      };

      const data = await mutate(LOGIN, VARS);

      if (data) {
        Auth.login(data.props.serverRes.login.token);
      }
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
            <Input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col my-2">
            <Input
              placeholder="password"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end mt-10">
            <Button
              onClick={Fetch}
              type="submit"
              className="w-full text-white bg-black"
            >
              Continue
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default LoginForm;
