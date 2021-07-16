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
  const [{ billInput, setBillInput, peopleInput, tipAmount }] =
    useContext(SplitterContext);

  console.log("this is billInput from Results component " + billInput);

  let tipPerPerson = parseFloat(billInput * tipAmount).toFixed(2);
  let totalPerPerson = parseFloat(
    (billInput * tipAmount) / peopleInput
  ).toFixed(2);

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
      <ResetButton onClick={() => setBillInput(0)}>reset</ResetButton>
    </ResultsContainer>
  );
};

export default Results;
