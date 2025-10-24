import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom'; 

import {
    Typography,
    Button,
    Rating,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    IconButton,
} from "@material-tailwind/react";
import { ArrowLeftIcon, CubeIcon, WifiIcon, HeartIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

import runningShoes from '../../assets/images/running_shoes.jpg';
import yogaMats from '../../assets/images/yoga_mats.jpg';
import dumbbells from '../../assets/images/dumbbells.jpg';
import mountainBikeHelmet from '../../assets/images/Mountain Bike Helmet.jpg';
import basketBall from '../../assets/images/Basketball Official Size.jpg';
import swimmingGoggles from '../../assets/images/Swimming Goggles Pro.jpg';
import tennisRacket from '../../assets/images/Tennis Racket.jpg';
import soccerBall from '../../assets/images/Soccer Ball.jpg';
import resistanceBands from '../../assets/images/Resistance Bands Set.jpg';
import campingBackpack from '../../assets/images/Camping Backpack.jpg';
import boxingGloves from '../../assets/images/Boxing Gloves.jpg';
import skateBoard from '../../assets/images/Skateboard.jpg';


const Loading = () => (
    <div className="flex flex-col items-center justify-center p-12 text-blue-gray-500">
        <CubeIcon className="h-12 w-12 animate-spin mb-4" />
        <Typography variant="h5">Fetching Product Data...</Typography>
    </div>
);

const ProductDetails = () => {
    const { stockId } = useParams();
    const location = useLocation(); 
    const [item, setItem] = useState(null);
    const [itemError, setItemError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const localImages = [
        runningShoes, 
        yogaMats,     
        dumbbells,
        mountainBikeHelmet,
        basketBall,
        swimmingGoggles,     
        tennisRacket, 
        soccerBall, 
        resistanceBands,   
        campingBackpack,
        boxingGloves, 
        skateBoard, 
    ];

    const getProductDetails = async () => {
        setIsLoading(true);
        setItemError(null);
        
        const customData = location.state?.productData;

        try {
            const req = await fetch(`https://fakestoreapi.com/products/${stockId}`);
            
            if (!req.ok) {
                throw new Error(`Item ID ${stockId} not found.`);
            }

            const res = await req.json();
            
            let detailedItem = {
                id: res.id,
                category: res.category.charAt(0).toUpperCase() + res.category.slice(1),
                name: res.title, 
                price: res.price,
                oldPrice: (res.price * 1.2).toFixed(2),
                discount: "20%", 
                rating: res.rating?.rate || 4.5, 
                reviews: res.rating?.count || 120, 
                imgSrc: res.image, 
                brand: 'Premium Brands Inc.', 
                description: res.description, 
                features: ["Guaranteed Quality", "Exclusive Material", "Fast Shipping", "30-Day Return"],
            };
         
            if (customData) {
                detailedItem.name = customData.name;
                detailedItem.description = customData.description;
                detailedItem.imgSrc = customData.imgSrc;
            } else {
            
                const imageIndex = parseInt(stockId) - 1;
                detailedItem.imgSrc = localImages[imageIndex] || res.image;
            }
            
            setItem(detailedItem);
        } catch (e) {
            console.error("Fetch error:", e);
            setItemError(e.message || "Failed to load product details due to a network error.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
       
        getProductDetails();
    }, [stockId, location.state]); 

    if (isLoading) {
        return <Loading />;
    }
    
    if (itemError) {
        return (
            <div className="flex flex-col items-center justify-center p-12 text-red-600">
                <WifiIcon className="h-12 w-12 mb-4" />
                <Typography variant="h4" className="mb-2 text-center">Error Loading Item</Typography>
                <Typography variant="paragraph" className="text-center">{itemError}</Typography>
                <Button variant="outlined" className="mt-6" onClick={() => window.history.back()}>Return to List</Button>
            </div>
        );
    }
    
   
    const data = [
        { label: "Full Details", value: "details", content: item.description },
        { label: "Key Features", value: "features", content: <ul className="list-disc list-inside space-y-2">{item.features.map((f, i) => <li key={i} className="flex items-center gap-2"><CheckBadgeIcon className="h-5 w-5 text-green-600"/>{f}</li>)}</ul> },
        { label: "Client Reviews", value: "reviews", content: `Based on the API data, this item has ${item.reviews} total reviews. (Full review list not available)` },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <Button
                variant="text"
                className="flex items-center gap-2 mb-6 capitalize font-normal text-base text-gray-700 hover:text-black"
                onClick={() => window.history.back()} 
            >
                <ArrowLeftIcon className="h-5 w-5" /> Back to Catalog
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
                <div className="relative">
                    <img
                        src={item.imgSrc} 
                        alt={item.name}
                        className="w-full h-auto max-h-[600px] object-contain rounded-lg shadow-xl"
                    />
                    <div className="absolute top-4 right-4 bg-red-600 text-white text-lg font-bold px-3 py-1 rounded-full">
                        -{item.discount} OFF
                    </div>
                </div>

                <div>
                    <Typography variant="small" color="gray" className="uppercase font-semibold">
                        {item.category}
                    </Typography>
                    <Typography variant="h3" color="blue-gray" className="font-bold my-2">
                        {item.name}
                    </Typography>

                    <div className="flex items-center gap-2 mb-4">
                        <Rating value={Math.round(item.rating)} readonly />
                        <Typography variant="small" color="blue-gray" className="font-normal opacity-80">
                            ({item.reviews} Ratings)
                        </Typography>
                    </div>

                    <div className="flex items-end gap-3 mb-6">
                        <Typography variant="h3" color="blue-gray" className="font-bold">
                            ${item.price.toFixed(2)}
                        </Typography>
                        <Typography variant="lead" color="gray" className="font-normal line-through">
                            ${parseFloat(item.oldPrice).toFixed(2)}
                        </Typography>
                    </div>
                    
                    <Typography variant="paragraph" color="gray" className="mb-4">
                        {item.description.substring(0, 150)}
                    </Typography>

                    <Typography variant="small" color="gray" className="mb-6">
                        Manufacturer: <span className="font-bold text-blue-gray">{item.brand}</span>
                    </Typography>

                    
                    <div className="flex gap-4">
                        <Button size="lg" className="bg-black hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] capitalize text-base flex-1">
                            <i className="fas fa-shopping-cart mr-2"></i> Add to Basket
                        </Button>
                        <IconButton variant="outlined" size="lg" className="border-black hover:bg-gray-100">
                            <HeartIcon className="h-6 w-6" />
                        </IconButton>
                    </div>
                </div>
            </div>

          
            <div className="mt-12">
                <Tabs value="details">
                    <TabsHeader
                        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                        indicatorProps={{ className: "bg-transparent border-b-2 border-black shadow-none rounded-none" }}
                    >
                        {data.map(({ label, value }) => (
                            <Tab key={value} value={value} className="w-auto p-4">
                                <Typography color="blue-gray" className="font-medium text-lg capitalize">{label}</Typography>
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody>
                        {data.map(({ value, content }) => (
                            <TabPanel key={value} value={value} className="py-6 px-0">
                                <Typography variant="paragraph" color="gray">{content}</Typography>
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </div>
        </div>
    );
};

export default ProductDetails;