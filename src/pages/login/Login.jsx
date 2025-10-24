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
import { MdLogin } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [user, SetUser] = useState({
    email: "",
    password: "",
  });
  const [alertMsg, setAlertMsg] = useState("");
  const navigate = useNavigate();

  const validationOfSignUp = async () => {
    const { email, password } = user;
    const backUser = { email, password };

    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (email.trim() === "" || !emailPattern.test(email)) {
      setAlertMsg("The Email is not valid");
      return;
    }

    if (password.trim() === "" || password.length < 6) {
      setAlertMsg("The Password must be 6 characters or more");
      return;
    }

    try {
      const request = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(backUser),
      });

      const res = await request.json();
      console.log("The user is:", res);

      localStorage.setItem("id", 1);

      navigate("/");
    } catch (err) {
      setAlertMsg("ERROR");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-96">
        <div className="flex justify-center mb-3">
          <MdLogin className="text-6xl text-white bg-black rounded-full p-3" />
        </div>
        <h4 className="text-center mb-3">Welcome Back</h4>
        <p className="text-center mb-3 text-gray-500">
          Sign in to your account to continue shopping
        </p>

        <CardBody className="flex flex-col gap-4">
          {alertMsg && (
            <Alert color="red" className="text-sm font-medium">
              {alertMsg}
            </Alert>
          )}

          <Input
            label="Email"
            size="m"
            className="bg-gray-100"
            onChange={(e) =>
              SetUser({
                ...user,
                email: e.target.value,
              })
            }
          />
          <Input
            label="Password"
            size="m"
            type="password"
            className="bg-gray-100"
            onChange={(e) =>
              SetUser({
                ...user,
                password: e.target.value,
              })
            }
          />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" className="bg-black" />
          </div>
        </CardBody>

        <CardFooter className="pt-0">
          <Button onClick={validationOfSignUp} variant="gradient" fullWidth>
            Sign In
          </Button>

          <Typography
            variant="small"
            className="mt-6 flex justify-center text-gray-500"
          >
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="ml-1 text-black font-medium">
              Sign up
            </Link>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
