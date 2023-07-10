import axios from "axios";

export default const handler = async (req,res) => {
    try {
    const eventBody = JSON.parse(req.body);
    const contentUrl = eventBody.contentUrl; // Destructure contentUrl from req.body
    const response = await axios.get(contentUrl);
    const content = response.data;

    res.status(200).json({
      content: content,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "An error occurred.",
    });
    }
}
