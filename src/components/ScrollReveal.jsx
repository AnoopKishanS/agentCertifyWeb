import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, animation = 'fade-up', delay = '0', className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Trigger only once
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% visible
                rootMargin: '0px 0px -50px 0px' // Offset a bit so it triggers before fully scrolling past
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    // Map strict props to CSS classes
    const animMap = {
        'slide-left': 'anim-slide-left',
        'slide-right': 'anim-slide-right',
        'fade-up': 'anim-fade-up',
        'blur-in': 'anim-blur-in',
        'scale-up': 'anim-scale-up'
    };

    const delayClass = delay !== '0' ? `delay-${delay}` : '';

    return (
        <div
            ref={ref}
            className={`reveal-wrapper ${animMap[animation]} ${delayClass} ${isVisible ? 'visible' : ''} ${className}`}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
