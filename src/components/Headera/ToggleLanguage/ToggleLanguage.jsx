import { useTranslation } from "react-i18next";
import en from "../../../assets/img/en.svg";
import vi from "../../../assets/img/vi.svg";
import "./toggleLanguage.css";

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

const ToggleLanguage = ({
  language,
  setLanguage,
  toggleLanguage,
  setToggleLanguage,
}) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    console.log("changeLanguage", lang);

    i18n.changeLanguage(lang);
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };
  return (
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
          <div className="absolute z-[100] top-10 lg:right-0 popup p-2 shadow-lg rounded-lg">
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
  );
};
export default ToggleLanguage;
