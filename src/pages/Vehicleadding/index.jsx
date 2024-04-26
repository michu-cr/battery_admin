import { useState, useEffect } from 'react';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import axios from '../../utils';
import { ToastContainer, toast } from 'react-toastify';
import './vehicle.css';

const Vehicle = () => {
  const [brand, setbrand] = useState([]);
  const Brandlist = async () => {
    const response = await axios.get('/brand');
    setbrand(response.data);
  };
  const [ve, setve] = useState({
    name: '',
    fualtype: '',
    brand: '',
    image: '',
  });
  const VehdAdd = async (e, key) => {
    if (key == 'image') {
      const imageData = new FormData();
      imageData.append('file', e.target.files[0]);
      const response = await axios.post('/image', imageData);
      setve({ ...ve, image: response.data.url });
    } else {
      setve({ ...ve, [key]: e.target.value });
    }
  };
  const onAddV = async () => {
    await axios.post('/vehicle', ve);
    toast.success('VEHICLE ADDED SUCCESFULLY', { autoClose: 1000 });
  };
  useEffect(() => {
    Brandlist();
  }, []);
  return (
    <div className="veh">
      <ToastContainer />
      <div className="inof">
        <h1>VEHICLE ADDING</h1>
        <Input
          onChange={e => VehdAdd(e, 'name')}
          className="inveh"
          placeholder="VEHICLE NAME"
        />
        <Input
          type="text"
          onChange={e => VehdAdd(e, 'fualtype')}
          className="inveh"
          placeholder="FUALTYPE"
        />
        <Input
          type="text"
          onChange={e => VehdAdd(e, 'brand')}
          className="inveh"
          placeholder="VEHICLE BRAND ID"
        />
        <Input
          onChange={e => VehdAdd(e, 'image')}
          type="file"
          className="inveh"
          placeholder="IMAGE"
        />
        <Button onClick={onAddV} className="btnveh">
          ADD VEHICLE
        </Button>
      </div>
      <div className="brli">
        <h1>BRAND ID</h1>
        {brand.map(item => {
          return (
            <div className="libr">
              <p>NAME: {item.name}</p>
              <p>ID:{item._id}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Vehicle;
