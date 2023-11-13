interface Props {
    children: React.ReactNode,
    className?: string,
}
const Card = ({ children, ...props }: Props) => (
    <div {...props}>
        {children}
    </div>
)

export default Card;