import Link from "next/link";

interface Props {
  className?: string;
}

const menuItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Blog", path: "/blog" },
  { id: 3, name: "Single Post", path: "/post/:id" },
  { id: 4, name: "Contact", path: "/contact" },
  { id: 5, name: "Search", path: "/search" },
];

export const NavList: React.FC<Props> = ({ className }) => {
  return (
    <nav className={className}>
      <ul className="flex items-center gap-10">
        {menuItems.map((link) => (
          <li key={link.id}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
