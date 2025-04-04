import Button from "../../components/button/Button";
import ProductCard from "../../components/product-card/ProductCard";
import Title from "../../components/title/Title";

const Wishlist = () => {
    const wishlistData: ProductData[] = [
        {
            product_name: "Gucci duffle bag",
            product_image: "",
            price: 960,
            discount: 35,
            discount_price: 1160,
            isNew: false,
            rating: 5,
            view_count: 0,
            colors: []
        },
        {
            product_name: "RGB liquid CPU Cooler",
            product_image: "",
            price: 1960,
            discount: 0,
            discount_price: 0,
            isNew: false,
            rating: 5,
            view_count: 0,
            colors: []
        },
        {
            product_name: "GP11 Shooter USB Gamepad",
            product_image: "",
            price: 550,
            discount: 0,
            discount_price: 0,
            isNew: false,
            rating: 5,
            view_count: 0,
            colors: []
        },
        {
            product_name: "Quilted Satin Jacket",
            product_image: "",
            price: 750,
            discount: 0,
            discount_price: 0,
            isNew: false,
            rating: 5,
            view_count: 0,
            colors: []
        }
    ];

    const justData: ProductData[] = [
        {
            product_name: "ASUS FHD Gaming Laptop",
            product_image: "",
            price: 960,
            discount: 35,
            discount_price: 1160,
            isNew: false,
            rating: 5,
            view_count: 65,
            colors: []
        },
        {
            product_name: "IPS LCD Gaming Monitor",
            product_image: "",
            price: 1160,
            discount: 0,
            discount_price: 0,
            isNew: false,
            rating: 5,
            view_count: 65,
            colors: []
        },
        {
            product_name: "HAVIT HV-G92 Gamepad",
            product_image: "",
            price: 560,
            discount: 0,
            discount_price: 0,
            isNew: true,
            rating: 5,
            view_count: 65,
            colors: []
        },
        {
            product_name: "AK-900 Wired Keyboard",
            product_image: "",
            price: 200,
            discount: 0,
            discount_price: 0,
            isNew: false,
            rating: 5,
            view_count: 65,
            colors: []
        }
    ];

    return (
        <div className='container py-20'>
            <div className='w-full flex items-center justify-between'>
                <div>Wishlist (4)</div>

                <Button title='Move All To Bag' variant='outline' />
            </div>

            <div className='grid grid-cols-4 gap-10 mt-16'>
                {wishlistData.map((item, index) => (
                    <ProductCard key={index} {...item} path='wishlist' />
                ))}
            </div>

            <div className='mt-20'>
                <div className='flex items-center justify-between'>
                    <Title title='Just For You' />
                    <Button title='See All' variant='outline' />
                </div>
                <div className='grid grid-cols-4 gap-10 mt-10'>
                    {justData.map((item, index) => (
                        <ProductCard key={index} {...item} path='just' />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Wishlist;
