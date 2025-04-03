import Button from "../../../components/button/Button";
import Heading from "../../../components/heading/Heading";
import Title from "../../../components/title/Title";

const Month = () => {
    return (
        <div className="mt-20 pb-12 border-[var(--border)]">
            <Title title="This Month" />
            <div className="flex items-center justify-between mt-5">
                <Heading title="Best Selling Products" />

                <Button title="View All" />
            </div>
        </div>
    );
};
export default Month;
