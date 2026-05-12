# Usa la imagen oficial de PHP con FPM cambiarla a  8.4 si es necesario
FROM php:8.2-fpm

# Instalación de dependencias del sistema y extensiones postgreSQL 
RUN apt-get update && apt-get install -y \
    git unzip libzip-dev libpng-dev libonig-dev libpq-dev curl zip \
    && docker-php-ext-install pdo pdo_pgsql zip mbstring exif pcntl bcmath 

# Instalación de Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www 
COPY . /var/www 

# Instalación de dependencias de Laravel y permisos 
RUN composer install --no-dev --optimize-autoloader \
    && chown -R www-data:www-data /var/www \
    && mkdir -p /var/www/storage && chown -R www-data:www-data /var/www/storage

EXPOSE 9000 
CMD ["php-fpm"]