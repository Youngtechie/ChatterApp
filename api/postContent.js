import axios from "axios";

export const handler = async (event, context) => {
    const { contentUrl } = event.body; // Destructure contentUrl from req.body

  const res = axios.get(`${contentUrl}`)
  const data = await res.data
console.log(data)
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/javascript', // Set the Content-Type header to JavaScript
        },
        body: JSON.stringify({
            message: data,
        }),
    }
}