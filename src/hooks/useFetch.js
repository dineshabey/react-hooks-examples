import { useEffect, useState } from 'react';

// The hook now takes 'url' as a parameter
export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        if (url) fetchData(); // Ensure 'url' exists before fetching
    }, [url]); // Dependency array listens for 'url' changes

    return { data, loading };
}
