import ChevronButton from "../../../components/chevron-button/ChevronButton";
import Heading from "../../../components/heading/Heading";
import Title from "../../../components/title/Title";

const OurProducts = () => {
    return (
        <div className="mt-20 pb-12 border-b border-[var(--border)]">
            <Title title="Our Products" />
            <div className="flex items-center justify-between mt-5">
                <Heading title="Explore Our Products" />

                <div className="flex items-center gap-2">
                    <ChevronButton position="left" />
                    <ChevronButton position="right" />
                </div>
            </div>
        </div>
    );
};
export default OurProducts;
