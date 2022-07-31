export default{
    el(id:string){
        return document.querySelector<HTMLAudioElement>(id)!
    },
    start(){
        this.el('#start').play()
    },
    fire(){
        this.el('#fire').play()
    },
    blast(){
        this.el('#blast').play()
    },
    add(){
        this.el('#add').play()
    },
   
}