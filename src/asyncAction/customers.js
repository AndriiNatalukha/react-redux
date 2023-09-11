import { addManyCustomersAction } from "../store/customerReduser";

export const fetchCustomers = () => {
    return function(dispatch){
        fetch('https://jsonplaceholder.org/users')
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(users => {
            users.forEach(user => user.name = (user.firstname + " " + user.lastname));
            dispatch(addManyCustomersAction(users));
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }
}