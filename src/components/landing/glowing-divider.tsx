export function GlowingDivider() {
  return (
    <div className="w-full h-16 flex justify-center items-center my-12" aria-hidden="true">
      <svg width="300" height="20" viewBox="0 0 300 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
              <linearGradient id="glowing-divider-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0}} />
                  <stop offset="50%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0}} />
              </linearGradient>
              <filter id="glowing-divider-filter">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                  <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                  </feMerge>
              </filter>
          </defs>
          <rect x="5" y="9" width="40" height="2" fill="url(#glowing-divider-glow)" filter="url(#glowing-divider-filter)" />
          <rect x="255" y="9" width="40" height="2" fill="url(#glowing-divider-glow)" filter="url(#glowing-divider-filter)" />
          <circle cx="50" cy="10" r="3" fill="url(#glowing-divider-glow)" filter="url(#glowing-divider-filter)"/>
          <rect x="53" y="9" width="194" height="2" fill="url(#glowing-divider-glow)" opacity="0.3" />
          <circle cx="250" cy="10" r="3" fill="url(#glowing-divider-glow)" filter="url(#glowing-divider-filter)"/>

          <rect x="70" y="5" width="2" height="10" fill="url(#glowing-divider-glow)" opacity="0.5"/>
          <rect x="90" y="5" width="2" height="10" fill="url(#glowing-divider-glow)" opacity="0.5"/>
          <rect x="150" y="0" width="2" height="20" fill="url(#glowing-divider-glow)" filter="url(#glowing-divider-filter)" />
          <rect x="210" y="5" width="2" height="10" fill="url(#glowing-divider-glow)" opacity="0.5"/>
          <rect x="230" y="5" width="2" height="10" fill="url(#glowing-divider-glow)" opacity="0.5"/>
      </svg>
    </div>
  );
}
