import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="header-nav">
        <img
          src="https://e7.pngegg.com/pngimages/906/122/png-clipart-pokemon-logo-pokemon-logo-thumbnail.png"
          alt="logo"
        />

        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/resistance">Résistance</Link>
          </li>
          <li>
            <Link to="/generations">Générations</Link>
          </li>
          <li>
            <Link to="/by-type">Par type</Link>
          </li>
          <li>
            <Link to="/types">Types</Link>
          </li>
          <li>
            <Link to="/search">Rechercher</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
