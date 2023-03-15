import Logo from "./Logo";
import "./SearchBar.css";
import SearchBar from "./SearchBar";
import Menu from "./Menu";

const Header = (props) => {
  return (
    <header>
      <Logo width="40" dark={props.dark} />
      <SearchBar />
      <Menu {...props} />
    </header>
  );
};

export default Header;
