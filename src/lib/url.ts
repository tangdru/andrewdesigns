/** Prefix a root-relative path with the configured base path. */
export function url(path: string): string {
  if (!path || !path.startsWith('/') || path.startsWith('//')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + path;
}

/** Minimal inline markdown (**bold**, *italic*) for short strings from content files. */
export function inline(md: string): string {
  return md
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}
