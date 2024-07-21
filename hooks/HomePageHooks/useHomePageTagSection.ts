import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getDisplaytagsDataFromAPI from "../../services/api/home-page-api/home-display-tag-api";

const useDisplayTagHooks = () => {
  const [allTagsData, setAllTagsData] = useState<any>([]);

  const fetchDisplayTagsDataFunction = async (currency_value: any) => {
    try {
      const getDisplayTagsData = await getDisplaytagsDataFromAPI(
        "token bdd3672db03b87c:df944c8ad694820"
      );
      console.log("getDisplaytagsDataFromAPI", getDisplayTagsData);
      if (getDisplayTagsData?.length > 0) {
        const tagsDataArray = getDisplayTagsData
          .map((data: any) => {
            if (data?.value?.message?.msg === "success") {
              return {
                tag_name: data.tag_name,
                value: data?.value?.message?.data,
              };
            } else {
              return null;
            }
          })
          .filter((data: any) => data !== null);

        setAllTagsData(tagsDataArray);
      } else {
        setAllTagsData([]);
      }
    } catch (error) {
      return;
    } finally {
    }
  };

  useEffect(() => {
    fetchDisplayTagsDataFunction("INR");
  }, []);

  return {
    allTagsData,
  };
};

export default useDisplayTagHooks;
