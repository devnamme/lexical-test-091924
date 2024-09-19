import { connect } from 'react-redux';
import * as pages from '../pages';

function App({ page }) {
  const Page = pages[page];

  return (
    <div className="flex h-screen flex-col overflow-y-auto bg-grey-bg">
      <div className="flex flex-grow flex-col px-10 py-15">
        <Page />
      </div>
    </div>
  );
}

const mapStateToProps = ({ page }) => ({ page });

export default connect(mapStateToProps)(App);
