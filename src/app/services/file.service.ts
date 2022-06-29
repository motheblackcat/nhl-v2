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
}
