import {lazy, Suspense, useEffect} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import Loadable from "react-loadable";

import './scss/app.scss';
import {MainLayout} from "./layouts/MainLayout";
import {Home} from "./pages/Home";
import {Cart} from "./pages/Cart";
import {Auth} from "./pages/Auth/Auth";
import {CreateFood} from "./pages/CreateFood/CreateFood";
import {UpdateFood} from "./pages/UpdateFood/UpdateFood";
import {useDispatch} from "react-redux";
import {checkAuthTC, logoutTC} from "./redux/user/user.actions";
import {AppDispatchType, useAppSelector} from "./redux/store";
import Cookies from "js-cookie";


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

  const navigate = useNavigate()
  const {user} = useAppSelector(state => state.user)

  const dispatch : AppDispatchType= useDispatch()

  useEffect(() => {
    const accessToken = Cookies.get('accessToken')
    if (accessToken) dispatch(checkAuthTC())
  }, [])

  useEffect(() => {
    const refreshToken = Cookies.get('refreshToken')
    if (!refreshToken && user) dispatch(logoutTC())
  }, [])

  useEffect(() => {
    if (!user) {
      navigate('/auth')
    }
  }, [user])

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
