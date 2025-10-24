import React, { useState } from 'react';

const Truck = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path d="M14 18h2c1.4 0 2.5-1.1 2.5-2.5V11h-4.5V7"/><path d="M22 17.5v-2c0-1.4-1.1-2.5-2.5-2.5H16"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>
);

const CreditCard = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
);

const ShoppingBag = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
);

const Calendar = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);

const Lock = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);

const Input = ({ label, placeholder, type = 'text', className = '', Icon, value, onChange }) => (
    <div className="relative w-full">
        {Icon && <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />}
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ${className}`}
        />
        <label className="absolute left-3 -top-3.5 bg-white px-1 text-xs font-semibold text-gray-500 pointer-events-none transition-all duration-150 transform scale-90 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:scale-90 peer-focus:text-indigo-600">{label}</label>
    </div>
);

const Select = ({ label, options, className = '', value, onChange }) => (
    <div className="relative w-full">
        <select
            value={value}
            onChange={onChange}
            className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white transition duration-150 ${className}`}
        >

            <option value="" disabled>{label}</option>
            {options.map(option => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
        <label className="absolute left-3 -top-3.5 bg-white px-1 text-xs font-semibold text-gray-500 pointer-events-none transition-all duration-150 transform scale-90 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:scale-90 peer-focus:text-indigo-600">
            {label}
        </label>
        <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
    </div>
);

const RadioButton = ({ id, name, label, checked, onChange, Icon }) => (
    <label htmlFor={id} className={`flex items-center p-4 border rounded-xl cursor-pointer transition duration-200 ${checked ? 'border-indigo-600 bg-indigo-50 shadow-md' : 'border-gray-300 bg-white hover:border-indigo-400'}`}>
        <input
            type="radio"
            id={id}
            name={name}
            checked={checked}
            onChange={onChange}
            className="hidden"
        />
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 transition duration-150 ${checked ? 'border-indigo-600 bg-indigo-600' : 'border-gray-400'}`}>
            {checked && <div className="w-2 h-2 rounded-full bg-white"></div>}
        </div>
        {Icon && <Icon className="w-5 h-5 text-gray-600 mr-3" />}
        <span className="text-sm font-medium text-gray-700">{label}</span>
    </label>
);


const initialFormData = {
    fullName: '',
    address: '',
    city: '',
    state: '', 
    zip: '',
    country: '', 
   
    paymentMethod: 'creditCard', 
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
};

const App = () => {
    const [formData, setFormData] = useState(initialFormData);

    const MOCK_SHIPPING_COST = 0.00; 
    const TAX_RATE = 0.07;

    const mockCart = [];

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handlePaymentChange = (e) => {
        setFormData(prev => ({ ...prev, paymentMethod: e.target.id }));
    };


    const subtotal = mockCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shippingCost = subtotal > 0 ? MOCK_SHIPPING_COST : 0.00; 
    const tax = subtotal * TAX_RATE;
    const total = subtotal + shippingCost + tax;

    const formatCurrency = (amount) => `$${amount.toFixed(2)}`;
    
    
    const placeholders = {
        fullName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        cardNumber: '', 
        cardName: '', 
        expiryDate: '', 
        cvv: '', 
    };


    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">Checkout</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                            <div className="flex items-center space-x-3 mb-6 border-b pb-3">
                                <Truck className="w-6 h-6 text-indigo-600" />
                                <h2 className="text-xl font-semibold text-gray-800">Shipping Information</h2>
                            </div>

                            <form className="space-y-4">
                                <Input label="Full Name" placeholder={placeholders.fullName} id="fullName" value={formData.fullName} onChange={handleInputChange} />
                                <Input label="Street Address" placeholder={placeholders.address} id="address" value={formData.address} onChange={handleInputChange} />
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <Input label="City" placeholder={placeholders.city} id="city" value={formData.city} onChange={handleInputChange} />
                                    
                                    <Input 
                                        label="State/Province" 
                                        placeholder={placeholders.state} 
                                        id="state" 
                                        value={formData.state} 
                                        onChange={handleInputChange} 
                                    />
                                    
                                    <Input label="ZIP/Postal Code" placeholder={placeholders.zip} id="zip" value={formData.zip} onChange={handleInputChange} />
                                </div>
                                
                            
                                <Input 
                                    label="Country" 
                                    placeholder={placeholders.country} 
                                    id="country" 
                                    value={formData.country} 
                                    onChange={handleInputChange} 
                                />
                            </form>
                        </div>
                        
                
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                            <div className="flex items-center space-x-3 mb-6 border-b pb-3">
                                <CreditCard className="w-6 h-6 text-indigo-600" />
                                <h2 className="text-xl font-semibold text-gray-800">Payment Method</h2>
                            </div>

                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <RadioButton 
                                    id="creditCard" 
                                    name="payment" 
                                    label="Credit Card" 
                                    checked={formData.paymentMethod === 'creditCard'} 
                                    onChange={handlePaymentChange}
                                    Icon={CreditCard}
                                />
                                <RadioButton 
                                    id="paypal" 
                                    name="payment" 
                                    label="PayPal" 
                                    checked={formData.paymentMethod === 'paypal'} 
                                    onChange={handlePaymentChange}
                                    Icon={Lock}
                                />
                            </div>

                            {formData.paymentMethod === 'creditCard' && (
                                <form className="space-y-4">
                                    <Input label="Card Number" placeholder={placeholders.cardNumber} id="cardNumber" value={formData.cardNumber} onChange={handleInputChange} type="tel" Icon={CreditCard} />
                                    <Input label="Name on Card" placeholder={placeholders.cardName} id="cardName" value={formData.cardName} onChange={handleInputChange} />
                                    
                                    <div className="grid grid-cols-2 gap-4">
                                        <Input label="Expiration Date (MM/YY)" placeholder={placeholders.expiryDate} id="expiryDate" value={formData.expiryDate} onChange={handleInputChange} Icon={Calendar} />
                                        <Input label="CVV" placeholder={placeholders.cvv} id="cvv" value={formData.cvv} onChange={handleInputChange} type="password" Icon={Lock} className="pl-8" /> 
                                    </div>
                                </form>
                            )}
                        </div>

                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-4 bg-white p-6 rounded-xl shadow-2xl border border-indigo-200">
                            <div className="flex items-center space-x-3 mb-6 border-b pb-3">
                                <ShoppingBag className="w-6 h-6 text-indigo-600" />
                                <h2 className="text-xl font-semibold text-gray-800">Order Summary</h2>
                            </div>

                            <div className="space-y-4 mb-6 max-h-48 overflow-y-auto">
                                {mockCart.length > 0 ? (
                                    mockCart.map(item => (
                                        <div key={item.id} className="flex justify-between items-center text-sm text-gray-600">
                                            <span>{item.name} (x{item.quantity})</span>
                                            <span className="font-medium text-gray-800">{formatCurrency(item.price * item.quantity)}</span>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-4 text-gray-400 italic">Your cart is empty.</div>
                                )}
                            </div>
                            

                            <div className="space-y-2 border-t pt-4">
                                <div className="flex justify-between text-gray-600 text-sm">
                                    <span>Subtotal</span>
                                    <span>{formatCurrency(subtotal)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600 text-sm">
                                    <span>Shipping</span>

                                    <span>{subtotal > 0 ? formatCurrency(shippingCost) : "FREE"}</span> 
                                </div>
                                <div className="flex justify-between text-gray-600 text-sm">
                                    <span>Tax ({TAX_RATE * 100}%)</span>
                                    <span>{formatCurrency(tax)}</span>
                                </div>
                            </div>
                            
                            <div className="flex justify-between items-center border-t border-dashed pt-4 mt-4">
                                <span className="text-lg font-bold text-gray-900">Order Total</span>
                                <span className="text-2xl font-extrabold text-indigo-600">{formatCurrency(total)}</span>
                            </div>

                            <button className="mt-6 w-full py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-200 transform hover:scale-[1.01]">
                                Place Order ({formatCurrency(total)})
                            </button>
                            <p className="mt-3 text-xs text-gray-400 text-center flex items-center justify-center space-x-1">
                                <Lock className="w-3 h-3"/>
                                <span>Secure payment processed via SSL.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
