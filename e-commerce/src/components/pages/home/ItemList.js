import Items from "./Item";

// Componente que renderiza una lista de elementos Items
// Recibe una lista de objetos "items"
const ItemList = ({ items }) => {
  return (
    <section className="ItemList gap-2 flex flex-col items-center justify-center mx-4 my-24">
        <div className="text-4xl mb-16"> 
          <p>Menu</p>
        </div>
      <div className="cards grid grid-cols-2 gap-5">
    
      {/* Mapea la lista "items" y por cada item renderiza un componente Items */}
        {items.map((items) => {
          return <Items items={items} key={items.id} />;
        })}
      </div>
    </section>
  );
};

export default ItemList;
