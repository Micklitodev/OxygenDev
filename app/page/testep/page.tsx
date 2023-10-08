"use client";

import { useMutation } from "@/app/actions/mutation";
import { LOGIN } from "@/lib/fragments/mutations";
import Button from "@/components/ui/button";
import Auth from "@/utils/auth";

const Fetch = async () => {
  const VARS = {
    email: "Ecartman@testemail.com",
    password: "testpass12",
  };

  const data = await useMutation(LOGIN, VARS);

  if (data) {
    Auth.login(data.props.serverRes.login.token);
  }
};

const TestEP = () => {
  return (
    <>
      <div className="h-screen">
        <Button onClick={Fetch}> test Login </Button>
      </div>
    </>
  );
};

export default TestEP;
