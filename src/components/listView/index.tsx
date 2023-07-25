import './listView.css';

interface Email {
  id: string;
  email: string;
}

interface ListProps {
  list: Email[];
}

export default function ListView({ list = [] }: ListProps) {
  return (
    <ul className="email-list">
      {list.map((e) => (
        <li key={e.id}>{e.email}</li>
      ))}
    </ul>
  );
}
