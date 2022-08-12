import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <nav className="nav-bar">
      <h1 className="nav-title">Quizards!</h1>
      <div>
        <NavLink to="/">Home |</NavLink>
        <NavLink to="/Register"> Sign up |</NavLink>
        <NavLink to="/Login"> Login</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
