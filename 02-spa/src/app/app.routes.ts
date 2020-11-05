import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


const APP_ROUTES: Routes = [ // Array de rutas, cada ruta tiene un path y un componente
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent},
    { path: 'buscar/:termino', component: BuscadorComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' } // La ruta ** es una ruta especial por si no consigue hacer match con ninguna de las otras
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
// Si enviamos parámetros por url y hacemos refresh puede fallar, entonces usaríamos el sistema de hash en la URL
// Para usar el sistema de hash en la URL sería:
// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true});
// De otro modo tendríamos que indicar en el servidor, con .htaccess por ejemplo, que redirija a la raíz.
// De manera automática nos configuró angular-cli en el index.html <base href="/"> necesario si no vamos a usar hash.


