/**
 * user routes
 *
 */

const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("users")
})

router.get("/new", (req, res) => {
    res.send("new")
})

router.post("/", (req, res) => {
    res.send("create")
})


router
    .route("/:id")
    .get((req, res) => {
        res.send(require(`../database/${req.params.id}`))
    })
    .put((req, res) => {
        res.send(`update ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`delete ${req.params.id}`)
    })

router.param("id", (req, res, next, id) => {
    console.log(id);
    next();
})

module.exports = router;
