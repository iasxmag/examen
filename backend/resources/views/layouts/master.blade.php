<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>MarioDex - @yield('titulo')</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>
<body>
    <nav class="navbar navbar-dark bg-dark mb-4">
        <span class="navbar-brand mb-0 h1">MARIODEX</span>
    </nav>

    <div class="container">
        @yield('content') 
    </div>
</body>
</html>