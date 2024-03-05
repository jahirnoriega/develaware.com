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
    const newData = { /* Datos que deseas enviar en la solicitud PUT */ 
    userId: 1,
    id: 1, // El ID del recurso que deseas actualizar
    title: 'Peticion PUT',
    body: 'Nuevo contenido'
  };

    this.phraseService.makePutRequest(newData).subscribe(response => {
      Swal.fire({
        title: 'Datos actualizados correctamente',
        text: 'id Usuario: ' + response.userId + ', title: ' + response.title,
        icon: 'success'
      });
      console.log('Datos actualizados correctamente:', response);
    }, error => {
      console.error('Error al actualizar datos:', error);
    });
  }

  enviarDatos(): void {
    const newData = { userId: 1000,
      id: 1000, // El ID del recurso que deseas actualizar
      title: 'Peticion POST',
      body: 'Nueva peticion POST'};

    this.phraseService.makePostRequest(newData).subscribe(response => {
      Swal.fire({
        title: 'Datos insertados correctamente',
        text: 'id Usuario: ' + response.userId + ', title: ' + response.title+', contenido: '+response.body,
        icon: 'success'
      });
      console.log('Respuesta del servidor:', response);
      // Maneja la respuesta del servidor aquí
    }, error => {
      console.error('Error al enviar datos:', error);
      // Maneja el error aquí
    });
  }
}
