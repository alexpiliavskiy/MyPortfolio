import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Oleksandr</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>
            Dynamic and motivated Frontend Developer seeking an opportunity to
            apply programming skills and passion for web development in a
            collaborative and innovative environment. I strive to contribute to
            the creation of intuitive and visually appealing user interfaces
            while constantly expanding my technical expertise.
          </p>
        </div>
        <a
          href="link/CV_Пілявскький_Олександр_системний_адміністратор.pdf"
          className="btn"
          download=""
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
