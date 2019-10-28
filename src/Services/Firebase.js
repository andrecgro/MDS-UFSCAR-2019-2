import { FirebaseDatabase, FirebaseAuth } from '../config/Firebase'

export default class FirebaseService {
  static getDataList = (nodePath, callback, size = 10) => {
    const query = FirebaseDatabase.ref(nodePath).limitToLast(size)
    query.on('value', dataSnapshot => {
      const items = []
      dataSnapshot.forEach(childSnapshot => {
        const item = childSnapshot.val()
        item.key = childSnapshot.key
        items.push(item)
      })
      callback(items)
    })
    return query
  }

  static pushData = (node, objToSubmit) => {
    const ref = FirebaseDatabase.ref(node).push()
    const id = FirebaseDatabase.ref(node).push().key
    ref.set(objToSubmit)
    return id
  }

  static remove = (id, node) => {
    return FirebaseDatabase.ref(node + '/' + id).remove()
  }

  static createUserWithEmailAndPassword = (email, password, datas) => {
    return FirebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(authUser => FirebaseDatabase.ref('users/' + authUser.user.uid).set(datas))
  }

  static signInWithEmailAndPassword = (email, password) => {
    return FirebaseAuth.signInWithEmailAndPassword(email, password)
  }
}
