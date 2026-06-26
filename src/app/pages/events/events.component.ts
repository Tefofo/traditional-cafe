import { Component, inject } from '@angular/core';
import { CafeDataService } from '../../services/cafe-data.service';

@Component({
  selector: 'app-events',
  standalone: true,
  template: `
    <section class="py-24 bg-[#0e0e10] text-white">
      <div class="container mx-auto px-6 max-w-5xl">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Events & Entertainment</h2>
          <p class="text-gray-400">Something happening every week at Traditional Cafe</p>
        </div>

        <!-- Event Gallery -->
        <div class="grid sm:grid-cols-2 gap-6 mb-16">
          @for (img of eventImages; track img.src) {
            <div class="relative rounded-2xl overflow-hidden group">
              <img [src]="img.src" [alt]="img.alt" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <p class="absolute bottom-4 left-4 text-white font-semibold text-lg">{{img.alt}}</p>
            </div>
          }
        </div>

        <h3 class="text-xl font-semibold text-amber-500 mb-6">Weekly Recurring</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          @for (event of recurringEvents; track event.title) {
            <div class="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-amber-500/30 transition duration-300">
              <p class="text-amber-500 text-sm font-medium mb-2">Every {{event.day}}</p>
              <h4 class="text-white font-bold text-lg mb-2">{{event.title}}</h4>
              <p class="text-gray-400 text-sm">{{event.description}}</p>
            </div>
          }
        </div>

        <div class="bg-white/[0.02] border border-white/5 rounded-2xl p-8 text-center">
          <p class="text-gray-400">Follow us on <a href="https://www.facebook.com/traditionalcafe" target="_blank" class="text-amber-500 hover:underline">Facebook</a> for upcoming holiday parties, live guest DJs, and community events.</p>
        </div>
      </div>
    </section>
  `,
})
export class EventsComponent {
  data = inject(CafeDataService);
  get recurringEvents() { return this.data.events.filter(e => e.recurring); }

  eventImages = [
    { src: 'deephousefridays.jpg', alt: 'Deep House Fridays' },
    { src: 'event_Bongs.jpg', alt: 'Live Events' },
    { src: 'event_2.jpg', alt: 'Weekend Vibes' },
    { src: 'flyer_example.jpg', alt: 'Special Events' },
  ];
}
