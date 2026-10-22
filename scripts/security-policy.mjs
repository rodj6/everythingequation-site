/** Shared browser policy. Production script hashes are supplied by postbuild. */
export const HEADER_MARKER = 'x-shadow-static-csp';

export function contentSecurityPolicy(hashes = [], { development = false } = {}) {
  if (hashes.some(value => !/^'sha256-[A-Za-z0-9+/]{43}='$/.test(value))) {
    throw new Error('Invalid inline-script CSP hash');
  }
  return [
    "default-src 'self'",
    `script-src 'self'${development ? " 'unsafe-inline' 'unsafe-eval'" : ''}${hashes.length ? ' ' + hashes.join(' ') : ''}`,
    "script-src-attr 'none'",
    // KaTeX and the interactive Atlas use style attributes. This permission is
    // limited to styles; executable inline scripts remain hash restricted.
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self'",
    `connect-src 'self'${development ? ' ws: wss:' : ''}`,
    "media-src 'self'",
    "worker-src 'self' blob:",
    "object-src 'none'",
    "frame-src 'none'",
    "base-uri 'none'",
    "form-action 'self'",
    "frame-ancestors 'none'",
  ].join('; ');
}

export function browserHeaders({ development = false } = {}) {
  return [
    { key: 'Content-Security-Policy', value: contentSecurityPolicy([], { development }) },
    { key: 'X-Frame-Options', value: 'DENY' },
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    {
      key: 'Permissions-Policy',
      value: 'camera=(), microphone=(), geolocation=(), payment=(), display-capture=(), xr-spatial-tracking=(), fullscreen=(self)',
    },
  ];
}
