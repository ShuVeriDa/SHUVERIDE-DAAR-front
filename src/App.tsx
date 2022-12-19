import {lazy, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import Loadable from "react-loadable";

import './scss/app.scss';
import {MainLayout} from "./layouts/MainLayout";
import {Home} from "./pages/Home";
import {Cart} from "./pages/Cart";
import {Auth} from "./pages/Auth/Auth";
import {CreateFood} from "./pages/CreateFood/CreateFood";
import {UpdateFood} from "./pages/UpdateFood/UpdateFood";


// const Cart = Loadable({
//    loader: () => import(/* webpackChunkName: "Cart"*/ "./pages/Cart"),
//    loading: () => <div> Загрузка</div>,
//    render(loaded: any) {
//       const Component: any = loaded.default; // tslint:disable-line:variable-name
//       return <Component/>;
//    },
// })

const FullPizza = lazy(() => import(/* webpackChunkName: "FullPizza"*/ "./pages/FullPizza/FullPizza")
  .then(({FullPizza}) => ({default: FullPizza})),
)
const NotFound = lazy(() => import(/* webpackChunkName: "NotFound"*/ './pages/NotFound')
  .then(({NotFound}) => ({default: NotFound}))
)

function App() {
  return (
    <Routes>
      <Route path={'/auth'} element={<Auth/>}/>
      <Route path={'/create'} element={<CreateFood />}/>
      <Route path={'/update/:id'} element={<UpdateFood />}/>
      <Route path={'/'} element={<MainLayout/>}>
        <Route path={'/'} element={<Home/>}/>

        <Route path={'cart'}
               element={
                 <Suspense fallback={<div>Идет загрузка...</div>}>
                   <Cart/>
                 </Suspense>}
        />
        <Route path={'food/:id'}
               element={
                 <Suspense fallback={<div>Идет загрузка...</div>}>
                   <FullPizza/>
                 </Suspense>}
        />
        <Route path={'*'}
               element={
                 <Suspense fallback={<div>Идет загрузка...</div>}>
                   <NotFound/>
                 </Suspense>}
        />
      </Route>
    </Routes>
  );
}

export default App;
