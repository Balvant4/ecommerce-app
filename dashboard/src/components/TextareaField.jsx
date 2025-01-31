const TextareaField = ({
  label,
  name,
  value,
  onChange,
  className,
  placeholder,
  id,
}) => (
  <div>
    <label htmlFor={name} className="block text-white">
      {label}
    </label>
    <textarea
      placeholder={placeholder}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      rows="2"
      className={`mt-2 w-full px-2 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none ${className}`}
    />
  </div>
);

export default TextareaField;
