import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  @Output() searchLocationEvent: EventEmitter<any> = new EventEmitter();

  location: string = '';
  loading: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onLoading()
      .subscribe((value) => (this.loading = value));
  }

  searchLocation() {
    if (!this.location) {
      alert("Veuillez entrer le nom d'une ville !");
      return;
    }
    this.searchLocationEvent.emit(this.location);
    this.location = '';
  }

  /**
   * Méthode permettant de mettre à jour la couleur du bouton de
   * recherche
   * @param color
   */
  updateSearchBtnColor(color: string): void {
    document.getElementById('search-btn')!.style.backgroundColor = color;
  }

  ngOnInit(): void {}
}
