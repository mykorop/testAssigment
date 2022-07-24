import {NgModule} from '@angular/core';
import {MenuComponent} from "../../components/menu-component/menu-component";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {CommonModule} from "@angular/common";
import {AngularMaterialModule} from "../../angular-material.module";
import {DashboardPage} from "./dashboard-page";
import {LeftSidePanel} from "../../components/left-side-panel/left-side-panel";
import {RightSidePanel} from "../../components/right-side-panel/right-side-panel";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {ChartComponent} from "../../components/chart-component/chart-component";
import {NgChartsModule} from "ng2-charts";
import {SidenavService} from "../../services/sidenav.service";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    MenuComponent,
    DashboardPage,
    LeftSidePanel,
    RightSidePanel,
    ChartComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    DashboardRoutingModule,
    MatSlideToggleModule,
    FlexLayoutModule,
    NgChartsModule
  ],
  providers: [SidenavService]
})
export class DashboardModule {
}
