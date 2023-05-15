import styled from 'styled-components';

import Keyboard from '../../assets/Keyboard.svg';

interface ChatContentProps {
  chat?: ChatMsg[];
  sendMsg?: string;
  onChange?: (_e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

// 채팅 컴포넌트 (StatusBox 안에 들어가는 요소들)
const ChatContainer = ({
  chat,
  sendMsg,
  onChange,
  onClick,
}: ChatContentProps) => (
  <>
    <ChatInputBox>
      <ChatInput type="text" value={sendMsg} onChange={onChange} />
      <button onClick={onClick}>
        <KeyBoardImg src={Keyboard} />
      </button>
    </ChatInputBox>
    <ChatDetailBox>
      {chat?.map((msg, idx) => (
        <ChatContent key={idx}>
          <>
            {msg.admin ? (
              <div style={{ display: 'flex' }}>
                <AdminChat>{msg.username}</AdminChat>: {msg.message}
              </div>
            ) : (
              <>
                {msg.username}: {msg.message}
              </>
            )}
          </>
        </ChatContent>
      ))}
    </ChatDetailBox>
  </>
);

const ChatInputBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 400px;
  height: 35px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  margin: 10px auto 15px;
  padding: 10px;
  box-sizing: border-box;
`;

const ChatInput = styled.input`
  flex: 1;
  border: none;
`;

const KeyBoardImg = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

const ChatDetailBox = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 150px;
  overflow: auto;
  padding: 10px 35px;
`;

const Content = styled.p`
  text-align: left;
  ${({ theme }) => theme.fonts.B_POINT_20}
  color: ${({ theme }) => theme.colors.WHITE};
  margin: 10px 0px;
`;

const ChatContent = styled(Content)`
  ${({ theme }) => theme.fonts.B_POINT_17}
  margin: 3px 0;
`;

const AdminChat = styled.p`
  color: #62b9b9;
`;

export default ChatContainer;
