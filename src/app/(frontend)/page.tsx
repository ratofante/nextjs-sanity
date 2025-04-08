import Link from "next/link";

export default async function Page() {
  return (
    <section>
      <Link href="/posts">Click me</Link>
      <button>Click me</button>
    </section>
  );
}
