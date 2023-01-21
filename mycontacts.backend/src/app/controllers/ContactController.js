class ContactController {
  index(request, response) {
    // listar
    response.send('Send from Contact Controller');
  }

  show() {
    //  show
  }

  store() {
    // store
  }

  update() {
    // editar
  }

  delete() {
    // delete
  }
}

module.exports = new ContactController();
