import logo from "../assets/LOGO.png";
import playsotre from "../assets/playStore.png";
import appStore from "../assets/appStore.png";
function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <div className="download-links">
        <img src={playsotre} alt="" />
        <img src={appStore} alt="" />
      </div>
    </nav>
  );
}
export default Navbar;
