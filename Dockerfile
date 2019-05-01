FROM php:7.3
EXPOSE 8000

RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y \
    git zip apt-utils
RUN docker-php-ext-install pdo

# Install Composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php -r "if (hash_file('sha384', 'composer-setup.php') === '48e3236262b34d30969dca3c37281b3b4bbe3221bda826ac6a9a62d6444cdb0dcd0615698a5cbe587c3f0fe57a54d8f5') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;" && \
    php composer-setup.php --filename=composer --install-dir=bin && \
    php -r "unlink('composer-setup.php');"

WORKDIR /app
COPY . /app

RUN composer install
CMD ["php", "artisan", "serve", "--port=8000", "--host=0.0.0.0"]
