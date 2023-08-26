import { Globe } from 'lucide-react';
import { Button } from "@/components/ui/Button";

import Image from 'next/image';
import Link from 'next/link';
import HeaderPopover from './HeaderPopover';
import HeaderDialog from './HeaderDialog';
import HeaderMobileButton from './HeaderMobileButton';

function Header() {

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image src="/mjl-logo_sq.png" alt="logo" width="40" height="40" />
          </Link>
        </div>

        <HeaderMobileButton />
        <HeaderPopover />
       
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Globe />
          <span>EN</span>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
            <Button>Prisijungti</Button>
          </Link>
        </div>
      </nav>
      <HeaderDialog />
    </header>
  )
}

export default Header;
