import Button from "../../../components/button/Button";
import ChevronButton from "../../../components/chevron-button/ChevronButton";
import Countdown from "../../../components/countdown/Countdown";
import Heading from "../../../components/heading/Heading";
import ProductCard from "../../../components/product-card/ProductCard";
import Title from "../../../components/title/Title";

const Today = () => {
    const todayData: ProductData[] = [
        {
            product_image: "",
            product_name: "HAVIT HV-G92 Gamepad",
            price: 120,
            discount_price: 160,
            rating: 5,
            isNew: false,
            discount: 40,
            view_count: 88,
            colors: []
        },
        {
            product_image: "",
            product_name: "AK-900 Wired Keyboard",
            price: 960,
            discount_price: 1160,
            rating: 5,
            isNew: false,
            discount: 35,
            view_count: 75,
            colors: []
        },
        {
            product_image: "",
            product_name: "IPS LCD Gaming Monitor",
            price: 370,
            discount_price: 400,
            rating: 5,
            isNew: false,
            discount: 30,
            view_count: 99,
            colors: []
        },
        {
            product_image: "",
            product_name: "S-Series Comfort Chair ",
            price: 375,
            discount_price: 400,
            rating: 5,
            isNew: false,
            discount: 25,
            view_count: 99,
            colors: []
        }
    ];
    return (
        <div className='mt-20 pb-16 border-b border-[var(--border)]'>
            <Title title="Today's" />
            <div className='flex items-center justify-between mt-5'>
                <div className='flex items-end gap-40'>
                    <Heading title='Flash Sales' />
                    <Countdown
                        hours={95}
                        minutes={19}
                        seconds={56}
                        isBanner={false}
                    />
                </div>

                <div className='flex items-center gap-2'>
                    <ChevronButton position='left' />
                    <ChevronButton position='right' />
                </div>
            </div>

            <div className='grid grid-cols-4 gap-10 mt-10'>
                {todayData.map((item, index) => (
                    <ProductCard key={index} {...item} path='home' />
                ))}
            </div>

            <div className='flex items-center justify-center mt-14'>
                <Button title='View All Products' />
            </div>
        </div>
    );
};
export default Today;
