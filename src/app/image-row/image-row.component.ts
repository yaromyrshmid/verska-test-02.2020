import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  Input
} from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import { ModalComponent } from "../modal/modal.component";
import { Subscription } from "rxjs";

@Component({
  selector: "app-image-row",
  templateUrl: "./image-row.component.html",
  styleUrls: ["./image-row.component.sass"],
  animations: [
    trigger("openCloseModal", [
      state(
        "open",
        style({
          opacity: 1
        })
      ),
      state(
        "closed",
        style({
          visibility: "hidden",
          opacity: 0
        })
      ),
      transition("open => closed", [animate("0.5s")]),
      transition("closed => open", [animate("0.5s")])
    ])
  ]
})
export class ImageRowComponent implements OnInit, AfterViewInit, OnDestroy {
  activated = false;
  data: any = null;
  contents: any = [
    {
      image: "../../assets/images/image1.png",
      title: "Amet Condimentum",
      subtitle: "Dolor"
    },
    {
      image: "../../assets/images/image2.png",
      title: "Lorem Cursus",
      subtitle: "Ligula"
    },
    {
      image: "../../assets/images/image3.png",
      title: "Condimentum Ultricies",
      subtitle: "Consectetur"
    },
    {
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      title: "Ridiculus Ornare",
      subtitle: "Ullamcorper"
    }
  ];

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    const contentBlocks = document.querySelectorAll(".image-container");
    contentBlocks.forEach((block: HTMLElement) => {
      block.addEventListener("mouseover", () => {
        block.style["z-index"] = "20";
      });
    });

    contentBlocks.forEach((block: HTMLElement) => {
      block.addEventListener("mouseout", () => {
        block.style["z-index"] = "15";
      });
    });

    const divs = document.querySelectorAll(".image-container");
    divs.forEach((div: HTMLElement) => {
      const image = div.querySelector("img");
      if (image) {
        div.style["backgroundImage"] = `url(${image.src})`;
        div.style["backgroundRepeat"] = "no-repeat";
        div.style["backgroundSize"] = "cover";
        image.style["display"] = "none";
      }
    });
  }

  onActivate(image: any) {
    this.activated = true;
    this.data = image;
    document.querySelector("body").style["overflow"] = "hidden";
  }

  onDeactivate() {
    this.activated = false;
    document.querySelector("body").style["overflow"] = "auto";
  }

  ngOnDestroy() {
    const contentBlocks = document.querySelectorAll(".image-container");
    contentBlocks.forEach((block: HTMLElement) => {
      block.removeEventListener("mouseover", () => {
        contentBlocks.forEach((bl: HTMLElement) => {
          bl.style["z-index"] = "15";
        });
        block.style["z-index"] = "20";
      });
    });
  }

  onCloseModal(event) {
    this.onDeactivate();
  }
}
