// full_server/controllers/AppController.js
export class AppController {
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}
