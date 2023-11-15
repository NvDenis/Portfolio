import { useEffect, useState } from 'react';

function useOnScreen(ref) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting)
        );

        if (ref && ref.current) {
            observer.observe(ref.current);
        }

        // Clean up
        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
}

export default useOnScreen;
