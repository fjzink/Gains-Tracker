import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-name"
        label="Email"
        className={classes.textField}
        value={values.email}
        onChange={handleChange('email')}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="Username"
        className={classes.textField}
        value={values.username}
        onChange={handleChange('username')}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="Password"
        className={classes.textField}
        value={values.password}
        onChange={handleChange('password')}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="Confirm Password"
        className={classes.textField}
        value={values.passwordConfirm}
        onChange={handleChange('passwordConfirm')}
        margin="normal"
      />
    </form>
  );
}
