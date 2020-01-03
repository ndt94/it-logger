import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import TechItem from './TechItem';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techAction';
import useGetTech from '../shared/hooks/getTech';

const TechListModal = () => {
  //   const tech = useSelector(state => state.tech);
  //   const { techs, loading } = tech;
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(getTechs());
  //     // es-lint-disable-next-line
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [getTechs]);
  const tech = useGetTech();
  const { techs, loading } = tech;

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technicians List</h4>
        <ul className="collection">{!loading && techs !== null && techs.map(tech => <TechItem tech={tech} key={tech.id} />)}</ul>
      </div>
    </div>
  );
};

export default TechListModal;

// OLD WAYS WITH CONNECT
// const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
//     useEffect(() => {
//         getTechs();
//         // es-lint-disable-next-line
//     }, [getTechs]);

//     return (
//         <div id="tech-list-modal" className="modal">
//             <div className="modal-content">
//                 <h4>Technicians List</h4>
//                 <ul className="collection">
//                     {!loading &&
//                         techs !== null &&
//                         techs.map(tech => (
//                             <TechItem tech={tech} key={tech.id} />
//                         ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// TechListModal.propTypes = {
//     tech: PropTypes.object.isRequired,
//     getTechs: PropTypes.func.isRequired
// };

// const mapStateToProps = state => ({
//     tech: state.tech
// });

// export default connect(
//     mapStateToProps,
//     { getTechs }
// )(TechListModal);
