import React from 'react'
import video1 from '../assets/video.mp4'
import jack from '../assets/jack.png'
import dislike from '../assets/dislike.png'
import like from '../assets/like.png'
import share from '../assets/share.png'
import save from '../assets/save.png'
import user_profile from '../assets/user_profile.jpg'
import thumbnail1 from '../assets/thumbnail1.png'
import thumbnail2 from '../assets/thumbnail2.png'
import thumbnail3 from '../assets/thumbnail3.png'
import thumbnail4 from '../assets/thumbnail4.png'
import thumbnail5 from '../assets/thumbnail5.png'
import thumbnail6 from '../assets/thumbnail6.png'
import thumbnail7 from '../assets/thumbnail7.png'
import thumbnail8 from '../assets/thumbnail8.png'

const Video = () => {
return (
<>
<div class="play_container">
   <div class="play_video">
      <video src={video1} autoplay muted controls></video>
      <h3>Best YouTube Channel To Learn Web Devlopment</h3>
      <div class="play_video_info">
         <p>1525 Views • 2 days ago</p>
         <div>
            <span>
            <img src={like} alt=""/>125<img src={dislike} alt=""/>2
            <img src={share} alt=""/>Share<img src={save} alt=""/>Save
            </span>
         </div>
      </div>
      <hr/>
      <div class="publisher">
         <img src={jack} alt=""/>
         <div>
            <p>GreatStack</p>
            <span>1M Subscribers</span>
         </div>
         <button>Subscribe</button>
      </div>
      <div class="vide_discription">
         <p>Channel that makes leraning Easy</p>
         <p>Subscribe GreactStack to Watch More Tutorials on Web Devlopment</p>
         <h4>130 Comments</h4>
         <div class="comment">
            <img src={user_profile} alt=""/>
            <div>
               <h3>Jack Nickolsan <span>1 day ago</span></h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eligendi quasi provident dolore exercitationem culpa omnis repudiandae doloremque consequuntur obcaecati.</p>
               <div class="comment_action"><img src={like} alt=""/><span>244</span><img src={dislike} alt=""/></div>
            </div>
         </div>
         <div class="comment">
            <img src={user_profile} alt=""/>
            <div>
               <h3>Jack Nickolsan <span>1 day ago</span></h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eligendi quasi provident dolore exercitationem culpa omnis repudiandae doloremque consequuntur obcaecati.</p>
               <div class="comment_action"><img src={like} alt=""/><span>244</span><img src={dislike} alt=""/></div>
            </div>
         </div>
         <div class="comment">
            <img src={user_profile} alt=""/>
            <div>
               <h3>Jack Nickolsan <span>1 day ago</span></h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eligendi quasi provident dolore exercitationem culpa omnis repudiandae doloremque consequuntur obcaecati.</p>
               <div class="comment_action"><img src={like} alt=""/><span>244</span><img src={dislike} alt=""/></div>
            </div>
         </div>
         <div class="comment">
            <img src={user_profile} alt=""/>
            <div>
               <h3>Jack Nickolsan <span>1 day ago</span></h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eligendi quasi provident dolore exercitationem culpa omnis repudiandae doloremque consequuntur obcaecati.</p>
               <div class="comment_action"><img src={like} alt=""/><span>244</span><img src={dislike} alt=""/></div>
            </div>
         </div>
         <div class="comment">
            <img src={user_profile} alt=""/>
            <div>
               <h3>Jack Nickolsan <span>1 day ago</span></h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eligendi quasi provident dolore exercitationem culpa omnis repudiandae doloremque consequuntur obcaecati.</p>
               <div class="comment_action"><img src={like} alt=""/><span>244</span><img src={dislike} alt=""/></div>
            </div>
         </div>
         <div class="comment">
            <img src={user_profile} alt=""/>
            <div>
               <h3>Jack Nickolsan <span>1 day ago</span></h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eligendi quasi provident dolore exercitationem culpa omnis repudiandae doloremque consequuntur obcaecati.</p>
               <div class="comment_action"><img src={like} alt=""/><span>244</span><img src={dislike} alt=""/></div>
            </div>
         </div>
         <div class="comment">
            <img src={user_profile} alt=""/>
            <div>
               <h3>Jack Nickolsan <span>1 day ago</span></h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eligendi quasi provident dolore exercitationem culpa omnis repudiandae doloremque consequuntur obcaecati.</p>
               <div class="comment_action"><img src={like} alt=""/><span>244</span><img src={dislike} alt=""/></div>
            </div>
         </div>
         
         
        
      </div>
   </div>
   <div class="recommended">
      <div class="side_video_list">
         <img src={thumbnail1} alt=""/>
         <div class="vide_info">
            <h4>Best channel that help you to be a web developer</h4>
            <p>GreatStack</p>
            <p>199K Views</p>
         </div>
      </div>
      <div class="side_video_list">
         <img src={thumbnail2} alt=""/>
         <div class="vide_info">
            <h4>Best channel that help you to be a web developer</h4>
            <p>GreatStack</p>
            <p>199K Views</p>
         </div>
      </div>
      <div class="side_video_list">
         <img src={thumbnail3} alt=""/>
         <div class="vide_info">
            <h4>Best channel that help you to be a web developer</h4>
            <p>GreatStack</p>
            <p>199K Views</p>
         </div>
      </div>
      <div class="side_video_list">
         <img src={thumbnail4} alt=""/>
         <div class="vide_info">
            <h4>Best channel that help you to be a web developer</h4>
            <p>GreatStack</p>
            <p>199K Views</p>
         </div>
      </div>
      <div class="side_video_list">
         <img src={thumbnail5} alt=""/>
         <div class="vide_info">
            <h4>Best channel that help you to be a web developer</h4>
            <p>GreatStack</p>
            <p>199K Views</p>
         </div>
      </div>
      <div class="side_video_list">
         <img src={thumbnail6} alt=""/>
         <div class="vide_info">
            <h4>Best channel that help you to be a web developer</h4>
            <p>GreatStack</p>
            <p>199K Views</p>
         </div>
      </div>
      <div class="side_video_list">
         <img src={thumbnail8} alt=""/>
         <div class="vide_info">
            <h4>Best channel that help you to be a web developer</h4>
            <p>GreatStack</p>
            <p>199K Views</p>
         </div>
      </div>
   </div>
</div>
</>
)
}
export default Video