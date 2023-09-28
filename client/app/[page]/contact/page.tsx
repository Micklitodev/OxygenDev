import { NextPage } from "next";
import ContactForm from "@/components/contact/contactform";

const Contact: NextPage<any> = async () => {
  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        <ContactForm /> 
      </main>
    </>
  );
};

export default Contact;
