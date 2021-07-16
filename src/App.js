import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  height: 481px;
  width: 920px;
  border-radius: 25px;
  background-color: #fff;
`;

const BillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 78px;
  width: 100%;
  font-weight: 700;
`;

const BillInput = styled.input`
  background-color: #f3f9fa;
  border-radius: 5px;
  border: none;
  outline: none;
  height: 48px;
  font-weight: 700;
  text-align: right;
  padding-right: 17px;
  cursor: pointer;

  &:hover,
  &:focus {
    border: 2px solid #26c2ae;
  }
`;

const InputContainer = styled.div`
  margin: 48px;
  width: 379px;
  height: 388px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const TipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 40px;
  font-weight: 700;
`;

const TipButton = styled.button`
  height: 48px;
  width: 117px;
  border-radius: 5px;
  background-color: #00474b;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-bottom: 16px;

  &:hover {
    background-color: #9fe8df;
    color: #00474b;
  }
`;

const PeopleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 78px;
  width: 100%;
  font-weight: 700;
`;

const PeopleInput = styled.input`
  background-color: #f3f9fa;
  border-radius: 5px;
  border: none;
  outline: none;
  height: 48px;
  margin-top: 6px;
  font-weight: 700;
  text-align: right;
  padding-right: 17px;
  cursor: pointer;

  &:hover,
  &:focus {
    border: 2px solid #26c2ae;
  }
`;

const ResultContainer = styled.div`
  height: 417px;
  width: 413px;
  background: #00474b;
  border-radius: 15px;
`;

const TipResultWrapper = styled.div`
  /* height: 71px; */
  width: 333px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const TotalResultWrapper = styled.div`
  width: 333px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const ResetButton = styled.button`
  height: 48px;
  width: 333px;
  margin: 0 40px;
  text-transform: uppercase;
  line-height: 30px;

  border-radius: 5px;
  background-color: #26c2ae;
  color: #00474b;
  font-size: 20px;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #9fe8df;
  }
`;

const CustomInput = styled.input`
  height: 48px;
  width: 117px;
  border-radius: 5px;
  background-color: #f3f9fa;
  color: #547878;
  font-size: 24px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-bottom: 16px;
  text-align: center;
  outline: none;

  &:hover,
  &:focus {
    border: 2px solid #26c2ae;
  }
`;

function App() {
  return (
    <Container>
      <Card>
        <InputContainer>
          <BillWrapper>
            Bill
            <BillInput placeholder="0"></BillInput>
          </BillWrapper>
          <TipWrapper>
            Select Tip %
            <div
              style={{
                paddingTop: 16,
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <TipButton value=".05">5%</TipButton>
              <TipButton value=".1">10%</TipButton>
              <TipButton value=".15">15%</TipButton>
              <TipButton value=".25">25%</TipButton>
              <TipButton value=".5">50%</TipButton>
              <CustomInput value="Custom" />
            </div>
          </TipWrapper>
          <PeopleWrapper>
            Number of People
            <PeopleInput placeholder="0"></PeopleInput>
          </PeopleWrapper>
        </InputContainer>
        <ResultContainer>
          <TipResultWrapper>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3>Tip Amount</h3>
              <p>/ person</p>
            </div>
            <h1>$4.27</h1>
          </TipResultWrapper>
          <TotalResultWrapper>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3>Total</h3>
              <p>/ person</p>
            </div>
            <h1>$32.79</h1>
          </TotalResultWrapper>
          <ResetButton>reset</ResetButton>
        </ResultContainer>
      </Card>
    </Container>
  );
}

export default App;
