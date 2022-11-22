import { Injectable } from '@angular/core';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';

import { IPersona } from '../interfaces/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  path = 'nhl-personas.txt';
  directory = Directory.Documents;

  constructor() { }

  /**
   * Create a new file with the capacitor filesystem
   * @param personaData persona data
   */
  async writeFile(personaData: IPersona[]) {
    const writeFileResult = await Filesystem.writeFile({
      path: this.path,
      data: JSON.stringify(personaData),
      directory: this.directory,
      encoding: Encoding.UTF8
    });
  };

  /**
   * Read existing file with the capacitor filesystem
   */
  async readFile() {
    const readFileResult = await Filesystem.readFile({
      path: this.path,
      directory: this.directory
    });
  }

  /**
   * Create a text file and trigger download for browsers
   */
  downloadFile(data: any) {
    const file = new File([JSON.stringify(data)], 'nhl');
    // Create a link and set the URL using `createObjectURL`
    const link = document.createElement("a");
    link.style.display = "none";
    link.href = URL.createObjectURL(file);
    link.download = file.name;

    // It needs to be added to the DOM so it can be clicked
    document.body.appendChild(link);
    link.click();

    // To make this work on Firefox we need to wait
    // a little while before removing it.
    setTimeout(() => {
      URL.revokeObjectURL(link.href);
      link.parentNode.removeChild(link);
    }, 0);
  }
}
