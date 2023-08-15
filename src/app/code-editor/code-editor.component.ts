import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})

export class CodeEditorComponent {
  code: string = ''; // Aquí se almacenará el contenido del archivo

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.code = e.target.result;
    };

    reader.readAsText(file);
  }

  sendCode() {
    // Enviar el código al backend usando una solicitud HTTP POST
    const url = '/api/codigo';
    const requestBody = this.code;
  
    this.http.post(url, requestBody).subscribe(response => {
      console.log('Respuesta del backend:', response);
    }, error => {
      console.error('Error al enviar el código:', error);
    });
  }
  
}
