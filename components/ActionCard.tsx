import React from "react";
import { MinusCircle, PlusCircle, Wallet } from "lucide-react";

const ActionCard = () => {
  return (
    <div className="my-12 w-full flex items-center justify-center gap-12 p-4 shadow-md bg-white">
      {/*  Add expense*/}
      <div className="flex flex-col items-center gap-3 cursor-pointer">
        <div className="flex w-16 h-16 items-center justify-center bg-red-200 p-4 rounded-full ">
          <MinusCircle className="text-red-500" />
        </div>
        <h5>Add Expense</h5>
      </div>
      {/*  Add Income*/}
      <div className="flex flex-col items-center gap-3 cursor-pointer">
        <div className="flex w-16 h-16 items-center justify-center bg-green-200 p-4 rounded-full ">
          <PlusCircle className="text-green-300-500" />
        </div>
        <h5>Add Budget</h5>
      </div>
      {/*  Create Budget*/}
      <div className="flex flex-col items-center gap-3 cursor-pointer">
        <div className="flex w-16 h-16 items-center justify-center bg-blue-200 p-4 rounded-full ">
          <Wallet className="text-blue-500" />
        </div>
        <h5>Add Budget</h5>
      </div>
    </div>
  );
};
export default ActionCard;
