import Button from '../../Components/Button';
import { useNavigate } from 'react-router-dom';
import './adminall.css';

const Adminall = () => {
  const navigate = useNavigate();
  const onBatAdd = () => {
    navigate('/batteryadding');
  };
  const onOderList = () => {
    navigate('/orderlist');
  };
  const onVehicleAdd = () => {
    navigate('/vehicle');
  };
  const onBrandAdd = () => {
    navigate('/brandadd');
  };
  const onEdit = () => {
    navigate('/edit');
  };
  return (
    <div className="adall">
      <div className="btnlist">
        <h1 className="he">SELECT MY PAGE</h1>
        <Button onClick={onBatAdd} className="conbtn">
          BATTERY ADDING
        </Button>
        <Button onClick={onOderList} className="conbtn">
          ORDER LIST
        </Button>
        <Button onClick={onVehicleAdd} className="conbtn">
          VEHICLE ADDING
        </Button>
        <Button onClick={onBrandAdd} className="conbtn">
          BRAND ADDING
        </Button>
        <Button onClick={onEdit} className="conbtns">
          BATTERY EDIT AND DELETE
        </Button>
      </div>
    </div>
  );
};
export default Adminall;
