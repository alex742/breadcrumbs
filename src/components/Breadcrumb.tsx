import { NavLink } from "react-router";

export interface IBreadcrumb {
  text: string;
  link: string;
}
interface BreadcrumbProps {
  breadcrumbs?: IBreadcrumb[];
}

const Breadcrumb = ({ breadcrumbs }: BreadcrumbProps) => {
  return (
    <div>
      {breadcrumbs?.map((bc, i, arr) => (
        <span key={i}>
          <NavLink to={bc.link}>{bc.text}</NavLink>{" "}
          {i !== arr.length - 1 && "->"}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
