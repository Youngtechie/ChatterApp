import axios from 'axios'

export const handler = async (event) => {
  const eventBody = JSON.parse(event.body)
  const contentUrl = eventBody.contentUrl // Destructure contentUrl from req.body
  const response = axios.get(contentUrl)

  return {
    statusCode: 200,
    body: JSON.stringify({
      content: (await response).data
    })
  }
}
