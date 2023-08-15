import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenListComponent } from './token-list/token-list.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';

const routes: Routes = [
  { path: 'tokens', component: TokenListComponent },
  { path: 'codigo', component: CodeEditorComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
