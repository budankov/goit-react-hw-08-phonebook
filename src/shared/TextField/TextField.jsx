import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import './TextField.module.scss';

const TextField = ({ label, hadleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} onChange={hadleChange} {...props} />
    </div>
  );
};

export default TextField;
