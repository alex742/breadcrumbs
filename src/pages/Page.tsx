import { NavLink, useLocation } from "react-router";
import Breadcrumb from "../components/Breadcrumb";

const Page = () => {
  const location = useLocation();
  return (
    <div>
      <Breadcrumb />
      <h3>Current page: {location.pathname}</h3>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/news">News</NavLink>
        </li>
        <ul>
          <li>
            <NavLink to="/news/UK">UK</NavLink>
          </li>
          <ul>
            <li>
              <NavLink to="/news/articles/article_1">
                Article 1 (London)
              </NavLink>
            </li>
            <li>
              <NavLink to="/news/articles/article_2">
                Article 2 (Manchester)
              </NavLink>
            </li>
          </ul>
          <li>
            <NavLink to="/news/world">World</NavLink>
          </li>
          <ul>
            <li>
              <NavLink to="/news/articles/article_2">
                Article 2 (Manchester)
              </NavLink>
            </li>
            <li>
              <NavLink to="/news/articles/article_3">Article 3</NavLink>
            </li>
          </ul>
          <li>
            <NavLink to="/news/local_news/regions">Local news</NavLink>
          </li>
          <ul>
            <li>
              <NavLink to="/news/local_news/london">London</NavLink>
            </li>
            <ul>
              <li>
                <NavLink to="/news/articles/article_1">
                  Article 1 (London)
                </NavLink>
              </li>
            </ul>
            <li>
              <NavLink to="/news/local_news/manchester">Manchester</NavLink>
            </li>
            <ul>
              <li>
                <NavLink to="/news/articles/article_2">
                  Article 2 (Manchester)
                </NavLink>
              </li>
            </ul>
          </ul>
        </ul>
        <li>
          <NavLink to="/sport">Sport</NavLink>
        </li>
        <li>
          <NavLink to="/weather">Weather</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Page;
