import styled from 'styled-components';

interface userName {
  name?: string;
}

const UserBox = ({ name }: userName) => (
  <UserNameBox>
    <UserName>{name}</UserName>
    <UserNameUnderLine />
  </UserNameBox>
);

const UserNameBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 38px;
  margin: 17px auto 0;
`;

const UserName = styled.p`
  height: 27px;
  ${({ theme }) => theme.fonts.B_POINT_20}
  color: ${({ theme }) => theme.colors.WHITE};
  margin: 0;
`;

const UserNameUnderLine = styled.div`
  width: 200px;
  margin-top: 6px;
  border: 3px solid ${({ theme }) => theme.colors.LIGHT_GRAY};
  border-radius: 3px;
`;

export default UserBox;
