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
  
} from "@angular/material";

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatToolbarModule,MatCardModule, MatTabsModule, MatTableModule],
  exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatToolbarModule,MatCardModule, MatTabsModule, MatTableModule]
})
export class MaterialModule {}
