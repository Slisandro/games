interface Props {
    children: React.ReactNode,
    className?: string
}
const CardContent = ({ children, ...props }: Props) => {
    return (
        <div {...props}>
            {children}
        </div>
    )
}

export default CardContent;