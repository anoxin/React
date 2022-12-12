import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order'
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { useDB } from './Components/Hooks/useDB';

const firebaseConfig = {
  apiKey: "AIzaSyAC7TyJOtUwEDV4gwk-SaQQehT5Cs8lRPY",
  authDomain: "mrdonalds-cceac.firebaseapp.com",
  projectId: "mrdonalds-cceac",
  storageBucket: "mrdonalds-cceac.appspot.com",
  messagingSenderId: "101522418857",
  appId: "1:101522418857:web:a310b14ce2cf19a61d4db8"
};

firebase.initializeApp(firebaseConfig);


function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  const dataBase = firebase.database();
  useTitle(openItem.openItem);
  const dbMenu = useDB(dataBase);

  return (
    <>
      <GlobalStyle />
      <NavBar {...auth} />
      <Order
        {...orders}
        {...openItem}
        {...auth}
        firebaseDatabase={dataBase} />
      <Menu {...openItem} dbMenu={dbMenu} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
