import { Link } from "react-router-dom";
import fireLogo from "./icons/logo.png";
const Logo = () => {
  return (
    <section className="logo_section " aria-hidden="true">
      <Link to="Cinema/" style={{height: "auto",display: "flex"}} >
        <img src={fireLogo} alt=""></img>
        <h1 className="logo_main">JW - Just Watch It</h1>
      </Link>
      
    </section>
  );
};
export default Logo;
