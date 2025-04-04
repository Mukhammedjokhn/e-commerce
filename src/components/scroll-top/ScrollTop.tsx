import ChevronButton from "../chevron-button/ChevronButton";

const ScrollTop = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className='container flex items-center justify-end w-full pb-10'>
            <ChevronButton position='up' onClick={scrollToTop} />
        </div>
    );
};

export default ScrollTop;
