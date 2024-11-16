import assets from "../../assets/img/assets";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const experience = [
  {
    date: "Jan 2024 - Present",
    title: "Frontend Web Developer",
    des: "3 Projects",
  },
  {
    date: "Jan 2024 - Present",
    title: "Frontend Web Developer",
    des: "3 Projects",
  },
  {
    date: "Jan 2024 - Present",
    title: "Frontend Web Developer",
    des: "3 Projects",
  },
];

const Info = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="about__info w-full">
      {experience.map((item, index) => {
        return (
          <div className="about__box relative " key={index}>
            {theme == "dark" && (
              <img
                className="absolute w-full h-auto"
                src={assets.shadowBox}
                alt=""
              />
            )}
            <p className="about__date">{item.date}</p>
            <h3 className="about__title">{item.title}</h3>
            <span className="about__subtitle">{item.des}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
