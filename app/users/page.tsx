"use client";
import React from "react";

import EmptyState from "../components/EmptyState";

export default function page() {
  return (
    <div className="hidden lg:block lg:pl-80 h-full">
      <EmptyState />
    </div>
  );
}
