import React from "react";

const carousel = () => {
  return (
    <section>
      <div className="carousel shadow-xl rounded-box w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/Y2tJjtv/monis-wraps-market-3.png"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/Y2tJjtv/monis-wraps-market-3.png"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </section>
  );
};

export default carousel;
