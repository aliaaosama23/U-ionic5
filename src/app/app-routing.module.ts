import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/auth/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./pages/auth/forget-password/forget-password.module').then(m => m.ForgetPasswordPageModule)
  },
  {
    path: 'code-verification',
    loadChildren: () => import('./pages/auth/code-verification/code-verification.module').then(m => m.CodeVerificationPageModule)
  },
  {
    path: 'update-password',
    loadChildren: () => import('./pages/auth/update-password/update-password.module').then(m => m.UpdatePasswordPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/side-menu/menu/menu.module').then(m => m.MenuPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/home/main/main.module').then(m => m.MainPageModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('./pages/home/offers/offers.module').then(m => m.OffersPageModule)
  },
  {
    path: 'packages',
    loadChildren: () => import('./pages/home/packages/packages.module').then(m => m.PackagesPageModule)
  },
  {
    path: 'appointments',
    loadChildren: () => import('./pages/home/appointments/appointments.module').then(m => m.AppointmentsPageModule)
  },
  {
    path: 'doctors',
    loadChildren: () => import('./pages/home/doctors/doctors.module').then(m => m.DoctorsPageModule)
  },
  {
    path: 'complains',
    loadChildren: () => import('./pages/home/complains/complains.module').then(m => m.ComplainsPageModule)
  },
  {
    path: 'medical-file',
    loadChildren: () => import('./pages/home/medical-file/medical-file.module').then( m => m.MedicalFilePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/side-menu/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/side-menu/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/side-menu/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'suggestion',
    loadChildren: () => import('./pages/side-menu/suggestion/suggestion.module').then( m => m.SuggestionPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/side-menu/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/side-menu/terms/terms.module').then( m => m.TermsPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
