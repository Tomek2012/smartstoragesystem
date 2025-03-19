import Image from "next/image";
import Link from "next/link";

/* Header with logo and two navigation-items (overview- and settings-page) */
export default function Header() {
  return (
    <header className="grid grid-cols-2 items-center p-2 border-b-2 border-sky-600 bg-white w-full">
      <div className="ml-10 max-w-3xs">
        <Link href="/">
          <Image
            src={"/assets/images/komet-logo-light.png"}
            width={200}
            height={100}
            alt="Logo of Komet Dental"
          />
        </Link>
      </div>
      <nav className="hidden sm:flex gap-10 font-semibold text-gray-600 justify-end mr-10">
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
