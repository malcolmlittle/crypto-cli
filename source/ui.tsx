import React, {FC} from 'react';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';

const App: FC<{name?: string}> = () => (
	<Gradient name = 'summer'>
		<BigText text='crypto-cli' align='center' font='chrome'/>
	</Gradient>
);

module.exports = App;
export default App;
