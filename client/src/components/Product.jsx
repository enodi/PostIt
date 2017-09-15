import React, { Component } from 'react';
import { Footer } from './Footer';

export default class Product extends Component {
  render() {
    return(
      <div>
        <div className="parallax-container valign-wrapper">
           <div className="parallax"><img src={require("../assets/images/product.jpg")} alt=""/></div>
         </div><br/><br/>

         <div className="container">
           <div className="row">
             <div className="col l12 center-align">
               <h4>Features</h4><br/>
             </div>
             <div className="col l12">
               <div className="col l5 s12">
                 <div className="card #e0e0e0 grey lighten-2">
                   <div className="card-content black-text">
                     <span className="card-title">Groups</span>
                     <p>Create groups and interact with everyone in the group at the same time.
                     Create a group and discuss about politics, new cooking recipe, office work etc</p>
                   </div>
                 </div>
               </div>
               <div className="col l7 s12">
                 <img src={require("../assets/images/group.jpg")} className="responsive-img" alt=""/>
               </div>
             </div>

             <div className="col l12">
               <div className="col l5 s12">
                 <div className="card #e0e0e0 grey lighten-2">
                   <div className="card-content black-text">
                     <span className="card-title">Post Messages</span>
                     <p>With PostIt, you will get fast, simple, secure messages all at the same time.
                     Experience PostIt swift messaging system</p>
                   </div>
                 </div>
               </div>
               <div className="col l7 s12">
                 <img src={require("../assets/images/message.jpg")} className="responsive-img" alt=""/>
               </div>
             </div>
           </div>
         </div>

         <div className="platform-background z-depth-2">
     			<div className="row center-align">
     				<div className="col l12 s12">
               <h4>Across All Devices</h4>
               <p>Use PostIt on any device</p><br/>
     					<img src={require("../assets/images/devices.png")} className="circle responsive-img" alt=""/>
     				</div>
     			</div>
     		</div><br/>
      <Footer />
      </div>
    );
  }
}
