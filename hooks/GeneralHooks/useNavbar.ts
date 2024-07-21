import { useEffect, useState } from "react";
import getNavbarDataFromAPI from "../../services/api/general-apis/navbar-api";
const useNavbar = () => {
  const [navbarData, setNavbarData] = useState<any>(null);
  const fetchNavbarDataAPI = async () => {
    try {
      const navbarDataAPI: any = await getNavbarDataFromAPI();
      if (
        navbarDataAPI?.data?.message?.msg === "success" &&
        navbarDataAPI?.data?.message?.data?.length
      ) {
        // BELOW CODE IS TO SORT NAVBAR DATA AND STORE IN THE STATE
        setNavbarData(
          [...navbarDataAPI?.data?.message?.data].sort(function (
            a: any,
            b: any
          ) {
            return a.seq - b.seq;
          })
        );
      } else {
        setNavbarData([]);
      }
    } catch (error) {
      return;
    } finally {
    }
  };
  useEffect(() => {
    fetchNavbarDataAPI();
  }, []);
  return {
    navbarData,
  };
};

export default useNavbar;
