import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { BLOG_POSTS, BlogPost } from '../../../shared/blog-posts.data';

@Component({
  selector: 'app-blog-post-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-post-page.html',
  styleUrls: ['./blog-post-page.css'],
})
export class BlogPostPage {
  private readonly route = inject(ActivatedRoute);

  // Reactive to the :slug param via a signal (not a one-off snapshot read) so
  // this keeps working correctly if the router ever reuses this component
  // instance while navigating between two different posts.
  private readonly slug = toSignal(this.route.paramMap.pipe(map((params) => params.get('slug'))));

  protected readonly post = computed<BlogPost | undefined>(() =>
    BLOG_POSTS.find((p) => p.slug === this.slug()),
  );
}