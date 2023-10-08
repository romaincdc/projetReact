import { useState } from "react";
import { useMountEffects } from "./useMountEffects";
import { getMessage } from "../service/api";
import { Message } from "../model/Message";


export const useMessage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  

  useMountEffects(() => {
  (async () => {
    const nextMessage = await getMessage();
    setMessages(nextMessage);
    setLoading(false);
    })();
    });

  return { messages,loading };
}

