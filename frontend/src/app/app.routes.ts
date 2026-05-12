import { Routes } from '@angular/router';
import { MarioDexPageComponent } from './features/mario/mariodex-page/mariodex-page.component';

export const routes: Routes = [
    { path: '', component: MarioDexPageComponent },
    // si se escribe cualquier cosa mal, redirige a la principal
    { path: '**', redirectTo: '' }
];
