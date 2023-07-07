import Link from 'next/link';
import { Button } from '../ui/button';
import { navLinks } from '@/constants/data';

const Navbar = () => {
  return (
    <div className="h-screen w-1/6 fixed border-r border-neutral-300">
      <div className="py-2 px-4 border-b border-neutral-300">
        <Button
          variant="ghost"
          className="text-2xl lg:text-3xl tracking-tighter font-bold"
        >
          {navLinks.name}
        </Button>
      </div>
      <ul className="flex flex-col items-start justify-center space-y-2 mt-4">
        {navLinks.links.map((link) => (
          <Link href={link.href} key={link.id} className="w-full px-4">
            <Button variant="outline" className="w-full">
              {link.name}
            </Button>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
