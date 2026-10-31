import { Car, MapPin } from 'lucide-react'

export function GoldMock() {
  return (
    <div className="mock">
      <div className="mock-screen">
        <div className="mock-top"><b>DigiGold · Jeweller CRM</b><span>Live gold rate ● 24K</span></div>
        <div className="mock-body">
          <div className="kpis">
            <div className="kpi"><small>Active schemes</small><b>1,284</b><em>▲ 12.4%</em></div>
            <div className="kpi"><small>Gold saved</small><b>38.6 kg</b><em>▲ 8.1%</em></div>
            <div className="kpi"><small>Redemptions</small><b>96</b><em>▲ 4.7%</em></div>
          </div>
          <div className="chart">
            <small style={{ color: '#a99bd0', fontSize: '0.7rem' }}>Gold rate trend</small>
            <svg viewBox="0 0 400 130" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="gA" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#a78bfa" stopOpacity="0.5" /><stop offset="1" stopColor="#a78bfa" stopOpacity="0" /></linearGradient>
              </defs>
              <path d="M0 100 C40 90 60 60 100 70 S160 100 200 60 S280 20 320 40 S380 20 400 14 V130 H0Z" fill="url(#gA)" />
              <path d="M0 100 C40 90 60 60 100 70 S160 100 200 60 S280 20 320 40 S380 20 400 14" fill="none" stroke="#c4b5fd" strokeWidth="2.5" strokeLinecap="round"
                strokeDasharray="900" strokeDashoffset="900">
                <animate attributeName="stroke-dashoffset" from="900" to="0" dur="2.4s" fill="freeze" begin="0s" />
              </path>
            </svg>
          </div>
          <div className="list-row">Priya S. · Monthly scheme <span>₹5,000 · 7/11</span></div>
          <div className="list-row">Karthik R. · Redemption <span>Approved</span></div>
        </div>
      </div>
    </div>
  )
}

export function CabMock() {
  return (
    <div className="mock">
      <div className="mock-screen">
        <div className="mock-top"><b>Travels · Book a ride</b><span>3 drivers nearby</span></div>
        <div className="mock-body">
          <div className="map">
            <svg viewBox="0 0 360 190" preserveAspectRatio="none" aria-hidden="true">
              <g stroke="rgba(167,139,250,0.12)" strokeWidth="1">
                {[30, 70, 110, 150].map((y) => <line key={y} x1="0" x2="360" y1={y} y2={y} />)}
                {[50, 110, 170, 230, 290].map((x) => <line key={x} y1="0" y2="190" x1={x} x2={x} />)}
              </g>
              <path d="M30 150 C 90 140, 100 70, 170 80 S 270 30, 330 40" fill="none" stroke="#a78bfa" strokeWidth="3" strokeDasharray="6 7" strokeLinecap="round" />
              <circle cx="30" cy="150" r="7" fill="#c4b5fd" />
              <circle cx="330" cy="40" r="7" fill="#7c3aed" stroke="#fff" strokeWidth="2" />
            </svg>
            <div className="cab"><Car size={15} /></div>
          </div>
          <div className="list-row"><span style={{ display: 'inline-flex', gap: 8, alignItems: 'center' }}><MapPin size={14} /> Pickup · Karaikudi</span>12.4 km</div>
          <div className="fare"><div><small style={{ color: '#c9b8f5' }}>Estimated fare</small><br /><b>₹ 486</b></div><span className="state done">Driver assigned</span></div>
        </div>
      </div>
    </div>
  )
}
