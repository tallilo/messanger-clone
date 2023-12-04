import React from "react";
import { IconType } from "react-icons";

interface AuthSocialButtonsProps {
  icon: IconType;
  onClick: () => void;
}

export default function AuthSocialButton({
  icon: Icon,
  onClick,
}: AuthSocialButtonsProps) {
  return (
    <button
      type="button"
      className="inline-flex justify-center rounded-md bg-white w-full px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
      onClick={onClick}
    >
      <Icon size={25} />
    </button>
  );
}
