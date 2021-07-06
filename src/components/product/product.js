import React, { useState } from "react";
import Button from "../button/button";
import { ReactComponent as Logo } from "../../assets/logo-mastercraft.svg";
import { useDispatch } from "react-redux";
import { setSelecctionModalState } from "../../redux/modalSlice";

import styles from "./product.module.scss";

function Product(props) {
  const [bookmarked, setBookmark] = useState(false);
  const dispatch = useDispatch();

  const transformStyle = props.transformY && {
    transform: `translateY(-${props.transformY}px)`,
  };
  const bookmarkStyle = bookmarked
    ? {
        fill: "hsl(176, 50%, 47%)",
        color: "hsl(176, 72%, 28%)",
      }
    : { fill: "#2F2F2F" };
  const bookmarkText = bookmarked ? "Bookmarked" : "Bookmark";

  function bookmarkProduct() {
    setBookmark((state) => !state);
  }

  const backProject = () => {
    dispatch(
      setSelecctionModalState({
        modalState: true,
        accepted: false,
      })
    );
  };

  return (
    <div className={styles.productContainer} style={transformStyle}>
      <Logo className={styles.logo} />
      <span className={styles.productName}>
        Mastercraft Bamboo Monitor Riser
      </span>
      <span className={styles.productDesc}>
        A beautiful and handcrafted monitor stand to reduce neck and eye strain
      </span>
      <div className={styles.productOptions}>
        <Button clicked={backProject}>Back this project</Button>
        <div onClick={bookmarkProduct} className={styles.productBookmark}>
          <svg
            width="56"
            height="56"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.bookmarkIcon}
          >
            <g fill="none" fillRule="evenodd">
              <circle style={bookmarkStyle} cx="28" cy="28" r="28" />
              <path fill="#fff" d="M23 19v18l5-5.058L33 37V19z" />
            </g>
          </svg>

          <span style={bookmarkStyle} className={styles.bookmarkText}>
            {bookmarkText}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Product;
