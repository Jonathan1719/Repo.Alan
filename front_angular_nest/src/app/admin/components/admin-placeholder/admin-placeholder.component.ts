import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-placeholder',
  templateUrl: './admin-placeholder.component.html'
})
export class AdminPlaceholderComponent {
  readonly title = inject(ActivatedRoute).snapshot.data['title'];
}
