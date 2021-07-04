import React from "react";
import styles from "./product-backing.module.scss";

function ProductBacking() {
  return (
    <div className={styles.productContainer}>
      <div className={styles.backingDetails}>
        <div className={styles.backingDetail}>
          <span className={styles.detailHeading}>{`\u0024 89,914`}</span>
          <span
            className={styles.detailSubHeading}
          >{`of \u0024 100,000 backed`}</span>
        </div>
        <div className={styles.backingDetail}>
          <span className={styles.detailHeading}>{`5,007`} </span>
          <span className={styles.detailSubHeading}>total backers</span>
        </div>
        <div className={styles.backingDetail}>
          <span className={styles.detailHeading}>56</span>
          <span className={styles.detailSubHeading}>days left</span>
        </div>
      </div>
      <div className={styles.backingAmtIndicator}></div>
    </div>
  );
}

export default ProductBacking;
