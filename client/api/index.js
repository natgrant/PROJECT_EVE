import request from 'superagent'

const apiEndPoint = ('https://haveibeenpwned.com/api/v2/breachedaccount/')

export function getEmail(email) {
  return request.get(apiEndPoint + email).set('User-Agent', 'Firefox').then(res => { return res.body })
} 
