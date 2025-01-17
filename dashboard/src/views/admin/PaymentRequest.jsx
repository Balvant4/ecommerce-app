import { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";

function handleOnWheel({ deltaY }) {
  console.log(deltaY);
}

const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

function PaymentRequest() {
  const Row = ({ index, style }) => {
    return (
      <div
        style={style}
        className="flex items-center text-sm text-white font-medium pl-3 py-1 border-b border-slate-600"
      >
        <div className="w-[15%]">{index + 1}</div>
        <div className="w-[20%]">$4554</div>
        <div className="w-[20%]">
          <span className="py-[6px] px-2 bg-yellow-500 text-black rounded-md">
            Pending
          </span>
        </div>
        <div className="w-[25%]">25 Dec 2023</div>
        <div className="w-[20%]">
          <button className="bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 px-4 py-2 cursor-pointer text-white rounded-md  hover:bg-indigo-600">
            Confirm
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="px-4 lg:px-10 py-6">
      <div className="w-full p-6 bg-slate-800 rounded-lg shadow-lg">
        <h2 className="text-white text-xl font-semibold mb-6">
          Withdrawal Request
        </h2>
        <div className="w-full overflow-x-auto">
          {/* Table Header */}
          <div className="flex bg-gradient-to-r from-indigo-500 to-blue-600 uppercase text-xs font-bold text-white rounded-md py-2 px-3 mb-2">
            <div className="w-[15%]">No</div>
            <div className="w-[20%]">Amount</div>
            <div className="w-[20%]">Status</div>
            <div className="w-[25%]">Date</div>
            <div className="w-[20%]">Action</div>
          </div>

          {/* Virtualized List */}
          <List
            style={{ minWidth: "500px" }}
            className="List"
            height={350}
            itemCount={10}
            itemSize={45}
            outerElementType={outerElementType}
          >
            {Row}
          </List>
        </div>
      </div>
    </div>
  );
}

export default PaymentRequest;
