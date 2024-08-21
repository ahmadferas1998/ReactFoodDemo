import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || "Failed to fetch data");
  }
  return resData;
}

export default function UseHttp(url, config,initialdata) {
  const [data, setData] = useState(initialdata);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState();

  const sentRequest = useCallback(
    async function sentRequest(data) {
      setisLoading(true);
      try {
        const resData = await sendHttpRequest(url, {...config,body:data});
        setData(resData);
      } catch (error) {
        setError(error.mesage || "Something went wrong");
      }
      setisLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sentRequest();
    }
  }, [sentRequest, config]);


  return{
    data,
    isLoading,
    error,
    sentRequest
  }
}
