"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      className="rounded-full w-auto h-auto"
      height="30"
      width="30"
      alt="Avatar"
      src="/images/placeholder.jpg"
    />
  );
};

export default Avatar;
