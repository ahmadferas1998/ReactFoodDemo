export default function Error({ Title, Message }) {
  return (
    <div className="error-box">

   
    <div className="error">
      <h2>{Title}</h2>
      <p>{Message}</p>
    </div>
    </div>
  );
}
