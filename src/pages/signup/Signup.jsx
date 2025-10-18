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
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <Card className="w-96">
          <div className="flex justify-center mb-3">
            <MdOutlinePersonAddAlt className="text-6xl text-white bg-black rounded-full p-3" />
          </div>
          <h4 className="text-center mb-3">Create an Account</h4>
          <p className="text-center mb-3 text-gray-500">Join SportsPro to start shopping for premium equipment</p>
          <CardBody className="flex flex-col gap-4">
            <Input label="Full Name" size="m" className="bg-gray-100" />
            <Input label="Email" size="m" className="bg-gray-100" />
            <Input label="Password" size="m" className="bg-gray-100" />
            <Input label="Confirm Password" size="m" className="bg-gray-100" />
            <div className="-ml-2.5">
              <Checkbox
                label="I agree to the Terms of Privacy Policy"
                className="bg-black"
                labelProps={{
                  className: "text-sm text-gray-700",
                }}
              />
            </div>
          </CardBody>
<CardFooter className="pt-0">
  <Button variant="gradient" fullWidth>
    Create Accout
  </Button>
  <Typography variant="small" className="mt-6 flex justify-center text-gray-500">
    Already have an account? 
   <Link to="/login">Sign in</Link>
  </Typography>
</CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
