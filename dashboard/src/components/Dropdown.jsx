function Dropdown({ setParPage }) {
  return (
    <div>
      <select
        className=" px-3 py-2  text-white rounded-lg border border-slate-700  focus:ring-0 hover:border-indigo-500 outline-none bg-chartbgcolor "
        onChange={(e) => setParPage(parseInt(e.target.value))}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </div>
  );
}

export default Dropdown;
