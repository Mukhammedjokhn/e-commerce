import Breadcrumb from "../../components/breadcrumb/Breadcrumb";

const Auth = () => {
    const breadcrumb: BreadcrumbPropsType[] = [
        {
            name: "Auth",
            path: "/auth",
        },
    ];

    return (
        <div>
            <Breadcrumb customPaths={breadcrumb} />
        </div>
    );
};
export default Auth;
