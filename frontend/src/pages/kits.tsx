import { useState } from 'react'
import '../styles/kits.css'

import Kit from '../components/ui/Kit'
import Navbar from '../components/layout/Navbar'
import SearchBox from '../components/layout/SearchBox'
import ZetaImg from "../assets/gundams/1 ZETA GUNDAM.png";
function Kits() {
    const kits= [
      {
          id: 1,
          name: "HGUC Zeta Gundam",
          series: "Mobile Suit Zeta Gundam",
          grade: "HGUC",
          scale: "1/144",
          releaseDate: "2020-01-15",
          runners: 8,
          MSRP: 25,
          colorSeparation: "Good",
          polycaps: true,
          innerFrame: true,
          galleries: [
            { type: "official", url: "/gundams/HGUC_Zeta_Gundam_Revive_Boxart.webp", caption: "Official box art" }
          ],
          difficulty: 3,
          buildTime: "3-4h",
          stickerLoad: "Medium",
          articulation: 4,
          accessories: ["Beam Saber", "Rifle", "Shield"]
      },
      {
          id: 2,
          name: "HGUC Unicorn Gundam",
          series: "Mobile Suit Gundam Unicorn",
          grade: "HGUC",
          scale: "1/144",
          releaseDate: "2019-07-20",
          runners: 10,
          MSRP: 28,
          colorSeparation: "Excellent",
          polycaps: true,
          innerFrame: true,
          galleries: [
            { type: "official", url: "/gundams/HGUZ_Unicorn_Gundam_Destroy_Mode_Boxart.webp", caption: "Official box art" }
          ],
          difficulty: 3,
          buildTime: "4-5h",
          stickerLoad: "Medium",
          articulation: 4,
          accessories: ["Beam Saber", "Shield", "Beam Magnum"]
      },
      {
          id: 3,
          name: "HGBF Kamiki Burning Gundam",
          series: "Gundam Build Fighters",
          grade: "HGBF",
          scale: "1/144",
          releaseDate: "2016-05-12",
          runners: 7,
          MSRP: 20,
          colorSeparation: "Good",
          polycaps: true,
          innerFrame: false,
          galleries: [
            { type: "official", url: "/gundams/HG_Kamiki_Burning_Gundam.webp", caption: "Official box art" }
          ],
          difficulty: 2,
          buildTime: "2-3h",
          stickerLoad: "Light",
          articulation: 4,
          accessories: ["Beam Saber", "Shield"]
      },
      {
          id: 4,
          name: "HGUC Sinanju",
          series: "Mobile Suit Gundam Unicorn",
          grade: "HGUC",
          scale: "1/144",
          releaseDate: "2013-11-10",
          runners: 12,
          MSRP: 30,
          colorSeparation: "Excellent",
          polycaps: true,
          innerFrame: true,
          galleries: [
            { type: "official", url: "/gundams/HGUC-Sinanju.webp", caption: "Official box art" }
          ],
          difficulty: 4,
          buildTime: "5-6h",
          stickerLoad: "Heavy",
          articulation: 4,
          accessories: ["Beam Saber", "Rifle", "Shield", "Funnels"]
      },
      {
          id: 5,
          name: "HGGS ORB-01 Shiranui Akatsuki",
          series: "Gundam SEED Destiny",
          grade: "HGGS",
          scale: "1/144",
          releaseDate: "2015-03-22",
          runners: 11,
          MSRP: 32,
          colorSeparation: "Excellent",
          polycaps: true,
          innerFrame: false,
          galleries: [
            { type: "official", url: "/gundams/Shiranui_Akatsuki_Boxart.webp", caption: "Official box art" }
          ],
          difficulty: 5,
          buildTime: "6-7h",
          stickerLoad: "Heavy",
          articulation: 4,
          accessories: ["Beam Saber", "Shield", "Bazooka"]
      },
      {
          id: 6,
          name: "HGBF Astray Red Frame (Flight Unit)",
          series: "Gundam Build Fighters",
          grade: "HGBF",
          scale: "1/144",
          releaseDate: "2014-08-10",
          runners: 9,
          MSRP: 22,
          colorSeparation: "Good",
          polycaps: true,
          innerFrame: false,
          galleries: [
            { type: "official", url: "/gundams/Hg-astray-red-flight-unit.webp", caption: "Official box art" }
          ],
          difficulty: 3,
          buildTime: "3-4h",
          stickerLoad: "Medium",
          articulation: 4,
          accessories: ["Beam Saber", "Rifle", "Flight Unit"]
      },
      {
          id: 7,
          name: "HG Wing Zero",
          series: "Mobile Suit Wing",
          grade: "HG",
          scale: "1/144",
          releaseDate: "2012-04-18",
          runners: 10,
          MSRP: 27,
          colorSeparation: "Good",
          polycaps: true,
          innerFrame: false,
          galleries: [
            { type: "official", url: "/gundams/HG_Wing_Zero_Boxart.webp", caption: "Official box art" }
          ],
          difficulty: 3,
          buildTime: "4-5h",
          stickerLoad: "Medium",
          articulation: 4,
          accessories: ["Buster Rifle", "Shield", "Beam Saber"]
      },
      {
          id: 8,
          name: "HGUC RX-178 Gundam Mk-II (Titans)",
          series: "Mobile Suit Zeta Gundam",
          grade: "HGUC",
          scale: "1/144",
          releaseDate: "2011-06-12",
          runners: 8,
          MSRP: 25,
          colorSeparation: "Good",
          polycaps: true,
          innerFrame: true,
          galleries: [
            { type: "official", url: "/gundams/HGUC_Gundam_Mk-II_Titan.webp", caption: "Official box art" }
          ],
          difficulty: 3,
          buildTime: "3-4h",
          stickerLoad: "Medium",
          articulation: 4,
          accessories: ["Beam Saber", "Shield", "Rifle"]
      },
      {
          id: 9,
          name: "HGUC RX-0(N) Unicorn Gundam 02 Banshee Norn",
          series: "Mobile Suit Gundam Unicorn",
          grade: "HGUC",
          scale: "1/144",
          releaseDate: "2016-10-25",
          runners: 12,
          MSRP: 30,
          colorSeparation: "Excellent",
          polycaps: true,
          innerFrame: true,
          galleries: [
            { type: "official", url: "/gundams/HG_Unicorn_Banshee_Destroy_Mode_Boxart.webp", caption: "Official box art" }
          ],
          difficulty: 4,
          buildTime: "5-6h",
          stickerLoad: "Heavy",
          articulation: 4,
          accessories: ["Beam Saber", "Shield", "Armed Armor DE"]
      }
    ];
      return (
        <div id="kits">
            <Navbar/>
            <SearchBox/>
            <div className="kits-container">
                {
                    kits.map((item) => (
                        <Kit key={item.id} info={item}/>
                    ))
                }   
            </div>
        </div>
      )
    }

export default Kits;
