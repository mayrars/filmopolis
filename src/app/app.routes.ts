import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { MovieComponent } from './pages/movie/movie.component';
import { TvshowComponent } from './pages/tvshow/tvshow.component';
import { TvshowCategoryComponent } from './pages/tvshow-category/tvshow-category.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"categories",component:CategoriesComponent},
    {path:"category/:id",component:CategoryComponent},
    {path:"categoriestv/:id",component:TvshowCategoryComponent},
    {path:"movie/:id",component:MovieComponent},
    {path:"tvshow/:id",component:TvshowComponent},
    {path:"**",component:HomeComponent},
];
