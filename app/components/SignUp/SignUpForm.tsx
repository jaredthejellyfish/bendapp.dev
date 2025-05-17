import React from "react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Checkbox } from "~/components/ui/checkbox";
import { Label } from "~/components/ui/label";
import { Link } from "@tanstack/react-router";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    acceptPrivacy: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log(formData);
  };

  return (
    <div className="bg-card p-8 rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <Label
              htmlFor="firstName"
              className="text-sm text-foreground mb-1 block"
            >
              First Name
            </Label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              required
              className="w-full bg-background text-foreground border-border"
            />
          </div>

          <div>
            <Label
              htmlFor="lastName"
              className="text-sm text-foreground mb-1 block"
            >
              Last Name
            </Label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              required
              className="w-full bg-background text-foreground border-border"
            />
          </div>
        </div>

        <div className="mb-4">
          <Label htmlFor="email" className="text-sm text-foreground mb-1 block">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john.doe@example.com"
            required
            className="w-full bg-background text-foreground border-border"
          />
        </div>

        <div className="mb-4">
          <Label
            htmlFor="password"
            className="text-sm text-foreground mb-1 block"
          >
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••••"
            required
            className="w-full bg-background text-foreground border-border"
          />
        </div>

        <div className="mb-6">
          <Label
            htmlFor="confirmPassword"
            className="text-sm text-foreground mb-1 block"
          >
            Confirm Password
          </Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="••••••••••"
            required
            className="w-full bg-background text-foreground border-border"
          />
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="acceptTerms"
              checked={formData.acceptTerms}
              onCheckedChange={(checked) =>
                { handleCheckboxChange("acceptTerms", checked as boolean); }
              }
            />
            <Label htmlFor="acceptTerms" className="text-sm text-foreground">
              I accept the{" "}
              <Link to="/terms" className="text-accent hover:underline">
                Terms of Service
              </Link>
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="acceptPrivacy"
              checked={formData.acceptPrivacy}
              onCheckedChange={(checked) =>
                { handleCheckboxChange("acceptPrivacy", checked as boolean); }
              }
            />
            <Label htmlFor="acceptPrivacy" className="text-sm text-foreground">
              I accept the{" "}
              <Link to="/privacy" className="text-accent hover:underline">
                Privacy Policy
              </Link>
            </Label>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-accent hover:bg-accent/90 text-white"
          disabled={!formData.acceptTerms || !formData.acceptPrivacy}
        >
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
