import Pencil from "../assets/images/pencil.png"
export default function Header(props){
    return (
        <div class="flex items-center justify-center gap-8">
            <h1 class="italic font-serif text-5xl font-bold text-center my-2" >{props.titulo}</h1>
            <img class="w-20"src={Pencil} alt="Lapiz"/>
        </div>
    )
} 