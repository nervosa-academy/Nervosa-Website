import Image from "next/image";

interface NervosaLogoProps {
  className?: string;
}

export default function NervosaLogo({ className = "" }: NervosaLogoProps) {
  return (
    <Image
      src="/transparent-logo.png"
      alt="Nervosa Academy"
      width={96}
      height={112}
      className={`w-14 h-auto sm:w-16 md:w-20 lg:w-24 ${className}`}
      priority
    />
  );
}
