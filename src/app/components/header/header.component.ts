import { Component, OnInit, EventEmitter, Output, HostListener } from '@angular/core';
import { HeaderService } from './header.service';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

declare var $: any;



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  iconMenu = faBookOpen;

  private locked: boolean = false;
  private hidden?: boolean = false;
  private expended?: boolean = null;

  @Output() heightChange = new EventEmitter();
  height: number;
  scrollTrigger: number = 30;
  toggled: boolean = false; // toggled when is small

  constructor(
    private service: HeaderService
  ) {
    this.service.hide.subscribe((value)=>{ this.serviceHide(value); });
    this.service.lock.subscribe((value)=>{ this.serviceLock(value); });
    this.service.expend.subscribe((value)=>{ this.serviceExpend(value); });
  }

  ngOnInit(): void {
    this.checkHeight();
    $(document).ready(()=>{
      $('header, #content').addClass('loaded');
    })
  }


  heightChanged(){
    this.height = $('header').height();
    this.heightChange.emit(this.height);
  }
  setHeight(height: number){
    $('header').animate({height:this.height}, 1500);
    this.height = height;
    this.heightChange.emit(height);
  }

  @HostListener('window:resize')
  @HostListener('window:scroll')
  checkHeight() {
    const scrolled = $(window).scrollTop();

    switch (true){
      case (this.locked):
        break;
      case (this.expended != null && !this.expended):
      case (scrolled > this.scrollTrigger && !this.toggled):
        $('header, #content').addClass('scrolled');
        this.toggled = true;
        this.heightChanged();
        break;
      case (this.expended != null && this.expended):
      case (scrolled <= this.scrollTrigger && this.toggled ):
        $('header, #content').removeClass('scrolled');
        this.toggled = false;
        this.heightChanged();
        break;


    }
  }





  serviceLock(value: boolean){
    this.locked = value;
  }
  serviceHide(value: boolean){
    this.hidden = value;
    if(value){
      $('header').hide();
    } else {
      $('header').show();
    }
  }
  serviceExpend(value?: boolean){
    const lastLock = this.locked;
    this.locked = false;
    this.expended = value;
    this.checkHeight();
    this.locked = lastLock;
  }
}
