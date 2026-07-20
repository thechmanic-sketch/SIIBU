"use client";

import { useState } from "react";
import { assetPath } from "@/lib/assetPath";

export default function MediaImage({
  src,
  alt,
  fallbackClassName,
  className = "",
}: {
  src: string;
  alt: string;
  fallbackClassName: string;
  className?: string;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return <div className={`${fallbackClassName} ${className}`} />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={assetPath(src)}
      alt={alt}
      onError={() => setErrored(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
