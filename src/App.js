import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import  { addCustomerAction,  remuveCustomerAction} from './store/customerReduser';
import { fetchCustomers } from './asyncAction/customers';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  
  const customers = useSelector(state => state.customers.customers);
  
  const addCash = () => {
    const amount = Number(prompt("Введіть суму для поповнення:"));
    if (!isNaN(amount)) {
      dispatch({ type: "ADD_CASH", payload: amount });
    }
  }

  const getCash = () => {
    const amount = Number(prompt("Введіть суму для зняття:"));
    if (!isNaN(amount)) {
      dispatch({ type: "GET_CASH", payload: amount });
    }
  }

  const addCustomer = () => {
    const name = prompt("Введіть им'я клієнта");
    if (name) {
      const customer = {
        name,
        id: Date.now(),
      }
      dispatch(addCustomerAction(customer));
    }
  }

  const removeCustomer = (customer) => {
    debugger
    dispatch(remuveCustomerAction(customer.id)); 
  }

  return (
    <div className="App">
      <div style={{ fontSize: "3rem" }}>{cash}</div>
      <div style={{ display: "flex" }}>
        <button onClick={addCash}>Поповнити рахунок</button>
        <button onClick={getCash}>Зняти з рахунку</button>
        <button onClick={addCustomer}>Додати клієнта</button>
        <button onClick={dispatch(fetchCustomers())}>Додати клієнтів з бази</button>
        {
        customers.length > 0 ? (
          <button onClick={() => removeCustomer(customers[0])}>Видалити клієнта</button>
        ) : null}
      </div>
      {(customers !== undefined) && customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div
              onClick={() => removeCustomer(customer)}
              style={{ fontSize: "2rem", border: "1px solid black", padding: "10px", marginTop: "5px" }}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div>Клієнти відсутні!</div>
      )}
    </div>
  );
}

export default App;