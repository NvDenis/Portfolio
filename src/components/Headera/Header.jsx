import { useContext, useEffect, useState } from "react";
import "./header.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { IoMenuSharp } from "react-icons/io5";
import Drawer from "../../ui/Drawer";
import ToggleLanguage from "./ToggleLanguage/ToggleLanguage";

const nav = [
  {
    label: "ve_tac_gia",
    href: "#about",
  },
  {
    label: "kinh_nghiem",
    href: "#experience",
  },
  {
    label: "du_an",
    href: "#projects",
  },
  {
    label: "lien_he",
    href: "#contact",
  },
];

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeNav, setActiveNav] = useState("#home");
  const [sticky, setSticky] = useState(false);
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );
  const [toggle, setToggle] = useState(false);
  const [toggleLanguage, setToggleLanguage] = useState(false);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setSticky(window.scrollY > 0);
    });
  }, []);

  return (
    <header className={`header ${sticky && "sticky-header "}`}>
      {sticky && <div className="overlay"></div>}
      <nav className="nav container">
        <div className="flex items-center gap-4">
          <a href="#home" className="nav__logo">
            Duy.dev
          </a>
          <ul className="nav__list hidden lg:flex">
            {nav.map((item, index) => {
              return (
                <li className="nav__item" key={index}>
                  <a
                    href={item.href}
                    onClick={() => setActiveNav(item.href)}
                    className={
                      activeNav === item.href
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                  >
                    {t(item.label)}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="items-center gap-4 hidden lg:flex">
          <div onClick={() => toggleTheme(theme == "light" ? "dark" : "light")}>
            {theme == "light" ? <CiLight /> : <CiDark />}
          </div>
          <ToggleLanguage
            language={language}
            toggleLanguage={toggleLanguage}
            setToggleLanguage={setToggleLanguage}
            setLanguage={setLanguage}
          />
        </div>

        <div onClick={() => setToggle(!toggle)} className="lg:hidden">
          <IoMenuSharp />
        </div>
      </nav>

      <Drawer isOpen={toggle} setIsOpen={setToggle}>
        <ul className="nav__list flex-col items-start pt-10 px-4">
          {nav.map((item, index) => {
            return (
              <li className="nav__item" key={index}>
                <a
                  href={item.href}
                  onClick={() => setActiveNav(item.href)}
                  className={
                    activeNav === item.href
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  {t(item.label)}
                </a>
              </li>
            );
          })}

          <li className="nav__item">
            <div
              onClick={() => toggleTheme(theme == "light" ? "dark" : "light")}
            >
              {theme == "light" ? <CiLight /> : <CiDark />}
            </div>
          </li>

          <li className="nav__item">
            <ToggleLanguage
              language={language}
              toggleLanguage={toggleLanguage}
              setToggleLanguage={setToggleLanguage}
              setLanguage={setLanguage}
            />
          </li>
        </ul>
      </Drawer>
    </header>
  );
};

export default Header;
