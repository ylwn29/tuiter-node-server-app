// import posts from "./tuits.js";
// let tuits = posts;
import * as tuitsDao from './tuits-dao.js';

const currentUser = {
    "username": "NASA",
    "handle": "@nasa",
    "image": "NASA.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "dislikes": 0,
    "disliked": false,
    "title": "NASA  is an independent agency of the US federal government responsible for the civil space program, aeronautics research, and space research.",
}

const createTuit = async (req, res) => {
    let newTuit = req.body;
    // newTuit._id = (new Date()).getTime()+'';
    newTuit = {
        ...newTuit,
        ...templateTuit,
    }
    // tuits.unshift(newTuit);
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}

const findTuits  = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits)
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao
        .updateTuit(tuitdIdToUpdate, updates);
    // tuits = tuits.map(t=>
    // String(t._id) === tuitdIdToUpdate?{
    //     ...t,
    //     ...updates
    // }:t);
    // const tuitIndex = tuits.findIndex(
    //     (t) => t._id === tuitdIdToUpdate)
    // tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
    res.json(status);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params['tid'];
    // tuits = tuits.filter((t) =>
    //     t._id !== tuitdIdToDelete);
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.json(status);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

