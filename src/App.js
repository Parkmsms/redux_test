
import './App.css';
import Test from './component/Test'
import NotFound from './component/NotFound';
import Product from './component/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Counter} from './features/Counter'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
				<Routes>
          <Route path="/" element={<Counter/>}></Route>
          <Route path="/test" element={<Test name="maple123" password="1234"/>}></Route>
					<Route path="/product/*" element={<Product />}></Route>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
     
    </div>
  );


}

export default App;
