import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-black rounded-b-lg shadow-md text-gray-200 select-none">
      <Link href="/" passHref>
        <Image src="/vercel-white.svg" alt="Vercel" width={72} height={16} />
      </Link>
      <h5>Starter App</h5>
    </header>
  );
};