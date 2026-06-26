import { Component, inject } from '@angular/core';
import { CafeDataService } from '../../services/cafe-data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="py-24 bg-[#0e0e10] text-white">
      <div class="container mx-auto px-6 max-w-5xl">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">About Traditional Cafe</h2>
          <p class="text-gray-400">More than a restaurant — a home for culture, community, and great food</p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div class="relative rounded-3xl overflow-hidden">
            <img src="Bongs_wife.jpg" alt="The Owners of Traditional Cafe" class="w-full h-[400px] object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-amber-500">Meet the Owners</h3>
            <p class="text-gray-300 leading-relaxed">
              Traditional Cafe was born out of a passion for authentic African cuisine and a desire to create a space where people can come together, enjoy great food, and celebrate culture.
            </p>
            <p class="text-gray-300 leading-relaxed">
              What started as a dream has grown into one of Fourways' most loved spots for traditional food, premium lounge experiences, and unforgettable weekend events.
            </p>
            <p class="text-gray-300 leading-relaxed">
              Every dish on our menu tells a story — from our signature Mogodu to our slow-braised Oxtail — prepared with love and served with pride.
            </p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (item of highlights; track item.label) {
            <div class="p-6 bg-white/[0.02] border border-white/5 rounded-2xl text-center">
              <div class="text-3xl mb-3">{{item.icon}}</div>
              <h4 class="text-amber-500 font-bold text-lg mb-1">{{item.value}}</h4>
              <p class="text-gray-400 text-sm">{{item.label}}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  data = inject(CafeDataService);

  highlights = [
    { icon: '🍽️', value: 'Est. 2020', label: 'Serving the community' },
    { icon: '🎵', value: '3 Nights', label: 'Weekly live events' },
    { icon: '👥', value: '50+', label: 'Seating capacity' },
    { icon: '⭐', value: '4.5/5', label: 'Customer rating' },
  ];
}
