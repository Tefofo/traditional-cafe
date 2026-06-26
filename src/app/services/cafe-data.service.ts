import { Injectable } from '@angular/core';

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  category: 'african-cuisine' | 'comfort-food' | 'drinks';
  tag?: 'signature' | 'weekly-special';
}

export interface CafeEvent {
  title: string;
  day: string;
  description: string;
  recurring: boolean;
  date?: string;
}

@Injectable({ providedIn: 'root' })
export class CafeDataService {
  readonly info = {
    name: 'Traditional Cafe',
    address: '1218 Francolin Crescent, Riverside View Ext 30, Johannesburg, 2191',
    phone: '+27 73 616 8909',
    uberEatsUrl: 'https://www.ubereats.com/za/store/traditional-cafe-riverside-view/E8u-y9TyVnO6z25QP6_KnA',
    hours: [
      { days: 'Monday - Thursday', time: '10:00 AM - 12:00 AM' },
      { days: 'Friday - Saturday', time: '10:00 AM - 02:00 AM' },
      { days: 'Sunday', time: '10:00 AM - 01:00 AM' },
    ],
    amenities: ['On-site security', 'Free parking', 'Wheelchair accessible', 'Free Wi-Fi'],
  };

  readonly menu: MenuItem[] = [
    { name: 'Mogodu', description: 'Slow-cooked tripe in a rich traditional sauce', price: 89, category: 'african-cuisine', tag: 'signature' },
    { name: 'Ox Tongue', description: 'Tender braised ox tongue with chakalaka', price: 109, category: 'african-cuisine', tag: 'signature' },
    { name: 'Dombe', description: 'Steamed bread served with stew', price: 45, category: 'african-cuisine' },
    { name: 'Oxtail Stew', description: 'Fall-off-the-bone oxtail in tomato gravy', price: 139, category: 'african-cuisine', tag: 'weekly-special' },
    { name: 'Pap & Vleis', description: 'Grilled meat with creamy pap and sauce', price: 95, category: 'comfort-food' },
    { name: 'Burger & Chips', description: 'Classic beef burger with seasoned fries', price: 85, category: 'comfort-food' },
    { name: 'Wings Platter', description: '12 crispy wings with dipping sauces', price: 99, category: 'comfort-food' },
    { name: 'Signature Cocktail', description: 'House-blend African-inspired cocktail', price: 75, category: 'drinks', tag: 'signature' },
    { name: 'Craft Beer', description: 'Locally brewed craft on tap', price: 55, category: 'drinks' },
    { name: 'Soft Drinks', description: 'Assorted cold beverages', price: 30, category: 'drinks' },
  ];

  readonly events: CafeEvent[] = [
    { title: 'Mogodu Mondays', day: 'Monday', description: 'Local food and music kickoff to start your week', recurring: true },
    { title: 'Throwback Thursdays', day: 'Thursday', description: 'Retro-themed music nights with classic hits', recurring: true },
    { title: 'Soul Sundays', day: 'Sunday', description: 'Laid-back afternoon vibes with soulful tunes', recurring: true },
  ];
}
