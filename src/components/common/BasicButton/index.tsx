import styled from 'styled-components';

export const BasicButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.PURPLE};
`;
