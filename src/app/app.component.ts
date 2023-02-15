import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// import SwiperCore, { EffectFade } from 'swiper';
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar, SwiperOptions, Virtual, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private sanitizer: DomSanitizer) {

  }
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  images = [
    "https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-desktop-background-1691.jpg",
    "../assets/banner2.jfif",
    "../assets/banner3.jpg",
    "../assets/banner4.jfif",
    "../assets/banner5.jfif"
  ]

  loadImages: any[] = []
  uploadImages(event: any) {
    let files = event.target.files;
    let formData = new FormData();
    for (let i = 0; i < files.length; i++) {

      this.loadImages.push(
        URL.createObjectURL(event.target.files[i])
        )
      // var reader = new FileReader();
      // reader.readAsDataURL(event.target.files[i])

      // reader.onload = (event: any) => {
      //   this.loadImages.push(event.target.result)
      // }



    }
    console.log(formData)
  }

  getTrustUrl(src: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(src)
  }


}