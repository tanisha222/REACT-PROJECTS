import React, { useState } from "react";

const CurrencyConverter = () => {
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  const handleConvert = () => {
    const conversionRate = 83.2;
    if (fromCurrency === "usd" && toCurrency === "inr") {
      setToAmount((fromAmount * conversionRate).toFixed(2));
    } else if (fromCurrency === "inr" && toCurrency === "usd") {
      setToAmount((fromAmount / conversionRate).toFixed(2));
    } else {
      setToAmount(fromAmount);
    }
  };

  return (
    <div className="min-h-screen bg-[#13235b] flex flex-col items-center justify-center px-4 space-y-6">
      <h1 className="text-white text-3xl font-bold">Currency Converter</h1>

      <div className="bg-white rounded-2xl p-8 w-full max-w-sm space-y-6 shadow-lg">
        <div>
          <label className="text-gray-700 font-semibold">From</label>
          <div className="flex space-x-2 mt-1">
            <input
              type="number"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 text-black"
            />
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm">Currency Type</label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="px-3 py-1 rounded-md border border-gray-300 text-black"
              >
                <option value="usd">usd</option>
                <option value="inr">inr</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleSwap}
            className="bg-blue-500 px-6 py-1 rounded-md text-white font-medium hover:bg-blue-600 transition"
          >
            swap
          </button>
        </div>

        <div>
          <label className="text-gray-700 font-semibold">To</label>
          <div className="flex space-x-2 mt-1">
            <input
              type="number"
              value={toAmount}
              disabled
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 text-black"
            />
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm">Currency Type</label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="px-3 py-1 rounded-md border border-gray-300 text-black"
              >
                <option value="usd">usd</option>
                <option value="inr">inr</option>
              </select>
            </div>
          </div>
        </div>

        <button
          onClick={handleConvert}
          className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-md font-bold"
        >
          Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
        </button>
      </div>
    </div>
  );
};

export default CurrencyConverter;
