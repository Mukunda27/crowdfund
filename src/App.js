import Header from "./components/header/header";
import Product from "./components/product/product";
import ProductBacking from "./components/product-backing/product-backing";
import ProductDescription from "./components/product-description/product-description";
import SuccessModal from "./components/success-modal/success-modal";

import { useSelector } from "react-redux";

import styles from "./App.module.scss";
import SelectionModal from "./components/selection-modal/selection-modal";

function App() {
  const modalInfo = useSelector((state) => state.modal);

  return (
    <div className={styles.app}>
      {modalInfo.showSuccessModal && <SuccessModal />}
      {modalInfo.showSelectionModal && (
        <SelectionModal defaultReward={modalInfo.defaultReward} />
      )}
      <Header />
      <div className={styles.hero}></div>
      <Product transformY={48} />
      <ProductBacking />
      <ProductDescription />
    </div>
  );
}

export default App;
