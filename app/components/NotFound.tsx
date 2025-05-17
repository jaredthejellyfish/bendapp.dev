import React from "react";
import { motion } from "motion/react";
import { Button } from "~/components/ui/button";
import { useNavigate } from "@tanstack/react-router";

function NotFound() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center text-center px-4 mx-auto h-screen"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-8"
      >
        <div className="text-9xl font-bold text-accent mb-2">404</div>
        <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-lg text-white/70 max-w-md mx-auto mb-8">
          We couldn't find the page you're looking for. It might have been
          moved, deleted, or never existed.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex gap-4"
      >
        <Button
          onClick={() => {
            void navigate({ to: "/" });
          }}
          className="bg-accent hover:bg-accent/90 text-white"
        >
          Back to Home
        </Button>

        <Button
          variant="outline"
          onClick={() => {
            window.history.back();
          }}
          className="border-border text-white"
        >
          Go Back
        </Button>
      </motion.div>
    </motion.div>
  );
}

export default NotFound;
