import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/products"}>Products</Link>
    </main>
  );
}
