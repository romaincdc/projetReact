import { useState } from "react";
import { useMountEffects } from "./useMountEffects";
import { createUser } from "../service/api";
import { User } from "../model/User";

const PROFILE_USER_ID = 999;

export const useProfile = () => {
  const [profile, setProfile] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useMountEffects(() => {
    (async () => {
      const nextProfile = createUser(PROFILE_USER_ID);
      setProfile(nextProfile);
      setLoading(false);
    })();
  });

  return { profile, loading };
};
