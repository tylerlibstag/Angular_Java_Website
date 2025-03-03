import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  inventoryItems: any[] = [];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit() {
    this.loadInventory();
  }

  loadInventory() {
    this.inventoryService.getItems().subscribe((data) => {
      this.inventoryItems = data;
    });
  }

  addItem() {
    const newItem = { name: 'New Item', quantity: 5, price: 10.99 };
    this.inventoryService.addItem(newItem).subscribe(() => {
      this.loadInventory();
    });
  }

  deleteItem(id: number) {
    this.inventoryService.deleteItem(id).subscribe(() => {
      this.loadInventory();
    });
  }
}
