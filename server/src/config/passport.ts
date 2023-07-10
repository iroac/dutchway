import { Strategy as LocalStrategy } from 'passport-local';
import { validPassword } from '../middleware';
import connection from './dbconfig';


const customFields={
    usernameField: 'email',
    passwordField: 'password',
  };
  const verifyCallback = (email: string, password: string, done: Function) => {
    connection.query('SELECT * FROM users WHERE email = ? ', [email], (error, results: any[], fields: any) => {
      if (error) {
        return done(error);
      }
      if (results.length === 0) {
        return done(null, false);
      }
  
      const isValid = validPassword(password, results[0].hash, results[0].salt);
  
      if (isValid) {
        return done(null, results[0]);
      } else {
        return done(null, false);
      }
    });
  };
  export const strategy=new LocalStrategy(customFields,verifyCallback);