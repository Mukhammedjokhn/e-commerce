const Button = ({
    title,
    className,
}: {
    title: string;
    className?: string;
}) => {
    return (
        <button
            className={`bg-[var(--button)] text-[var(--foreground-white)] text-sm px-10 py-3.5 rounded-sm ${className} select-none hover:bg-[var(--button-hover)] duration-150 cursor-pointer`}
        >
            {title}
        </button>
    );
};
export default Button;
