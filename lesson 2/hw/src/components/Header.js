import logo from "../imgs/logo.png";
import "../style/Header.css"

const Header = () => {
  return (
    <header id="main">
      <img src={logo} alt="logo" />
      <div className="p-div">
        <a href="https://scsa.ge/en/about-us/"className="anchor">ჩვენს შესახებ</a>
        <a className="anchor">სასწავლო ცენტრი</a>
        <a className="anchor">სამეცნიერო მიმართულება</a>
        <a href="https://scsa.ge/en/services/" className="anchor">ჩვენი მომსახურეობა</a>
        <a href="https://scsa.ge/en/contact-us/" className="anchor">კონტაქტი</a>
      </div>
      <button><a href="https://scsa.ge/en/become-member/" className="anchor">გახდით წევრი</a></button>
    </header>
  );
};

export default Header;
