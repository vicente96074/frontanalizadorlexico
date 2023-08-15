import { Component, OnInit } from '@angular/core';
import { TokenService } from './../token.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-token-list',
  templateUrl: './token-list.component.html',
  styleUrls: ['./token-list.component.css']
})
export class TokenListComponent implements OnInit {

  private baseUrl = 'http://localhost:8080';

  tokens: any[] = [];
  logicoTokens: any[] = [];
  constanteTokens: any[] = [];
  palabraClaveTokens: any[] = [];
  asignacionTokens: any[] = [];
  aritmeticoTokens: any[] = [];
  comparacionTokens: any[] = [];
  identificadorTokens: any[] = [];
  comentarioTokens: any[] = [];
  separadorTokens: any[] = [];
  malformadoTokens: any[] = [];
  selectedToken: any = null;

  lexemasIngresados: Set<string> = new Set();

  constructor(
    private tokenService: TokenService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.tokenService.getTokens().subscribe(
      (tokens: any[]) => {
        this.tokens = tokens;
        this.filterTokensByType(); // Llamar a la función para filtrar los tokens
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching tokens:', error);
      }
    );
  }

  // Función para filtrar los tokens según su tipo
  filterTokensByType() {
    this.tokens.forEach(token => {
      if (!this.lexemasIngresados.has(token.lexema)) {
        this.lexemasIngresados.add(token.lexema);
        switch (token.tipoToken) {
          case 'LOGICO':
            this.logicoTokens.push(token);
            break;
          case 'CONSTANTE':
            this.constanteTokens.push(token);
            break;
          case 'PALABRA_CLAVE':
            this.palabraClaveTokens.push(token);
            break;
          case 'ASIGNACION':
            this.asignacionTokens.push(token);
            break;
          case 'ARITMETICO':
            this.aritmeticoTokens.push(token);
            break;
          case 'COMPARACION':
            this.comparacionTokens.push(token);
            break;
          case 'IDENTIFICADOR':
            this.identificadorTokens.push(token);
            break;
          case 'COMENTARIO':
            this.comentarioTokens.push(token);
            break;
          case 'SEPARADOR':
            this.separadorTokens.push(token);
            break;
          case 'MALFORMADO':
            this.malformadoTokens.push(token);
            break;
        }
      }
    });
  }

  selectToken(token: any) {
    const url = '/api/grafica';

    // Realiza la solicitud POST al backend con el token seleccionado
    this.http.post(url, { selectedToken: token }, { responseType: 'arraybuffer' }).subscribe(
      (response: any) => {
        console.log('Solicitud POST exitosa:', response);
        // Convierte los bytes de la imagen en una URL de datos
        const blob = new Blob([response], { type: 'image/png' }); // Ajusta el tipo según el formato de la imagen
        this.selectedImage = URL.createObjectURL(blob);
      },
      (error) => {
        console.error('Error en la solicitud POST:', error);
        // Puedes manejar el error aquí
      }
    );

  }



  selectedImage: string | null = null; // Propiedad para almacenar la imagen seleccionada
}

