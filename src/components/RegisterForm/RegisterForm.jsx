import useForm from 'shared/hooks/useForm';
import TextField from 'shared/TextField/TextField';
import Button from 'shared/Button/Button';
import fields from './fields';

import initialState from './initialState';

import styles from './RegisterForm.module.scss';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <TextField value={name} hadleChange={handleChange} {...fields.name} />
      <TextField value={email} hadleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        hadleChange={handleChange}
        {...fields.password}
      />
      <Button>Register</Button>
    </form>
  );
};

export default RegisterForm;
