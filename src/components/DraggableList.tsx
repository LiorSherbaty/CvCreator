import { ReactNode } from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
} from '@dnd-kit/core';
import {
    SortableContext,
    sortableKeyboardCoordinates,
    useSortable,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';

interface SortableItemProps {
    id: string;
    children: ReactNode;
}

function SortableItem({ id, children }: SortableItemProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <div ref={setNodeRef} style={style} className="relative">
            <div className="absolute left-1 top-1/2 -translate-y-1/2 z-10">
                <button
                    {...attributes}
                    {...listeners}
                    className="cursor-grab active:cursor-grabbing p-1 hover:bg-gray-200 rounded transition-colors"
                    type="button"
                >
                    <GripVertical className="w-4 h-4 text-gray-400" />
                </button>
            </div>
            <div className="pl-8">{children}</div>
        </div>
    );
}

interface DraggableListProps {
    items: any[];
    onReorder: (fromIndex: number, toIndex: number) => void;
    renderItem: (item: any, index: number) => ReactNode;
}

export function DraggableList({ items, onReorder, renderItem }: DraggableListProps) {
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            const oldIndex = items.findIndex((_, i) => i.toString() === active.id);
            const newIndex = items.findIndex((_, i) => i.toString() === over.id);
            onReorder(oldIndex, newIndex);
        }
    };

    if (items.length === 0) {
        return null;
    }

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={items.map((_, i) => i.toString())}
                strategy={verticalListSortingStrategy}
            >
                <div className="space-y-3">
                    {items.map((item, index) => (
                        <SortableItem key={index} id={index.toString()}>
                            {renderItem(item, index)}
                        </SortableItem>
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    );
}
