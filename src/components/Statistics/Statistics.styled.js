import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding-left: 5px;
  margin: 0;
`;

export const Item = styled.li`
  font-size: 20px;
  margin: 10px;
  color: #34a853;
  text-shadow: 1px 0 1px rgba(255, 255, 255, 0.44);
  letter-spacing: 2px;
`;

export const Value = styled.span`
  font-weight: 700;
  color: #ffffff;
`;