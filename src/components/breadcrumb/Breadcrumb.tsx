import { NavLink } from "react-router-dom";

type BreadcrumbProps = {
    customPaths: BreadcrumbPropsType[];
};

const Breadcrumb = ({ customPaths }: BreadcrumbProps) => {
    const breadcrumbs = customPaths as BreadcrumbPropsType[];

    return (
        <nav className="text-sm">
            <ul className="flex items-center gap-2">
                <li>
                    <NavLink to="/" className="text-[var(--foreground-grey)]">
                        Home
                    </NavLink>
                </li>
                {breadcrumbs.map((crumb, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <span>/</span>
                        <NavLink to={crumb.path}>{crumb.name}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Breadcrumb;
