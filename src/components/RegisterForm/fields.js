const fields = {
  name: {
    type: 'text',
    name: 'name',
    require: true,
    label: 'User name',
  },
  email: {
    type: 'email',
    name: 'email',
    require: true,
    label: 'User email',
  },
  password: {
    type: 'password',
    name: 'password',
    require: true,
    label: 'User password',
  },
};

export default fields;
