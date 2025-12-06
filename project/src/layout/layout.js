import Footer from "../navrouter/footer";
import Menu from "../navrouter/menu";
import Content from "./components/content";
import Header from "./header";
import Sidemenu from "./sidemenu";

export default function Layout(){

    return <>

        <Menu />
        <Header />
        <Sidemenu /> <Content />
        <Footer />

    </>

}