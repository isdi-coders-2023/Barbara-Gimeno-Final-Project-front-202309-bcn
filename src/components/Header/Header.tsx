import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled className="header">
      <div className="header__background-image">
        <h1 className="header__title">Poolisher</h1>
      </div>
    </HeaderStyled>
  );
};
export default Header;
