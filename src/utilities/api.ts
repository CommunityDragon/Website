import { NextApiResponse } from 'next'

/**
 * formats an error object from ghost
 */
 export const apiResponse = (res: NextApiResponse, promise: Promise<any>) => (
  promise.then(data => {
    res.json(data)
    res.end()
  }).catch(e => {
    res.status(e.response.status).json({ error: e.message, status: e.response.status })
    res.end()
  })
)