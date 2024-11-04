import React, { useContext, useState } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';


const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  // State to manage the dark/light mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle between light and dark mode
  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`main ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="nav">
        <p>Accessibility Bot</p>
      </div>

      <nav className="navbar">
        <ul className="nav-list">
          
          
          
          <li className="nav-item">
            <a href="#darkMode" className="nav-link" onClick={toggleMode}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </a>
            
          </li>
          
          
        </ul>
        
      </nav>
      <div class="Interactive-Dictionary">
      <h1>Interactive Dictionary</h1>
      </div>

      <div className="main-container">
        {showResult ? (
          <div className="result">
            <div className="result-title">
              <img src="" alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src="" alt="" />
              {loading ? (
                <div className="loader">
                  <hr className="animated-bg" />
                  <hr className="animated-bg" />
                  <hr className="animated-bg" />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="greet">
              <p>
                <span>Whats Up!.</span>
              </p>
             <p>How can I help you today?</p>
            </div>
            <div className="cards"></div>
          </>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
              aria-label="Enter a prompt"
            />
            <div>
              <img src={assets.gallery_icon} width={30} alt="" />
              <img src={assets.mic_icon} width={30} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} width={30} alt="" />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
