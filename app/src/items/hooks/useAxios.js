"use client";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export function useAxios({ url, method = "GET", body = null, headers = null, autoFetch = true }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(autoFetch);

const fetchData = useCallback(async (customBody = null) => {
  setLoading(true);
  try {
    const response = await axios({
      url,
      method,
      data: customBody || body,
      headers,
    });
    setData(response.data);
    setError(null);
    return response.data;   
  } catch (err) {
    setError(err);
    throw err;           
  } finally {
    setLoading(false);
  }
}, [url, method, body, headers]);


  useEffect(() => {
    if (autoFetch) fetchData();
  }, [fetchData, autoFetch]);

  return { data, error, loading, refetch: fetchData };
}
