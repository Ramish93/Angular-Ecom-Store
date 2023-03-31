import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: `./home.component.html`,
})
export class HomeComponent {
  cols = 3;
  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
  }
}
