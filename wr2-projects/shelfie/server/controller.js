module.exports = {
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_inventory()
        .then(inventory => res.status(200).send(inventory))
        .catch(err => {
            res.status(500).send({errorMessage: "error getting info from server"});
            console.log(err);
        })
    },
    create: (req, res, next) =>{
        const dbInstance = req.app.get('db');

        const {name, price, image} = req.body;

        dbInstance.create_item([name, price, image])
        .then((inventory) => res.status(200).send(inventory))
        .catch((err) => {
            res.status(500).send({errorMessage: "error creating new item"});
            console.log(err) ;
        })
    },
    update: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        
        const {params} = req;
        const {name, price, image} = req.body;
        //body might need to be changed to query?
        dbInstance.update_item([params.id, name, price, image])
          .then( (inventory) => res.status(200).send(inventory) )
          .catch( err => {
            res.status(500).send({errorMessage: "error updating"});
            console.log(err)
          } );
      },
      delete: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        
        const {id} = req.params;

        dbInstance.delete_item(id)
          .then( (inventory) => res.status(200).send(inventory))
          .catch( err => {
            res.status(500).send({errorMessage: "error deleting"});
            console.log(err)
          } );
        }   
}