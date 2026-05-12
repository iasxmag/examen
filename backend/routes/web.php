<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PersonajeController;


Route::get('/', function () {
    return view('welcome');
});

// Ruta para ver el formulario
Route::get('/personajes/nuevo', [PersonajeController::class, 'create'])->name('personajes.create');

// Ruta para recibir los datos del formulario
Route::post('/personajes/nuevo', [PersonajeController::class, 'store'])->name('personajes.store');

//ruta para eliminar un personaje
//Route::delete('/personajes/{id}', [PersonajeController::class, 'destroy'])->name('personajes.destroy');