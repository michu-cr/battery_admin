// import axios from '../../utils';
// import { useState, useEffect } from 'react';
// import Button from '../../Components/Button';
// import './order.css';

// const Order = () => {
//   const [order, setOrder] = useState([]);
//   const [set, setset] = useState('ORDERS');
//   const onCom = () => {
//     setset('COMPLETED');
//   };
//   const fetchData = async () => {
//     try {
//       const response = await axios.get('/book');
//       const orderData = response.data;
//       setOrder(orderData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
//   console.log(order);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="order">
//       {order.map(item => {
//         return (
//           <div className="ul">
//             <h1>
//               <u>ORDER DETAIL</u>
//             </h1>
//             <h2>BATTERY:_{item.battery.modelname}</h2>
//             <p>PRICE:_{item.battery.price}</p>
//             <br />
//             <br />
//             <h2>USERNAME:_{item.user.name}</h2>
//             <p>EMAIL:_{item.user.email}</p>
//             <p>PH:NO:_{item.user.phonenumber}</p>
//             <p>PLACE:_{item.user.place}</p>
//             <p>UserSelectprice:_{item.price}</p>
//             <Button onClick={onCom} className="ORDERS ">
//               {set}
//             </Button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Order;

import axios from '../../utils';
import { useState, useEffect } from 'react';
import Button from '../../Components/Button';
import './order.css';

const Order = () => {
  const [order, setOrder] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/book');
      const orderData = response.data.map(item => ({ ...item, set: 'ORDERS' }));
      setOrder(orderData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onCom = index => {
    const updatedOrder = [...order];
    updatedOrder[index].set = 'COMPLETED';
    setOrder(updatedOrder);
  };

  return (
    <div className="order">
      {order.map((item, index) => (
        <div className="ul" key={index}>
          <h1>
            <u>ORDER DETAIL</u>
          </h1>
          <h2>BATTERY:_{item.battery.modelname}</h2>
          <p>PRICE:_{item.battery.price}</p>
          <br />
          <br />
          <h2>USERNAME:_{item.user.name}</h2>
          <p>EMAIL:_{item.user.email}</p>
          <p>PH:NO:_{item.user.phonenumber}</p>
          <p>PLACE:_{item.user.place}</p>
          <p>UserSelectprice:_{item.price}</p>
          <Button onClick={() => onCom(index)} className="ORDERS ">
            {item.set}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Order;
