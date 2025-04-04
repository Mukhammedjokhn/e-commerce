import Button from "../../../components/button/Button";
import Heading from "../../../components/heading/Heading";
import ProductCard from "../../../components/product-card/ProductCard";
import Title from "../../../components/title/Title";

const Month = () => {
    const monthData: ProductData[] = [
        {
            product_image: "",
            product_name: "The north coat",
            price: 260,
            discount_price: 360,
            rating: 5,
            isNew: false,
            discount: 0,
            view_count: 65,
            colors: []
        },
        {
            product_image: "",
            product_name: "Gucci duffle bag",
            price: 960,
            discount_price: 1160,
            rating: 5,
            isNew: false,
            discount: 0,
            view_count: 65,
            colors: []
        },
        {
            product_image: "",
            product_name: "RGB liquid CPU Cooler",
            price: 160,
            discount_price: 170,
            rating: 5,
            isNew: false,
            discount: 0,
            view_count: 65,
            colors: []
        },
        {
            product_image: "",
            product_name: "Small BookSelf",
            price: 360,
            discount_price: 0,
            rating: 5,
            isNew: false,
            discount: 0,
            view_count: 65,
            colors: []
        }
    ];

    return (
        <div className='border-[var(--border)]'>
            <Title title='This Month' />
            <div className='flex items-center justify-between mt-5'>
                <Heading title='Best Selling Products' />

                <Button title='View All' />
            </div>

            <div className='grid grid-cols-4 gap-10 mt-10'>
                {monthData.map((item, index) => (
                    <ProductCard key={index} {...item} path='home' />
                ))}
            </div>
        </div>
    );
};
export default Month;
