
# GOG

- Créer une image docker
```batch
docker build --rm --file local.dockerfile --tag klai .
````

- Accéder au bash depuis un container
```batch
docker exec -t -i {container-name} bash
````

----
### Références de l'article :
- [DOCKER| Dockerfile](https://docs.docker.com/engine/reference/builder/) 

