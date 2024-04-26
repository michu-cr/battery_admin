import './input.css';

const Input = ({ className, type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      className={`in ${className}`}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
export default Input;
