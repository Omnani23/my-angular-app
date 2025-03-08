import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule

@Component({
  selector: 'app-shows',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Include FormsModule to use ngModel
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent {
  selectedCategory: string = 'movies'; // Default category

  allShows = [
    { id: 1, title: 'Avengers: Endgame', genre: 'Action/Sci-Fi', category: 'movies', image: 'assets/images/movies/avengers.jpg' },
    { id: 2, title: 'The Dark Knight', genre: 'Action/Drama', category: 'movies', image: 'assets/images/movies/dark-knight.jpg' },
    { id: 3, title: 'Music Concert', genre: 'Live Event', category: 'concerts', image: 'assets/images/concerts/concert.jpeg' },
    { id: 4, title: 'Stand-up Comedy', genre: 'Comedy Event', category: 'events', image: 'assets/images/events/comedy.jpeg' }
  ];

  selectedFilters = {
    location: {} as Record<string, boolean>,  // ✅ Allows dynamic string keys
    language: {} as Record<string, boolean>,
    genre: {} as Record<string, boolean>
  };
  
  // Initialize all values as `false`
  constructor(private router: Router) {
    const genres = ['action', 'drama', 'comedy'];
    const languages = ['english', 'hindi', 'telugu'];
    const locations = ['hyderabad', 'bangalore', 'mumbai'];
  
    genres.forEach(genre => (this.selectedFilters.genre[genre] = false));
    languages.forEach(lang => (this.selectedFilters.language[lang] = false));
    locations.forEach(loc => (this.selectedFilters.location[loc] = false));
  }
  

  filteredShows = this.allShows.filter(show => show.category === this.selectedCategory);


  filterShows(category: string) {
    this.selectedCategory = category;
    this.filteredShows = this.allShows.filter(show => show.category === category);
  }

  selectShow(show: any) {
    this.router.navigate(['/theaters', show.id]);
  }

  navigateToProfile() {
    console.log('Navigating to profile page');
  }

  applyFilters() {
    this.filteredShows = this.allShows.filter(show => 
      show.category === this.selectedCategory &&
      this.checkFilterMatch(show)
    );
  }

  private checkFilterMatch(show: any): boolean {
    return (
      this.isAnyFilterSelected(this.selectedFilters.location) ||
      this.isAnyFilterSelected(this.selectedFilters.language) ||
      this.isAnyFilterSelected(this.selectedFilters.genre)
    );
  }

  private isAnyFilterSelected(filterGroup: Record<string, boolean>): boolean {
    return Object.values(filterGroup).some(selected => selected);
  }

  
}
