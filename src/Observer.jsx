import React, { useEffect, useState, createContext } from 'react';

const SectionObserverContext = createContext(null);

const SectionObserver = ({ children, setActiveSection, activeSection }) => {

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('div[id^="section"]');
            const visibleSection = Array.from(sections).find(section => isSectionVisible(section));

            if (visibleSection) {
                setActiveSection(visibleSection.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isSectionVisible = section => {
        const { top, bottom } = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        return top <= windowHeight / 2 && bottom >= windowHeight / 2;
    };

    return (
        <SectionObserverContext.Provider value={activeSection}>
            {children}
        </SectionObserverContext.Provider>
    );
};

export { SectionObserver, SectionObserverContext };
