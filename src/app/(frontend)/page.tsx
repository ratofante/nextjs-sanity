import Link from "next/link";
import { Title } from "@/components/Blog/Title";

export default async function Page() {
  return (
    <section>
      <Title>Layer Caker Home Page</Title>
      <hr />
      <Link href="/posts">Posts index &rarr;</Link>
    </section>
  );
}
