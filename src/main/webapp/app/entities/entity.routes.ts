import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'Authorities' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'teacher',
    data: { pageTitle: 'Teachers' },
    loadChildren: () => import('./teacher/teacher.routes'),
  },
  {
    path: 'aluno',
    data: { pageTitle: 'Alunos' },
    loadChildren: () => import('./aluno/aluno.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
