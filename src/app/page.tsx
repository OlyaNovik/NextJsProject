
import Link from "next/link";



export default function Home() {
  return (
    <div className="w-56 h-56 mt-24 ml-96 flex flex-col justify-center text-center border-4  border-black border-solid">

      <Link href="/tailwind" className="text-orange-700  mt-4 block text-4xl font-bold">
        Tailwind
      </Link>
    </div>
  );
}