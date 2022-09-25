import axios from 'axios';

async function handler(req, res) {
  const query = req.query;
  const url = `${process.env.BACKEND_URL}/products`;
  if (req.method === "GET" || req.method === "POST") {
    const method = req.method;
    const inputData = req.body;

    try {
      const result = await axios({
        method: method,
        url,
        headers: {
          "Content-Type": "application/json",
        },
        ...(inputData && { data: inputData }),
        ...(query && { params: query }),
      });
      res.status(result.status).json(result.data);
      return;
    } catch (err) {
      res.status(err?.response?.status || 500).json({
        status: "error",
        error: err?.response?.data?.message || err.message,
      });
      return;
    }
  } else {
    res.status(405).json({ status: "Method Not Allowed" });
    return;
  }
}

export default handler;
