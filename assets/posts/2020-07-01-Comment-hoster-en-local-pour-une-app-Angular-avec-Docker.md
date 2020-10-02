Notre application sera serice par NGINX sous docker

````docker
# l'image de départ est une version light (<10Mo) 
FROM nginx:alpine
# définition du répertoire par défaut (non utilisé dans notre cas)
WORKDIR /app
# ce répertoire est "mappable" avec un espace du host de docker 
VOLUME /var/cache/nginx
# on copie depuis notre machine vers le répertoire docker le fichier de configuration de NGINX
COPY ./klai/config/nginx.conf /etc/nginx/conf.d/default.conf
````

### Configuration de NGINX ( */config/nginx.conf* )
````nginx
server {
    listen 0.0.0.0:80;
    listen [::]:80;

    root /usr/share/nginx/html;

    location / {
       try_files $uri $uri/ /index.html =404;
    }
}
````

### Create & run docker 
````batch
docker build --rm --file local.dockerfile --tag klai .

docker run -d -p 8080:80 -v ${PWD}/klai/dist/klai:/usr/share/nginx/html klai 
````

### Structure du projet
![](/images/local_docker.png)


### tips auto-rebuild angular
````batch
ng build --watch --aot --output-hashing none
````

Sources:
- [Documentation officielle Nginx](http://nginx.org/en/docs/) 



