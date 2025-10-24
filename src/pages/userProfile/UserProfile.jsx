import {
  Card,
  CardBody,
  Input,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const id = localStorage.getItem("id");

    if (!id) {
      return;
    }

    const logged = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/users/${id}`);
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };

    logged();
  }, []);

  if (!user) {
    return;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        User Profile
      </h1>

      <Card className="w-96 shadow-lg">
        <div className="flex justify-center mt-6">
          <img
            className="h-32 w-32 rounded-full object-cover object-center border-4 border-black"
            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2832&q=80"
            alt="user profile"
          />
        </div>

        <CardBody className="flex flex-col gap-6 mt-4">
          <Input label="Username" value={user.username} readOnly />
          <Input label="Email" value={user.email} readOnly />
          <Input label="Password" value={"******"} readOnly />

          <Button variant="gradient" color="black" fullWidth>
            Edit Profile
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserProfile;
