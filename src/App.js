import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import WineShop from "./components/WineShop";

// 正確地導入 database
import database from './firebase-config';
import { ref, set } from "firebase/database";
import wines from "./items.json";

function uploadWinesData(obj) {
  set(ref(database, 'wines/'), obj);
};
uploadWinesData(wines);

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <WineShop />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
