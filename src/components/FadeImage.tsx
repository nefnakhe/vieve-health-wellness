"use client";

import Image from "next/image";
import { useState } from "react";

interface FadeImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  objectPosition?: string;
}

export default function FadeImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = "",
  priority = false,
  objectPosition,
}: FadeImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  if (errored) return null;

  const combinedClass = `${className} transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`;

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={combinedClass}
        style={objectPosition ? { objectPosition } : undefined}
        priority={priority}
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={combinedClass}
      priority={priority}
      onLoad={() => setLoaded(true)}
      onError={() => setErrored(true)}
    />
  );
}
