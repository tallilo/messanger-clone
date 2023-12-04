"use client";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  register: UseFormRegister<FieldValues>;
  placeholder: string;
  required?: boolean;
  type?: string;
  id: string;
  errors: FieldErrors;
}

export default function MessageInput({
  register,
  placeholder,
  required,
  type,
  id,
  errors,
}: MessageInputProps) {
  return (
    <div className="relative w-full ">
      <input
        placeholder={placeholder}
        {...register(id, { required })}
        id={id}
        type={type}
        autoComplete={id}
        className="
        text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none"
      />
    </div>
  );
}
