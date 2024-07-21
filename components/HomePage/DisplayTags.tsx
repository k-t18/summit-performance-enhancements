import Image from "next/image";
import useDisplayTagHooks from "../../hooks/HomePageHooks/useHomePageTagSection";
import SliderSection from "./SliderSection";
import "../../styles/components/displayTags.module.scss";

const DisplayTags = () => {
  const { allTagsData } = useDisplayTagHooks();
  const updateDisplayTagList: any =
    Array.isArray(allTagsData) &&
    allTagsData?.length > 0 &&
    allTagsData?.filter((items: any) => items.value?.length > 0);

  const showDisplayTagSection: any = () => {
    if (false) {
    }

    if (updateDisplayTagList?.length > 0 && Array.isArray(allTagsData)) {
      return (
        <div className="display-tags-section pb-5">
          <div className="container">
            {updateDisplayTagList?.length > 0 &&
              updateDisplayTagList?.map((tagsData: any, index: any) => {
                return (
                  <>
                    <div className="text-center text-secondary" key={index}>
                      <h2 className="pt-5 pb-2 heading-text">
                        {tagsData.tag_name}
                      </h2>
                      {/* <div className=" product-card ">
                        <div className=" product-card-img "> */}
                      {/* </div>
                      </div> */}
                      <SliderSection data={tagsData} />
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      );
    }
  };
  return <>{showDisplayTagSection()}</>;
};

export default DisplayTags;
