import styled from 'styled-components';

export const Container = styled.main`
  flex: 1;
  color: #FFF;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  .gridIcon {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, .1);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .gridTitle {
    font-size: 23px;
    font-weight: bold;
    margin-top: 5px;

  }

  .gridInfo {
    font-size: 12px;
    margin-top: 14px;
  }
`;
