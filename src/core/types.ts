export interface GameLevel {
    title: string;
    component: () => HTMLElement;
}

export interface LevelProps {
    nextLevel: () => void;
    prevLevel: () => void;
}

export interface ClickableItem {
    id: number;
    text: string;
    found: boolean;
}

export interface DragItem {
    id: number;
    text: string;
    type: string;
}

export interface TimelineEvent {
    id: number;
    text: string;
}

export interface GameState {
    currentLevel: number;
    foundClues: string[];
    inventory: string[];
    log: string[];
    answers?: number[];
}