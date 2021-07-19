import React, { useContext } from "react";

import { SplitterContext } from "../../hooks/SplitterContext";

import {
  ResultsContainer,
  TipResultWrapper,
  StyledResultTitle,
  TotalResultWrapper,
  ResetButton,
} from "../../styles";

const Results = () => {
  const [{ billInput, setBillInput, peopleInput, setPeopleInput, tipAmount }] =
    useContext(SplitterContext);

  console.log("This is billInput from Results component " + billInput);

  let tipPerPerson = parseFloat(billInput * tipAmount).toFixed(2);
  let totalPerPerson = parseFloat(
    (billInput * tipAmount) / peopleInput
  ).toFixed(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    // clearing the values
    setBillInput(0);
    setPeopleInput(0);
  };

  return (
    <ResultsContainer>
      <div>
        <TipResultWrapper>
          <StyledResultTitle>
            <h3>Tip Amount</h3>
            <p>/ person</p>
          </StyledResultTitle>
          <h1>${tipPerPerson}</h1>
        </TipResultWrapper>
        <TotalResultWrapper>
          <StyledResultTitle>
            <h3>Total</h3>
            <p>/ person</p>
          </StyledResultTitle>
          {peopleInput ? <h1>${totalPerPerson}</h1> : <h1>${peopleInput}</h1>}
        </TotalResultWrapper>
      </div>
      <ResetButton onClick={handleSubmit}>reset</ResetButton>
    </ResultsContainer>
  );
};

export default Results;
