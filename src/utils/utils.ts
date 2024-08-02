export const isNumber = (value: string): boolean => !isNaN(Number(value));


export const findHighestAlphabet = (alphabets: string[]): string[] => {
    if (alphabets.length === 0) return [];
    return [alphabets.sort((a, b) => b.localeCompare(a, undefined, { sensitivity: 'base' }))[0]];
};