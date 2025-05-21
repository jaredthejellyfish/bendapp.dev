import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface AnimatedStreamingProps {
  content: string;
  className?: string;
}

const AnimatedStreaming = ({
  content,
  className = "",
}: AnimatedStreamingProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentContent, setCurrentContent] = useState<string>("");

  useEffect(() => {
    setCurrentContent(content);

    // Scroll to bottom when new content arrives
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [content]);

  // Split content into lines for animate-in effect
  const lines = currentContent.split("\n");

  if (!content) {
    return null;
  }

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div className="relative ">
        {lines.map((line, index) => (
          <motion.div
            key={`line-${String(index)}`}
            initial={{ opacity: 0.5, filter: "blur(5px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
              opacity: { duration: 0.3 },
              y: { duration: 0.2 },
              filter: { duration: 0.5 },
              delay: 0.05 * Math.min(index, 5), // Cap the delay for better UX with many lines
            }}
            className="relative"
          >
            {line && line.length > 0 && (
              <div className="inline">
                <Markdown remarkPlugins={[remarkGfm]}>{line}</Markdown>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedStreaming;
