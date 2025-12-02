export default function Fonctions(){

    
    return <>
    <section class="section-fonctionnalites" id="fonctionnalites">
        <h2 class="titre-section">Fonctionnalités implémentées</h2>
        <p class="sous-titre-section">
            Architecture modulaire respectant les bonnes pratiques de développement React
        </p>
        
        <div class="grille-fonctionnalites">
            <div class="carte-fonctionnalite">
                <span class="icone-fonctionnalite">AUTH</span>
                <h3>Authentification sécurisée</h3>
                <p>Système de connexion avec validation côté client et serveur. 
                   Limitation à trois tentatives, gestion des sessions via Redux Store, 
                   et cryptage des mots de passe selon les standards de sécurité.</p>
            </div>

            <div class="carte-fonctionnalite">
                <span class="icone-fonctionnalite">ROLES</span>
                <h3>Gestion des rôles utilisateurs</h3>
                <p>Implémentation de deux profils distincts (admin/visiteur) avec 
                   système de permissions granulaires. Routes protégées et composants 
                   conditionnels selon les privilèges.</p>
            </div>

            <div class="carte-fonctionnalite">
                <span class="icone-fonctionnalite">CRUD</span>
                <h3>Opérations CRUD complètes</h3>
                <p>Gestion complète des demandes avec création, lecture, mise à jour 
                   et suppression. Intégration API REST avec Axios et gestion 
                   des états asynchrones.</p>
            </div>

            <div class="carte-fonctionnalite">
                <span class="icone-fonctionnalite">REDUX</span>
                <h3>State Management avec Redux</h3>
                <p>Store centralisé pour la gestion de l'état global. Actions, 
                   reducers et middleware configurés pour une application 
                   maintenable et scalable.</p>
            </div>

            <div class="carte-fonctionnalite">
                <span class="icone-fonctionnalite">TEST</span>
                <h3>Tests unitaires et d'intégration</h3>
                <p>Suite de tests complète avec React Testing Library. Couverture 
                   des composants, hooks et fonctions utilitaires pour garantir 
                   la qualité du code.</p>
            </div>

            <div class="carte-fonctionnalite">
                <span class="icone-fonctionnalite">ANIM</span>
                <h3>Animations avec Framer Motion</h3>
                <p>Transitions fluides entre les pages et animations des composants. 
                   Amélioration de l'expérience utilisateur avec des effets 
                   performants et optimisés.</p>
            </div>
        </div>
    </section>
    
    
    
    </>

}