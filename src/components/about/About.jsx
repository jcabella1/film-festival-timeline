import './about.scss';

export default function About() {
  return (
    <div className="about">
      <div className="cover-img">
        <div className="cover-txt">
          <h1 className="title">CAAMFEST</h1>
          <img src="/assets/divider.png" className="divider" alt="" />
          <div className="cover-img-src">
            <a href="https://www.linkedin.com/company/center-for-asian-american-media/"
            target="_blank" rel="noreferrer">Image source↗</a>
          </div>
          <p>CAAMFest (previously known as the San Francisco International Asian American Film Festival, or SFIAAFF) is an annual film festival presented in the San Francisco Bay Area. Organized by the Center for Asian American Media (CAAM), the festival features over 100 films each year alongside a myriad of food, drink, and music. Visit the official website <a href="https://caamfest.com/" target="_blank" rel="noreferrer">here ↠</a></p> 
          <br/>
          <a href="#timeline" className="down-btn">
              <h3>Timeline</h3>
              <img src="/assets/down.png" alt="" />
          </a>
        </div>
      
      </div>
    </div>
  )
}
