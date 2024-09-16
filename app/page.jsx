import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Link href={'/auth/login'}>Login</Link>
    </div>
  );
}
