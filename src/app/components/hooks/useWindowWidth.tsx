import { useState, useEffect } from "react";

function useWindowWidth() {
    const [width, setWidth] = useState<number | null>(null);

    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
}

export default useWindowWidth