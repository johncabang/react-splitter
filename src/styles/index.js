import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  height: 481px;
  width: 920px;
  border-radius: 25px;
  background-color: #fff;
`;

export const BillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 78px;
  width: 100%;
  font-weight: 700;
`;

export const BillInput = styled.input`
  background-color: #f3f9fa;
  border-radius: 5px;
  border: none;
  outline: none;
  height: 48px;
  font-weight: 700;
  text-align: right;
  padding-right: 17px;
  cursor: pointer;
  margin-top: 6px;

  &:hover,
  &:focus {
    border: 2px solid #26c2ae;
  }
`;

export const InputContainer = styled.div`
  margin: 48px;
  width: 379px;
  height: 388px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const TipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 40px;
  font-weight: 700;
`;

export const TipButton = styled.button`
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
    transition: 0.5s all ease;
  }
`;

export const PeopleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 78px;
  width: 100%;
  font-weight: 700;
`;

export const PeopleInput = styled.input`
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

export const ResultsContainer = styled.div`
  height: 417px;
  width: 413px;
  background: #00474b;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 40px 0;
`;

export const TipResultWrapper = styled.div`
  width: 333px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const TotalResultWrapper = styled.div`
  width: 333px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const ResetButton = styled.button`
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
    transition: 0.5s all ease;
  }
`;

export const CustomInput = styled.input`
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

export const StyledResultTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledSelectTipWrapper = styled.div`
  padding-top: 16px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
