export function getNextOffset(next: string | undefined, offset = 0): number | null {
  if (!next) return null;

  const value = new URL(next, "https://music.apple.com").searchParams.get("offset");
  const nextOffset = value !== null ? Number(value) : null;

  return nextOffset !== null && Number.isSafeInteger(nextOffset) && nextOffset > offset
    ? nextOffset
    : null;
}
