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
  title: {
    required_error: 'Title field cannot be empty',
    min_error: 'Title must contain at least 2 characters',
    max_error: 'Title should be no more than 64 characters long',
  },
  category: {
    required_error: 'Category field cannot be empty',
    min_error: 'Category must contain at least 2 characters',
    max_error: 'Category should be no more than 64 characters long',
  },
  amount: {
    required_error: 'Amount field cannot be empty',
    postive_error: 'Amount must be a positive value',
    decimal_error: 'Amount must be a number with up to 2 decimal places',
  },
  date: {
    required_error: 'Date field cannot be empty',
  },
};
