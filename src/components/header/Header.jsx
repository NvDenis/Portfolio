import dark from "../../assets/img/moon.svg";
import light from "../../assets/img/light.svg";
import en from "../../assets/img/en.svg";
import vi from "../../assets/img/vi.svg";
import { useContext, useEffect, useState } from "react";
import "./header.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { IoMenuSharp } from "react-icons/io5";
import Drawer from "../../ui/Drawer";

const nav = [
  {
    label: "trang_chu",
    href: "#home",
  },
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

const languages = [
  {
    label: "tieng_viet",
    value: "vi",
  },
  {
    label: "tieng_anh",
    value: "en",
  },
];

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeNav, setActiveNav] = useState("#home");
  const [sticky, setSticky] = useState(false);
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "vi"
  );
  const [toggle, setToggle] = useState(false);
  const [toggleLanguage, setToggleLanguage] = useState(false);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setSticky(window.scrollY > 50);
    });
  }, []);

  const changeLanguage = (lang) => {
    console.log("changeLanguage", lang);

    i18n.changeLanguage(lang);
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <header className={`header ${sticky && "sticky-header "}`}>
      <div className="overlay"></div>
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
          <div className="relative">
            <img
              onClick={() => setToggleLanguage(true)}
              className="w-5 h-5 cursor-pointer"
              src={language == "en" ? en : vi}
              alt=""
            />

            {toggleLanguage && (
              <div>
                <div
                  className="fixed inset-0 z-100"
                  onClick={() => setToggleLanguage(false)}
                ></div>
                <div className="absolute z-[100] top-10 right-0 bg-white p-2 shadow-lg rounded-lg">
                  {languages.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => changeLanguage(item.value)}
                        className="flex items-center gap-2 cursor-pointer w-32"
                      >
                        <img
                          className="w-5 h-5 cursor-pointer"
                          src={item.value === "en" ? en : vi}
                          alt=""
                        />
                        <span>{t(item.label)}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        <div onClick={() => setToggle(!toggle)} className="lg:hidden">
          <IoMenuSharp />
        </div>
      </nav>

      <Drawer isOpen={toggle} setIsOpen={setToggle}>
        sdsdsdsdsd
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
      </Drawer>
    </header>
  );
};

export default Header;
