import ChevronButton from "../../../components/chevron-button/ChevronButton";
import Heading from "../../../components/heading/Heading";
import Title from "../../../components/title/Title";

const Today = () => {
    return (
        <div className="mt-20 pb-12 border-b border-[var(--border)]">
            <Title title="Today's" />
            <div className="flex items-center justify-between mt-5">
                <div className="flex items-center gap-10">
                    <Heading title="Flash Sales" />
                    <div></div>
                </div>

                <div className="flex items-center gap-2">
                    <ChevronButton position="left" />
                    <ChevronButton position="right" />
                </div>
            </div>
        </div>
    );
};
export default Today;
