import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logAction';

// NEW WAY WITH REDUX HOOKS
const Logs = () => {
  const log = useSelector(state => state.log);
  //   const log = useSelector(state => {
  //     console.log(state);
  //     return state.log;
  //   });
  const { logs, loading } = log;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLogs());
    // es-lint-disable-next-line
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getLogs]);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? <p className="center">No logs...</p> : logs.map(log => <LogItem log={log} key={log.id} />)}
    </ul>
  );
};

export default Logs;

// OLD WAYS WITH CONNECT
// const Logs = ({ log: { logs, loading }, getLogs }) => {
//   useEffect(() => {
//     getLogs();
//     // es-lint-disable-next-line
//   }, [getLogs]);

//   if (loading || logs === null) {
//     return <Preloader />;
//   }

//   return (
//     <ul className="collection with-header">
//       <li className="collection-header">
//         <h4 className="center">System Logs</h4>
//       </li>
//       {!loading && logs.length === 0 ? <p className="center">No logs...</p> : logs.map(log => <LogItem log={log} key={log.id} />)}
//     </ul>
//   );
// };

// Logs.propTypes = {
//   log: PropTypes.object.isRequired,
//   getLogs: PropTypes.func.isRequired
// };

// const mapStateToProps = state => ({
//   log: state.log
// });

// export default connect(mapStateToProps, { getLogs })(Logs);
