"use client";

import Input from "@/app/components/ui/input";
import Textarea from "@/app/components/ui/textarea";
import Button from "@/app/components/ui/button";
import { CardContent, Card } from "@/app/components/ui/card";
import { useState } from "react";

const ContactForm = () => {
  const [formState, setFormState] = useState({ name: "", description: "" });

  const handleFormSubmit = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    try {
    } catch (err) {
      console.log(err);
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
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-md p-8 mt-6 rounded shadow-md">
        <CardContent>
          <h2 className="text-3xl font-semibold text-center mb-4">
            Contact Us
          </h2>
          <p className="text-gray-400 mb-8 text-center">
            Fill out the form below and we will get back to you as soon as
            possible.
          </p>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Input
                  id="first-name"
                  name="firstName"
                  placeholder="Enter your first name"
                  onChange={handleChange}
                  className="w-full p-2 rounded"
                />
              </div>
              <div className="space-y-2">
                <Input
                  id="last-name"
                  name="lastName"
                  placeholder="Enter your last name"
                  onChange={handleChange}
                  className="w-full p-2 rounded"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                onChange={handleChange}
                className="w-full p-2 rounded"
              />
            </div>

            <div className="space-y-2">
              <Textarea
                id="message"
                placeholder="Enter your message"
                className="w-full p-2 rounded min-h-[200px]"
              />
            </div>

            <Button
              onClick={handleFormSubmit}
              className="w-full p-2 text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
            >
              Send message
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
