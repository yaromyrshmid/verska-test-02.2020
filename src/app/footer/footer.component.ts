import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.sass"]
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear();

  site_map = [
    {
      title: "Follow us",
      links: [
        { link_title: "Twitter", link: "" },
        { link_title: "Faceboook", link: "" },
        { link_title: "Linkedin", link: "" },
        { link_title: "Pinterest", link: "" },
        { link_title: "YouTube", link: "" }
      ]
    },
    {
      title: "Get To know us",
      links: [
        { link_title: "About", link: "" },
        { link_title: "Policies", link: "" },
        { link_title: "Careers", link: "" },
        { link_title: "Press", link: "" },
        { link_title: "Developers", link: "" }
      ]
    },
    {
      title: "Locations",
      links: [
        { link_title: "Detroit", link: "" },
        { link_title: "London", link: "" },
        { link_title: "Florida", link: "" },
        { link_title: "Las Vegas", link: "" },
        { link_title: "California", link: "" }
      ]
    }
  ];

  mission = {
    title: "Our Mission",
    text:
      "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur"
  };

  constructor() {}

  ngOnInit() {}
}
