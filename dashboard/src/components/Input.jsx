// components/Input.jsx

const Input = ({
  label,
  name,
  type,
  placeholder,
  icon: Icon,
  value,
  onChange,
  className,
}) => {
  return (
    <div className="relative">
      <label htmlFor={label} className=" text-white ">
        {label}
      </label>
      {Icon && <Icon className="absolute left-3 top-3 text-gray-400 text-lg" />}
      <input
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
        className={` mt-2 w-full px-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none ${className}`}
        aria-label={placeholder}
      />
    </div>
  );
};

export default Input;
