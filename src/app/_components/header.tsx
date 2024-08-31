export function Header(){
    return (
      <header className="bg-black text-white px-8 py-4 rounded-es-3xl rounded-ee-3xl flex justify-between items-center">
        <div className="flex items-center">
          <span className="material-symbols-outlined">rocket_launch</span>
        </div>
        <div>
          <a className="menu" href="#">
            Home
          </a>
          <a className="menu" href="#">
            About
          </a>
          <a className="menu" href="#">
            Contact us
          </a>
          <a className="menu" href="#">
            Team
          </a>
        </div>
      </header>
    );
}

