
export default function NavigationBtn({ name, style }) {
    return (
        <button className={`${style} btn btn-primary rounded-3 fs-5 m-3`}>{name}</button>
    )
}