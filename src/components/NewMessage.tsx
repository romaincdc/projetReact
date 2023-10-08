// NewMessage.tsx
//import React, { useState } from 'react';
import { useNewMessage } from "../hooks/useNewMessage";

export const NewMessage = () => {
  const { message, setMessage, handleSubmit } = useNewMessage();

  return (
    <div className="new-message">
      <input
        type="text"
        placeholder="Écrivez un message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={() => handleSubmit(message)}>Envoyer</button>
    </div>
  );
};

export default NewMessage;
