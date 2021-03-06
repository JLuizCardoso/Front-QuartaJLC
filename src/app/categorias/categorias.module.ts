import { RouterModule } from '@angular/router';
import { CategoriasService } from './categorias.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasPesquisaComponent } from './categorias-pesquisa/categorias-pesquisa.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { CategoriasCadastroComponent } from './categorias-cadastro/categorias-cadastro.component';


@NgModule({
  declarations: [CategoriasPesquisaComponent, CategoriasCadastroComponent],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule,
    RouterModule
  ],
  exports:[
    CategoriasPesquisaComponent,
    CategoriasCadastroComponent
  ],
  providers:[
    CategoriasService,
    MessageService

  ]
})
export class CategoriasModule { }
