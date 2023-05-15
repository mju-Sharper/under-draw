import styled from 'styled-components';

import Arrow from '../../assets/Arrow.svg';
import UserBox from '../../pages/RoomPage/UserBox';

interface UserListProps {
  userLength?: number;
  users?: User[];
}

const UserContainer = ({ userLength, users }: UserListProps) => (
  <UserContainerWrap>
    <CurrentUserCount>현재 접속자수: {userLength}명</CurrentUserCount>
    <CurrentUserBox>
      <ArrowImg src={Arrow} />
      {users?.map((item, idx) => (
        <UserBox key={idx} name={item.userId} />
      ))}
    </CurrentUserBox>
  </UserContainerWrap>
);

const UserContainerWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 854px;
  margin: 38px auto;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.NAVY};
`;

const CurrentUserCount = styled.p`
  text-align: right;
  ${({ theme }) => theme.fonts.B_POINT_18}
  color: ${({ theme }) => theme.colors.WHITE};
  margin: 10px 27px 0 0;
`;

const CurrentUserBox = styled.div`
  width: 300px;
  height: 750px;
  margin: 0 auto;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ArrowImg = styled.img`
  position: relative;
  /* CurrentUserBox 기준으로 계산 */
  bottom: -375px;
  left: -135px;
  width: 30px;
  height: 30px;
`;

export default UserContainer;
