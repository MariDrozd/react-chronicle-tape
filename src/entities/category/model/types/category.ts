import { Event } from "@/entities/event";

export interface Category {
  id: number;
  category: string;
  start: number;
  end: number;
  events: Event[];
}