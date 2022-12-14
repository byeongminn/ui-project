import Link from "next/link";

export default function Home() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/skeleton">Skeleton</Link>
        </li>
        <li>
          <Link href="/modal">Modal</Link>
        </li>
        <li>
          <Link href="/carousel">Carousel</Link>
        </li>
      </ul>
    </nav>
  );
}
