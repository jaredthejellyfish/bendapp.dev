import { Link } from "@tanstack/react-router";
import React from "react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log({ email, password });
  };

  return (
    <div className="bg-card p-8 rounded-lg w-sm sm:w-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); }}
            placeholder="tyler.almendra@gmail.com"
            required
            className="w-full bg-background text-foreground border-border"
          />
        </div>

        <div className="mb-2">
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); }}
            placeholder="••••••••••"
            required
            className="w-full bg-background text-foreground border-border"
          />
        </div>

        <div className="flex justify-end mb-6">
          <Link
            to="/forgot-password"
            className="text-sm text-accent hover:text-accent-foreground"
          >
            Forgot password?
          </Link>
        </div>

        <Button
          type="submit"
          className="w-full bg-accent hover:bg-accent/90 text-white"
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignInForm;
