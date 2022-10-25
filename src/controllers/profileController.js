import database from "../database/database.js";

export async function userProfile(req, res){
    const { id } = req.params;
    try {
        const result = (await database.query(`
            SELECT * FROM users WHERE id = $1`, [id])).rows(0);
        if(!result.id){
            return res.sendStatus(404)
        }
        return res.redirect(result.id, 302)
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function getUserPost(req, res){
    const { id } = req.params;
    try {
        const result = (await database.query(`
            SELECT * FROM publications WHERE userId = $1`, [id])).rows[0]
        const name = (await database.query(`
            SELECT * FROM users WHERE id = $1`, [id])).rows[0]
        if(!result){
            return res.sendStatus(404)
        }
        return res.status(200).send(name, result)
    } catch (error) {
        console.log(error);
        return req.sendStatus(500)
    }
}

export async function searchUser(req, res){
    const username = req.body
    const { authentication } = req.headers;
    const token = authentication?.relace("Bearer, ", "") 
    try {
        const validToken = (await database.query(`
            SELECT * FROM sessions WHERE token = $1`, [token])).rows[0]

        if(!validToken){
            return res.sendStatus(401)
        }
        const result = (await database.query(`
            SELECT * FROM users WHERE username ILIKE $1`, `${[username]}%`)).rows[0]
        return res.status(200).send(result)
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
}