function Header() {
  return (
    <nav className="navbar glass">
      <div className="nav-container">
        <div className="logo">practice-app</div>
        <ul className="nav-list">
          <li><a className="nav-link" href="#">Home</a></li>
          <li><a className="nav-link" href="#">About</a></li>
          <li><a className="nav-link" href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;