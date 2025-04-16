import axios from "axios"

export const devURL = 'http://localhost:3000'

export async function postFetch(endpoint, reqBody) {
  const resp = await axios.request({
    url: `${devURL}/api${endpoint}`,
    method: 'POST',
    data: reqBody
  })

  return resp.data
}