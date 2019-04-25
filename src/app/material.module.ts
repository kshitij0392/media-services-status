import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatCardModule,
  MatTabsModule,
  MatTableModule,
  MatTooltipModule,
  MatSelectModule
  
} from "@angular/material";

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatToolbarModule,MatCardModule, MatTabsModule, MatTableModule, MatTooltipModule, MatSelectModule],
  exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatToolbarModule,MatCardModule, MatTabsModule, MatTableModule, MatTooltipModule, MatSelectModule]
})
export class MaterialModule {}
