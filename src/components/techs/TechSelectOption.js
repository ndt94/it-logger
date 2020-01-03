import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector, useDispatch } from 'react-redux';
import { getTechs } from '../../actions/techAction';
import useGetTech from '../shared/hooks/getTech';

const TechSelectOption = () => {
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
    !loading &&
    techs !== null &&
    techs.map(t => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

export default TechSelectOption;

// OLD WAYS WITH CONNECT
// const TechSelectOption = ({ getTechs, tech: { techs, loading } }) => {
//     useEffect(() => {
//         getTechs();
//         // es-lint-disable-next-line
//     }, [getTechs]);

//     return (
//         !loading &&
//         techs !== null &&
//         techs.map(t => (
//             <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
//                 {t.firstName} {t.lastName}
//             </option>
//         ))
//     );
// };

// TechSelectOption.propTypes = {
//     tech: PropTypes.object.isRequired,
//     getTechs: PropTypes.func.isRequired
// };

// const mapStateToProps = state => ({
//     tech: state.tech
// });

// export default connect(
//     mapStateToProps,
//     { getTechs }
// )(TechSelectOption);
