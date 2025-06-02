export const FORM_ERROR_MESSAGES = {
  email: {
    required_error: 'Email field cannot be empty',
    match_pattern_error: 'Must be a valid email',
  },
  userName: {
    required_error: 'Username field cannot be empty',
    min_error: 'Username must contain at least 2 characters',
    max_error: 'Username should be no more than 64 characters long',
  },
  password: {
    required_error: 'Password field cannot be empty',
    match_password_error: 'Passwords does not match',
    match_pattern_error:
      'Password must contains at least one letter, one number and one special character',
    min_error: 'Password must be atleast 8 characters',
  },
  confirmPassword: {
    required_error: 'Confirm password field cannot be empty',
  },
};
