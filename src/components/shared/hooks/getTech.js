import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTechs } from '../../../actions/techAction';
const GetTech = () => {
  const tech = useSelector(state => state.tech);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTechs());
    // es-lint-disable-next-line
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getTechs]);

  return tech;
};

export default GetTech;
