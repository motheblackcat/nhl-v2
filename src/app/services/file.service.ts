import { Injectable } from '@angular/core';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  fileName = 'nhlpersonas.txt';

  constructor() { }

  /**
   * Create a new file with the capacitor filesystem
   * @param personaData stringified persona data
   */
  async writeFile(personaData: string) {
    const writeFileResult = await Filesystem.writeFile({
      path: this.fileName,
      data: personaData,
      directory: Directory.Data,
      encoding: Encoding.UTF8
    });
  };

  /**
   * Read existing file with the capacitor filesystem
   */
  async readFile() {
    const readFileResult = await Filesystem.readFile({
      path: this.fileName,
      directory: Directory.Documents
    });
    console.log('file read', readFileResult.data);
  }
}
