import { Message } from "../model/Message";
import { User } from "../model/User";

import MessageItem from "./MessageItem";

type Props = {
    messages: Message[];
    author: User | null;
    
}
export const MessageList = ({messages,author}: Props) => (
    
        <div>
            {messages.map(({message,id}) => 
                <MessageItem
                    key={id}
                    message={message}
                    author={author}
                    
                />
            )}
        </div>
    );

export default MessageList;
