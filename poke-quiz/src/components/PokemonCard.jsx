export default function PokemonCard() {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-red-600 dark:border-red-600">
                <a href="#">
            <img className="rounded-t-lg" src="src/assets/pika.webp" alt="Pika" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pikachu</h5>
                    </a>
                </div>
        </div>
    )
}