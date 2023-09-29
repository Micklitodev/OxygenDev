"use client";

import Label from "@/components/ui/label";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import Button from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { useState } from "react";

export default function ContactForm() {
  const [formState, setFormState] = useState({ name: "", description: "" });

  const handleFormSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
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
      <Card>
        <CardContent>
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold text-center mb-10">
                Contact Us
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name: </Label>
                  <Input id="first-name" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name: </Label>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email: </Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message: </Label>
                <Textarea
                  className="min-h-[200px] min-w-[500px]"
                  id="message"
                  placeholder="Enter your message"
                />
              </div>
              <Button  className="w-full text-white bg-gradient-to-r from-pink-500 to-purple-500">
                Send message
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
