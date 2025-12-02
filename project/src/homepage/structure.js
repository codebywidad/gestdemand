export default function Structure(){
    return <>
    <section class="section-processus" id="processus">
        <h2 class="titre-section">Architecture de l'application</h2>
        <p class="sous-titre-section">
            Flux de travail et structure des composants
        </p>
        
        <div class="conteneur-etapes">
            <div class="etape">
                <div class="numero-etape">01</div>
                <div class="contenu-etape">
                    <h3>Authentification et autorisation</h3>
                    <p>Composants Login et CreateAccount avec validation des formulaires. 
                       Gestion des tokens JWT, stockage sécurisé dans le Redux Store, 
                       et redirection selon les rôles utilisateurs.</p>
                </div>
            </div>
              
            <div class="etape">
                <div class="numero-etape">02</div>
                <div class="contenu-etape">
                    <h3>Layout et navigation conditionnelle</h3>
                    <p>Composant Layout avec HeaderSection, NavigationBar et Footer. 
                       Menu adaptatif selon le profil (admin/visiteur) et routing 
                       dynamique avec React Router DOM.</p>
                </div>
            </div>

            <div class="etape">
                <div class="numero-etape">03</div>
                <div class="contenu-etape">
                    <h3>Gestion des demandes et CRUD</h3>
                    <p>Interface de soumission, modification et suppression des demandes. 
                       Communication avec l'API MockAPI, gestion des états de chargement 
                       et traitement des erreurs.</p>
                </div>
            </div>

            <div class="etape">
                <div class="numero-etape">04</div>
                <div class="contenu-etape">
                    <h3>Dashboard et visualisation des données</h3>
                    <p>Tableau de bord avec statistiques en temps réel. Graphiques 
                       interactifs pour le suivi des demandes, filtrage par statut, 
                       et export des rapports.</p>
                </div>
            </div>
        </div>
    </section>
    
    </>


}