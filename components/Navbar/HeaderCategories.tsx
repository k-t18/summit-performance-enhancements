import { useRef, useState, useCallback, useMemo } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const Overlay = dynamic(() => import("react-bootstrap/Overlay"), {
  ssr: false,
});
const Popover = dynamic(() => import("react-bootstrap/Popover"), {
  ssr: false,
});

interface NavbarItem {
  label: string;
  values: NavbarItem[];
  url: string;
}

interface HeaderCategoriesProps {
  navbarData: NavbarItem[];
}

const HeaderCategories = ({ navbarData }: HeaderCategoriesProps) => {
  const [showPopoverIndex, setShowPopoverIndex] = useState<number | null>(null);
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLElement>, index: number) => {
      setTarget(e.currentTarget);
      setShowPopoverIndex(index);
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setShowPopoverIndex(null);
  }, []);

  const popoverBottom = useCallback(
    (item: NavbarItem) => (
      <Popover
        id={`popover-${item.label}`}
        className="p-2 category-popover shadow rounded"
        onMouseLeave={handleMouseLeave}
      >
        <div className="row">
          {item?.values?.length > 0 &&
            item.values.map((itemL2, index) => {
              const columnCount = Math.ceil(itemL2?.values?.length / 8);
              return (
                <div className="col" key={index}>
                  <div className="heading-category-l2">
                    <Link
                      href={`${itemL2?.url}?page=1&filter=[{"name":"Purity","value":["22KT"]}]&sort_by=latest`}
                      className="label"
                      onClick={() => setShowPopoverIndex(null)}
                    >
                      {itemL2?.label}
                    </Link>
                  </div>
                  <hr className="m-1" />
                  <div className="col-container">
                    {Array.from({ length: columnCount }, (_, columnIndex) => (
                      <div key={columnIndex} className="column">
                        {itemL2?.values
                          ?.slice(columnIndex * 8, (columnIndex + 1) * 8)
                          .map((itemL3, idx) => (
                            <div key={idx} className="p-1">
                              <Link
                                href={`${itemL3?.url}?page=1&filter=[{"name":"Purity","value":["22KT"]}]&sort_by=latest`}
                                className="heading-category-l3"
                                onClick={() => setShowPopoverIndex(null)}
                              >
                                {itemL3?.label ?? `${idx}`}
                              </Link>
                            </div>
                          ))}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      </Popover>
    ),
    [handleMouseLeave]
  );

  const renderedNavItems = useMemo(
    () =>
      navbarData?.length > 0 &&
      navbarData.map((item, index) => (
        <div key={index} className="header-category-container">
          <div
            className={`heading-category-l1 ${
              showPopoverIndex === index && "theme-gold"
            }`}
            onMouseEnter={(e) => handleMouseEnter(e, index)}
          >
            {item.label}
          </div>
          <Overlay
            show={showPopoverIndex === index && item?.values?.length > 0}
            target={target}
            placement="bottom"
            container={ref.current}
            containerPadding={20}
          >
            {popoverBottom(item)}
          </Overlay>
        </div>
      )),
    [navbarData, showPopoverIndex, target, handleMouseEnter, popoverBottom]
  );

  return (
    <header>
      <nav ref={ref}>
        <div className="heading-container py-2" onMouseLeave={handleMouseLeave}>
          {renderedNavItems}
        </div>
      </nav>
    </header>
  );
};

export default HeaderCategories;
