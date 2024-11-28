import jsonwebtoken from 'jsonwebtoken';
import {SECRET} from '../config.js';

export function createAccessToken(payload) {
    return new Promise((resolve,reject)=>{
        jsonwebtoken.sign(
            payload,
            SECRET,
            {
                expiresIn: "1d"
            },
            (error, token) => {
                if (error) reject(error)
                    resolve(token)
            }
        )
    })
}