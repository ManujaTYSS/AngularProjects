import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { NewsComponent } from './news/news.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Parent1Component } from './parent1/parent1.component';
import { HeaderComponent } from './header/header.component';
import { Child4Component } from './child4/child4.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    NewsComponent,
    MobilesComponent,
    RecipesComponent,
    HomeComponent,
    HeaderComponent,
    PageNotFoundComponent,
    Parent1Component,
    Child1Component,
    Child2Component,
    Child3Component,
    Child4Component,
    FormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'cars', component: CarsComponent,children:
    [
      { path: 'child1', component: Child1Component}
    ]},
      { path: 'news', component: NewsComponent ,children:[
        { path: 'child4', component: Child4Component}
      ]},
      { path: 'mobiles', component: MobilesComponent ,children:[
        { path: 'child3', component: Child3Component}
      ]},
      { path: 'recipes', component: RecipesComponent, children:[
        { path: 'child2', component: Child2Component}
      ]},
      {path: 'forms', component: FormComponent},
      { path: '**', component: PageNotFoundComponent}
    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
