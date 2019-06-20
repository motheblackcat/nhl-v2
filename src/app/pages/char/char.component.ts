import { Component, Input, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { mainForm } from 'src/app/models/form';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.scss']
})
export class CharComponent implements OnInit {
  @Input() targetForm: FormGroup;
  @Input() title: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(res => {
      if (res.title) {
        this.targetForm = mainForm.get(res.targetForm) as FormGroup;
        this.title = res.title;
      }
    });
  }

  defaultOrder(): number {
    return -1;
  }

  updateForm(): void {
    console.warn('target', this.targetForm.value);
  }
}
