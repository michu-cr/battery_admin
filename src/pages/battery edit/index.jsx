import Button from '../../Components/Button';
import Input from '../../Components/Input';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from '../../utils';
import './batteryed.css';

const EditBattery = () => {
  const [bat, setBat] = useState({
    modelname: '',
    warrenty: '',
    capacity: '',
    voltage: '',
    price: '',
    vehicle: [],
    exchangeprice: '',
    inStock: '',
    image: '',
  });

  const { id } = useParams();

  const fetchBattery = async () => {
    try {
      const response = await axios.get(`/battery/bat/${id}`);
      setBat(response.data);
    } catch (error) {
      console.error('Error fetching battery:', error);
    }
  };

  const handleEdit = async () => {
    try {
      await axios.patch(`/battery/${id}`, bat);
      console.log('Battery edited successfully');
    } catch (error) {
      console.error('Error editing battery:', error);
    }
  };

  const handleInputChange = (e, fieldName) => {
    setBat({ ...bat, [fieldName]: e.target.value });
  };

  useEffect(() => {
    fetchBattery();
  }, []);

  const handleImageChange = async e => {
    try {
      const imageData = new FormData();
      imageData.append('file', e.target.files[0]);
      const response = await axios.post('/image', imageData);
      setBat({ ...bat, image: response.data.url });
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  console.log(bat);

  return (
    <div className="bted">
      <div className="ed">
        <h1>
          <u>EDIT BATTERY</u>
        </h1>
        <Input
          className="edin"
          type="text"
          placeholder="MODELNAME"
          value={bat.modelname}
          onChange={e => handleInputChange(e, 'modelname')}
        />
        <Input
          type="text"
          className="edin"
          placeholder="WARRENTY"
          value={bat.warrenty}
          onChange={e => handleInputChange(e, 'warrenty')}
        />
        <Input
          type="text"
          className="edin"
          placeholder="CAPACITY"
          value={bat.capacity}
          onChange={e => handleInputChange(e, 'capacity')}
        />
        <Input
          type="text"
          className="edin"
          placeholder="VOLTAGE"
          value={bat.voltage}
          onChange={e => handleInputChange(e, 'voltage')}
        />
        <Input
          type="text"
          className="edin"
          placeholder="PRICE"
          value={bat.price}
          onChange={e => handleInputChange(e, 'price')}
        />
        <Input
          type="text"
          className="edin"
          placeholder="EXCHANGE PRICE"
          value={bat.exchangeprice}
          onChange={e => handleInputChange(e, 'exchangeprice')}
        />
        <Input type="file" className="edin" onChange={handleImageChange} />
        <Input
          type="text"
          className="edin"
          placeholder="VEHICLE ID"
          value={bat.vehicle.join(',')}
          onChange={e => setBat({ ...bat, vehicle: e.target.value.split(',') })}
        />
        <Input
          type="text"
          className="edin"
          placeholder="INSTOCK"
          value={bat.inStock}
          onChange={e => handleInputChange(e, 'inStock')}
        />
        <Button onClick={handleEdit} className="btned">
          EDITED
        </Button>
      </div>
    </div>
  );
};

export default EditBattery;
