import axios from "axios";

export const handler = async (event) => {
    const eventBody = JSON.parse(event.body)
    const contentUrl  = eventBody.contentUrl; // Destructure contentUrl from req.body
    const res = axios.get(`${contentUrl}`)
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/javascript', // Set the Content-Type header to JavaScript
        },
        body: JSON.stringify({
            content: (await res).data
        })
    }
}