import React from "react";
import ProductItem from "../product-item/product-item";
import { useSelector } from "react-redux";

import styles from "./product-description.module.scss";

function ProductDescription() {
  const items = useSelector((state) => state.products).filter(
    (item) => item.pledgeAmount
  );

  return (
    <div className={styles.productContainer}>
      <div className={styles.aboutTitle}>About this project</div>
      <div className={styles.aboutBody}>
        The masterchef bamboo monitor riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor has the potential to improving your posture making you more
        comfortablw while at work helping you stay focused on the work at hand
        <br />
        <br />
        Featuring artisan craftmanship, teh simpliicity of design creates extra
        desk-space below your computer to allow pens, noteoads, USB sticks to be
        stored under the stand
      </div>

      {items.map((item) => {
        return <ProductItem key={item.id} item={item}></ProductItem>;
      })}
    </div>
  );
}

export default ProductDescription;
