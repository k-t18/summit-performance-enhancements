import { useRouter } from "next/router";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }: any) => {
  const router = useRouter();
  const toShowHeader = router.pathname === "/login" ? false : true;

  return (
    <>
      {toShowHeader && <Navbar />}
      {children}
    </>
  );
};
export default Layout;
