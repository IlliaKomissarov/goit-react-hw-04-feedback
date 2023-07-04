import styled from 'styled-components';


export const Btn = styled.button`
  width: 90px;
  height: 35px;
  margin: 15px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  outline: none;
  border-radius: 4px;
  color: #fff;
  background-color: #34a853;
  cursor: pointer;
  text-shadow: 1px 0 1px rgba(255, 255, 255, 0.44);
  transform: scale(1.1);
  letter-spacing: 2px;
  transition: transform 250ms;

  &:hover {
    transform: scale(0.9);
    font-weight: normal;
    text-transform: uppercase;
    color: #34a853;
    background-color: #fff;
    border: 1px solid #34a853;
    letter-spacing: 0;
    transition: transform 500ms;
  }

  &:not(:last-child) {
    margin-right: 15px;
  }
`;