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
      {/* <nav className="sm:hidden flex flex-col items-end gap-1 font-semibold">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="sm:hidden font-bold text-xl hover:text-gray-500"
        >
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
        {showMenu && (
          <>
            <a href="#" className="hover:text-gray-500">
              Home
            </a>
            <a href="#" className="hover:text-gray-500">
              About
            </a>
            <a href="#" className="hover:text-gray-500">
              Contact
            </a>
          </>
        )}
      </nav> */}
    </header>
  );
}
