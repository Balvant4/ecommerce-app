const Input = ({
  label,
  name,
  type,
  placeholder,
  icon: Icon,
  value,
  onChange,
  className,
  id,
}) => {
  return (
    <div className="relative">
      <label htmlFor={id} className="text-white block mb-1">
        {label}
      </label>
      <div className="relative flex items-center">
        {Icon && <Icon className="absolute left-4 text-gray-400 text-xl" />}
        <input
          name={name}
          id={id}
          type={type}
          placeholder={placeholder}
          required
          value={value}
          onChange={onChange}
          className={`w-full pl-12 pr-4 h-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none flex items-center leading-[3rem] ${className}`}
          aria-label={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
