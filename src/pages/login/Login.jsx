import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { MdLogin } from "react-icons/md";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-96">
        <div className="flex justify-center mb-3">
          <MdLogin className="text-6xl text-white bg-black rounded-full p-3" />
        </div>
        <h4 className="text-center mb-3">Welcome Back</h4>
        <p className="text-center mb-3 text-gray-500">Sign in to your account to continue shopping</p>
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" size="m" className="bg-gray-100"/>
          <Input label="Password" size="m" className="bg-gray-100"/>
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" className="bg-black"/>
          </div>
        </CardBody>
       <CardFooter className="pt-0">
  <Button variant="gradient" fullWidth>
    Sign In
  </Button>
  <Typography variant="small" className="mt-6 flex justify-center text-gray-500">
    Don&apos;t have an account?
    <Link to="/signup">Sign up</Link>
  </Typography>
</CardFooter>
      </Card>
    </div>
  );
};

export default Login;
