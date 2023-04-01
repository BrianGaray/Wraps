import Items from "./Item";

const ItemList = ({ items }) => {
  return (
    <section className="ItemList">
      <div className="cards">
        {items.map((items) => {
          return <Items items={items} key={items.id} />;
        })}
      </div>
    </section>
  );
};

export default ItemList;
