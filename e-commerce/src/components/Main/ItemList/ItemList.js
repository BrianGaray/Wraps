import Items from "./Item";

const ItemList = ({ items }) => {
  return (
    <section className="ItemList p-6 gap-12 flex flex-col items-center justify-center">
      <div className="card flex-row bg-base-100">
      <h1 className="text-4xl font-bold p-4">monis wraps market</h1>
      <img
            className="illustration"
            src="https://i.ibb.co/bb10p4j/g-06-Eu-V0-KETM-Rf-Y6p-JVe-transformed-1.png"
          />
      </div>
     

      <div className="cards grid grid-cols-2 gap-4">
        {items.map((items) => {
          return <Items items={items} key={items.id} />;
        })}
      </div>
    </section>
  );
};

export default ItemList;
