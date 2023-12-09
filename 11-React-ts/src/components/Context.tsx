import { useContext } from 'react';
import { AppContext } from '../App';

const Context = () => {
  const details = useContext(AppContext);

  return (
    <div>
      {details && (
        <ul>
          <li>Language: {details.language}</li>
          <li>Framework: {details.framework}</li>
          <li>Projects: {details.projects}</li>
        </ul>
      )}
    </div>
  );
};

export default Context;
