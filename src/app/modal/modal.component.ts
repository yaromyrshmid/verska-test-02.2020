import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.sass"]
})
export class ModalComponent implements OnInit {
  @Input() activated;
  @Input() data;
  plaintext: string = null;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(
      response => {
        this.plaintext = response[0].title;
      },
      error => {
        this.plaintext = "Error";
      }
    );
  }
}
