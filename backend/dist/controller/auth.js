import { Request, Response } from 'express';
import { userModel } from '../model/db.js';
// Pass the interface as the 3rd generic argument to Request
export const signup = async (req, res) => {
    const { name, password, email } = req.body;
    if (!name || !password || !email) {
        res.status(400).send({ message: "Please filled all details" });
    }
    const data = await userModel.insertOne({ name, password, email });
    if (data) {
        return res.status(200).send({
            message: "user created successfully",
        });
    }
    return res.status(400).send({
        message: "Something went wrong"
    });
};
//# sourceMappingURL=auth.js.map