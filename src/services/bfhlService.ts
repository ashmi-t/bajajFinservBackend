export class BfhlService {
    processData(data: (string | number)[]): { numbers: number[], alphabets: string[], highestAlphabet: string } {
        const numbers = data.filter(item => typeof item === 'number') as number[];
        const alphabets = data.filter(item => typeof item === 'string') as string[];
        const highestAlphabet = alphabets.sort().slice(-1)[0] || '';
        return { numbers, alphabets, highestAlphabet };
    }
}