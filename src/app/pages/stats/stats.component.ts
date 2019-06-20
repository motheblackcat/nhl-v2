import { Component, OnInit, Input } from '@angular/core';
import { KeyValue } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { mainForm } from 'src/app/models/form';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  @Input() targetForm;
  @Input() title: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(res => {
      if (res.title) {
        this.targetForm = mainForm.get(res.targetForm);
        this.title = res.title;
      }
    });
  }

  defaultOrder(a: KeyValue<number, string>, b: KeyValue<number, string>) {
    // Chrome 1 / Firefox -1
    return -1;
  }

  updateForm() {
    console.warn('target', this.targetForm.value);
  }
}
