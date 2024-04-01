import "./headerStyles.css";

export const Header = ({header, title}: {title: string; header: string}) => {
  return (
    <header>
      <h2>{header}</h2>
      <p>{title}</p>
      <div className="border"> </div>
    </header>
  );
};
