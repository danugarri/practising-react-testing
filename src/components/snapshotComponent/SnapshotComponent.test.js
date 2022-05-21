import renderer from 'react-test-renderer';
import { SnapShotComponent } from './SnapshotComponent';

describe('The SnapShotComponent', () => {
    
    it('renders correctly', () => {
        const tree = renderer
            .create(<SnapShotComponent />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

