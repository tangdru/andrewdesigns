// Prefix root-relative src/href in markdown with the site base path, so
// content can always write "/images/..." and "/webster".
export default function rehypeBase({ base = '/' } = {}) {
  const prefix = base.replace(/\/$/, '');
  return (tree) => {
    if (!prefix) return;
    const visit = (node) => {
      if (node.type === 'element' && node.properties) {
        for (const key of ['src', 'href', 'poster']) {
          const v = node.properties[key];
          if (typeof v === 'string' && v.startsWith('/') && !v.startsWith('//') && !v.startsWith(prefix + '/')) {
            node.properties[key] = prefix + v;
          }
        }
      }
      if (node.type === 'raw' && typeof node.value === 'string') {
        node.value = node.value.replace(/(src|href|poster)="\/(?!\/)/g, `$1="${prefix}/`);
      }
      (node.children || []).forEach(visit);
    };
    visit(tree);
  };
}
