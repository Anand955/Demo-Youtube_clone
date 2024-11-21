import React from 'react'
import home from '../assets/home.png'
import game_icon from '../assets/game_icon.png'
import automobiles from '../assets/automobiles.png'
import sports from '../assets/Sports.png'
import entertainment from '../assets/entertainment.png'
import tech from '../assets/tech.png'
import music from '../assets/music.png'
import blog from '../assets/blogs.png'
import news from '../assets/news.png'
import simon from '../assets/simon.png'
import tom from '../assets/tom.png'
import megan from '../assets/megan.png'
import cameron from '../assets/cameron.png'

const Sidebar = ({sidebar}) => {
  
  return (
    <>
      <div className={` ${sidebar ? "sidebar" : "small_sidebar"}`}>
         <div className="links">
             <div className="side_links">
                 <img src={home} alt="" /><span>Home</span>
             </div>
             <div className="side_links">
                 <img src={game_icon} alt="" /><span>Gaming</span>
             </div>
             <div className="side_links">
                 <img src={automobiles} alt="" /><span>Automobiles</span>
             </div>
             <div className="side_links">
                 <img src={sports} alt="" /><span>Sports</span>
             </div>
             <div className="side_links">
                 <img src={entertainment} alt="" /><span>Entertainment</span>
             </div>
             <div className="side_links">
                 <img src={music} alt="" /><span>Music</span>
             </div>
             <div className="side_links">
                 <img src={tech} alt="" /><span>Technology</span>
             </div>
             <div className="side_links">
                 <img src={blog} alt="" /><span>Blogs</span>
             </div>
             <div className="side_links">
                 <img src={news} alt="" /><span>News</span>
             </div>
             <hr />
             <div className="subscribe">
                <h3>Subscribed</h3>
                <div className="side_link">
                  <img src={simon} alt="" /><p>PewDiePie</p>
                </div>
                <div className="side_link">
                  <img src={tom} alt="" /><p>PewDiePie</p>
                </div>
                <div className="side_link">
                  <img src={megan} alt="" /><p>PewDiePie</p>
                </div>
                <div className="side_link">
                  <img src={cameron} alt="" /><p>PewDiePie</p>
                </div>
             </div>
         </div>
     </div>
    </>
  )
}

export default Sidebar
