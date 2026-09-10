import '../App.css';

function Header() {
  return (
    <header className="app-header">
      <div className="brand-mark" aria-hidden="true">◎</div>
      <div>
        <p className="eyebrow">PERSONAL SPACE</p>
        <h1>Small steps,<br /><em>real progress.</em></h1>
      </div>
      <div className="header-note">Keep today<br />intentional.</div>
    </header>
  );
}

export default Header;