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
  const [{ billInput, peopleInput, tipAmount }] = useContext(SplitterContext);

  console.log("this is billInput from Results component " + billInput);

  return (
    <ResultsContainer>
      <div>
        <TipResultWrapper>
          <StyledResultTitle>
            <h3>Tip Amount</h3>
            <p>/ person</p>
          </StyledResultTitle>
          <h1>$0.00</h1>
        </TipResultWrapper>
        <TotalResultWrapper>
          <StyledResultTitle>
            <h3>Total</h3>
            <p>/ person</p>
          </StyledResultTitle>
          <h1>${billInput}</h1>
        </TotalResultWrapper>
      </div>
      <ResetButton>reset</ResetButton>
    </ResultsContainer>
  );
};

export default Results;
