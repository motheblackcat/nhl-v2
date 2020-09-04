import { FormGroup, FormControl } from '@angular/forms';

export const statsForm = new FormGroup({
  ev: new FormGroup({ val: new FormControl(), ef: new FormControl(0) }),
  ea: new FormGroup({ val: new FormControl(), ef: new FormControl(0) }),
  cou: new FormGroup({ val: new FormControl(), ef: new FormControl(0) }),
  int: new FormGroup({ val: new FormControl(), ef: new FormControl(0) }),
  cha: new FormGroup({ val: new FormControl(), ef: new FormControl(0) }),
  ad: new FormGroup({ val: new FormControl(), ef: new FormControl(0) }),
  fo: new FormGroup({ val: new FormControl(), ef: new FormControl(0) }),
  atq: new FormGroup({ val: new FormControl(), ef: new FormControl(0) }),
  prd: new FormGroup({ val: new FormControl(), ef: new FormControl(0) }),
  magphy: new FormControl(0),
  magpsy: new FormControl(0),
  resmag: new FormControl(0)
});
