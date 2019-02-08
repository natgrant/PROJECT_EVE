import request from "superagent";

// const apiEndPoint = "https://haveibeenpwned.com/api/v2/breachedaccount/";
const apiEndPoint = "/api/haveibeenpwned/";
// const proxyUrl = "https://cors-anywhere.herokuapp.com/";

export function getEmail(email) {
  return request.get(apiEndPoint + email).then(res => res.body);
}
