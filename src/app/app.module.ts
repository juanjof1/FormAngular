import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormBookComponent } from "./form-book/form-book.component";
import { FormsModule } from "@angular/forms";
import { TableBooksComponent } from "./table-books/table-books.component";

@NgModule({
  declarations: [AppComponent, FormBookComponent, TableBooksComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
