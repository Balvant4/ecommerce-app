import { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";
import AdminPageCards from "../../components/AdminPageCards";
import { BsCurrencyDollar } from "react-icons/bs";
import SearchBar from "../../components/SearchBar";
import MainButton from "../../components/MainButton";

function handleOnWheel({ deltaY }) {
  console.log(deltaY);
}

const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

const Row = ({ index, style }) => (
  <div
    style={style}
    className="flex items-center text-sm text-white font-medium pl-3 py-2 border-b border-slate-600"
  >
    <div className="w-1/5 min-w-[60px] text-center">{index + 1}</div>
    <div className="w-1/5 min-w-[80px] text-center">$4554</div>
    <div className="w-1/5 min-w-[100px] text-center">
      <span className="py-[4px] px-2 bg-yellow-500 text-black rounded-md text-xs">
        Pending
      </span>
    </div>
    <div className="w-1/5 min-w-[120px] text-center">25 Dec 2023</div>
    <div className="w-1/5 min-w-[100px] text-center">
      <button className="bg-indigo-500 shadow-md px-3 py-1 text-xs text-white rounded-md hover:bg-indigo-600">
        Confirm
      </button>
    </div>
  </div>
);

function Payments() {
  return (
    <div className="px-4 py-5 sm:px-6 lg:px-8">
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <AdminPageCards
          value="$3434"
          label="Total Sales"
          bgColor="bg-green-200"
          iconBgColor="bg-red-700"
          logo={BsCurrencyDollar}
        />
        <AdminPageCards
          value="120"
          label="Available Amounts"
          bgColor="bg-lime-100"
          iconBgColor="bg-yellow-500"
          logo={BsCurrencyDollar}
        />
        <AdminPageCards
          value="50"
          label="Withdrawal Amount"
          bgColor="bg-amber-50"
          iconBgColor="bg-rose-800"
          logo={BsCurrencyDollar}
        />
        <AdminPageCards
          value="50"
          label="Pending Amount"
          bgColor=" bg-green-300"
          iconBgColor="bg-yellow-900"
          logo={BsCurrencyDollar}
        />
      </div>

      {/* Second Section - Responsive Fix */}
      <div className="flex flex-col lg:flex-row gap-6 w-full pt-7">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 p-4 sm:p-6 bg-slate-800 rounded-lg shadow-lg">
          <h1 className="text-lg font-semibold text-white">Send Request</h1>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <SearchBar
              className="w-full sm:w-auto flex-grow"
              placeholder="Enter Amount"
            />
            <MainButton text="Submit" className="px-4 py-2 text-sm" />
          </div>

          {/* Pending Request Table */}
          <div className="pt-5">
            <h1 className="text-lg font-semibold text-white">
              Pending Request
            </h1>
            <div className="mt-5 overflow-x-auto">
              <div className="min-w-[500px]">
                <List
                  className="List"
                  height={260}
                  itemCount={10}
                  itemSize={50}
                  outerElementType={outerElementType}
                  width="100%"
                >
                  {Row}
                </List>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 p-4 sm:p-6 bg-slate-800 rounded-lg shadow-lg">
          <h1 className="text-lg font-semibold text-white">
            Success Withdrawal
          </h1>

          {/* Success Withdrawal Table */}
          <div className="mt-5 overflow-x-auto">
            <div className="min-w-[500px]">
              <List
                className="List"
                height={360}
                itemCount={10}
                itemSize={50}
                outerElementType={outerElementType}
                width="100%"
              >
                {Row}
              </List>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;
