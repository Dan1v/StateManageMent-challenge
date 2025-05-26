// helpers/renderUnknownIcon.tsx
import { TbFileUnknown } from "react-icons/tb";
import React from "react";

export const renderUnknownIcon = (text: string): React.ReactNode => {
  if (text.toLowerCase().includes("unknown")) {
    return <TbFileUnknown className="unknown-icon" size={17} />;
  }
  return text;
};
