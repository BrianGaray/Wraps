import Items from "./Item";

const ItemList = ({ items }) => {
  return (
    <section className="ItemList">
      <div className="hero mt-20 mb-4 bg-base-200">
        <div className="hero-content gap-8 flex-row-reverse">
          <img
            className="w-2/5"
            src="https://i.ibb.co/bb10p4j/g-06-Eu-V0-KETM-Rf-Y6p-JVe-transformed-1.png"
          />

          <div className="w-64 carousel rounded-box">
            <div className="carousel-item w-full">
              <img
                src="https://i.ibb.co/LvVkK16/Dise-o-sin-t-tulo-1.png"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://i.ibb.co/LvVkK16/Dise-o-sin-t-tulo-1.png"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://i.ibb.co/LvVkK16/Dise-o-sin-t-tulo-1.png"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="divider m-2"></div>

      <div className="cards grid grid-cols-2 p-2">
        {items.map((items) => {
          return <Items items={items} key={items.id} />;
        })}
      </div>
    </section>
  );
};

export default ItemList;
