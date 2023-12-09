interface Props {
  name: string;
}

const SecondComponent = (props: Props) => {
  return <div>{props.name}</div>;
};

export default SecondComponent;
