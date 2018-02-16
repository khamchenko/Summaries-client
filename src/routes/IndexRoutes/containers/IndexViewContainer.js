import { connect } from 'react-redux';

import IndexView from '../components/IndexView';
import { actionCreators } from '../modules/summaries';

export default connect(
  ({ index: { summaries } }) => ({ summaries }),
  actionCreators,
)(IndexView);