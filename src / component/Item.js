import React from "react";
import { Button, Header, Divider } from "semantic-ui-react";
import styles from "./ItemList.module.css";

function Item({ item }) {
  const {
    image_link,
    name,
    price,
    description,
    category,
    product_type,
    product_link,
    updated_at,
  } = item;
  console.log("아이템확인", item);
  return (
    <>
      <div className={styles.wrap}>
        <div className={(styles.img_item, styles.new)}>
          <img src={image_link} alt={name} />
          <div className={(styles.info_item, styles.old)}>
            <strong className={styles.tit_item}>{name}</strong>
            <strong className={styles.num_price}>${price}</strong>
            <span className={styles.txt_info}>
              {category ? `${category}/` : ""}
              {product_type}
            </span>
            <Button color="orange"> 구매하기</Button>
          </div>
        </div>
      </div>
      <Divider />
      <Header as="h3">Description</Header>
      <p style={{ paddingBottom: 20, fontSize: 18 }}>{description}</p>
      <Divider />
    </>
  );
}

export default Item;
