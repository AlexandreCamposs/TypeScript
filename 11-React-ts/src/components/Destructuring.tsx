interface Props {
  title: string;
  content: string;
  commentQty: number;
  tags: string[];
  // 7-enum
  category: Category;
}

export enum Category {
  TS = 'TypeScript',
  JS = 'JavaScript',
  P = 'Python',
}

const Destructuring = ({
  title,
  content,
  commentQty,
  tags,
  category,
}: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{commentQty}</p>
      <p>{tags}</p>
      <p>Categoria: {category}</p>
    </div>
  );
};

export default Destructuring;
