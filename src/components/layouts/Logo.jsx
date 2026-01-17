import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center  ">
      <Image src="/logo.png" alt="SmartStudy Logo" width={60} height={20} />
      <span className="text-xl font-bold tracking-tight">
        Smart<span className="text-primary">Study</span>
      </span>
    </Link>
  );
}
