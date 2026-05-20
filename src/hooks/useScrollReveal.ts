import { useEffect, useRef } from "react";

const useScrollReveal = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;
        
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                element.classList.add('reveal');
                observer.unobserve(element);
            }
        }, { threshold: 0.1 });
        observer.observe(element);
        
        return () => {
            observer.disconnect();
        };
    }, []);

    return ref;
}

export default useScrollReveal