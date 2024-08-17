import { generateSignature } from './generateSignature'

interface IVerifyOptions {
  token: string
  secret: string
}

export function verify({ token, secret }: IVerifyOptions) {
  const [headersent, payloadSent, signatureSent] = token.split('.')

  const signature = generateSignature({
    secret,
    header: headersent,
    payload: payloadSent
  })

  if (signature !== signatureSent) {
    throw new Error('Invalid JWT token')
  }

  const decodedPayload = JSON.parse(
    Buffer
      .from(payloadSent, 'base64url')
      .toString('utf-8')
  )

  if (decodedPayload.exp < Date.now()) {
    throw new Error('expired token')
  }

  return decodedPayload
}
