import connection from '../config/dbconfig'
import { NextFunction, Request, Response } from 'express';
import { genPassword, validPassword} from '../middleware'
import jwt from 'jsonwebtoken'
require('dotenv').config();

export const signup = (req: Request,res: Response,next: NextFunction)=>{
    const saltHash=genPassword(req.body.password);
    const salt=saltHash.salt;
    const hash=saltHash.hash;

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
    const sql = "SELECT * FROM users WHERE email = ?"
    connection.query(sql, [req.body.email, req.body.password], (err, data) => {
      if(err) return res.json({message: 'Server side error', error: err})

      const isValid = validPassword(req.body.password, data[0].hash, data[0].salt);
      if(data.length > 0 && isValid) {
        const email = data[0].email;
        const userId = data[0].id; 
        const token = jwt.sign({email, id: userId}, `${process.env.JWT_SECRET}`, {expiresIn: '1d'});
        res.cookie('token', token, {secure: true, sameSite: 'none'}); 
        return res.json({Status: 'Success', userId: userId})
      } else {
        return res.json({message: 'No authorized'})
      }

    })
  };
  
export const logout = (req: Request, res: Response) => {
  res.clearCookie('token'); 
  return res.json({Status: 'Success'})
    };

export function isAuth(req: Request, res: Response) {
      const token = req.cookies.token;
      if (!token) {
        return res.json({ message: "User not authenticated "});
      } else {
        jwt.verify(token, `${process.env.JWT_SECRET}`, (err: any, decoded: any) => {
          if (err) {
            return res.json({ message: "User not authenticated", error: err });
          } else {
              res.send(decoded)
          }
        });
      }
    }