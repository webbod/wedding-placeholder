export default function Header({ title }) {
  return title ? <h1 className="title">{title}</h1> : null
}
