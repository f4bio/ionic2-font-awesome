import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "ion-icon[fa-name]"
})
export class FontAwesomeIcon {

  @Input("fa-name")
  set faName(val: string) {
    this.el.nativeElement.className = "fa fa-"+val;
  }

  constructor(private el: ElementRef) {
  }
}
