import { useState, useEffect } from 'react';
import ProductCard from '../products/components/ProductCard'; 

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

import {
    Typography,
    Button,
    Input,
    Select,
    Option,
    Slider,
} from "@material-tailwind/react";
import { MagnifyingGlassIcon, CubeIcon, WifiIcon } from "@heroicons/react/24/outline";

const categories = ["Footwear", "Fitness", "Strength", "Cycling", "Team Sports", "Swimming", "Racquet Sports", "Outdoor", "Combat Sports", "Skating"];
const brands = ["SportsPro", "YogaPro", "IronFit", "RideSafe", "CourtKing", "AquaVision", "TennisPro", "FlexFit", "GoalMaster", "TrailBlazer", "FightClub", "SkateCity"];

const Loading = () => (
    <div className="flex flex-col items-center justify-center p-12 text-blue-gray-500">
        <CubeIcon className="h-12 w-12 animate-spin mb-4" />
        <Typography variant="h5">Gathering Products...</Typography>
    </div>
);


const localProductMap = [
    {
        imgSrc: runningShoes,
        name: "Lightweight Performance Running Shoes",
        description: "Engineered for speed and comfort, these shoes provide maximum responsiveness for short and long-distance running. Breathable mesh upper with lightweight cushioning."
    },
    {
        imgSrc: yogaMats,
        name: "Non-Slip Premium Yoga Mats (Set of 2)",
        description: "Durable, eco-friendly mats offering superior grip and cushioning. Perfect for yoga, pilates, and floor exercises. Easy to clean and roll up."
    },
    {
        imgSrc: dumbbells,
        name: "Adjustable Cast Iron Dumbbells Set",
        description: "Set of heavy-duty cast iron weights with easy-grip handles. Ideal for strength training, muscle building, and home fitness routines."
    },
    {
        imgSrc: mountainBikeHelmet,
        name: "Professional Safety Mountain Bike Helmet",
        description: "High-impact resistant helmet designed for off-road trails. Features excellent ventilation, an adjustable visor, and a secure fit system."
    },
    {
        imgSrc: basketBall,
        name: "Official Size 7 Leather Basketball",
        description: "Official size and weight basketball made from premium leather. Designed for superior grip and durability for indoor and outdoor play."
    },
    {
        imgSrc: swimmingGoggles,
        name: "Anti-Fog Pro Swimming Goggles",
        description: "Advanced anti-fog and UV protection goggles with a wide-view lens. Comfortable silicone seal and fully adjustable straps for a perfect fit."
    },
    {
        imgSrc: tennisRacket,
        name: "Carbon Fiber Tennis Racket - Power Series",
        description: "Lightweight graphite and carbon construction for explosive power and control. Comes pre-strung with a vibration-dampening grip."
    },
    {
        imgSrc: soccerBall,
        name: "Professional Match Soccer Ball",
        description: "FIFA-approved quality soccer ball with thermal bonded construction for predictable flight and shape retention. Suitable for all weather conditions."
    },
    {
        imgSrc: resistanceBands,
        name: "Heavy Duty Resistance Bands Kit",
        description: "Set of five colored resistance loops offering varied levels of tension for a full-body workout, physical therapy, and stretching."
    },
    {
        imgSrc: campingBackpack,
        name: "50L Waterproof Camping Backpack",
        description: "Large capacity, rugged backpack built for multi-day hikes. Features dedicated compartments, hydration sleeve, and rain cover."
    },
    {
        imgSrc: boxingGloves,
        name: "Training Leather Boxing Gloves",
        description: "Professional-grade sparring and training gloves with triple-layer foam padding. Secure wrist wrap provides excellent support and protection."
    },
    {
        imgSrc: skateBoard,
        name: "Pro Skateboard - Maple Deck",
        description: "Complete 7-ply maple skateboard with high-speed bearings and durable trucks. Perfect for beginners and advanced riders for street and park skating."
    }
];


const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [itemError, setItemError] = useState(null);


    const getProducts = async () => {
        setIsLoading(true);
        setItemError(null);

        try {

            const req = await fetch('https://fakestoreapi.com/products?limit=12'); 
            
            if (!req.ok) {
                throw new Error("Could not retrieve product listings.");
            }

            const res = await req.json();
            
            const mappedProducts = res.map((data, index) => {
                const localData = localProductMap[index] || {};

                return {
                    id: data.id,
                    category: categories[index % categories.length],
                    
              
                    name: localData.name || data.title,
                    description: localData.description || data.description, 

                    price: data.price,
                    oldPrice: data.price * 1.2,
                    discount: `${Math.floor(Math.random() * 10) + 10}%`,
                    rating: data.rating?.rate || 4.0,
                    reviews: data.rating?.count || 150,
                    imgSrc: localData.imgSrc || data.image,
                };
            });

            setProducts(mappedProducts);
        } catch (e) {
            console.error("Fetch error:", e);
            setItemError(e.message || "Network error preventing product display.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    if (itemError) {
        return (
            <div className="flex flex-col items-center justify-center p-12 text-red-600">
                <WifiIcon className="h-12 w-12 mb-4" />
                <Typography variant="h4" className="mb-2 text-center">Data Loading Failure</Typography>
                <Typography variant="paragraph" className="text-center">{itemError}</Typography>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
          
            <div className="mb-8 border-b pb-4">
                <Typography variant="h3" color="blue-gray" className="font-bold">
                    Our Collection
                </Typography>
                <Typography variant="paragraph" color="gray" className="mb-6">
                    Browse the latest items available in our store.
                </Typography>
                
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="relative flex w-full md:w-96">
                        <Input
                            type="text"
                            label="Search for an item..."
                            className="pr-20"
                            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                        />
                    </div>
                    <div className="w-full md:w-48 ml-auto">
                        <Select label="Filter by" defaultValue="Popular">
                            <Option value="Popular">Popular</Option>
                            <Option value="Low Price">Price: Lowest</Option>
                            <Option value="High Price">Price: Highest</Option>
                        </Select>
                    </div>
                </div>
            </div>

   
            <div className="flex flex-col lg:flex-row gap-8">
                
    
                <div className="w-full lg:w-64 p-4 border border-gray-200 rounded-lg shadow-sm lg:sticky lg:top-4 h-fit">
                    <Typography variant="h6" color="blue-gray" className="mb-4 border-b pb-2">
                        Category Refinements
                    </Typography>

                 
                    <div className="mb-6">
                        <Typography variant="h6" color="blue-gray" className="mb-4 text-sm font-medium">Pricing</Typography>
                        <Slider defaultValue={100} min={0} max={200} step={1} color="gray" className="mt-4"/>
                        <div className="flex justify-between mt-2">
                            <Typography variant="small" color="gray" className="font-normal">$0</Typography>
                            <Typography variant="small" color="gray" className="font-normal">$200+</Typography>
                        </div>
                    </div>

                    <Button variant="outlined" size="sm" fullWidth className="mt-4 border-black text-black hover:bg-gray-100">Clear All Filters</Button>
                </div>

                <div className="w-full lg:flex-1">
                    <Typography variant="paragraph" color="blue-gray" className="mb-4 font-normal">
                        Showing **{products.length}** Items
                    </Typography>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Products;

