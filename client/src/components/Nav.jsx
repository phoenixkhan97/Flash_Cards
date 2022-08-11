import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <nav className="nav-bar">
      <h1>Quizards!</h1>
      <div>
        <NavLink to="/">Home |</NavLink>
        <NavLink to="/library"> Library |</NavLink>
        <NavLink to="/newCard"> Add Card</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
