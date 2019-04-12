import { Component, OnInit } from '@angular/core';
import { LegalCategories } from './legalCategories';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedClientReview: any;
  clientReviews: any = [
    { id: 1, type: 'Family Law', name: 'Mitchell M.', address: 'Cherry Hill, NJ', img: '../assets/images/mitchell.png', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip' },
    { id: 2, type: 'Job & Employment Law', name: 'Joel C.', address: 'Little Rock, AK', img: '../assets/images/joel.png', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip' },
    { id: 5, type: 'Family Law', name: 'Brigida R.', address: 'Dallas, TX', img: '../assets/images/brigida.png', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip' }
  ];
  public selectedCategoryName: any;
  selectedLegalCategory: LegalCategories = new LegalCategories(0, 'Click to choose a legal category');
  availableLegalCategories = [new LegalCategories(0, 'Click to choose a legal category '),
  new LegalCategories(1, 'Family'),
  new LegalCategories(2, 'Criminal Defense'),
  new LegalCategories(3, 'Business'),
  new LegalCategories(4, 'Personal Injury'),
  new LegalCategories(5, 'Bankruptcy & Finances'),
  new LegalCategories(6, 'Product & Services'),
  new LegalCategories(7, 'Employment'),
  new LegalCategories(8, 'Real Estate'),
  new LegalCategories(9, 'Immigration'),
  new LegalCategories(10, 'Wills, Trust & Estates'),
  new LegalCategories(11, 'Government'),
  new LegalCategories(12, 'Intellectual Property')
  ];
  selectedItem: any = '';
  inputChanged: any = '';
  wikiItems: any[] = [];

  items2: any[] = [{ id: 0, payload: { label: 'Morris1 ,IL 23232' } },
  { id: 1, payload: { label: 'Morris2 ,IL 23233' } },
  { id: 2, payload: { label: 'Morris3 ,IL 23234' } },
  { id: 3, payload: { label: 'Morris4 ,IL 23235' } },
  { id: 4, payload: { label: 'Morris5 ,IL 23236' } },
  { id: 5, payload: { label: 'Morris6 ,IL 23237' } },
  { id: 6, payload: { label: 'Morris7 ,IL 23238' } }
  ];
  config2: any = { 'placeholder': 'test', 'sourceField': ['payload', 'label'] };

  constructor() { }

  // tslint:disable-next-line:no-debugger
  onSelect(item: any) {
    this.selectedItem = item;
  }
  // tslint:disable-next-line:no-debugger
  onInputChangedEvent(val: string) {
    this.inputChanged = val;
  }
  // tslint:disable-next-line:no-debugger
  onSelectCategory(productId) {
    if (productId !== '0') {

      const dataas = this.getCountryByCode(productId);
      const selectedCategory = dataas[0];
      $('#fammilyIssueModal').modal('show');
      this.selectedCategoryName = selectedCategory.name;
      console.log(this.selectedCategoryName);
    }

  }

  getCountryByCode(code) {
    return this.availableLegalCategories.filter(
      function (data) { return data.id == code; }
    );
  }


  // tslint:disable-next-line:no-debugger
  hello(data) {debugger;
    this.selectedClientReview = data;

  }
}

