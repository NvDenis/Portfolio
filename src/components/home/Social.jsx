const socials = [
  {
    icon: "uil uil-instagram-alt",
    href: "https://www.instagram.com/diinguyenit/",
  },
  {
    icon: "uil uil-facebook",
    href: "https://www.facebook.com/master.duy.520",
  },
  {
    icon: "uil uil-github",
    href: "https://github.com/NvDenis",
  },
];

const Social = () => {
  return (
    <div className="home__social">
      {socials.map((item) => {
        return (
          <a
            key={item.icon}
            href={item.href}
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className={item.icon}></i>
          </a>
        );
      })}
    </div>
  );
};

export default Social;
