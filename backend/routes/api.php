<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/personajes', [App\Http\Controllers\PersonajeController::class, 'store']);
