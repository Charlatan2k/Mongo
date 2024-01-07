import { Component } from '@angular/core';
import { ProfesionalesService } from 'src/app/shared/profesionales.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.css'],
})
export class ProfesionalesComponent {
  professionals: any[] = [];

  constructor(private profesionalesService: ProfesionalesService) {}

  onShow(form: NgForm) {
    if (form.value.firstName && form.value.lastName) {
      this.profesionalesService
        .getProfesional(form.value.firstName, form.value.lastName)
        .subscribe(
          (response: any) => {
            this.professionals = response; // store the result directly
            console.log(this.professionals);
          },
          (error) => {
            // handle error
          }
        );
    } else {
      this.profesionalesService.getProfesionales().subscribe(
        (response: any) => {
          this.professionals = response; // store the results directly
          console.log(this.professionals);
        },
        (error) => {
          // handle error
        }
      );
    }
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log('Submit called');
    const newProfessional = form.value;
    this.profesionalesService.addProfesional(newProfessional).subscribe(
      (response: any) => {
        // handle successful response
        console.log(response);
      },
      (error) => {
        // handle error
      }
    );
  }

  onUpdate(form: NgForm) {
    const updatedProfessional = form.value;
    this.profesionalesService.updateProfesional(updatedProfessional).subscribe(
      (response: any) => {
        // handle successful response
        console.log(response);
      },
      (error) => {
        // handle error
      }
    );
  }

  onDelete(form: NgForm) {
    const { firstName, lastName } = form.value;
    this.profesionalesService.deleteProfesional(firstName, lastName).subscribe(
      (response: any) => {
        // handle successful response
        console.log(response);
      },
      (error) => {
        // handle error
      }
    );
  }

  onClear(form: NgForm) {
    form.reset();
  }
}
