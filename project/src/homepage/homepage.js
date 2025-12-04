import Header from './header'
import Fonctions from './fonctions';
import Stats from './stats';
import Tech from './tech';
import CTA from './cta';
import Menu from '../navrouter/menu';
import Footer from '../navrouter/footer';
import Structure from './structure';

export default function Homepage () {
    return <>
    <section class="entete">
        <Menu />
        <Header />
    </section>
    <Fonctions />
    <Stats />
    <Tech />
    <Structure />
    <CTA /> 
    <Footer />
    </> 

    

}