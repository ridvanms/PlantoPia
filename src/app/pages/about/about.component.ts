import { AfterViewInit, Component, OnDestroy, OnInit,ElementRef,ViewChild } from '@angular/core';
import { ScrollPositionServiceService } from 'src/app/Services/scroll-position-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit, OnDestroy {
  content: ContentItem[] = [
    {
      "title": "Our Mission",
      "text":`We understand the importance of effective marketing strategies in reaching a wider
      audience. Our marketing approach combines the best traditional and digital strategies to create a holistic and
      engaging experience for our customers. Through captivating visuals, informative content, and interactive social media
      campaigns, we aim to inspire and educate our audience about the wonders of plants.`
    },
    {
      "title": "What We Offer",
      "text": `We provide a wide variety of high-quality plants, carefully curated to cater to different tastes and preferences.
        Whether you're a seasoned plant enthusiast or a beginner looking to add some greenery to your space, we have the
        perfect plant for you. Our inventory includes indoor plants, outdoor plants, succulents, flowers, and more. We also
        offer plant care products and accessories to ensure your plants thrive.`
    }
  ]
  currentPage: number = 1;
  havePages: number = 2;

  @ViewChild('titleAbout', { static: true }) titleAbout!: ElementRef;
  @ViewChild('imageAbout', { static: true }) imageAbout!: ElementRef;
  @ViewChild('aboutContent', { static: true }) aboutContent!: ElementRef;
  constructor(
    private scrollService:ScrollPositionServiceService
  ) {
    // 
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    const title = this.titleAbout?.nativeElement
    const contest = this.aboutContent?.nativeElement
    const scrollHandler = () => {
      
      const value = window.scrollY;
      
      title.style.marginTop = -value * 2.5 + "px"
      contest.style.marginTop = -value  + "px"
    }
    window.addEventListener('scroll', scrollHandler);
    this.scrollService.setScrollHandler(scrollHandler);
  }
  prev() {
    this.currentPage--
  }
  next() {this.currentPage++
  }
  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollService.getScrollHandler());
  }
}
export interface ContentItem{
  title: string,
  text: string;
}