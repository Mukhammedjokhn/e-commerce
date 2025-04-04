import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import image from "../../assets/iphone-14-pro.png";
import { X } from "lucide-react";
import Button from "../../components/button/Button";

const Cart = () => {
    return (
        <div className='container py-20'>
            <Breadcrumb breadcrumbLinks={[{ name: "Cart", path: "cart" }]} />

            <div className='mt-20'>
                <div
                    className='w-full grid grid-cols-4 gap-5 items-center py-4 px-10 font-medium rounded h-[70px]'
                    style={{
                        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                    }}
                >
                    <p>Product</p>
                    <p className='text-center'>Price</p>
                    <p className='text-center'>Quantity</p>
                    <p className='text-center'>Subtotal</p>
                </div>

                <div
                    className='w-full grid grid-cols-4 gap-5 items-center h-20 px-10 mt-10 bg-white rounded cursor-pointer'
                    style={{
                        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                    }}
                >
                    <div className='flex items-center gap-4 relative'>
                        <button className='w-4 h-4 rounded-full bg-[var(--red)] absolute -left-1 -top-1 flex items-center justify-center text-[var(--foreground-white)] cursor-pointer'>
                            <X size={13} />
                        </button>
                        <img src={image} alt='' className='w-12 object-cover' />
                        <p>iPhone 14 Pro</p>
                    </div>
                    <p className='text-center'>$650</p>
                    <select className='border-2 border-[var(--border)] py-1 px-3 rounded cursor-pointer outline-none w-20 mx-auto'>
                        {[...Array(9)].map((_, i) => (
                            <option key={i} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                    <p className='text-center'>$650</p>
                </div>

                <div className='flex items-center justify-between mt-10'>
                    <Button title='Return To Shop' variant='outline' />
                    <Button title='Update Cart' variant='outline' />
                </div>

                <div className='flex items-start justify-between mt-20'>
                    <div className='flex items-center gap-2'>
                        <input
                            type='text'
                            placeholder='Coupon Code'
                            className='outline-none border py-2.5 rounded px-6'
                        />
                        <Button title='Apply Coupon' />
                    </div>

                    <div className='min-h-[350px] border w-[500px] rounded p-6'>
                        <h2 className='font-medium text-xl'>Cart Total</h2>
                        <div className='border-b-2 border-[var(--border)] flex items-center justify-between py-4 mt-4'>
                            <p>Subtotal:</p>
                            <p>$650</p>
                        </div>
                        <div className='border-b-2 border-[var(--border)] flex items-center justify-between py-4 mt-4'>
                            <p>Shipping:</p>
                            <p>Free</p>
                        </div>
                        <div className='flex items-center justify-between pt-4 mt-4'>
                            <p>Total:</p>
                            <p>$650</p>
                        </div>

                        <div className='flex items-center justify-center mt-4'>
                            <Button title='Procees to checkout' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
