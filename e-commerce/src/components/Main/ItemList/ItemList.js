import Items from "./Item";

const ItemList = ({ items }) => {
  return (
    <section className="ItemList gap-2 flex flex-col items-center justify-center mx-4 my-24">
     

      <div className="cards grid grid-cols-2 gap-5">
        {items.map((items) => {
          return <Items items={items} key={items.id} />;
        })}
      </div>
    </section>
  );
};

export default ItemList;
