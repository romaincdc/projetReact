import styled from "@emotion/styled";

type Props = {
  avatar: string;
  name: string | null;
  onClick?: () => void;
};

const User = ({ avatar, name, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <Avatar src={avatar} />
      <div>{name}</div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;

  border-radius: 0.25rem;
  transition: background-color 0.1s ease-in-out;
  cursor: ${({ onClick }) => (onClick ? "pointer" : "initial")};
  border-radius: 0.25rem;

  &:hover {
    background-color: #4b4b4b;
  }
`;

const Avatar = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 2rem;
`;
export default User;
