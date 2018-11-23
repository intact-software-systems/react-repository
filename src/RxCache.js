

export default class RxCache {
   constructor(id) {
     this.objects = new Map()
     this.objectRoots = new Map()
     this.id = id
   }

   id() {
     return this.id
   }

   read(key) {
      return Optional.ofNu
   }

   readAll() {
      return this.objects
   }

}
