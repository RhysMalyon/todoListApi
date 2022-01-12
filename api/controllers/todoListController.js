'use strict'

import mongoose from 'mongoose'

const Task = mongoose.model('Tasks')

const list_all_tasks = (req, res) => {
    Task.find({}, (err, task) => {
        if (err) {
            res.send(err)
        }
        res.json(task)
    })
}

const create_a_task = (req, res) => {
    const new_task = new Task(req.body)

    new_task.save((err, task) => {
        if (err) {
            res.send(err)
        }
        res.json(task)
    })
}

const read_a_task = (req, res) => {
    Task.findById(req.params.taskId, (err, task) => {
        if (err) {
            res.send(err)
        }
        res.json(task)
    })
}

const update_a_task = (req, res) => {
    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, { new: true }, (err, task) => {
        if (err) {
            res.send(err)
        }
        res.json(task)
    })
}

const delete_a_task = (req, res) => {
    Task.remove({
        _id: req.params.taskId
    }, (err, task) => {
        if (err) {
            res.send(err)
        }
        res.json({ message: 'Task successfully deleted.' })
    })
}

export { list_all_tasks, create_a_task, read_a_task, update_a_task, delete_a_task }