import React from "react";

const TopCards = () => {
  return (
    <div className="grid gap-4 p-4 lg:grid-cols-5">
      <div className="col-span-1 flex w-full justify-between rounded-lg border bg-white p-4 lg:col-span-2">
        <div className="flex w-full flex-col pb-4 ">
          <p className="text-2xl font-bold ">$7,846</p>
          <p className="text-gray-600 ">Daily revenue</p>
        </div>
        <p className="flex items-center justify-center rounded-lg bg-green-200 p-2">
          <span className="text-lg text-green-700">18%</span>
        </p>
      </div>
      <div className="col-span-1 flex w-full justify-between rounded-lg border bg-white p-4 lg:col-span-2">
        <div className="flex w-full flex-col pb-4 ">
          <p className="text-2xl font-bold ">$7,846</p>
          <p className="text-gray-600 ">Daily revenue</p>
        </div>
        <p className="flex items-center justify-center rounded-lg bg-green-200 p-2">
          <span className="text-lg text-green-700">18%</span>
        </p>
      </div>
      <div className="flex w-full justify-between rounded-lg border bg-white p-4">
        <div className="flex w-full flex-col pb-4 ">
          <p className="text-2xl font-bold ">$7,846</p>
          <p className="text-gray-600 ">Daily revenue</p>
        </div>
        <p className="flex items-center justify-center rounded-lg bg-green-200 p-2">
          <span className="text-lg text-green-700">18%</span>
        </p>
      </div>
    </div>
  );
};

export default TopCards;
