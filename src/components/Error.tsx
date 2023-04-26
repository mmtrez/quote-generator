export default function Error({message}: {message: string}) {
  return (
    <div>
      <h1>Error:</h1>
      <p>{message}</p>
    </div>
  );
}
