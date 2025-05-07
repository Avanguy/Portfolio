import React from 'react';
import { useState, useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.offsetHeight;

      if (scrollPosition >= pageHeight - 2) {
        setShowHeader(false);
      }
      else {
        setShowHeader(true);
      }
      const currentScrollY = window.scrollY;

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  return (
    <>
      {showHeader && 
        <div className="site-header-wrapper">
          <header className="site-header">
            <nav className="nav">
              <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title='LinkedIn'>
                <LinkedInIcon style={{ fontSize: 24 }} />
              </a>
              <a href="#projects" aria-label="GitHub" target="_blank" rel="noopener noreferrer" title='GitHub'>
                <GitHubIcon style={{ fontSize: 24 }} />
              </a>
              <a href="#contact" aria-label="Resume" target="_blank" rel="noopener noreferrer"  title='Resume'>
                <DescriptionIcon style={{ fontSize: 24 }} />
              </a>
            </nav>
          </header>
        </div>
      }
    </>
  );
};

export default Header;
