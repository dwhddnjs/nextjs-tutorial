import React from "react";

function ItemList({ list }) {
  return (
    <div>
      <div class="ui three column divided grid">
        <div class="row">
          {list.map((item) => (
            <div class="column">
              <img src={item.image_link} alt={item.name} />
              <strong>{item.name}</strong>
              <span>
                {item.category} {item.product_type}
              </span>
              <strong>${item.price}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemList;
