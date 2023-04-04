import Items from "./Item";

const ItemList = ({ items }) => {
  return (
    <section className="ItemList p-4 gap-8 flex flex-col items-center justify-center">
      <div className="card bg-base-100 flex-row-reverse">
      <img
            className="illustration w-5/12"
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
