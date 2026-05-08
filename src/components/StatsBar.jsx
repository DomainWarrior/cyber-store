const stats = [
  { value: '47,000+', label: 'Students Enrolled' },
  { value: '200+',    label: 'Hours of Content' },
  { value: '4.8★',   label: 'Average Rating' },
  { value: '$2.4M+', label: 'Bounties Earned by Students' },
]

export default function StatsBar() {
  return (
    <div className="border-y border-[#1a1a1a] bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1a1a1a]">
          {stats.map(({ value, label }) => (
            <div key={label} className="py-8 px-6 text-center">
              <div className="font-mono text-2xl font-bold text-cyber-green neon-green mb-1">
                {value}
              </div>
              <div className="text-[#555] text-xs tracking-wider uppercase font-mono">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
