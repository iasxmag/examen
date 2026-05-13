# Usa la imagen oficial de PHP con FPM 
FROM php:8.4-fpm

# Instalación de dependencias del sistema 
RUN apt-get update && apt-get install -y \
    git unzip libzip-dev libpng-dev libonig-dev libpq-dev curl zip \
    && docker-php-ext-install pdo pdo_pgsql zip mbstring exif pcntl bcmath

# Instalación de Composer desde la imagen oficial 
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Directorio de trabajo en el contenedor 
WORKDIR /var/www

# Copiar el código del backend al contenedor 
COPY . /var/www

# Instalación de dependencias de Laravel y ajuste de permisos 
RUN composer install --no-dev --optimize-autoloader \
    && chown -R www-data:www-data /var/www/ \
    && mkdir -p /var/www/storage \
    && chown -R www-data:www-data /var/www/storage 

# Exponer el puerto interno de PHP-FPM 
EXPOSE 9000

# Comando para iniciar PHP-FPM 
CMD ["php-fpm"]