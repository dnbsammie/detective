import type { GameState } from "./types";

const STORAGE_KEY = 'detectiveGameAnswers';

export const state: GameState = {
    currentLevel: 0,
    log: [],
    inventory: [],
    foundClues: [],
    answers: loadAnswers(),
};
export function nextLevel() {
    state.currentLevel++;
}

export function prevLevel() {
    state.currentLevel--;
}

export function setLevel(index: number) {
    state.currentLevel = index;
}

export function addLog(msg: string) {
    state.log.push(msg);
}

export function addItem(item: string) {
    state.inventory.push(item);
}

export function addNote(text: string) {
    state.foundClues.push(text);
}

function saveAnswers() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.answers));
}

function loadAnswers(): number[] {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
}

export function recordAnswer(selectedIndex: number) {
    if (!state.answers) state.answers = [];
    state.answers[state.currentLevel] = selectedIndex;
    saveAnswers();
}

export function resetGame() {
    state.currentLevel = 0;
    state.log = [];
    state.inventory = [];
    state.foundClues = [];
    state.answers = [];
    localStorage.removeItem(STORAGE_KEY);
}
