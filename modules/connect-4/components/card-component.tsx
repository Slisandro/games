const Card = ({ children }: { children: React.ReactNode }) => (
    <div className="w-1/2 h-auto p-12 bg-c4-purple border-2 border-solid border-c4 rounded-2xl shadow-c4-card flex flex-col gap-12">
        {children}
    </div>
)

export default Card;