import Pencil from "../assets/images/pencil.png";

export default function Header(props) {
    return (
        <div className="flex items-center justify-between p-4 bg-purple-200 rounded-t-lg">
            <h1 className="text-xl font-bold">{props.titulo}</h1>
            <img className="w-8" src={Pencil} alt="Lapiz" />
        </div>
    );
}
