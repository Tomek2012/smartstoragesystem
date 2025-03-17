import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between sm:justify-around p-2 border-b-2 border-sky-600 bg-white">
      <Link href="/">
        <Image
          src={"/assets/images/komet-logo-light.png"}
          width={200}
          height={100}
          alt="Logo of Komet Dental"
        />
      </Link>
      <nav className="hidden sm:flex gap-10 font-semibold text-gray-600">
        <Link href="/overview" className="hover:text-gray-500">
          Overview
        </Link>
        <Link href="/settings" className="hover:text-gray-500">
          Settings
        </Link>
      </nav>
    </header>
  );
}
