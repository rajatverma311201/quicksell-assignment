/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";

import { Header } from "./components/header";
import { ApiDataProvider, DarkModeProvider, DisplayProvider } from "./contexts";
import { TicketsView } from "./components/views";
import { useApiData } from "./hooks";
import { useEffect } from "react";
import { fetchData } from "./utils/api";
import Spinner from "./components/Spinner";

function AppInner() {
    const { setData, setError, setLoading, loading } = useApiData();

    useEffect(() => {
        setLoading(true);

        (async () => {
            try {
                const data = await fetchData();

                setData({ tickets: data.tickets, users: data.users });
            } catch (e: any) {
                setError(e.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
        <>
            <Header />
            {loading ? <Spinner /> : <TicketsView />}
        </>
    );
}

const AppWrapper = () => {
    return (
        <DarkModeProvider>
            <DisplayProvider>
                <ApiDataProvider>
                    <AppInner />
                </ApiDataProvider>
            </DisplayProvider>
        </DarkModeProvider>
    );
};

export default AppWrapper;
