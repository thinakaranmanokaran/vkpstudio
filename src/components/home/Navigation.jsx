import React, { useState, useEffect } from 'react';

const Navigation = () => {
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const NavData = [
        { title: 'Home', link: 'home' },
        { title: 'Contact', link: 'contact' },
        { title: 'About', link: 'about' },
        { title: 'Gallery', link: 'gallery' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;

            if (scrollY <= windowHeight) {
                setShowNav(true);
            } else if (scrollY > windowHeight && scrollY > lastScrollY) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }
            setLastScrollY(scrollY);

            // Update active link based on scroll position
            const sections = document.querySelectorAll('section');
            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop - 100;
                if (scrollY >= sectionTop) {
                    setActiveIndex(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const handleClick = (link, index) => {
        setActiveIndex(index);
        const section = document.getElementById(link);
        section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div
            className={` justify-center mt-4 lg:mt-10 sticky top-4 z-50 transition-all duration-300 hidden md:flex  ${
                showNav ? 'opacity-100' : 'opacity-0 -translate-y-20'
            }`}
        >
            <div className="flex font-paragrabh bg-white rounded-full p-2 space-x-2 bg-opacity-10 backdrop-blur-md">
                {NavData.map((Data, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(Data.link, index)}
                        className={` font-paragraph rounded-full px-3 py-1 text-white ${
                            activeIndex === index
                                ? 'bg-purple text-dark'
                                : ''
                        }`}
                    >
                        {Data.title}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Navigation;
