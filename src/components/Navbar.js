import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  // const setColorAndFeature=()=>{
  //   props.fn;
  //   props.setColor;
  // }

  return (
    <>
    <nav className={`navbar navbar-expand-lg bg-${props.mode} `}  >
  <div className="container-fluid">
    <Link className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/about">{props.aboutText}</Link>
        </li>
      </ul>
      <div className={`radioGroupBelow mx-3 text-${props.mode==='light'?'dark':'light'}`}>
    Select the DarkMode Color:

        <label htmlFor="color1" className={`mx-3 text-${props.mode==='light'?'dark':'light'}`}> Red
            <input onClick={props.setColor} className='mx-1' type="radio" name="fruits" id="color1" value="red"/>
        </label>

        <label htmlFor="color2"className={`mx-3 text-${props.mode==='light'?'dark':'light'}`}>Green
            <input onClick={props.setColor} className='mx-1' type="radio" name="fruits" id="color2" value="green"/>
        </label>

        <label htmlFor="color3"className={`mx-3 text-${props.mode==='light'?'dark':'light'}`}>Blue
            <input onClick={props.setColor}className='mx-1' type="radio" name="fruits" id="color3" value="blue"/>
        </label>

    </div>
      <div className="form-check form-switch">
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

Navbar.propTypes={title:PropTypes.string,aboutText:PropTypes.string}

Navbar.defaultProps={title:'Set element here', aboutText:'Set about text here'}