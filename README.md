# House of beer

## Running application
We use `docker-compose` to draw up our containerized services.
This will kickstart a container for Mongo, NodeJS and Angular.
Make sure containers from the commands above are not running, else you'll encounter errors due to some of the ports 
being mapped already.

Navigate to root folder of the project then issue:
```
docker-compose up -d
```
This should start up our containers in the background after our images for backend and UI are built, then 
you can access the application at [http://localhost:4200](http://localhost:4200).

The same command can be used for redeploying a new image version.
Of course, you have to trigger a rebuild beforehand:
```
docker-compose build
```

See if any errors arose during initialization via logs:
```
docker-compose logs
```

Check the containers' state by executing
```
docker-compose ps
```

If you would like to halt the application, stop the services:
```
docker-compose down --remove-orphans
```
Allocated named volumes hang around by default, suffix former command with ` --volumes` to remove them as well.
If you want the custom images to be deleted as well, add `--rmi local`.