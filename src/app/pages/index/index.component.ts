import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PhrasesService } from '../../phrases.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  phraseService : PhrasesService = inject(PhrasesService);
  obtenerPhrase():void{
    this.phraseService.phrase().subscribe(data=>{

      Swal.fire({
        text: data.quote,
        showConfirmButton: false,
        timer: 3000
      });
    })
  }

  obtenerResponse(): void {
    this.phraseService.makeHeadRequest().subscribe(response => {
      const headers = response.headers.keys().map((key: any) => `${key}: ${response.headers.get(key)}`).join('\n');
      
      Swal.fire({
        title: 'Encabezados de respuesta',
        text: headers,
        icon: 'info'
      });
    });
  }
  
  actualizarDatos(): void {
    const newData = { /* Datos que deseas enviar en la solicitud PUT */ };

    this.phraseService.makePutRequest(newData).subscribe(response => {
      console.log('Datos actualizados correctamente:', response);
    }, error => {
      console.error('Error al actualizar datos:', error);
    });
  }
}
