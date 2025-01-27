const SelectField = ({ label, name, value, onChange, children }) => (
  <div>
    <label htmlFor={name} className="block text-white">
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="mt-2 block w-full border border-gray-700 rounded-md bg-gray-900 text-white shadow-sm focus:ring-[#6a5fdf] focus:border-[#6a5fdf] px-4 py-3"
    >
      {children}
    </select>
  </div>
);

export default SelectField;
