import { NavLink } from "react-router-dom";

type BreadcrumbProps = {
    breadcrumbLinks: BreadcrumbPropsType[];
};

const Breadcrumb = ({ breadcrumbLinks }: BreadcrumbProps) => {
    const breadcrumbs = breadcrumbLinks as BreadcrumbPropsType[];

    return (
        <nav className='text-sm'>
            <ul className='flex items-center gap-2'>
                <li>
                    <NavLink to='/' className='text-[var(--foreground-grey)]'>
                        Home
                    </NavLink>
                </li>
                {breadcrumbs.map((crumb, index) => (
                    <li key={index} className='flex items-center gap-2'>
                        <span>/</span>
                        {crumb.name}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Breadcrumb;
