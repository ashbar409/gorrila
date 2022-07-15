import './App.css';
import { useState } from 'react';
import { receipts } from './components/Records';
import Receipt from './components/Reciept';

function App() {

  const [customerReceipts, setCustomerReceipts] = useState(receipts)

  return (
    <div className="App">
      {customerReceipts.map((receipt, index) => {
        return <Receipt 
        name={receipt.person}
        main={receipt.order.main}
        protien={receipt.order.protein}
        rice={receipt.order.rice}
        sauce={receipt.order.sauce}
        drink={receipt.order.drink}
        cost={receipt.order.cost}
        key={index}
        />
      })}
    </div>
  );
}

export default App;
