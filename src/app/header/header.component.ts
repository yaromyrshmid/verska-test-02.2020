import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"],
  animations: [
    trigger("openCloseSearch", [
      state(
        "open",
        style({
          opacity: 1,
          width: "auto"
        })
      ),
      state(
        "closed",
        style({
          float: "right",
          visibility: "hidden",
          width: "0px",
          opacity: 0
        })
      ),
      transition("open => closed", [animate("0.6s")]),
      transition("closed => open", [animate("0.6s")])
    ])
  ]
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild("header_container", { static: false }) header_container;
  @ViewChild("header", { static: false }) header;
  faSearch = faSearch;
  faTimes = faTimes;
  showSearchBar = false;
  showSmallNavbar = false;

  constructor() {}

  ngOnInit() {
    // Adding scroll event listener to document body
    window.addEventListener(
      "scroll",
      () => {
        this.headerScroll();
      },
      true
    );
  }

  headerScroll() {
    // Getting header position and dimensions
    const header_y_position = this.header_container.nativeElement.getBoundingClientRect()
      .y;
    const header_height = this.header.nativeElement.getBoundingClientRect()
      .height;
    // Getting footer position
    const footer_y_position = document
      .querySelector(".footer-container")
      .getBoundingClientRect().top;
    // Changing height or padding of header if scrolled over 100px from top
    if (header_y_position < -70) {
      // Changing color of header if over footer
      if (header_height > footer_y_position) {
        this.header.nativeElement.className = "header scrolled";
      } else {
        this.header.nativeElement.className = "header scrolled";
      }
    } else {
      // Removing other classes if no conditions are met
      this.header.nativeElement.className = "header";
    }
  }

  onToggleSearchBar() {
    this.showSearchBar = !this.showSearchBar;
  }

  toggleSmallNavbar() {
    this.showSmallNavbar = !this.showSmallNavbar;
  }

  ngOnDestroy() {
    window.removeEventListener(
      "scroll",
      () => {
        this.headerScroll();
      },
      true
    );
  }
}
