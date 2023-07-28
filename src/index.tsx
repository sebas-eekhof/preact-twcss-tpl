import { render } from 'preact';
import './css/style.css';
import './css/tailwind.css';
import Layout from './components/Layout';

export function Application() {
	return (
		<Layout>
			Page
		</Layout>
	);
}

render(<Application />, document.getElementById('app'));
