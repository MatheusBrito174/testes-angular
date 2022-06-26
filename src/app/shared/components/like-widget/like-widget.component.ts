import { UniqueIdService } from './../../services/unique-id/unique-id.service';
import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.scss'],
})
export class LikeWidgetComponent implements OnInit {
  @Output() like = new EventEmitter<void>();
  @Input() likes = 0;
  @Input() id = null;
  fonts = {
    faThumbsUp,
  };

  constructor(private readonly uniqueIdService: UniqueIdService) {}

  ngOnInit() {
    if (!this.id) {
      this.id = this.uniqueIdService.generateUniqueIdWithPrefix('like-widget');
    }
  }

  emitLike() {
    this.like.emit();
  }
}
