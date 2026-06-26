import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section class="py-24 bg-[#0e0e10] text-white">
      <div class="container mx-auto px-6 max-w-4xl">
        <div class="bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.08] rounded-3xl p-8 md:p-12 shadow-2xl">
          @if (submitted) {
            <div class="text-center py-12">
              <h2 class="text-3xl font-bold text-amber-500 mb-3">Booking Confirmed!</h2>
              <p class="text-gray-400">We'll confirm via phone shortly.</p>
            </div>
          } @else {
            <div class="max-w-xl mx-auto text-center mb-10">
              <h2 class="text-3xl font-bold mb-3">Book Your Table & Lounge Experience</h2>
              <p class="text-gray-400 text-sm">Secure your VIP space or standard table dining experience for our upcoming peak weekend events.</p>
            </div>

            <form [formGroup]="form" (ngSubmit)="onSubmit()" class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-xs font-semibold tracking-wider text-gray-400 uppercase">Full Name</label>
                <input type="text" formControlName="name" placeholder="John Doe"
                       class="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-amber-500 transition">
              </div>

              <div class="space-y-2">
                <label class="text-xs font-semibold tracking-wider text-gray-400 uppercase">Phone Number</label>
                <input type="tel" formControlName="phone" placeholder="+27 73 616 8909"
                       class="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-amber-500 transition">
              </div>

              <div class="space-y-2">
                <label class="text-xs font-semibold tracking-wider text-gray-400 uppercase">Date of Visit</label>
                <input type="date" formControlName="date"
                       class="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-amber-500 transition">
              </div>

              <div class="space-y-2">
                <label class="text-xs font-semibold tracking-wider text-gray-400 uppercase">Guest Count</label>
                <select formControlName="guests"
                        class="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-amber-500 transition appearance-none">
                  <option value="2">2 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="6">6+ Guests (VIP Lounge)</option>
                </select>
              </div>

              <div class="md:col-span-2 space-y-2">
                <label class="text-xs font-semibold tracking-wider text-gray-400 uppercase">Special Requests / VIP Lounge Inquiries</label>
                <textarea formControlName="requests" rows="3" placeholder="Let us know if it's a birthday celebration or specific bottle service setup..."
                          class="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-amber-500 transition resize-none"></textarea>
              </div>

              <div class="md:col-span-2 pt-4">
                <button type="submit" [disabled]="form.invalid"
                        class="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-600 disabled:from-gray-800 disabled:to-gray-800 disabled:text-gray-500 font-bold rounded-xl transition shadow-lg text-center">
                  Confirm Booking Request
                </button>
              </div>
            </form>
          }
        </div>
      </div>
    </section>
  `,
})
export class BookingComponent {
  private fb = inject(FormBuilder);
  submitted = false;

  form = this.fb.group({
    name: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^\+?[\d\s-]{10,}$/)]],
    date: ['', Validators.required],
    guests: ['2', Validators.required],
    requests: [''],
  });

  onSubmit() {
    if (this.form.valid) this.submitted = true;
  }
}
