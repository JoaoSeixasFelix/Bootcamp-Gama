
export default function Description(props) {
  
    return (
    <>
      <h4>{props.salutation}</h4>
      <h6 className="text-zinc-400">{props.forgotyourpassword}</h6>
      <p>{props.username}</p>
      <h1>{props.myprograms}</h1>
    </>
  );
}
