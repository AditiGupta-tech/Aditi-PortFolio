import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets"; 

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        ${styles.paddingX}
        w-full flex items-center py-5 fixed top-0 z-50 
        transition-all duration-300
        ${scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md shadow-lg border-b border-pink-500/20" : "bg-transparent"}
      `}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto flex-wrap px-2 sm:px-6'>
        {/* Logo */}
        <Link
          to='/'
          className='flex items-center gap-2 min-w-0'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt='logo'
            className='w-9 h-9 object-contain rounded-full border border-white/10 shadow-md'
          />
          <p className='text-white text-[18px] font-bold cursor-pointer flex glow-text'>
            <span className='sm:block hidden'>Portfolio</span>
          </p>
        </Link>

        {/* Desktop Nav */}
        <ul className='list-none hidden sm:flex flex-row gap-6 sm:gap-8'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`
                px-3 py-1 rounded-full transition-all duration-300 cursor-pointer 
                ${active === nav.title
                  ? "glow-text text-white shadow-md scale-105"
                  : "text-secondary hover:glow-text hover:scale-105"}
              `}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Nav Toggle */}
        <div className='sm:hidden flex flex-1 justify-end items-center relative'>
          <button
            onClick={() => setToggle(!toggle)}
            className='p-1 rounded border border-white/10 shadow-md hover:shadow-pink-500/40 transition'
          >
            {toggle ? (
              <X className='w-7 h-7 text-white' />
            ) : (
              <Menu className='w-7 h-7 text-white' />
            )}
          </button>

          {/* Mobile Dropdown Menu */}
          {toggle && (
            <div
              className={`
                absolute top-14 right-0 w-[200px] bg-[#0d0d0d]/95 backdrop-blur-lg
                border border-pink-500/20 rounded-xl shadow-[0_0_12px_#ec4899]
                py-5 px-6 z-50 animate-fade-in
              `}
            >
              <ul className='list-none flex flex-col gap-4'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`
                      text-[16px] font-medium cursor-pointer transition-all duration-300 rounded-full px-3 py-1
                      ${active === nav.title
                        ? "text-white glow-text bg-pink-500/20 shadow-[0_0_10px_#ec4899]"
                        : "text-secondary hover:text-white hover:glow-text hover:bg-pink-500/10 hover:shadow-[0_0_8px_#ec4899]"}
                    `}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;