import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Post} from "../entity/Post";

/**
 * Loads all photo from the database.
 */
export async function postGetAction(request: Request, response: Response) {

    // get a photo post repository to perform operations with post
    const postRepository = getManager().getRepository(Post);

    // load a post by a given post id
    const posts = await postRepository.find();

    // return loaded posts
    response.send(posts);
}
