import {FC} from "react";
import {Link, useLocation} from "react-router-dom";

import logoSvg from '../assets/img/pizza-logo.svg'
import {Search} from "./Search/Search";
import {useAppSelector} from "../redux/store";
import {CartSVG} from "./SvgComponent";
import {AuthButton} from "./Buttons/AuthButton/AuthButton";
import {Auth} from "./Auth/Auth";
import {ProfileContainer} from "./ProfileContainer/ProfileContainer";


type HeaderPropsType = {}

export const Header: FC<HeaderPropsType> = () => {
  const {items, totalPrice} = useAppSelector(state => state.cart)
  const totalCount = items.reduce((sum, item) => sum + item.count, 0)

  const location = useLocation()
   return (
      <div className="header">
         <div className="container">
            <Link to={'/'} className="headerLogo">
               <img width="38" src={logoSvg} alt="Pizza logo"/>
               <div>
                  <h1>SHUVERIDE DAAR</h1>
                  <p>самая вкусная пища в мире</p>
               </div>
            </Link>

           {location.pathname !== '/cart' && <Search />}
            <div className="headerCart">
              {location.pathname !== '/cart' &&
                   <Link to="/cart" className="button buttonCart">
                       <span>{totalPrice} ₽</span>
                       <div className="buttonDelimiter"></div>
                       <CartSVG />
                       <span>{totalCount}</span>
                   </Link>
              }
            </div>
           <ProfileContainer />
         </div>

      </div>
   )
}