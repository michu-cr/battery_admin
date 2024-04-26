import { useState, useEffect } from 'react';
import Axios from '../../utils';
import { useNavigate } from 'react-router-dom';
import './edit.css';

const Edit = () => {
  const [edit, setedit] = useState([]);
  const navigate = useNavigate();
  const Deledit = async () => {
    const response = await Axios.get('/battery');
    setedit(response.data);
  };
  const onDelete = async id => {
    await Axios.delete(`/battery/${id}`);
    Deledit();
  };
  const onEdit = id => {
    navigate(`/batedit/${id}`);
  };
  useEffect(() => {
    Deledit();
  }, []);
  return (
    <div className="edit">
      {edit.map(item => {
        return (
          <div className="lis">
            <img src={item.image} alt="" />
            <h2>MODEL:_{item.modelname}</h2>
            <p>CAPACITY:_{item.capacity}</p>
            <p>PRICE:_{item.price}</p>
            <i
              onClick={() => onEdit(item._id)}
              class="fa-solid fa-user-pen fa-xl"
            ></i>
            <i
              onClick={() => onDelete(item._id)}
              class="fa-solid fa-trash fa-xl"
            ></i>
          </div>
        );
      })}
    </div>
  );
};
export default Edit;
