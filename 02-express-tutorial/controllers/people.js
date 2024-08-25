let { people } = require("../data")

const addPerson = (req, res) => {
    const {name} = req.body

    if (!name) {
        return res.status(400).json({ success: false, message: "Please provide a name" });
    }

    people.push({ id: people.length + 1, name: req.body.name });
    res.status(201).json({ success: true, name: req.body.name });

}

const getPeople = (req, res) => {
    res.status(200).json({peopleData: people})
}

const getPerson = (req, res) => {
    const {id} = req.params
    const person = people.find((p) => {
        if (p.id === parseInt(id)) {
            return p
        }
    })
    if (!person) {
        return res.status(404).json({Success: "False", key: id})
    }
    res.status(200).json(person)
}

const updatePerson = (req, res) => {
    const { name } = req.body 
    const { id } = req.params

    const updatedPerson = people.map((p) => {
        if (p.id === parseInt(id)) {
            p.name = name
            return p
        }
    })

    if (!updatedPerson) {
        return res.status(404).json({Success:"False", Key:id})
    }

    res.status(200).json({Success:"True", data: people})
}


const deletePerson = (req, res) => {
    const { id } = req.params 

    const person = people.find((p) => {
        if (p.id === parseInt(id)) {
            return p
        }
    })

    if (!person) {
        return res.status(404).json({Success:"False", msg: "We could not find the person with that ID"})
    }

    people = people.filter((p) => {
        if (p.id !== parseInt(id)) {
            return p
        }
    })
    res.status(200).json({Success: "True", Data: people})
}


module.exports = { getPeople, addPerson, getPerson, updatePerson, deletePerson }; 