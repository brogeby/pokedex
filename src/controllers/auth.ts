import { Request, Response } from 'express'
import { generateToken } from '../services/auth'

export const login = (req: Request, res: Response) => {
  const token = generateToken(req.body)

  res.status(200).json({ token })
}
