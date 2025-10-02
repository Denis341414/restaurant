// Типы для статусов
type OrderStatus = "New" | "Bill" | "Closed" | "Banquet";
type ReservationStatus =
  | "Живая очередь"
  | "Новая"
  | "Заявка"
  | "Открыт"
  | "Закрыт";
type ZoneType = "1 этаж" | "2 этаж" | "Банкетный зал";

// Интерфейс для заказа
interface Order {
  id: string;
  status: OrderStatus;
  start_time: string; // ISO string с временной зоной
  end_time: string; // ISO string с временной зоной
}

// Интерфейс для бронирования
interface Reservation {
  id: number;
  name_for_reservation: string;
  num_people: number;
  phone_number: string;
  status: ReservationStatus;
  seating_time: string; // ISO string с временной зоной
  end_time: string; // ISO string с временной зоной
}

// Интерфейс для стола
interface Table {
  id: string; // UUID
  capacity: number;
  number: string;
  zone: ZoneType;
  orders: Order[];
  reservations: Reservation[];
}

// Интерфейс для ресторана
interface Restaurant {
  id: number;
  timezone: string; // IANA timezone string
  restaurant_name: string;
  opening_time: string; // HH:mm format
  closing_time: string; // HH:mm format
}

// Главный интерфейс для всего JSON
export interface RestaurantData {
  available_days: string[]; // YYYY-MM-DD format
  current_day: string; // YYYY-MM-DD format
  restaurant: Restaurant;
  tables: Table[];
}

// Альтернативный вариант с type вместо interface
// type RestaurantDataType = {
//   available_days: string[];
//   current_day: string;
//   restaurant: {
//     id: number;
//     timezone: string;
//     restaurant_name: string;
//     opening_time: string;
//     closing_time: string;
//   };
//   tables: {
//     id: string;
//     capacity: number;
//     number: string;
//     zone: ZoneType;
//     orders: Order[];
//     reservations: Reservation[];
//   }[];
// };
