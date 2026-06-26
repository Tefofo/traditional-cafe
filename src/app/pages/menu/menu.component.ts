import { Component, inject, signal } from '@angular/core';
import { CafeDataService, MenuItem } from '../../services/cafe-data.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  template: `
    <section class="py-24 bg-[#121214] text-white">
      <div class="container mx-auto px-6 max-w-6xl">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Culinary Heritage</h2>
          <p class="text-gray-400">Explore authentic African traditional dishes curated perfectly with modern culinary standards.</p>

          <div class="flex justify-center gap-2 mt-8 p-1.5 bg-white/[0.03] border border-white/5 rounded-2xl w-fit mx-auto">
            @for (cat of categories; track cat.key) {
              <button (click)="activeCategory.set(cat.key)"
                      [class.bg-amber-500]="activeCategory() === cat.key"
                      [class.text-black]="activeCategory() === cat.key"
                      class="px-5 py-2.5 rounded-xl font-medium transition text-sm text-gray-400 hover:text-white">
                {{cat.label}}
              </button>
            }
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          @for (item of filtered(); track item.name) {
            <div class="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-amber-500/30 transition duration-300 group flex justify-between items-start gap-4">
              <div class="space-y-2">
                <div class="flex items-center gap-3">
                  <h3 class="text-xl font-semibold group-hover:text-amber-400 transition">{{item.name}}</h3>
                  @if (item.tag === 'signature') {
                    <span class="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-orange-500/20 text-orange-400 rounded-md border border-orange-500/30">Signature</span>
                  }
                </div>
                <p class="text-sm text-gray-400 line-clamp-2 max-w-md">{{item.description}}</p>
              </div>
              <span class="text-xl font-bold text-amber-500">R{{item.price}}</span>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class MenuComponent {
  data = inject(CafeDataService);
  activeCategory = signal<string>('all');
  categories = [
    { key: 'all', label: 'All' },
    { key: 'african-cuisine', label: 'African Cuisine' },
    { key: 'comfort-food', label: 'Comfort Food' },
    { key: 'drinks', label: 'Drinks' },
  ];

  filtered(): MenuItem[] {
    const cat = this.activeCategory();
    return cat === 'all' ? this.data.menu : this.data.menu.filter(i => i.category === cat);
  }
}
