import { useState } from "react";

export const useNewMessage = () => {
  const [message, setMessage] = useState<string>(""); // État du message

  // Fonction pour gérer la soumission du message
  const handleSubmit = (newMessage: string) => {
    setMessage(newMessage);
  };

  return { message, setMessage, handleSubmit };
};
