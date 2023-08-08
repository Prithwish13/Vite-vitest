import React, { useState } from 'react';
import './css/Home.css';
import ListView from '../../components/listView';
import { isValidEmail } from '../../utils/helper';

interface Email {
  id: string;
  email: string;
}

function Home() {
  const [email, setEmail] = useState<string>('');
  const [emailsList, setEmailsList] = useState<Email[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim() !== '' && isValidEmail(email)) {
      const newEmail: Email = {
        id: Date.now().toString(),
        email,
      };

      setEmailsList([...emailsList, newEmail]);
      setEmail('');
    }
  };

  return (
    <div className="Home">
      <h1>Email List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Email</button>
      </form>

      <ListView list={emailsList} />
    </div>
  );
}

export default Home;
