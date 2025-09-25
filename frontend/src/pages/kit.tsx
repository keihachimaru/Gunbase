import { useState } from 'react'
import '../styles/kit.css'
import Navbar from '../components/layout/Navbar'

// Dummy kit data (replace with backend later)
const kitData = {
  id: 99,
  name: "HGCE Black Knight Squad Cal-re.A",
  lineArt: "/gundams/HGCE_Black_Knight_Squad_Cal-reA.webp",
  details: {
    Series: "Mobile Suit Gundam SEED Freedom",
    Grade: "HGCE",
    Scale: "1/144",
    "Release Date": "2024",
    Runners: 7,
    MSRP: "3700¥ (~30€)",
    "Color Separation": "Excellent (gold sections fully separated)",
    Polycaps: "None",
    "Inner Frame": "Partial (shared joints from HGCE Shiva)",
    Difficulty: "3/5",
    "Build Time": "3–4h",
    "Sticker Load": "Light (mostly for purple wing parts)",
    Articulation: "4/5",
    Accessories:
      "2 Anti-MS Enhanced Sabers, High-Energy Beam Rifle, effect parts, PET “Wings of Light”",
  },
  sections: {
    overview: `
      Appearing in the movie Mobile Suit Gundam SEED Freedom, the Black Knight Squad
      Cal-re.A is one of Bandai’s highlight HG releases of 2024...
    `,
    manual: `
      Assembly follows standard HG flow. Backpack binders are unique: instead of being movable,
      they use a swap-out system...
    `,
    runners: `
      About 7 runners, including multiple gold tone parts (frame vs. armor)...
    `,
    parts: `
      - 2 × Anti-MS Enhanced Sabers (mount on side skirts)  
      - High-Energy Beam Rifle (mounts on rear skirt)  
      - 8 Dragoon units (detach and mount beam effect parts)  
      - 16 Beam effect parts  
      - 8 PET Wings of Light (premium transparent sheets)  
      - 4 Eye sticker variations  
    `,
    review: `
      This is easily one of the best HG kits of 2024. The build is satisfying thanks
      to precise part separation and premium gold injection...
    `,
    gallery: `
      Example poses (placeholder — add real gallery later):  
      - Standing straight build  
      - Binder deployment with rifle  
      - Wings of Light fully spread  
      - Dragoon beam launch effect  
    `,
    resources: `
      - Dalong.net review (Korean)  
      - YouTube build & review videos  
      - Bandai Hobby official manual scans  
    `
  }
}

function KitDetail() {
  return (
    <div id="kit">
      <Navbar />

      {/* Navigation */}
      <div className="navigation">
        {Object.keys(kitData.sections).map((key) => (
          <a key={key} href={`#${key}`}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </a>
        ))}
      </div>

      <div className="kit-details">
        {/* Header */}
        <div className="header">
          <h1>{kitData.name}</h1>
          <hr />
          {Object.entries(kitData.details).map(([label, value]) => (
            <div key={label} className="info-section">
              <p>
                <strong>{label}:</strong> {value}
              </p>
            </div>
          ))}
        </div>

        {/* Line Art */}
        <div className="lineArt">
          <img src={kitData.lineArt} alt={`${kitData.name} Box Art`} />
        </div>
      </div>

      {/* Sections */}
      <div className="kit-content">
        {Object.entries(kitData.sections).map(([key, value]) => (
          <div key={key} id={key} className="section">
            <h2>{key.charAt(0).toUpperCase() + key.slice(1)}</h2>
            {value.split("\n").map((line, i) =>
              line.trim() ? <p key={i}>{line.trim()}</p> : null
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default KitDetail
