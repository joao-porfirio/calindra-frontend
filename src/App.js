import '../src/css/reset.css';
import '../src/css/style.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Information from './components/Information/Information';
function App() {
	return (
		<div className="App">
			<Header />
			<Banner />
			<Information />
			<Footer />
		</div>
	);
}

export default App;
