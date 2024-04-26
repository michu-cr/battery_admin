import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { useState, useEffect } from 'react';
import axios from '../../utils';
import { ToastContainer, toast } from 'react-toastify';

import './batadding.css';

const Batteryadding = () => {
  const [add, setadd] = useState({
    modelname: '',
    warrenty: '',
    capacity: '',
    voltage: '',
    price: '',
    exchangeprice: '',
    image: '',
    vehicle: [],
    inStock: '',
  });
  const AddBat = async (e, key) => {
    if (key == 'image') {
      const imageData = new FormData();
      imageData.append('file', e.target.files[0]);
      const response = await axios.post('/image', imageData);
      setadd({ ...add, image: response.data.url });
    } else if (key == 'vehicle') {
      const vehicleIds = e.target.value.split(',');
      setadd({ ...add, vehicle: vehicleIds });
    } else {
      setadd({ ...add, [key]: e.target.value });
    }
  };
  console.log(add);
  const [veid, setvehid] = useState([]);
  const vehId = async () => {
    const response = await axios.get('/vehicle');
    setvehid(response.data);
  };
  const onAdingBat = async () => {
    await axios.post('/battery', add);
    toast.success('BATTERY ADDED SUCCESFULLY', { autoClose: 1000 });
    Batteryadding();
  };
  useEffect(() => {
    vehId();
  }, []);
  return (
    <div className="batadd">
      <ToastContainer />
      <div className="inbat">
        <h1>BATTERY ADDING</h1>
        <Input
          onChange={e => AddBat(e, 'modelname')}
          placeholder="MODEL NAME"
          className="batin"
          type="text"
        />
        <Input
          onChange={e => AddBat(e, 'warrenty')}
          placeholder="WARRENTY"
          className="batin"
          type="text"
        />
        <Input
          onChange={e => AddBat(e, 'capacity')}
          placeholder="CAPACITY"
          className="batin"
          type="text"
        />
        <Input
          onChange={e => AddBat(e, 'voltage')}
          placeholder="VOLTAGE"
          className="batin"
          type="text"
        />
        <Input
          onChange={e => AddBat(e, 'vehicle')}
          placeholder="VEHICLE MODEL"
          className="batin"
          type="text"
        />
        <Input
          onChange={e => AddBat(e, 'price')}
          placeholder="PRICE"
          className="batin"
          type="number"
        />
        <Input
          onChange={e => AddBat(e, 'exchangeprice')}
          placeholder="EXCHANGE PRICE"
          className="batin"
          type="number"
        />
        <Input
          onChange={e => AddBat(e, 'inStock')}
          className="batin"
          placeholder="INSTOCK"
          type="text"
        />
        <Input
          onChange={e => AddBat(e, 'image')}
          className="batin"
          type="file"
        />
        <Button onClick={onAdingBat} className="batbtn">
          ADD BATTERY
        </Button>
      </div>
      <div className="veid">
        {/* <h3> VEHICLE ID </h3> */}
        {veid.map(item => {
          return (
            <div className="veli">
              <p>NAME:{item.name}</p>
              <p>ID:{item._id}</p>
              <p>fu:{item.fualtype}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Batteryadding;
