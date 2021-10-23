import "./App.css";
import React, { useState } from "react";
import Header from "./components/header/header";
import ComboSection from "./components/comboSection/comboSection";
import BurgerSection from "./components/burgerSection/burgerSection";
import OtherSection from "./components/otherSection/otherSection";
import Footer from "./components/footer/footer";
import OrderView from "./components/orderView/orderView";

import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  const [isOpenModal, setIsOpenModal] = useState(true);

  return (
    <div className="App">
      <Header />
      <ComboSection />
      <BurgerSection />
      <OtherSection />
      <Footer />
      <Modal isOpen={isOpenModal} 
              onRequestClose={() => setIsOpenModal(false)}
              style={
                {
                  overlay:{
                    backgroundColor:'rgba(0, 0, 0, 0.75)',
                    
                  },
                  content:{
                    background:'none',
                    border:'none',
                    
                    

                  }
                }
              }>
        <OrderView />
      </Modal>
    </div>
  );
}

export default App;