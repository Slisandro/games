const ItemPoint = ({ color }: { color: string }) => {
    if (color === "pink") return (
        <span className={`block w-[20px] h-[20px] bg-c4-pink rounded-full border-2 border-solid border-c4 shadow-c4-default`} />
    )

    return (
        <span className={`block w-[20px] h-[20px] bg-c4-yellow rounded-full border-2 border-solid border-c4 shadow-c4-default`} />
    )
}

const CardHeader = () => (
    <div className="w-[max-content] h-[max-content] mx-auto grid grid-cols-2 grid-rows-2 gap-1 duration-75 hover:rotate-90 hover:duration-150">
        <ItemPoint color="pink" />
        <ItemPoint color="yellow" />
        <ItemPoint color="yellow" />
        <ItemPoint color="pink" />
    </div>
)

export default CardHeader;