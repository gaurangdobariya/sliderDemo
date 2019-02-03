import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {


  title = 'slider-componant';
  imagePath: string = "../assets/state[0].jpg";
  myDataArray: string[] = ["Gujarat", "Goa", "Mizoram", "Kerala", "Rajsthan"];
  pathImage: string[] = ["../assets/state[0].jpg", "../assets/state[1].jpg", "../assets/state[2].jpg", "../assets/state[3].jpg","../assets/state[4].jpg"]
  slideIndex: number = 0;
  selectednumber: number;
  flag:any;


  carousel() {
    this.imagePath = this.pathImage[this.slideIndex];
    this.slideIndex++;
    if (this.slideIndex > 3) { this.slideIndex = 0 }
    this.flag=setTimeout(() => { this.carousel(); }, 2000);
    console.log(this.pathImage.length + "" + this.slideIndex);
  }

  onSelect(selectednumber: any) {

    clearTimeout(this.flag);
    console.log("gujarat" + selectednumber.target.value);
    switch (selectednumber.target.value) {
      case 'Gujarat': this.selectednumber = 0;
        break;
      case 'Goa': this.selectednumber = 1;
        break;
      case 'Rajsthan': this.selectednumber = 4;
        break;
        case 'Mizoram': this.selectednumber = 3;
        break; 

        case 'Kerala': this.selectednumber = 2;
        break;

    }
    //  if(selected=="Gujarat"){
    //    console.log("gujarat"+selected);
    //  }

    this.imagePath = this.pathImage[this.selectednumber];
  }
}
