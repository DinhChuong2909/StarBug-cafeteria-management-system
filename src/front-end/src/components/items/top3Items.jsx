import Top3Item from "./top3Item";

const Top3Items = () => {
  const top3Items = [
    {
      id: 1,
      name: "Sua Ong Tho",
      price: "55.000",
      feature: "Coffee",
      rate: "4.5",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Milo Dam",
      price: "55.000",
      feature: "Coffee",
      rate: "5",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Tra dau Q1",
      price: "55.000",
      feature: "Coffee",
      rate: "4",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="w-[960px] h-full mx-auto flex flex-row animate-item-show">
      {top3Items.map((item) => (
        <div className="mx-2">
          <Top3Item
            id={item.id}
            name={item.name}
            price={item.price}
            rate={item.rate}
            image={item.image}
          />
        </div>
      ))}
    </div>
  );
};
export default Top3Items;