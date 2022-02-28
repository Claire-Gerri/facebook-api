import { launch } from './server';

const main = () => {
  const {
    PROTOCOL = 'http',
    HOST = 'localhost',
    PORT = 8080,
  } = process.env;

  launch({
    protocol: PROTOCOL,
    host: HOST,
    port: PORT,
  });
}

main();

/**
 * Facebook API |
 * 
 * models:
 *  User { id: string, email: string, password: string }
 *  Profile { id: number, firstname: string, lastname: string, userId: string }
 *  Post { id: number, message: string, authorId: string}
 * 
 * URIs:
 *   Authentication |
 *      POST /authentication/login     return a JWT Token for authentication
 *      POST /authentication/register  Register a new User
 *   User |
 *      GET    /{id}/posts    Return a list of User's posts
 *      GET    /{id}/profile  Return a User's profile
 *      PATCH  /{id}/profile  Update a User's profile
 *      DELETE /{id}          Update a User's profile
 *   Posts |
 *      POST   /      Create a new Post
 *      GET    /{id}  Return a Post
 *      GET    /      Return a list of Post
 *      pATCH  /{id}  Update a Post
 *      DELETE /{id}  Delete a Post
 */
