import React, { useContext } from "react";

import { SplitterContext } from "../../hooks/SplitterContext";

import {
  InputContainer,
  BillWrapper,
  BillInput,
  TipWrapper,
  StyledSelectTipWrapper,
  TipButton,
  CustomInput,
  PeopleWrapper,
  PeopleInput,
} from "../../styles";

const Input = () => {
  const [{ billInput, peopleInput, tipAmount, setTipAmount }] =
    useContext(SplitterContext);
  // console.log(billInput);

  return (
    <InputContainer>
      <BillWrapper>
        Bill
        <BillInput placeholder={billInput}></BillInput>
      </BillWrapper>
      <TipWrapper>
        Select Tip %
        <StyledSelectTipWrapper>
          <TipButton onClick={() => setTipAmount(0.05)}>5%</TipButton>
          <TipButton onClick={() => setTipAmount(0.1)}>10%</TipButton>
          <TipButton onClick={() => setTipAmount(0.15)}>15%</TipButton>
          <TipButton onClick={() => setTipAmount(0.25)}>25%</TipButton>
          <TipButton onClick={() => setTipAmount(0.5)}>50%</TipButton>
          <CustomInput value="Custom" />
        </StyledSelectTipWrapper>
      </TipWrapper>
      <PeopleWrapper>
        Number of People
        <PeopleInput placeholder={peopleInput}></PeopleInput>
      </PeopleWrapper>
      {console.log(tipAmount)}
    </InputContainer>
  );
};

export default Input;
