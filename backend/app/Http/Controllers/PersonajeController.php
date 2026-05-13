<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//importar modelo
use App\Models\Personaje;


class PersonajeController extends Controller
{
    //mostrar el formulario de creación
    public function create() {
    return view('personajes.create');
}

public function index() {
    $personajes = Personaje::all();
    return response()->json($personajes);
}

//guardar el psj en la BD
public function store(Request $request) {
    $validated = $request->validate([
        'nombre' => 'required|min:3',
        'tipo'   => 'required',
        'poder'  => 'required|numeric|min:1',
        'mundo'  => 'required',
    ]);

    // crear el psj en la BD
    Personaje::create($validated);
    
    // Si la petición espera JSON (API)
    if ($request->expectsJson()) {
        return response()->json(['message' => '¡Personaje creado!'], 201);
    }

    // Esto redirige de vuelta al formulario con un mensaje de éxito (para web)
    return back()->with('success', '¡Personaje creado!');
}

//eliminar
public function destroy($id)
{
    // Buscamos el personaje en la BD
    $personaje = Personaje::findOrFail($id);

    // Lo eliminamos
    $personaje->delete();

    // Redirigimos con un mensaje de éxito
    return back()->with('success', 'Personaje eliminado correctamente.');
}

}
?>