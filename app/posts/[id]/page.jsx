export default function Post ({params}){
    const {id} = params
    return <h1>Esta es el post numero {id}</h1>
}