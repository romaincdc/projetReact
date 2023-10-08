import styled from "@emotion/styled";
import { User } from "../model/User";

type Props = {
  message: string;
  author: User | null;
};

export const Message = ({ message, author }: Props) => {
  return (
    <Container>
      <Avatar src={author?.avatar} />
      <UserInfo>
        <UserName>{author?.name}</UserName>
        <MessageText>{message}/</MessageText>
      </UserInfo>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
`;
const Avatar = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 2rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  font-weight: bold;
`;

const MessageText = styled.div`
  margin-top: 4px;
`;

export default Message;
