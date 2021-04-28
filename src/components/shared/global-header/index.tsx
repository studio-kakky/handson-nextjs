import { styles } from './styles.css';

export default function GlobalHeader(): JSX.Element {
  return (
    <>
      <header className="GlobalHeader">
        <h1 className="GlobalHeader_h">Next.js Hands On Page</h1>
      </header>
      <style jsx>{styles}</style>
    </>
  );
}
