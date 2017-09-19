import React from 'react';
import { Link } from 'react-router';

// export default class Groups extends React.Component {
//   render() {
//     console.log('this====', this.props.groups)
//     // if(this.props.groups) {
//     //   return (
//     //     this.props.groups.Groups.map((group) => {
//     //       <p>{group.name}</p>
//     //     })
//     //   )
//     // } else return null
//     // return(<p>new</p>)
//     // const { userGroups } = this.props;
//     // return(
//       <div>
//         {
//           this.props.groups && this.props.groups.Groups.map((group) => {
//             <li><Link to="#" className="sidebar-text black-text">another dude </Link></li>
//           })
//         }
//       </div>
//     // );
//   }
// }

const Groups = (props) => {
  return(
      <div>
        {
          props.groups && props.groups.Groups.map((group) => { return(
            <li><Link to="#" className="sidebar-text black-text">{group.name}</Link></li>
          )
          })
        }
      </div>
    );
}

export default Groups; 
