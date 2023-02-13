export default function validate(values) {
  const errors = {};
  if (!values.email) {
      errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
  }
  if (!values.name) {
      errors.name = 'Name is required';
  }
  if (!values.message) {
      errors.message = "Message field can't be empty";
  }
  return errors;
}
