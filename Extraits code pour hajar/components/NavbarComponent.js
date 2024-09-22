import Link from 'next/link';

export default function NavbarComponent() {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/add-planning">Add Planning</Link>
        </li>
        <li>
          <Link href="/planning-list">Planning List</Link>
        </li>
      </ul>
    </nav>
  );
}