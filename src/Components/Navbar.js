import "./style/Navbar.css";
import BurgerMenu from "./logic/burger-menu";
import Logo from "./Logo";
import Search from "./logic/search-logic";
import Settings from "./logic/settings-logic";

const Navbar = () => {
  return (
    <section className="Navbar">
      <BurgerMenu/>
      <Logo/>
      <Search/>
      <Settings/>
    </section>
  );
};
export default Navbar;
