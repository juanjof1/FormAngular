import { Component, Input } from "@angular/core";
import { Book } from "../form-book/form-book.interface";

@Component({
  selector: "app-table-books",
  templateUrl: "./table-books.component.html",
  styleUrls: ["./table-books.component.css"]
})
export class TableBooksComponent {
  @Input() books: Array<Book> = [];
}
