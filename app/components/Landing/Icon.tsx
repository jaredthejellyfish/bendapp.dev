import React from "react";

type Props = { className: string };

function Icon({ className }: Props) {
  return (
    <svg
      width="60"
      height="51"
      viewBox="0 0 60 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="60" height="24" rx="12" />
      <rect y="27" width="60" height="24" rx="12" />
    </svg>
  );
}

export default Icon;
