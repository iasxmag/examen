<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//para guardar
Route::post('/personajes', [App\Http\Controllers\PersonajeController::class, 'store']);
//para listar
Route::get('/personajes', [App\Http\Controllers\PersonajeController::class, 'index']);