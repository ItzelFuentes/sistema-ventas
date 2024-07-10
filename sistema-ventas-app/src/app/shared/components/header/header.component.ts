import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();
  constructor()  {}
   
  ngOnInit(): void {}

  onToggleSidenav(){
    this.toggleSidenav.emit();
  }

}
