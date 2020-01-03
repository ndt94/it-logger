import React from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { deleteTech } from '../../actions/techAction';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteTech(tech.id));
    M.toast({ html: 'Technician delete' });
  };
  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons gray-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default TechItem;

// OLD WAYS WITH CONNECT
// const TechItem = ({ tech, deleteTech }) => {
//     const onDelete = () => {
//         deleteTech(tech.id);
//         M.toast({ html: "Technician delete" });
//     };
//     return (
//         <li className="collection-item">
//             <div>
//                 {tech.firstName} {tech.lastName}
//                 <a href="#!" className="secondary-content" onClick={onDelete}>
//                     <i className="material-icons gray-text">delete</i>
//                 </a>
//             </div>
//         </li>
//     );
// };

// TechItem.propTypes = {
//     tech: PropTypes.object.isRequired,
//     deleteTech: PropTypes.func.isRequired
// };

// export default connect(
//     null,
//     { deleteTech }
// )(TechItem);
