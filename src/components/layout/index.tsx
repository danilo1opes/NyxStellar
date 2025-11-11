import { ReactNode } from 'react';
import Navbar from '../common/navbar';
import Footer from '../common/footer';
import StarField from '../landing/Starfiled';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <StarField />
      </div>

      <div className="relative z-0">
        <Navbar />
        <main className="container mx-auto px-4">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
