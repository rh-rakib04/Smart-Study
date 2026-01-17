import { GraduationCap } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <GraduationCap size={28} className="text-primary" strokeWidth={1.8} />
      <span className="text-xl font-bold tracking-tight">
        Smart<span className="text-primary">Study</span>
      </span>
    </Link>
  );
}
