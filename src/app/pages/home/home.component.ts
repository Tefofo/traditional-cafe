import { Component, inject } from '@angular/core';
import { CafeDataService } from '../../services/cafe-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section class="relative min-h-screen bg-[#0e0e10] text-white flex items-center justify-center overflow-hidden">
      <div class="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-[-10%] right-[-20%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]"></div>

      <div class="container mx-auto px-6 max-w-6xl z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
          <span class="text-amber-500 font-semibold tracking-widest uppercase text-sm block">Welcome to Traditional Cafe</span>
          <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
            Authentic African Cuisine <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">& Premium Lounge</span>
          </h1>
          <p class="text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
            Experience Mogodu Mondays, Soul Sundays, and signature dishes right in the heart of Riverside View, Fourways.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a [href]="data.info.uberEatsUrl" target="_blank"
               class="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 font-bold rounded-xl transition duration-300 transform hover:-translate-y-1 text-center shadow-lg shadow-orange-950/40">
              Order on Uber Eats
            </a>
            <a href="/book"
               class="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 font-bold rounded-xl transition duration-300 text-center backdrop-blur-sm">
              Reserve a Table
            </a>
          </div>
        </div>

        <div class="lg:col-span-5 bg-white/[0.02] border border-white/[0.08] backdrop-blur-md rounded-3xl p-8 space-y-6 shadow-2xl">
          <h3 class="text-xl font-bold text-amber-500 border-b border-white/10 pb-3">Tonight's Plan</h3>
          <div class="space-y-4">
            <div class="flex items-start gap-4">
              <div class="p-3 bg-amber-500/10 rounded-xl text-amber-500">🕒</div>
              <div>
                <h4 class="font-semibold text-white">Lounge Hours Today</h4>
                <p class="text-sm text-gray-400">{{todayHours}}</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="p-3 bg-orange-500/10 rounded-xl text-orange-500">📍</div>
              <div>
                <h4 class="font-semibold text-white">Find Us</h4>
                <p class="text-sm text-gray-400">{{data.info.address}}</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="p-3 bg-green-500/10 rounded-xl text-green-500">🛡️</div>
              <div>
                <h4 class="font-semibold text-white">Venue Amenities</h4>
                <p class="text-sm text-gray-400">Secure Environment & On-site Parking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HomeComponent {
  data = inject(CafeDataService);

  get todayHours(): string {
    const day = new Date().getDay();
    if (day >= 1 && day <= 4) return '10:00 AM - 12:00 AM';
    if (day === 5 || day === 6) return '10:00 AM - 02:00 AM';
    return '10:00 AM - 01:00 AM';
  }
}
