import axios from "axios";
import { route } from "next/dist/next-server/server/router";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Admin() {
  const router = useRouter();
  function checkLogin() {
    axios.get("/api/isLogin").then((res) => {
      if (res.status === 200 && res.data.name) {
      } else {
        router.push("/login");
      }
    });
  }

  useEffect(() => {
    checkLogin();
  }, []);
  return <div>Admin</div>;
}
