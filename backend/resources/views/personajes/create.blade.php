@extends('layouts.master') {{-- Extiende el layout principal --}}

@section('content')
<div class="row justify-content-center">
    <div class="col-md-8">
        <div class="card shadow-sm">
            <div class="card-header bg-success text-white">
                <h4 class="mb-0">Nuevo Personaje - MarioDex</h4>
            </div>
            <div class="card-body">

                {{-- Muestra mensaje de éxito si existe --}}
                @if(session('success'))
                    <div class="alert alert-success">
                        {{ session('success') }}
                    </div>
                @endif

                <form action="{{ route('personajes.store') }}" method="POST">
                    @csrf {{-- Token obligatorio para seguridad --}}

                    <div class="form-group mb-3">
                        <label>Nombre:</label>
                        <input type="text" name="nombre" class="form-control" value="{{ old('nombre') }}">
                        @error('nombre') <small class="text-danger">{{ $message }}</small> @enderror {{-- Muestra error de validación --}}
                    </div>

                    <div class="form-group mb-3">
                        <label>Tipo:</label>
                        <select name="tipo" class="form-control">
                            <option value="">-- Seleccionar --</option>
                            <option value="Héroe" {{ old('tipo') == 'Héroe' ? 'selected' : '' }}>Héroe</option>
                            <option value="Enemigo" {{ old('tipo') == 'Enemigo' ? 'selected' : '' }}>Enemigo</option>
                            <option value="Jefe" {{ old('tipo') == 'Jefe' ? 'selected' : '' }}>Jefe</option>
                        </select>
                        @error('tipo') <small class="text-danger">{{ $message }}</small> @enderror
                    </div>

                    <div class="form-group mb-3">
                        <label>Poder (1-100):</label>
                        <input type="number" name="poder" class="form-control" value="{{ old('poder') }}">
                        @error('poder') <small class="text-danger">{{ $message }}</small> @enderror
                    </div>

                    <div class="form-group mb-4">
                        <label>Mundo:</label>
                        <input type="text" name="mundo" class="form-control" value="{{ old('mundo') }}">
                        @error('mundo') <small class="text-danger">{{ $message }}</small> @enderror
                    </div>

                    <button type="submit" class="btn btn-primary w-100">Registrar</button>
                    
                </form> 
            </div>
        </div>
    </div>
</div>
@endsection