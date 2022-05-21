import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { SnapshotComponent } from './SnapshotComponent.jsx';

describe('The SnapShotComponent', () => {
    
    it('renders correctly', () => {
        const tree = renderer
            .create(<BrowserRouter><SnapshotComponent /></BrowserRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
        // very important here when using react router 6
        // to wrap our component in a <BrowserRouter> tag
    });
});

