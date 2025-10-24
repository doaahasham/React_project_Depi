import { useNavigate } from 'react-router-dom'; 
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Rating,
} from "@material-tailwind/react";

const ProductCard = ({ product }) => {
    const { id, category, name, price, oldPrice, discount, rating, reviews, imgSrc } = product;
    const navigate = useNavigate(); 

    const handleViewDetails = () => {
        navigate(`/products/${id}`, { 
            state: { 
                productData: product 
            } 
        });
    };
    
    return (
        <div onClick={handleViewDetails} className="cursor-pointer block"> 
            <Card className="w-full shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-b-none p-0 relative">
                    <img
                        src={imgSrc}
                        alt={name}
                     
                        className="h-64 w-full object-cover rounded-t-lg"
                    />
                    {discount && (
                        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                            -{discount}
                        </div>
                    )}
                </CardHeader>
                <CardBody className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-medium opacity-60 uppercase mb-1">{category}</Typography>
                    
              
                    <Typography variant="h6" color="blue-gray" className="mb-2 line-clamp-2">{name}</Typography>
                    
                    <div className="flex items-center gap-1 mb-2">
                        <Rating value={Math.round(rating)} readonly />
                        <Typography variant="small" color="blue-gray" className="font-normal opacity-80">({reviews})</Typography>
                    </div>
                    <div className="flex items-end gap-2">
                    
                        <Typography variant="h5" color="blue-gray" className="font-bold">${price.toFixed(2)}</Typography>
                        
                      
                        {oldPrice && (
                            <Typography variant="small" color="gray" className="font-normal line-through">
                                ${oldPrice.toFixed(2)}
                            </Typography>
                        )}
                    </div>
                </CardBody>
                <CardFooter className="pt-0 p-4">
                    <Button fullWidth size="lg" className="bg-black hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] capitalize text-base">
                        Add to Basket
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ProductCard;

