import { useContext } from "react";
import { ApiDataContext } from "../contexts";

export const useApiData = () => {
    const { setData, loading, setLoading, error, setError } =
        useContext(ApiDataContext);

    return { setData, loading, setLoading, error, setError };
};
