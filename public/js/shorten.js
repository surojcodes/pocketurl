const shorten = async (longUrl) => {
    const res = await axios.post('http://localhost:5000', { longUrl });
    return res.data;
}