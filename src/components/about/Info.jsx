import assets from "../../assets/img/assets";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";

const experience = [
  {
    date: "thang_1_2023_den_thang_8_2023",
    title: "du_an_tu_lam",
    des: "hoc_kien_thuc_moi_moi_ngay",
  },
  {
    date: "thang_8_2023_den_nay",
    title: "du_an_auto_web_cong_ty_viethas",
    des: "lap_trinh_angular_xay_dung_du_an_autoweb",
  },
];

const Info = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className="about__info w-full ">
      {experience.map((item, index) => {
        return (
          <div className="about__box relative h-auto" key={index}>
            {theme == "dark" && (
              <img
                className="absolute w-full h-auto"
                src={assets.shadowBox}
                alt=""
              />
            )}
            <p className="about__date">{t(item.date)}</p>
            <div className="flex items-center gap-8">
              <svg
                stroke="currentColor"
                fill="#8b5cf6"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="36"
                width="36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"></path>
                <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"></path>
              </svg>
              <div className="">
                <h3 className="about__title">{t(item.title)}</h3>
                <span className="about__subtitle">{t(item.des)}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
