import {Component, OnInit} from '@angular/core';
import {EventData} from 'tns-core-modules/data/observable';
import {ListPicker} from 'tns-core-modules/ui/list-picker';
import {Item} from './item';
import {ItemService} from './item.service';
import * as Toast from 'nativescript-toast';


@Component({
    selector: 'ns-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.css'],
    moduleId: module.id
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;
    myName: string;
    toast = Toast.makeText('Hello World');

    constructor(
        private itemService: ItemService
    ) {
    }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
        this.myName = 'Rob';

    }

    public years: Array<number> = [1980, 1990, 2000, 2010, 2020];

    public onSelectedIndexChanged(args: EventData) {
        const picker = <ListPicker>args.object;
        console.log(`index: ${picker.selectedIndex}; item" ${this.years[picker.selectedIndex]}`);
    }

    btnClicked(event) {
        console.log('Item => button clicked, cought event: ', event);

    }


}

