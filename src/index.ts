import { sign } from './jwt/sign';
import { verify } from './jwt/verify';

const secret = 'chavehipermegasecreta'

const token = sign({
  exp: Date.now() + (24 * 60 * 60 * 1000),
  data: {
    sub: '@pedrobadm',
  },
  secret,
})

const decoded = verify({
  token,
  secret
})

console.log({ decoded })
