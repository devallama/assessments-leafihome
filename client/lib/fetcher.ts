const fetcher = async <JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> => {
    const res = await fetch('http://127.0.0.1:3001' + input, init);
    return res.json();
};

export default fetcher;
