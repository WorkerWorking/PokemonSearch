import { FC } from 'react';
import Search from './Search';
import './style.css';

export const App: FC<{ name: string }> = ({}) => {
  return (
    <div>
      <h1>Pokemon Search!</h1>
      <Search />
    </div>
  );
};
