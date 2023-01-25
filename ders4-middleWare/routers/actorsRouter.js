const router = require('express').Router();
let data = require('../data.js');

router.get('/', (req, res) => {
    res.status(200).json(data);
});

let next_id = 4;
router.post('/', (req, res) => {
    let new_actor = req.body;
    new_actor.id = next_id;
    next_id++;
    data.push(new_actor);
    res.status(201).json(new_actor);
});

router.get('/:id', (req, res) => {
    //console.log("req.body", req.body);
    const { id } = req.params;
    const actor = data.find((actor) => actor.id === parseInt(id));

    if (actor) {
        res.status(200).json(actor);
    } else {
        res.status(404).send("There is no result with you want to reach:...");
    }
});

router.delete('/:id', (req, res) => {
    const delete_actor_id = req.params.id;
    const delete_actor = data.find(
        (actor) => actor.id === Number(delete_actor_id)
    );

    if (delete_actor) {
        data = data.filter((actor) => actor.id !== Number(delete_actor.id));
        res.status(204).end();
    } else {
        res
            .status(404)
            .json({ errorMessage: "Couldn't find you tryign to delete actor" });
    }
});

router.put('/:id', (req, res) => {
    let update_actor_id = req.params.id;
    let update_actor_body = req.body;
    console.log("updated_Actor_body", update_actor_body);
    selected_actor = data.find((actor) => actor.id === Number(update_actor_id));

    if (selected_actor) {
        selected_actor.name = update_actor_body.name;
        selected_actor.movies = update_actor_body.movies;
        res.status(200).json({ errorMessage: "false", process: "update actor process is succesfull" });
    } else {
        res.status(404).send(errorMessage, "There is no actor for update");
    }
});

module.exports = router;