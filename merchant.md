# NOTE TAKING APPLICATION
Note taking application adalah sebuah aplikasi yang membantu pengguna untuk mencatat serta menyimpan aktivitas apapun yang akan dilakukan. Seperti catatan daftar tugas, catatan daftar belanja, rencana pembuatan project, dan lain sebagainya. Pada aplikasi ini terdapat beberapa fitur untuk digunakan. Seperti register user yang terdapat username, email, dan password untuk mendaftarkan diri sebagai pengguna aplikasi. Fitur login yang terdapat email dan juga password untuk masuk ke dalam aplikasi. Fitur user yang terdapat id, username, email, dan password yang digunakan sebagai profil user. Fitur note yang terdapat id, title, dexcription, dan user id yang digunakan untuk membuat catatan. Fitur category yang terdapat id, title, dan note_id yang digunakan untuk mengategorikan atau mengelompokkan catatan yang telah dibuat. Fitur reminder yang terdapat id, note_id, title, dan reminder yang digunakan untuk mengatur tanda pengingat jika pengguna akan melakakukan aktivitas yang akan datang.

---
___
# Entity Relation Diagram

# RESTful API Endpointss

| Name     |      Path     |  HTTP Verb | Description |
|----------|:-------------| :----------:|-------------|
| Register |/user/register | POST       | Register user 
| Login    |/user/login    | POST       | Login user
| Type     | /User         | GET        | List all User
| New      |/User/:id      | GET        | Get a User
| Create   |/User          | POST       | Create new User
| Update   |/User/:id      | PUT        | Update a User
| Destroy  |/User/:id      | DELETE     | Delete a User
|          |               |            |             |
| Type     | /Note/      | GET        | List all Note
| New      |/Note/:id   | GET        | Get a Note
| Create   |/Note       | POST       | Create new Note
| Update   |/Note/:id   | PUT        | Update a Note
| Destroy  |/Note/:id   | DELETE     | Delete a Note
||
| Type     | /Category/      | GET        | List all Category
| New      |/Category/:id   | GET        | Get a Category
| Create   |/Category       | POST       | Create new Category
| Update   |/Category/:id   | PUT        | Update a Category
| Destroy  |/Category/:id   | DELETE     | Delete a Category
|          |               |            |             |
| Type     | /Reminder/      | GET        | List all Reminder
| New      |/Reminder/:id   | GET        | Get a Reminder
| Create   |/Reminder       | POST       | Create new Reminder
| Update   |/Reminder/:id   | PUT        | Update a Reminder
| Destroy  |/Reminder/:id   | DELETE     | Delete a Reminder