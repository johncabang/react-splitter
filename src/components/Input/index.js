import React from "react";
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
  return (
    <InputContainer>
      <BillWrapper>
        Bill
        <BillInput placeholder="0"></BillInput>
      </BillWrapper>
      <TipWrapper>
        Select Tip %
        <StyledSelectTipWrapper>
          <TipButton value=".05">5%</TipButton>
          <TipButton value=".1">10%</TipButton>
          <TipButton value=".15">15%</TipButton>
          <TipButton value=".25">25%</TipButton>
          <TipButton value=".5">50%</TipButton>
          <CustomInput value="Custom" />
        </StyledSelectTipWrapper>
      </TipWrapper>
      <PeopleWrapper>
        Number of People
        <PeopleInput placeholder="0"></PeopleInput>
      </PeopleWrapper>
    </InputContainer>
  );
};

export default Input;
