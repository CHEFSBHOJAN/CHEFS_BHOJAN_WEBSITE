import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 px-4">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-xl font-semibold">Contact Information</h2>
                        <p className="mt-2">Phone: 9923388852</p>
                        <p>Email: chefsbhojan@gmail.com</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">Our Outlets</h2>
                        <div className="mt-2">
                            <h3 className="font-medium">Ponda Outlet</h3>
                            <p>Address: Chef's Bhojan, opp. Shri Sakhliyo Khotadevchar, near Sarthak Nest, Nagzar, Curti, Goa 403401</p>
                        </div>
                        <div className="mt-2">
                            <h3 className="font-medium">Dhavali Outlet</h3>
                            <p>Address: Ponda margoa road, Dhavali ponda goa, 403401</p>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-xl font-semibold">Timings</h2>
                            <div className="mt-2 border-b-2 border-white">
                                <h3 className="font-medium">Monday</h3>
                                <p className=' text-sm font-thin'>11:30 AM - 3:00 PM | 6:00 PM - 11:00 PM</p>
                            </div>
                            <div className="mt-2 border-b-2 border-white">
                                <h3 className="font-medium">Tuesday</h3>
                                <p className=' text-sm font-thin'>11:30 AM - 3:00 PM | 6:00 PM - 11:00 PM</p>
                            </div>
                            <div className="mt-2 border-b-2 border-white">
                                <h3 className="font-medium">Wednesday</h3>
                                <p className=' text-sm font-thin'>11:30 AM - 3:00 PM | 6:00 PM - 11:00 PM</p>
                            </div>
                            <div className="mt-2 border-b-2 border-white">
                                <h3 className="font-medium">Thursday</h3>
                                <p className=' text-sm font-thin'>11:30 AM - 3:00 PM | 6:00 PM - 11:00 PM</p>
                            </div>
                            <div className="mt-2 border-b-2 border-white">
                                <h3 className="font-medium">Friday</h3>
                                <p className=' text-sm font-thin'>11:30 AM - 3:00 PM | 6:00 PM - 11:00 PM</p>
                            </div>
                            <div className="mt-2 border-b-2 border-white">
                                <h3 className="font-medium">Saturday</h3>
                                <p className=' text-sm font-thin'>11:30 AM - 3:00 PM | 6:00 PM - 11:00 PM</p>
                            </div>
                            <div className="mt-2 border-b-2 border-white">
                                <h3 className="font-medium">Sunday</h3>
                                <p className=' text-sm font-thin'>11:30 AM - 3:00 PM | 6:00 PM - 11:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">Terms and Conditions</h2>
                        <div className="mt-2">
                            <h3 className="font-medium">Payment</h3>
                            <p className=' text-sm font-thin'>All payments must be made at the time of ordering or on time of Delivery as choosed when placing the orders.Payments made through Razorpay are subject to verification and acceptance. The total amount charged includes applicable taxes and fees. You will receive a confirmation email upon successful payment.</p>
                        </div>
                        <div className="mt-2">
                            <h3 className="font-medium">Delivery</h3>
                            <p className=' text-sm font-thin'>Delivery times are estimates and may vary.</p>
                        </div>
                        <div className="mt-2">
                            <h3 className="font-medium">Refunds</h3>
                            <p className=' text-sm font-thin'>Refunds are processed within 7 days of cancellation.Refunds and cancellations are governed by our Cancellation and Refund Policy. Refunds, if applicable, are processed through Razorpay and credited back to the original payment method.</p>
                        </div>
                        <div className="mt-2">
                            <h3 className="font-medium">Security</h3>
                            <p className=' text-sm font-thin'>We prioritize the security of your personal and financial information. All payment details are securely handled by Razorpay, and we do not store your payment information on our servers.</p>
                        </div>
                        <div className="mt-2">
                            <h3 className="font-medium">Limitation of Liability</h3>
                            <p className=' text-sm font-thin'>Chef’s Bhojan is not liable for any losses or damages resulting from the use of Razorpay’s services. For payment-related issues, please contact Razorpay’s customer support.</p>
                        </div>
                        <div className="mt-2">
                            <h3 className="font-medium">Changes to the Terms</h3>
                            <p className=' text-sm font-thin'>We reserve the right to modify these terms and conditions at any time without prior notice. Updated terms will be posted on our website, and it is your responsibility to review them periodically.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-8 relative flex space-x-2">
                <p className='absolute left-1 text-xs font-thin' >&copy; 2024 Chefs Bhojan.All rights reserved.</p>
                <p className='absolute right-1 text-right text-xs font-thin'> Developed by ClickBatemedia</p>
            </div>
            <div className='h-[90px] w-full'>

            </div>
        </footer>
    );
}

export default Footer;
