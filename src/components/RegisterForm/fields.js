const fields = {
  name: {
    type: 'text',
    name: 'name',
    required: true,
    label: 'User name',
  },
  email: {
    type: 'email',
    name: 'email',
    required: true,
    label: 'User email',
  },
  password: {
    type: 'password',
    name: 'password',
    required: true,
    label: 'User password',
  },
};

export default fields;
