import { Component, OnInit, AfterViewInit, OnDestroy } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

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
  contents: [
    { image?: string; video?: string; title: string; subtitle: string }
  ] = [
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
      image: "../../assets/images/image4.png",
      title: "Ridiculus Ornare",
      subtitle: "Ullamcorper"
    }
  ];

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    const contentBlocks = document.querySelectorAll(".image-container");
    contentBlocks.forEach(block => {
      block.addEventListener("mouseover", () => {
        contentBlocks.forEach(bl => {
          bl.style["z-index"] = "15";
        });
        block.style["z-index"] = "20";
      });
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
    contentBlocks.forEach(block => {
      block.removeEventListener("mouseover", () => {
        contentBlocks.forEach(bl => {
          bl.style["z-index"] = "15";
        });
        block.style["z-index"] = "20";
      });
    });
  }
}
