function Header() {
    return (
        <header>
            <nav className="light-pink">
                <div className="nav-wrapper container">
                    <a href="#" className="logo">MoviePlus</a>
                    <ul id="nav" className="right">
                        <li><a href="Main.jsx">Search</a></li>
                        <li><a href="#">Logi sisse</a></li>
                        <li><a href="#">Loo konto</a></li>
                    </ul>
                </div>
            </nav>
            <a href="Main.jsx" class="nupp">{" "}⮪{" "}</a>
        </header>
    );
  }
  
  export default Header;