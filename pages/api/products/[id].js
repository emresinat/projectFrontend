import axios from "axios";

async function handler(req, res) {
  const id = req.query.id;
  delete req.query.id;
  const query = req.query;
  const url = `${process.env.BACKEND_URL}/products/${id}`;
  if (
    req.method === "GET" ||
    req.method === "DELETE" ||
    req.method === "PUT"
  ) {
    const method = req.method;
    const inputData = req.body;

    try {
      const result = await axios({
        method: method,
        url,
        ...(inputData && { data: inputData }),
        ...(query && { params: query }),
      });
      res.status(result.status).json(result.data);
      return;
    } catch (err) {
      res.status(err?.response?.status || 500).json({
        status: "error",
        error: err?.response?.data?.message || err.message,
        data: err?.response?.data?.data,
        errorCode: err?.response?.data?.errorCode,
      });
      return;
    }
  } else {
    res.status(405).json({ status: "Method Not Allowed" });
    return;
  }
}

export default handler;
