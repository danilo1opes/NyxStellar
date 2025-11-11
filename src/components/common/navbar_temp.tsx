import { leftItems, rightItems } from '../../data/navitems';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCrystalGrowth } from 'react-icons/gi';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import React from 'react';
import NavItem from '../../ui/navitem';

const titleVariant: Variants = {
  smooth: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 0px rgb(255,255,255)',
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

const iconVariant: Variants = {
  hidden: {
    x: -20,
  },
  visible: {
    x: 0,
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

function Navbar() {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleMenu = (): void => {
    setOpen(!open);
  };

  const closeMenu = (): void => {
    setOpen(false);
  };

  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <header>
      {/* Desktop */}
      <nav className="flex justify-between lg:grid lg:grid-cols-3 items-center mt-10 lg:mt-14 px-6">
        <ul className="hidden lg:flex justify-start font-only font-normal text-gray text-base lg:text-lg lg:gap-32">
          {leftItems.map((item) => (
            <li key={item.label}>
              <NavItem {...item} />
            </li>
          ))}
        </ul>

        <motion.h1
          className="font-only lg:flex lg:justify-center font-normal text-snow text-2xl sm:text-3xl 2xl:text-4xl tracking-[0.3rem]"
          variants={titleVariant}
          animate="smooth"
        >
          NyxStellar
        </motion.h1>

        <button
          onClick={toggleMenu}
          className="lg:hidden cursor-pointer text-snow transition-transform hover:scale-110 active:scale-95"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-haspopup="true"
          aria-label={
            open ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
          }
        >
          <motion.button
            variants={iconVariant}
            initial="hidden"
            animate="visible"
          >
            {open ? (
              <GiCrystalBars aria-hidden="true" size={28} />
            ) : (
              <GiCrystalGrowth aria-hidden="true" size={28} />
            )}
          </motion.button>
        </button>

        <ul className="hidden lg:flex justify-end font-only font-normal text-gray text-base lg:text-lg lg:gap-28">
          {rightItems.map((item) => (
            <li key={item.label}>
              <NavItem {...item} />
            </li>
          ))}
        </ul>
      </nav>

      {/* Menu Mobile */}
      <div
        id="menu-mobile"
        className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-50 transition-all duration-300 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      >
        <div
          className={`flex flex-col items-center justify-center h-full transition-transform duration-300 ${
            open ? 'translate-y-0' : '-translate-y-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Botão de fechar */}
          <motion.button
            onClick={closeMenu}
            className="absolute top-10 right-6 text-snow cursor-pointer"
            aria-label="Fechar menu de navegação"
            variants={iconVariant}
            initial="hidden"
            animate="visible"
          >
            <GiCrystalBars aria-hidden="true" size={28} />
          </motion.button>

          {/* Logo no mobile */}
          <h2 className="font-only font-normal text-snow text-2xl tracking-[0.3rem] mb-12">
            NyxStellar
          </h2>

          {/* Itens do menu */}
          <nav className="flex flex-col items-center gap-8">
            <ul className="flex flex-col items-center gap-6">
              {leftItems.map((item) => (
                <li key={item.label} onClick={closeMenu}>
                  <NavItem {...item} />
                </li>
              ))}
            </ul>

            <div className="w-32 h-px bg-gray/30 my-2" />

            <ul className="flex flex-col items-center gap-6">
              {rightItems.map((item) => (
                <li key={item.label} onClick={closeMenu}>
                  <NavItem {...item} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
