import { useEffect, useState } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { generateId } from '../types';

export type ToastType = 'success' | 'error' | 'info';

interface IToast {
    id: string;
    message: string;
    type: ToastType;
}

interface IToastProps {
    toast: IToast;
    onClose: (id: string) => void;
}

const TOAST_DURATION_MS = 4000;

function ToastItem({ toast, onClose }: IToastProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose(toast.id);
        }, TOAST_DURATION_MS);

        return () => clearTimeout(timer);
    }, [toast.id, onClose]);

    const icons = {
        success: <CheckCircle className="w-5 h-5 text-neutral-700" />,
        error: <AlertCircle className="w-5 h-5 text-neutral-700" />,
        info: <Info className="w-5 h-5 text-neutral-700" />,
    };

    const bgColors = {
        success: 'bg-neutral-50 border-neutral-200',
        error: 'bg-neutral-50 border-neutral-200',
        info: 'bg-neutral-50 border-neutral-200',
    };

    return (
        <div
            className={`flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg ${bgColors[toast.type]} animate-slide-in`}
            role="alert"
        >
            {icons[toast.type]}
            <span className="text-neutral-800 text-sm font-medium">{toast.message}</span>
            <button
                onClick={() => onClose(toast.id)}
                className="ml-auto p-1 hover:bg-neutral-200 rounded transition-colors"
                aria-label="Dismiss notification"
            >
                <X className="w-4 h-4 text-neutral-500" />
            </button>
        </div>
    );
}

// Toast container that renders all active toasts
interface IToastContainerProps {
    toasts: IToast[];
    onClose: (id: string) => void;
}

export function ToastContainer({ toasts, onClose }: IToastContainerProps) {
    if (toasts.length === 0) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
            {toasts.map((toast) => (
                <ToastItem key={toast.id} toast={toast} onClose={onClose} />
            ))}
        </div>
    );
}

// Hook for managing toasts
export function useToast() {
    const [toasts, setToasts] = useState<IToast[]>([]);

    const showToast = (message: string, type: ToastType = 'info') => {
        const id = generateId();
        setToasts((prev) => [...prev, { id, message, type }]);
    };

    const closeToast = (id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    return {
        toasts,
        showToast,
        closeToast,
        success: (message: string) => showToast(message, 'success'),
        error: (message: string) => showToast(message, 'error'),
        info: (message: string) => showToast(message, 'info'),
    };
}
