import React from "react";
import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const index = ({ width, height, src, alt }: ImageProps) => {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      placeholder="blur"
      blurDataURL={src}
    />
  );
};

export default index;
