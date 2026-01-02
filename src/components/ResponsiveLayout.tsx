import { useState, ReactNode } from 'react';
import { useResponsiveLayout } from '../hooks/useResponsiveLayout';
import { MobileTabNav, MobileTab } from './MobileTabNav';

interface IResponsiveLayoutProps {
    editor: ReactNode;
    preview: ReactNode;
}

export function ResponsiveLayout({ editor, preview }: IResponsiveLayoutProps) {
    const { isMobile } = useResponsiveLayout();
    const [activeTab, setActiveTab] = useState<MobileTab>('edit');

    // Desktop: Side-by-side layout
    if (!isMobile) {
        return (
            <div className="flex-1 flex overflow-hidden">
                <div className="w-1/2 overflow-auto">
                    {editor}
                </div>
                <div className="w-1/2 overflow-auto">
                    {preview}
                </div>
            </div>
        );
    }

    // Mobile: Tabbed layout
    return (
        <div className="flex-1 flex flex-col overflow-hidden">
            <MobileTabNav activeTab={activeTab} onTabChange={setActiveTab} />
            <div className="flex-1 overflow-auto">
                {activeTab === 'edit' ? editor : preview}
            </div>
        </div>
    );
}
