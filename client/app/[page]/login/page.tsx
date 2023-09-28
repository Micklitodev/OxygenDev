import { NextPage } from "next";
import LoginForm from "@/components/login/loginform";

const Login: NextPage<any> = async () => {
  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        <LoginForm /> 
      </main>
    </>
  );
};

export default Login;
