declare type NavbarLinksType = {
    title: string;
    path: string;
};

declare type NavbarLinksProps = {
    links: NavbarLinksType[];
};

declare type BreadcrumbPropsType = {
    name: string;
    path: string;
};

declare type BannerCategories = {
    title: string;
    icon: boolean;
};

declare type CartData = {
    product_name: string;
    product_image: string;
    price: number;
    quantity: number;
    subtotal: number;
};

declare type ColorType = {
    color: string;
    selected: boolean;
};

declare type ProductData = {
    product_name: string;
    product_image: string;
    discount: number;
    price: number;
    discount_price: number;
    isNew: boolean;
    rating: number;
    view_count: number;
    colors: ColorType[] | [];
};

declare type CardProps = {
    path: "home" | "wishlist" | "just" | "color";
};
