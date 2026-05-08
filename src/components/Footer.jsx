const links = {
  Products:  ['Courses', 'Tools', 'Scripts', 'Bundles'],
  Resources: ['Blog', 'CTF Writeups', 'Cheat Sheets', 'Discord'],
  Company:   ['About', 'Careers', 'Affiliates', 'Contact'],
}

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-mono text-xl font-bold mb-4">
              <span className="text-cyber-green neon-green">CYBER</span>
              <span className="text-white">STORE</span>
            </div>
            <p className="text-[#444] font-mono text-xs leading-relaxed mb-4">
              Premium security education for offensive professionals.
              No fluff. No limits.
            </p>
            <div className="flex gap-3">
              {['GitHub', 'Twitter', 'Discord'].map(s => (
                <a
                  key={s}
                  href="#"
                  className="font-mono text-[10px] text-[#333] hover:text-cyber-green transition-colors border border-[#1a1a1a] rounded px-2 py-1 hover:border-cyber-green/30"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <div className="font-mono text-[10px] tracking-widest uppercase text-[#444] mb-4">{section}</div>
              <ul className="space-y-2">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="font-mono text-xs text-[#555] hover:text-cyber-green transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-[#333]">
            <span className="text-cyber-green">$</span> echo "© 2026 CyberStore. All rights reserved."
          </div>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Refunds'].map(l => (
              <a key={l} href="#" className="font-mono text-[10px] text-[#333] hover:text-[#555] transition-colors tracking-widest uppercase">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
