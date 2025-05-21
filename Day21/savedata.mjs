import {dataPath} from './constants.mjs'
import {readFile, writeFile} from 'fs/promises'
export async function loadData() {
    try {
        const content = await readFile(dataPath, 'utf-8');
        return JSON.parse(content) 
    } catch(error) {
        return {
            sumCallCount: 0,
            history: []
        }
    }
}
export async function saveData(state) {
    await writeFile(dataPath, JSON.stringify(state, null, 2));
}