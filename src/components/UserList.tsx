import UserItem from "./UserItem";
import { User } from "../model/User";

type Props = {
    users: User[];
    onClick: (user: User) => void;
}
const UserList = ({users,onClick}: Props) => (
    
        <div>
            {users.map(({name,avatar,id}) => 
                <UserItem
                    key={id}
                    name={name}
                    avatar={avatar}
                    onClick={() => onClick({name,avatar,id})}
                />
            )}
        </div>
    );

export default UserList;
