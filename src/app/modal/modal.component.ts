import {
  Component,
  OnInit,
  Input,
  Output,
  OnChanges,
  EventEmitter,
  ElementRef,
  ViewChild
} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.sass"]
})
export class ModalComponent implements OnInit, OnChanges {
  @Input() activated;
  @Input() data;
  plaintext: string = null;
  faTimes = faTimes;
  @Output() closeModal: EventEmitter<any> = new EventEmitter();
  @ViewChild("plaintextContainer", { static: false })
  plaintextContainer: ElementRef;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  ngOnChanges() {
    if (this.activated) {
      this.plaintext = null;
      setTimeout(() => {
        console.log(this.plaintextContainer);
        this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(
          response => {
            const randomTitle = Math.floor(Math.random() * 10);
            this.plaintext = response[randomTitle].body;
          },
          error => {
            this.plaintext = "Error";
          }
        );
      }, 1000);
    }
  }

  onCloseModal() {
    this.closeModal.emit(false);
  }
}
