export default function normalizePhoneNumber(
  value: string | undefined
): string {
  if (!value) {
    return '';
  }

  const cleaned: string = value.replace(/\D/g, '');

  const patterns: RegExp[] = [
    /^(\d{2})(\d{3})(\d{3})(\d{4})$/,
    /^(\d{3})(\d{3})(\d{4})$/,
    /^(\d{3})(\d{4})$/,
  ];

  for (const pattern of patterns) {
    const match: RegExpMatchArray | null = cleaned.match(pattern);
    if (match) {
      return match.slice(1).join('-');
    }
  }
  return cleaned;
}
