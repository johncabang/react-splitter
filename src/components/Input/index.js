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
  const [
    {
      billInput,
      setBillInput,
      peopleInput,
      setPeopleInput,
      tipAmount,
      setTipAmount,
    },
  ] = useContext(SplitterContext);
  // console.log(billInput);

  return (
    <InputContainer>
      <BillWrapper>
        Bill
        <BillInput
          placeholder={billInput}
          onChange={(event) => setBillInput(event.target.value)}
        ></BillInput>
        {console.log("This is billInput " + billInput)}
      </BillWrapper>
      <TipWrapper>
        Select Tip %
        <StyledSelectTipWrapper>
          <TipButton onClick={() => setTipAmount(0.05)}>5%</TipButton>
          <TipButton onClick={() => setTipAmount(0.1)}>10%</TipButton>
          <TipButton onClick={() => setTipAmount(0.15)}>15%</TipButton>
          <TipButton onClick={() => setTipAmount(0.25)}>25%</TipButton>
          <TipButton onClick={() => setTipAmount(0.5)}>50%</TipButton>
          <CustomInput
            placeholder="Custom"
            onChange={(event) => setTipAmount(event.target.value)}
          />
        </StyledSelectTipWrapper>
      </TipWrapper>
      <PeopleWrapper>
        Number of People
        <PeopleInput
          placeholder={peopleInput}
          onChange={(event) => setPeopleInput(event.target.value)}
        ></PeopleInput>
        {console.log("This is # of peopleInput " + peopleInput)}
      </PeopleWrapper>
      {console.log("This is the " + tipAmount)}
    </InputContainer>
  );
};

export default Input;
