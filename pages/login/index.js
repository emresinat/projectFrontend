import Form from "../../components/Form";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.push("/");
      } else {
        setLoading(false);
      }
    });
  });

  if(loading){
    return <p>Loading...</p>
  }
  return <Form />;
};

export default Login;
