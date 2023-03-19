import jwt from 'jsonwebtoken';

export const generateToken = (user: string):string => {
    const token = jwt.sign(
        {user},
        process.env.JWT_SECRET!,
        {expiresIn: 60*60*24}
    )

    return token;
}