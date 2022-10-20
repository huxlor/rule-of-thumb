import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { RulingsComponent } from './components/rulings/rulings.component';
import { ClassNamePipe } from '../../layout/class-name.pipe';
import { DateAgoPipe } from '../../layout/date-ago.pipe';

@NgModule({
  declarations: [HomePage, RulingsComponent, ClassNamePipe, DateAgoPipe],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
