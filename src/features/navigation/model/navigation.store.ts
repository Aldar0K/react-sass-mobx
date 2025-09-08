import { makeAutoObservable } from "mobx";
import { NAVIGATION_ITEMS } from "./constants";
import type { INavigationItem } from "./types";

export class NavigationStore {
  items: INavigationItem[] = [...NAVIGATION_ITEMS];

  constructor() {
    makeAutoObservable(this);
  }

  get activeItem(): INavigationItem | undefined {
    return this.items.find((item) => item.isActive);
  }

  setActiveItem(id: string): void {
    this.items = this.items.map((item) => ({
      ...item,
      isActive: item.id === id,
    }));
  }

  navigateTo(id: string): void {
    this.setActiveItem(id);
    console.log(`Navigation to: ${id}`);
  }
}
