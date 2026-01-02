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

interface ISortableItemProps {
    id: string;
    children: ReactNode;
}

function SortableItem({ id, children }: ISortableItemProps) {
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
                    aria-label="Drag to reorder"
                >
                    <GripVertical className="w-4 h-4 text-gray-400" />
                </button>
            </div>
            <div className="pl-8">{children}</div>
        </div>
    );
}

// Generic interface requiring items to have an id property
interface IDraggableItem {
    id: string;
}

interface IDraggableListProps<T extends IDraggableItem> {
    items: T[];
    onReorder: (fromIndex: number, toIndex: number) => void;
    renderItem: (item: T, index: number) => ReactNode;
}

export function DraggableList<T extends IDraggableItem>({
    items,
    onReorder,
    renderItem,
}: IDraggableListProps<T>) {
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            const oldIndex = items.findIndex((item) => item.id === active.id);
            const newIndex = items.findIndex((item) => item.id === over.id);
            if (oldIndex !== -1 && newIndex !== -1) {
                onReorder(oldIndex, newIndex);
            }
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
                items={items.map((item) => item.id)}
                strategy={verticalListSortingStrategy}
            >
                <div className="space-y-3">
                    {items.map((item, index) => (
                        <SortableItem key={item.id} id={item.id}>
                            {renderItem(item, index)}
                        </SortableItem>
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    );
}
