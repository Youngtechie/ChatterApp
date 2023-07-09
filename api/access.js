export const handler = async (event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Hello World!',
      }),
    }
  }
// app.post('/postContent', (req, res) => {
//   // Access the received data from the request body
//   const { contentUrl } = req.body; // Destructure contentUrl from req.body

//   axios
//     .get(`${contentUrl}`)
//     .then((response) => {
//       // Process the response
//       res.send(response.data);
//     })
//     .catch((error) => {
//       // Handle any errors
//       console.error(error);
//       res.status(500).send('Error fetching content');
//     });
// });

// app.post('/access', (req, res) => {
//   // Access the server
//   const { accessUrl } = req.body;
//   // Destructure accessUrl from req.body
//   axios.get(`${accessUrl}`).then((response) => {
//     res.json(response.data);
//   });
// });

// Start the Express server
// const handler = serverless(app);

// export { handler };