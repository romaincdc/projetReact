import { useState } from "react";
import { useMountEffects } from "./useMountEffects";
import { getUsers } from "../service/api";
import { User } from "../model/User";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useMountEffects(() => {
    (async () => {
      const nextUsers = await getUsers();
      setUsers(nextUsers);
      setLoading(false);
    })();
  });

  return { users, loading };
};
