import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { Categoria, CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent implements OnInit {
  private readonly categoriaService = inject(CategoriaService);

  categorias: Categoria[] = [];
  dialogVisible = false;
  loading = false;
  saving = false;
  errorMessage = '';

  readonly categoriaForm = new FormGroup({
    nombre: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(100)]
    }),
    detalle: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(255)]
    })
  });

  ngOnInit(): void {
    this.listarCategorias();
  }

  listarCategorias(): void {
    this.loading = true;
    this.errorMessage = '';

    this.categoriaService.listar()
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: (categorias) => this.categorias = categorias,
        error: () => {
          this.errorMessage = 'No se pudieron cargar las categorías. Inténtalo de nuevo.';
        }
      });
  }

  abrirDialogo(): void {
    this.errorMessage = '';
    this.categoriaForm.reset();
    this.dialogVisible = true;
  }

  guardarCategoria(): void {
    if (this.categoriaForm.invalid || this.saving) {
      this.categoriaForm.markAllAsTouched();
      return;
    }

    this.saving = true;
    this.errorMessage = '';

    this.categoriaService.crear(this.categoriaForm.getRawValue())
      .pipe(finalize(() => this.saving = false))
      .subscribe({
        next: (categoria) => {
          this.categorias = [...this.categorias, categoria];
          this.dialogVisible = false;
          this.categoriaForm.reset();
        },
        error: () => {
          this.errorMessage = 'No se pudo guardar la categoría. Verifica los datos e inténtalo de nuevo.';
        }
      });
  }
}
