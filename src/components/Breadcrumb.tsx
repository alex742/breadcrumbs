import { NavLink } from "react-router";

const Breadcrumb = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink> -&gt; <NavLink to="/news">News</NavLink>
    </div>
  );
};

export default Breadcrumb;
