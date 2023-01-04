 import { Route, Routes } from 'react-router-dom';
import Content from './components/Content';
import FullProduct from './components/FullProduct';

	function App() {
     return(
            <div className='App'>
				<Routes>
					<Route path="/" element={<Content />}/>
					<Route path="/fullproduct/:id" element={<FullProduct />}/>
				</Routes>
            </div>
     )
 }

 export default App;