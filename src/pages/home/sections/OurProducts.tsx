import Button from "../../../components/button/Button";
import ChevronButton from "../../../components/chevron-button/ChevronButton";
import Heading from "../../../components/heading/Heading";
import ProductCard from "../../../components/product-card/ProductCard";
import Title from "../../../components/title/Title";

const OurProducts = () => {
    const ourProductData: ProductData[] = [
        {
            product_image: "",
            product_name: "Breed Dry Dog Food",
            price: 100,
            discount_price: 0,
            discount: 0,
            isNew: false,
            rating: 3,
            view_count: 35,
            colors: []
        },
        {
            product_image: "",
            product_name: "CANON EOS DSLR Camera",
            price: 360,
            discount_price: 0,
            discount: 0,
            isNew: false,
            rating: 4,
            view_count: 95,
            colors: []
        },
        {
            product_image: "",
            product_name: "ASUS FHD Gaming Laptop",
            price: 700,
            discount_price: 0,
            discount: 0,
            isNew: false,
            rating: 5,
            view_count: 325,
            colors: []
        },
        {
            product_image: "",
            product_name: "Curology Product Set",
            price: 500,
            discount_price: 0,
            discount: 0,
            isNew: false,
            rating: 4,
            view_count: 145,
            colors: []
        },
        {
            product_image: "",
            product_name: "Kids Electric Car",
            price: 960,
            discount_price: 0,
            discount: 0,
            isNew: false,
            rating: 5,
            view_count: 65,
            colors: [
                { color: "red", selected: true },
                { color: "brown", selected: false }
            ]
        },
        {
            product_image: "",
            product_name: "Jr. Zoom Soccer Cleats",
            price: 1160,
            discount_price: 0,
            discount: 0,
            isNew: false,
            rating: 5,
            view_count: 35,
            colors: [
                { color: "yellow", selected: true },
                { color: "brown", selected: false }
            ]
        },
        {
            product_image: "",
            product_name: "GP11 Shooter USB Gamepad",
            price: 660,
            discount_price: 0,
            discount: 0,
            isNew: false,
            rating: 4.5,
            view_count: 55,
            colors: [
                { color: "black", selected: true },
                { color: "brown", selected: false }
            ]
        },
        {
            product_image: "",
            product_name: "Quilted Satin Jacket",
            price: 660,
            discount_price: 0,
            discount: 0,
            isNew: false,
            rating: 4.5,
            view_count: 55,
            colors: [
                { color: "teal", selected: true },
                { color: "brown", selected: false }
            ]
        }
    ];
    return (
        <div className='pb-12'>
            <Title title='Our Products' />
            <div className='flex items-center justify-between mt-5'>
                <Heading title='Explore Our Products' />

                <div className='flex items-center gap-2'>
                    <ChevronButton position='left' />
                    <ChevronButton position='right' />
                </div>
            </div>

            <div className='grid grid-cols-4 gap-10 mt-10'>
                {ourProductData.map((item, index) => (
                    <ProductCard key={index} {...item} path='color' />
                ))}
            </div>

            <div className='flex items-center justify-center mt-14'>
                <Button title='View All Products' />
            </div>
        </div>
    );
};
export default OurProducts;
