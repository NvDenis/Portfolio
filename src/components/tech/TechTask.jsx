import "./TechTask.css";
import assets from "../../assets/img/assets";
import { useTranslation } from "react-i18next";

const techs = [
  {
    position: 1,
    img: assets.html,
  },
  {
    position: 2,
    img: assets.css,
  },
  {
    position: 3,
    img: assets.js,
  },
  {
    position: 4,
    img: assets.ts,
  },
  {
    position: 5,
    img: assets.sass,
  },
  {
    position: 6,
    img: assets.tailwind,
  },
  {
    position: 7,
    img: assets.react,
  },
  {
    position: 8,
    img: assets.angular,
  },
  {
    position: 9,
    img: assets.nextjs,
  },
];

export const TechTask = () => {
  const { t } = useTranslation();
  return (
    <div className="techs flex-col lg:flex-row gap-4">
      <p>{t("ki_nang")}</p>

      <div
        className="logos"
        style={{
          "--width": "35px",
          "--height": "60px",
          "--quantity": 9,
        }}
      >
        <ul>
          {techs.map((tech) => (
            <li
              key={tech.position}
              style={{
                "--position": tech.position,
              }}
            >
              <img src={tech.img} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
