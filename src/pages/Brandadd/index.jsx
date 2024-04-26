import axios from '../../utils';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './brand.css';

const Brand = () => {
  const [brands, setbrandas] = useState({
    image: '',
    name: '',
  });
  const onAddBrand = async (e, key) => {
    if (key == 'image') {
      const imageData = new FormData();
      imageData.append('file', e.target.files[0]);
      const response = await axios.post('/image', imageData);
      setbrandas({ ...brands, image: response.data.url });
    } else {
      setbrandas({ ...brands, [key]: e.target.value });
    }
  };
  const onBran = async () => {
    await axios.post('/brand', brands);
    toast.success('Brand added successfully', { autoClose: 1000 });
  };
  return (
    <div className="brand">
      <ToastContainer />
      <div className="brinput">
        <h1>BRAND ADDING</h1>
        <Input
          className="btninp"
          onChange={e => onAddBrand(e, 'name')}
          type="text"
          placeholder="BRAND NAME"
        />
        <Input
          className="btninp"
          onChange={e => onAddBrand(e, 'image')}
          type="file"
          placeholder="IMAGE"
        />
        <Button className="btnbrand" onClick={onBran}>
          ADD BRAND
        </Button>
      </div>
    </div>
  );
};
export default Brand;
