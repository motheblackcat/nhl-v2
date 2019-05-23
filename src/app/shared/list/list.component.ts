import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() config: any = {
    title: '',
    subtitle: '',
    placeholder: '',
    dataKey: ''
  }
  items: Array<String> = [];
  constructor(private route: ActivatedRoute, private notify: NotifierService) { }

  ngOnInit(): void {
    this.route.data.subscribe(res => {
      if (res.title) {
        this.config = res;
      }
    });
    if (localStorage.getItem(this.config.dataKey)) {
      this.items = JSON.parse(localStorage.getItem(this.config.dataKey));
    }

    this.notify.reset.subscribe((res) => {
      if (res) {
        this.items = [];
        this.notify.reset.next(false);
      }
    });
  }

  addSkill(skill: any): void {
    if (skill.value !== '') {
      this.items.push(skill.value);
      localStorage.setItem(this.config.dataKey, JSON.stringify(this.items));
      skill.value = '';
    }
  }

  deleteSkill(skill: string): void {
    this.items.splice(this.items.indexOf(skill), 1);
    localStorage.setItem(this.config.dataKey, JSON.stringify(this.items));
  }
}
