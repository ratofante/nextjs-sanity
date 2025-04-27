import Link from "next/link";

export function Header() {
  return (
    <header>
      <Link href="/">Home</Link>
      <ul>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/studio">Sanity Studio</Link>
        </li>
      </ul>
    </header>
  );
}
