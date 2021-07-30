import { Component, EventEmitter, Output } from "@angular/core";
import { Book } from "./form-book.interface";

@Component({
  selector: "app-form-book",
  templateUrl: "./form-book.component.html",
  styleUrls: ["./form-book.component.css"]
})
export class FormBookComponent {
  public bookName: String = "";
  public year: String = "";
  public description: String = "";
  public isSold: Boolean = false;

  public userName: String = "";
  public userBirthDate: String = "";
  public country: String = "";

  @Output() onBookCreated = new EventEmitter<Book>();

  public onClick() {
    const bookObject: Book = {
      name: this.bookName,
      year: this.year,
      user: {
        name: this.userName,
        birthdate: this.userBirthDate,
        country: this.country
      },
      description: this.description,
      isSold: this.isSold
    };
    alert("Libro registrado exitosamente");
    console.log(bookObject);
    this.onBookCreated.emit(bookObject);
  }
}

