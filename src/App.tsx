import UserItem from "./components/UserItem";
import UserList from "./components/UserList";
import styled from "@emotion/styled";
import { useUsers } from "./hooks/useUsers";
import { useProfile } from "./hooks/useProfile";
import { useMessage } from "./hooks/useMessage";
import MessageList from "./components/MessageList";
import { User } from "./model/User";
import { useState } from "react";
import UserCurrent from "./components/UserCurrent";




const App = () => {
  const{profile, loading: profileLoading} = useProfile();
  const{users, loading: usersLoading} = useUsers();
  const {messages, loading: messagesLoading} = useMessage();
  const [currentUser, setCurrentUser] = useState<User | null>(null); 
  //const [displayUserCurrent, setDisplayUserCurrent] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [messageList, setMessageList] = useState<string[]>([]);

  const handleSendMessage = () => {
    if(message.trim() !== "") {
      setMessageList([...messageList, message]);
      setMessage("");
    }
  };

  const handleUserClick = (user: User) => {
    setCurrentUser(user);
    setMessageList([]);
    
  };
  
  
    

  
  if(profileLoading || usersLoading || !profile || messagesLoading) {
    return <div>Loading...</div>
  }

  return (
    <Appcontainer>
    
      <UserListContainer>
      <UserList users={users} onClick={handleUserClick}/>  
      <UserProfile>
      <UserItem name={profile.name} avatar={profile.avatar} />
      </UserProfile>   
      </UserListContainer>


      <ChatContainer>
      <UserChat>
      <UserCurrent currentUser={currentUser}/>
      </UserChat>
      
      <MessageList messages={messages} author={currentUser}/>
      
        {messageList.map((msg, index) => (
          <div key={index} className="message">
                 <NewMessage> 
              <UserCurrent currentUser={profile}/>   
              <MessageText>{msg}</MessageText>          
            
            </NewMessage>
          </div>
        ))}
      
      
      <InputBox>
      <input
        
          type="text"
          placeholder="Envoyer un message  "
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        
        />
        <button onClick={handleSendMessage}>Envoyer</button>
      </InputBox>
      

      </ChatContainer>

    </Appcontainer>
  )
}
const Appcontainer = styled.div`
display: flex;

`
const UserListContainer = styled.div`
width: 25%;
border-right: 1px solid #ccc;
height: 100vh;
overflow-y: scroll;
position: relative;
background-color:#2C2F33;
`
const ChatContainer = styled.div`
flex: 1;
height: 100vh;
width: 100%;
overflow-y: scroll;
position: relative;
background-color: #36393E;

`
const UserProfile = styled.div`
position :sticky; 
bottom:0; 
left:0;
width  : 16rem;
height : 50px;
background : #23272A;

`  
const UserChat = styled.div`
position :sticky;
top:0;
width  : 100%;
height : 50px;
background : #23272A;
opacity: 1;
border: 1px solid #000000; /* Bordure simple */
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2); /* Effet d'ombre */


` 
const InputBox = styled.div`
position :sticky;
bottom:0;

height : 50px;
display: flex;
  align-items: center;
  background-color: #36393f;
  padding: 10px;
  border-top: 1px solid #2f3136;

  input {
    flex-grow: 1;
    padding: 10px 12px;
    border: none;
    border-radius: 4px;
    background-color: #40444b;
    color: #fff;
    font-size: 14px;
    outline: none;
    transition: background-color 0.3s;

    &::placeholder {
      color: #b9bbbe;
    }

    &:hover {
      background-color: #3e4147;
    }

    &:focus {
      background-color: #40444b;
    }
  }

  button {
    margin-left: 10px;
    background-color: #7289da;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #677bc4;
    }
  }
  `
 const NewMessage = styled.div`
   display: flex;
  flex-direction: column;`

const MessageText = styled.text`
  margin-top: -10px;
  margin-left: 50px;
`;




export default App
