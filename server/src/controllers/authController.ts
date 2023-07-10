import connection from '../config/dbconfig'
import { NextFunction, Request, Response } from 'express';
import { genPassword} from '../middleware'
const passport = require('passport')

export const signup = (req: Request,res: Response,next: NextFunction)=>{
    const saltHash=genPassword(req.body.password);
    const salt=saltHash.salt;
    const hash=saltHash.hash;
    console.log(saltHash);

    connection.query('Insert into users(f_name, l_name, email, wordsLearned, currentlyWords, hash, salt) values(?,?,?,?,?,?,?) ', [req.body.f_name,req.body.l_name, req.body.email, req.body.wordsLearned, req.body.currentlyWords, hash, salt], function(error, results, fields) {
        if (error) 
            {
                console.log(error);
            }
        else
        {
            console.log("Successfully Entered");
        }
       
    });
  
    res.send('success');
  };

export const login = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('local', (err: Error, user: any, info: any) => {
      if (err) {
        return next(err);
      }
  
      if (!user) {
        // Authentication failed
        return res.status(401).send('Authentication failed');
      }
  
      // Authentication successful
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
  
        // Send a success response
        return res.send('Authentication successful');
      });
    })(req, res, next);
  };

export const logout = (req: Request, res: Response) => {
    req.session.destroy((err: any) => {
      if (err) {
        // Handle any error that occurred during session destruction
        console.error(err);
        res.status(500).send('Error occurred during logout');
      } else {
        // Logout successful, redirect to the login page or send a success response
        res.send('Logout successful');
      }
    });
  };