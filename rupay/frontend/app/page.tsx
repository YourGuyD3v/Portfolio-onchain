import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Link 
        href="/dapp" 
        className="launch-button"
      >
        Launch Dapp
      </Link>
    </div>
  );
}