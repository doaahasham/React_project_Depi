import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
  Alert,
} from "@material-tailwind/react";
import { useState } from "react";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, SetUser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [alertMsg, setAlertMsg] = useState("");
  const navigate = useNavigate();

  const validationOfSignUp = async () => {
    const { userName: username, email, password, confirmPassword: confirmpassword } = user;
    const backUser = { username, email, password, confirmpassword };

    if (username.trim() === "" || username.length < 3) {
      setAlertMsg("The Username Is Valid");
      return;
    }


    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (email.trim() === "" || !emailPattern.test(email)) {
      setAlertMsg("The Email Is Valid");
      return;
    }

    if (password.trim() === "" || password.length < 6) {
      setAlertMsg("The Password Is Valid");
      return;
    }

    if (confirmpassword.trim() !== password.trim()) {
      setAlertMsg("The Passwords Is Not Match");
      return;
    }

    try {
      const request = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(backUser),
      });

      const res = await request.json();
      console.log("The user is : ", res);

      navigate("/login");
    } catch (err) {
      setAlertMsg("ERROR");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-96">
        <div className="flex justify-center mb-3">
          <MdOutlinePersonAddAlt className="text-6xl text-white bg-black rounded-full p-3" />
        </div>
        <h4 className="text-center mb-3">Create an Account</h4>
        <p className="text-center mb-3 text-gray-500">
          Join SportsPro to start shopping for premium equipment
        </p>

        <CardBody className="flex flex-col gap-4">
          {alertMsg && (
            <Alert color="red" className="text-sm font-medium">
              {alertMsg}
            </Alert>
          )}

          <Input
            label="Full Name"
            size="m"
            className="bg-gray-100"
            onChange={(e) => {
              SetUser({
                ...user,
                userName: e.target.value,

              })
              setAlertMsg("");
            }
            }
          />
          <Input
            label="Email"
            size="m"
            className="bg-gray-100"
            onChange={(e) => {
              SetUser({
                ...user,
                email: e.target.value,
              })
              setAlertMsg("");

            }
            }
          />
          <Input
            label="Password"
            size="m"
            type="password"
            className="bg-gray-100"
            onChange={(e) => {
              SetUser({
                ...user,
                password: e.target.value,
              })
              setAlertMsg("");

            }
            }
          />
          <Input
            label="Confirm Password"
            size="m"
            type="password"
            className="bg-gray-100"
            onChange={(e) => {
              SetUser({
                ...user,
                confirmPassword: e.target.value,
              })
              setAlertMsg("");

            }
            }
          />

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
          <Button onClick={validationOfSignUp} variant="gradient" fullWidth>
            Create Account
          </Button>
          <Typography
            variant="small"
            className="mt-6 flex justify-center text-gray-500"
          >
            Already have an account?{" "}
            <Link to="/login" className="ml-1 text-black font-medium">
              Sign in
            </Link>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
