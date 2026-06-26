import { Component, inject } from '@angular/core';
import { CafeDataService } from '../../services/cafe-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-[#0a0a0c] border-t border-white/5 py-10 px-6">
      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm text-gray-400">
        <div>
          <h3 class="text-amber-500 font-semibold mb-3">Location</h3>
          <p>{{data.info.address}}</p>
          <p class="mt-2">📞 <a [href]="'tel:' + data.info.phone" class="hover:text-amber-500 transition">{{data.info.phone}}</a></p>
        </div>
        <div>
          <h3 class="text-amber-500 font-semibold mb-3">Hours</h3>
          @for (h of data.info.hours; track h.days) {
            <p class="py-0.5">{{h.days}}: {{h.time}}</p>
          }
        </div>
        <div>
          <h3 class="text-amber-500 font-semibold mb-3">Amenities</h3>
          @for (a of data.info.amenities; track a) {
            <p class="py-0.5">✓ {{a}}</p>
          }
        </div>
      </div>
      <p class="text-center text-gray-600 text-xs mt-10">© 2025 Traditional Cafe. All rights reserved.</p>
    </footer>
  `,
})
export class FooterComponent {
  data = inject(CafeDataService);
}
