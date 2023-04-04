import Items from "./Item";

const ItemList = ({ items }) => {
  return (
    <section className="ItemList">
     <div className="hero mt-16 bg-base-200">
  <div className="hero-content flex-row-reverse">
    <img className="w-2/4" src="https://i.ibb.co/27vgvzh/Qh9qt0-D-Xwhr0mpo-GN0-PM-transformed.png" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
    </div>
  </div>
</div>
      <div className="cards grid grid-cols-2 p-2">
        {items.map((items) => {
          return <Items items={items} key={items.id} />;
        })}
        
      </div>
    </section>
  );
};

export default ItemList;
