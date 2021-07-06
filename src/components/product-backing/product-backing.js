import React from "react";
import styles from "./product-backing.module.scss";
import { ProgressBar } from "./product-backing-styles";

import { useSelector } from "react-redux";

function ProductBacking() {
  const backingInfo = useSelector((state) => state.backing);

  return (
    <div className={styles.productContainer}>
      <div className={styles.backingDetails}>
        <div className={styles.backingDetail}>
          <span
            className={styles.detailHeading}
          >{`\u0024 ${backingInfo.backedAmt}`}</span>
          <span
            className={styles.detailSubHeading}
          >{`of \u0024 ${backingInfo.total} backed`}</span>
        </div>
        <div className={styles.backingDetail}>
          <span className={styles.detailHeading}>
            {`${backingInfo.numberOfBackers}`}
          </span>
          <span className={styles.detailSubHeading}>total backers</span>
        </div>
        <div className={styles.backingDetail}>
          <span className={styles.detailHeading}>56</span>
          <span className={styles.detailSubHeading}>days left</span>
        </div>
      </div>
      <ProgressBar
        backedAmt={backingInfo.backedAmt}
        total={backingInfo.total}
      />
    </div>
  );
}

export default ProductBacking;
