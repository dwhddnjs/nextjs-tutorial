import React, { useEffect } from "react";
import styles from "./ItemList.module.css";
import Link from "next/link";

function ItemList({ list }) {
  return (
    <div>
      <div class="ui three column divided grid">
        <div class="row">
          {list.map((item) => (
            <div class="column" key={item.id}>
              <Link href={`/view/${item.id}`}>
                <a>
                  <div className={styles.wrap}>
                    <img
                      src={item.image_link}
                      alt={item.name}
                      className={styles.img_item}
                    />
                    <strong className={styles.tit_item}>{item.name}</strong>
                    <span className={styles.txt_info}>
                      {item.category} {item.product_type}
                    </span>
                    <strong className={styles.num_price}>${item.price}</strong>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemList;
