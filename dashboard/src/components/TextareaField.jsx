const TextareaField = ({
  label,
  name,
  value,
  onChange,
  className,
  placeholder,
}) => (
  <div>
    <label htmlFor={name} className="block text-white">
      {label}
    </label>
    <textarea
      placeholder={placeholder}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      rows="4"
      className={`mt-2 block w-full border border-gray-700 rounded-md bg-gray-800 text-white shadow-sm focus:ring-[#6a5fdf] focus:border-[#6a5fdf] px-4 py-2 ${className}`}
    />
  </div>
);

export default TextareaField;
