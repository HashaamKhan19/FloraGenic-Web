import React from "react";

const Counter = () => {
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className="flex flex-row">
      <button
        className="bg-slate-200 px-4 py-2 rounded-sm"
        onClick={handleIncrement}
      >
        +
      </button>
      <div className="mx-4 mt-2 font-semibold">{quantity}</div>
      {quantity == 1 ? (
        <button
          className="bg-slate-100 px-4 py-2 rounded-sm"
          onClick={handleDecrement}
          disabled
        >
          <p className="text-slate-300 rounded-sm">-</p>
        </button>
      ) : (
        <button
          className="bg-slate-200 px-4 py-2 rounded-sm"
          onClick={handleDecrement}
        >
          -
        </button>
      )}
    </div>
  );
};

export default Counter;
