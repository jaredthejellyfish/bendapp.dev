import React from "react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Checkbox } from "~/components/ui/checkbox";
import { Label } from "~/components/ui/label";
import { Link } from "@tanstack/react-router";
import { signUpFn } from "~/serverFn/signUpUser";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
    privacyAccepted: false,
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

  return (
    <div className="bg-card p-8 rounded-lg">
      <form action={signUpFn.url} method="POST" encType="multipart/form-data">
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
              id="termsAccepted"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onCheckedChange={(checked) => {
                handleCheckboxChange("termsAccepted", checked as boolean);
              }}
            />
            <Label htmlFor="termsAccepted" className="text-sm text-foreground">
              I accept the{" "}
              <Link to="/terms" className="text-accent hover:underline">
                Terms of Service
              </Link>
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="privacyAccepted"
              name="privacyAccepted"
              checked={formData.privacyAccepted}
              onCheckedChange={(checked) => {
                handleCheckboxChange("privacyAccepted", checked as boolean);
              }}
            />
            <Label
              htmlFor="privacyAccepted"
              className="text-sm text-foreground"
            >
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
          disabled={!formData.termsAccepted || !formData.privacyAccepted}
        >
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
