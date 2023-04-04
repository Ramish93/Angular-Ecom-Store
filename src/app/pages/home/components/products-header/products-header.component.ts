import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-products-header",
  templateUrl: `products-header.component.html`,
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  sort = "";
  itemShowCount = 12;

  onSortUpdate = (newSort: string): void => {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  };

  onItemUpdated = (count: number): void => {
    this.itemShowCount = count;
    this.itemsCountChange.emit(count);
  };

  onColumnsUpdated = (colNum: number): void => {
    this.columnsCountChange.emit(colNum);
  };
}
