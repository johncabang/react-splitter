import React, { useState, createContext } from "react";

const SplitterContext = createContext();

const SplitterProvider = ({ children }) => {
  const [billInput, setBillInput] = useState(10);
  const [peopleInput, setPeopleInput] = useState(20);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const value = {
    billInput,
    setBillInput,
    peopleInput,
    setPeopleInput,
    tipAmount,
    setTipAmount,
    total,
    setTotal,
  };

  return (
    <SplitterContext.Provider value={[value]}>
      {children}
    </SplitterContext.Provider>
  );
};

export { SplitterContext, SplitterProvider };
