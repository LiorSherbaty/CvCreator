import { useEffect, useState } from 'react';
import { MOBILE_BREAKPOINT } from '../constants';

export type LayoutMode = 'desktop' | 'mobile';

interface IResponsiveLayoutState {
    layoutMode: LayoutMode;
    isMobile: boolean;
}

const getInitialState = (): IResponsiveLayoutState => {
    // Check window size immediately if available (client-side)
    if (typeof window !== 'undefined') {
        const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
        return {
            layoutMode: isMobile ? 'mobile' : 'desktop',
            isMobile,
        };
    }
    // Default to desktop for SSR
    return {
        layoutMode: 'desktop',
        isMobile: false,
    };
};

export const useResponsiveLayout = (): IResponsiveLayoutState => {
    const [state, setState] = useState<IResponsiveLayoutState>(getInitialState);

    useEffect(() => {
        const checkLayout = () => {
            const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
            setState({
                layoutMode: isMobile ? 'mobile' : 'desktop',
                isMobile,
            });
        };

        // Check immediately in case initial state was wrong
        checkLayout();
        window.addEventListener('resize', checkLayout);

        return () => window.removeEventListener('resize', checkLayout);
    }, []);

    return state;
};
