import { NextFunction, Request, Response } from 'express';
import connection from './config/dbconfig';
import crypto from 'crypto'
import jwt from 'jsonwebtoken'

export function validPassword(password: any,hash: any,salt: any){
    const hashVerify=crypto.pbkdf2Sync(password,salt,10000,60,'sha512').toString('hex');
    return hash === hashVerify;
}

export function genPassword(password: any){
    const salt=crypto.randomBytes(32).toString('hex');
    const genhash=crypto.pbkdf2Sync(password,salt,10000,60,'sha512').toString('hex');
    return {salt:salt,hash:genhash};
}

export function userExists(req: Request,res: Response,next: NextFunction)
{
    connection.query('Select * from users where email=? ', [req.body.email], function(error, results, fields) {
        if (error) 
            {
                console.log(error);
            }
       else if(results.length>0) 
         {
            res.redirect('/signup')
        }
        else
        {
            next();
        }
       
    });
}

export function isAuthMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ message: "User authenticated not"});
    } else {
      jwt.verify(token, "our-jsonwebtoken-secret-key", (err: any, decoded: any) => {
        if (err) {
          return res.json({ message: "User authenticated not", error: err });
        } else {
            next()
        }
      });
    }
  }
