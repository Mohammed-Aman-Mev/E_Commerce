import axios from "axios";
import { useEffect } from "react";

const Register = () => {
  useEffect(() => {
    axios
      .get("/api/v1/user/new")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(`error from :${error}`);
      });
  });
  return <div>Ragister</div>;
};

export default Register;
