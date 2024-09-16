export default function Header() {
    return (
      <header className="header">
        <div className="container">
          <div className="navbar">
            <a href="#" className="logo">
             <img src="https://openyourplan.com/images/toggle_font_logo.svg" alt="토글" />
            </a>
            <nav className="nav-links">
              <a href="#company" className="nav-link">회사소개</a>
              <a href="https://toggle.ly/" target="_blank" className="nav-button">토글로 보험 가입하기</a>
            </nav>
          </div>
        </div>
      </header>
    );
  }