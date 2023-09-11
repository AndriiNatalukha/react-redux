const defaultState = {
    customers: [],
  }
  debugger
  const ADD_CUSTOMER = 'ADD_CUSTOMER';
  const REMOVE_CUSTOMERS = 'REMOVE_CUSTOMERS';
  const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS;'

  export const customerReduser = (state = defaultState, action) => {
    switch (action.type) {
      case ADD_MANY_CUSTOMERS:
        debugger
         return {...state, customers: [...state.customers, ...action.payload]}
        //return { ...state, customers: action.payload };
      case ADD_CUSTOMER:
        debugger
        return { ...state, customers: [...state.customers, action.payload] };
      case REMOVE_CUSTOMERS:
        return { ...state, customers: state.customers.filter(customer => customer.id !== action.payload) };
      default:
        return state;
    }
  }

  export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload});
  export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload});
  export const remuveCustomerAction = (payload) => ({type: REMOVE_CUSTOMERS, payload});