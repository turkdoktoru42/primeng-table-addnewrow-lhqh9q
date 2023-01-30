import { Component, OnInit } from "@angular/core";
import { SelectItem } from "primeng/components/common/selectitem";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  cars: Array<Car>;
  brands: SelectItem[];
  clonedCars: { [s: string]: Car } = {};

  ngOnInit(): void {
    this.cars = [
      { brand: "Audi", color: "Blue", vin: "123", year: "2006" },
      { brand: "Toyota", color: "Blue", vin: "345", year: "2012" },
      { brand: "Honda", color: "Blue", vin: "567", year: "2019" },
      { brand: "Honda", color: "Blue", vin: "890", year: "2008" }
    ].sort((car1, car2) => {
      if (car1.brand > car2.brand) {
        return 1;
      }

      if (car1.brand < car2.brand) {
        return -1;
      }

      return 0;
    });

    this.brands = [
      { label: "Audi", value: "Audi" },
      { label: "BMW", value: "BMW" },
      { label: "Fiat", value: "Fiat" },
      { label: "Ford", value: "Ford" },
      { label: "Honda", value: "Honda" },
      { label: "Jaguar", value: "Jaguar" },
      { label: "Mercedes", value: "Mercedes" },
      { label: "Renault", value: "Renault" },
      { label: "VW", value: "VW" },
      { label: "Volvo", value: "Volvo" }
    ];
  }

  onRowEditInit(car: Car) {
    this.clonedCars[car.vin] = { ...car };
  }

  onRowEditSave(car: Car) {
    delete this.clonedCars[car.vin];
  }

  onRowEditCancel(car: Car, index: number) {
    this.cars[index] = this.clonedCars[car.vin];
    delete this.clonedCars[car.vin];
  }

  newRow() {
    return { brand: '', color: '', vin: '', year: '' };
  }
}

export interface Car {
  vin: string;
  year: string;
  brand: string;
  color: string;
}
