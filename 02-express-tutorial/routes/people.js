const express = require("express")
const { getPeople, addPerson, getPerson, updatePerson, deletePerson } = require("../controllers/people.js");
const router = express.Router() 
let { people } = require("../data");


router.get('/', getPeople)

router.post('/', addPerson)

router.get('/:id', getPerson)

router.put('/:id', updatePerson)

router.delete("/:id", deletePerson) 


module.exports = router; 