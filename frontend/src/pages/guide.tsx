import { useState } from 'react'
import '../styles/guide.css'

import Navbar from '../components/layout/Navbar'

function Guide() {
  return (
    <div id="guide">
        <Navbar/>
        <div className="hero">
            <div className="description">
                <h1>Guide : some general tips and overview on the hobby</h1>
                <hr/>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
            </div>
            <div className="index">
                <div className="index-item">
                  <a href="#what-is-gunpla">What is Gunpla</a>
                  <p>Brief overview of the hobby, history, and types of model kits available.</p>
                </div>
                
                <div className="index-item">
                  <a href="#terminology">Terminology</a>
                  <p>Explanation of common Gunpla terms, color codes for timelines, scale notations, and grades.</p>
                </div>
                
                <div className="index-item">
                  <a href="#levels">Levels of Building</a>
                  <p>Beginner, intermediate, and master levels, including typical skills and kit complexity for each.</p>
                </div>
                
                <div className="index-item">
                  <a href="#mistakes">Common Mistakes</a>
                  <p>Frequent errors during assembly, nipping, painting, and sticker application.</p>
                </div>
                
                <div className="index-item">
                  <a href="#series">Anime Series</a>
                  <p>Overview of Gundam series relevant to kits, with links to watch orders and summaries.</p>
                </div>

                <div className="index-item">
                  <a href="#resources">External Resources</a>
                  <p>Links to tutorials, community forums, and official guides for further learning.</p>
                </div>
            </div>
        </div>
        <div className="contents">
            <div id="what-is-gunpla">
                <h1>What is gunpla?</h1>
            </div>
            <div id="terminology">
                <h1>What is gunpla?</h1>
            </div>
            <div id="levels">
                <h1>Levels of building a pla model</h1>
            </div>
            <div id="mistakes">
                <h1>Common mistakes</h1>
            </div>
            <div id="series">
                <h1>Anime series guide</h1>
            </div>
            <div id="resources">
                <h1>Other helpful resources</h1>
            </div>
        </div>
    </div>
  )
}

export default Guide;
