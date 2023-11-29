import Story from "../components/story";
import HomeSlider from "../components/slider";
import items from "../api/items";
import stories from "../staticData/stories.json";
import Item from "../components/items/item";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// const apiUrl = `dbUrl + '/item/filter?category=Tên category đó'`;
// const { data } = useQuery({
//   queryKey: ["teas"],
//   queryFn: () => axios.get(apiUrl).then((res) => res),
//   staleTime: 1000 * 5,
//   retry: 3,
// });

import { useInView } from "react-intersection-observer";

const Tea = (props) => {
  const { ref: sliderRef, inView: sliderVisible } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { ref: storyRef, inView: storyVisible } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { ref: itemsRef1, inView: itemsVisible1 } = useInView();
  const { ref: itemsRef2, inView: itemsVisible2 } = useInView();
  const { ref: itemsRef3, inView: itemsVisible3 } = useInView();
  return (
    <div className="w-screen h-fit mx-auto">
      <div className="w-screen mx-auto pb-4 bg-[#F4F2EC] bg-[url('../../public/assets/background.svg')]">
        <div
          className="w-screen max-w-[2000px] h-[386px] mx-auto"
          ref={sliderRef}
        >
          {sliderVisible && <HomeSlider items={items} />}
        </div>
        <div className="w-[930px] mx-auto">
          <div clasName="h-fit" ref={storyRef}>
            {storyVisible && (
              <Story
                reverse={true}
                image={stories[0].image}
                title={stories[0].title}
                subtitle={stories[0].subtitle}
                paragraph={stories[0].paragraph}
              />
            )}
          </div>
        </div>
        <div className="w-[930px] h-fit mx-auto mt-4 py-4">
          <div className="flex flex-col gap-6">
            <div ref={itemsRef1}>
              {itemsVisible1 && (
                <div className="w-fit h-fit flex flex-row gap-6 animate-item-show">
                  {items.slice(0, 4).map((item) => (
                    <Item
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      rate={item.rate}
                      image={item.image}
                    />
                  ))}
                </div>
              )}
            </div>
            <div ref={itemsRef2}>
              {itemsVisible2 && (
                <div className="w-fit h-fit flex flex-row gap-6 animate-item-show">
                  {items.slice(4, 8).map((item) => (
                    <Item
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      rate={item.rate}
                      image={item.image}
                    />
                  ))}
                </div>
              )}
            </div>
            <div ref={itemsRef3}>
              {itemsVisible3 && (
                <div className="w-fit h-fit flex flex-row gap-6 animate-item-show">
                  {items.slice(8, 12).map((item) => (
                    <Item
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      rate={item.rate}
                      image={item.image}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tea;
