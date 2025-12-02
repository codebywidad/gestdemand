export default function Header (){
 
 
 return <>
 <div class="contenu-principal">
            
            <div class="texte-introduction">
                <h1>
                    Plateforme de <span class="mot-accentue">gestion des demandes</span> pour établissements d'enseignement
                </h1>
                <p>
                    Application web développée avec React.js, Redux et Bootstrap. 
                    Système complet d'authentification, gestion multi-rôles et traitement 
                    des demandes conforme aux exigences académiques.
                </p>
               
                <div class="groupe-boutons">
                    <a href="#" class="bouton bouton-principal">Accéder à l'application</a>
                    <a href="#" class="bouton bouton-secondaire">Consulter la documentation</a>
                </div>
            </div>
             
            <div class="bloc-code">
                <div class="code-ligne"><span class="code-keyword">import</span> { <span class="code-function">useState</span> } <span class="code-keyword">from</span> <span class="code-string">'react'</span>;</div>
                <div class="code-ligne"><span class="code-keyword">import</span> { <span class="code-function">useDispatch</span> } <span class="code-keyword">from</span> <span class="code-string">'react-redux'</span>;</div>
                <div class="code-ligne">&nbsp;</div>
                <div class="code-ligne"><span class="code-keyword">const</span> <span class="code-function">Login</span>  </div>
                <div class="code-ligne">&nbsp;&nbsp;<span class="code-keyword">const</span> dispatch = <span class="code-function">useDispatch</span>();</div>
                <div class="code-ligne">&nbsp;&nbsp;<span class="code-keyword">return</span> (</div>
                <div class="code-ligne">&nbsp;&nbsp;&nbsp;&nbsp;&lt;form&gt;</div>
                <div class="code-ligne">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-comment">// Authentification</span></div>
                <div class="code-ligne">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/form&gt;</div>
                <div class="code-ligne">&nbsp;&nbsp;);</div>
                <div class="code-ligne">"";</div>
            </div>
        </div>
 
 </> 
 ;


}