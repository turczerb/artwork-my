import loginGuard from "./loginGuard";

const Private = (props) => {
  return <h1>this is a private component {props.message}</h1>;
};

const Guarded = loginGuard(Private);
export default Guarded;
