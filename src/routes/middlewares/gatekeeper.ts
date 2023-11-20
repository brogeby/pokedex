import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../../services/auth'

export const authenticateJWT = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('Authorization')?.split(' ')[1]

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  try {
    verifyToken(token)
    next()
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' })
    next()
  }
}
