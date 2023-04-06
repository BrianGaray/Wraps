import Items from "./Item";

const ItemList = ({ items }) => {
  return (
    <section className="ItemList gap-2 flex flex-col items-center justify-center p-6">
      {/* <div className="grid grid-cols-2 bg-base-100 w-full">
      <h1 className="text-4xl font-bold p-4">monis wraps market</h1>
      <img
            className="illustration"
            src="https://i.ibb.co/bb10p4j/g-06-Eu-V0-KETM-Rf-Y6p-JVe-transformed-1.png"
          />
      </div> */}
      <div className="carousel shadow rounded-box w-full">
  <div id="item1" className="carousel-item w-full">
    <img src="https://i.ibb.co/Y2tJjtv/monis-wraps-market-3.png" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://i.ibb.co/6XSJxxg/Home-2.png" className="w-full" />
  </div> 
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>

      <div className="cards grid grid-cols-2 gap-5">
        {items.map((items) => {
          return <Items items={items} key={items.id} />;
        })}
      </div>
    </section>
  );
};

export default ItemList;
