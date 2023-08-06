import {
  Outlet,
} from "react-router-dom";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import './landing.scss';


export const Landing = () => {
  return (
    <>
      <Header />
      <div  className="container content-landing">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  )
}
