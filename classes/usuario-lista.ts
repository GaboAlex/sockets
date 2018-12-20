import { Usuario } from './usuario';

export class UsuariosLista{
    private lista:Usuario[] = [];
    constructor(){}
    public agregar(usuario:Usuario){
        this.lista.push(usuario);
        console.log("[UsuarioLista|agregar] Usuario Agregado");
        console.log("[UsuarioLista|agregar] Nueva Lista de Usuarios => ",this.lista);
    }
    public getLista(){
        return this.lista
    }
    public actualizarNombre(id:string, nombre:string){
        for(let usuario of this.lista){
            if(usuario.id === id)
            {
                console.log("[UsuarioLista|actualizarNombre] modificando de: ", usuario.nombre);
                usuario.nombre = nombre;
                console.log("[UsuarioLista|actualizarNombre] a: ", usuario.nombre)
                break;
            }
        }
        console.log("[UsuarioLista|actualizarNombre] Nueva Lista de Usuarios => ",this.lista);
    }
    public getUsurio(id:string){
        for(let usuario of this.lista){
            if(usuario.id === id){
                return usuario;
            }
        }
        console.log("[UsuarioLista|getUsurio] No se encontro al Usuario con ID: => ",id);
    }
    public borrarUsuario(id:string){
        this.lista = this.lista.filter((usuario)=>{
            if(usuario.id !== id){
                return usuario;
            }
        });
        console.log("[UsuarioLista|borrarUsuario] Usuario Borrado");
        console.log("[UsuarioLista|borrarUsuario] Nueva Lista de Usuarios => ",this.lista);
    }
}