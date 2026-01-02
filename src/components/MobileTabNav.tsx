import { Pencil, Eye } from 'lucide-react';

export type MobileTab = 'edit' | 'preview';

interface IMobileTabNavProps {
    activeTab: MobileTab;
    onTabChange: (tab: MobileTab) => void;
}

export function MobileTabNav({ activeTab, onTabChange }: IMobileTabNavProps) {
    return (
        <div className="flex border-b border-neutral-200 bg-white">
            <button
                onClick={() => onTabChange('edit')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'edit'
                        ? 'text-neutral-900 border-b-2 border-neutral-900'
                        : 'text-neutral-500 hover:text-neutral-700'
                }`}
            >
                <Pencil className="w-4 h-4" />
                Edit
            </button>
            <button
                onClick={() => onTabChange('preview')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'preview'
                        ? 'text-neutral-900 border-b-2 border-neutral-900'
                        : 'text-neutral-500 hover:text-neutral-700'
                }`}
            >
                <Eye className="w-4 h-4" />
                Preview
            </button>
        </div>
    );
}
