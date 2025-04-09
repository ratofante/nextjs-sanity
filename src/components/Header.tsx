import Link from "next/link";

export function Header() {
  return (
    <div>
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
    </div>
  );
}
