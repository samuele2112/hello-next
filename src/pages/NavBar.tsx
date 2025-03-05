import React from 'react';
import Link from 'next/link';

// NavBar componente
export const NavBar: React.FC = () => {
  return (
    <nav className="sm:fixed sm:z-10 top-0 w-full text-center flex flex-col sm:flex-row gap-2 justify-center p-2 bg-white">
      <Link href="/" passHref>
        <NavItem label="Home" href="/" />
      </Link>
      <Link href="/catalog" passHref>
        <NavItem label="Catalog" href="/catalog" />
      </Link>
      <Link href="/contacts" passHref replace={true}>
        <NavItem label="Contacts" href="/contacts" />
      </Link>
    </nav>
  );
};

// Interfaccia per NavItem
interface NavItemProps {
  label: string;
  href: string;
}

// NavItem componente
const NavItem: React.FC<NavItemProps> = ({ label, href }) => {
  return (
    <div>
      <span className="text-2xl cursor-pointer">{label}</span>
    </div>
  );
};