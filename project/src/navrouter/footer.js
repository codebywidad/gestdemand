


export default function Footer() {
 return <>
 <section className="pied-page">
        <div className="contenu-pied-page">
            <div className="informations-institutionnelles">
                <h4>Institut Spécialisé de Technologie Appliquée Hay Salam</h4>
                <p>Filière : Développement Digital - Option Web Full Stack</p>
                <p>Module : M204 - Développement front-end</p>
                <p>Formateur : Khalid MZIBRA</p>
            </div>

            <div className="liens-rapides">
                <h4>Liens utiles</h4>
                <ul>
                    <li><a href="#">Documentation technique</a></li>
                    <li><a href="#">Guide d'installation</a></li>
                    <li><a href="#">API Reference</a></li>
                    <li><a href="#">Repository GitHub</a></li>
                </ul>
            </div>

            <div className="liens-rapides">
                <h4>Ressources</h4>
                <ul>
                    <li><a href="#">React Documentation</a></li>
                    <li><a href="#">Redux Toolkit</a></li>
                    <li><a href="#">Bootstrap 5</a></li>
                    <li><a href="#">Testing Library</a></li>
                </ul>
            </div>
        </div>
        
        <div className="copyright">
            <p>&copy; 2025 GestDemand - Mini-Projet React. Tous droits réservés.</p>
        </div>
 </section>
 </>



}