export default function normalizeName(value: string): string {
  const splited: string[] = value.split(' ').map((word: string) => {
    if (word.length === 0) return '';
    const firstChar: string = word[0];
    const restOfWord: string = word.slice(1).toLowerCase();
    return firstChar.toUpperCase() + restOfWord;
  });

  return splited.join(' ').trim();
}
