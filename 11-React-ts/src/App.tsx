// 4- Importando component
import FirstComponent from './components/FirstComponent';

// 5- Desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';

// 6- UseState
import State from './components/State';
import { createContext } from 'react';

// 10 - Context
import Context from './components/Context';

// 8-type
type textOrNull = string | null;

type fixed = 'Isso' | 'Ou' | 'Aquilo';

// 9 - Context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1-variáveis
  const name: string = 'Alexandre';

  const age: number = 30;

  const isWorking: boolean = true;

  console.log(name, age, isWorking);

  // 2- Funções
  const myName = (name: string): string => {
    return `Olá meu nome é: ${name}`;
  };

  // 8-type
  const myText: textOrNull = 'Tem texto';
  console.log(myText);

  let mySecundText: textOrNull = null;

  console.log(mySecundText);

  mySecundText = 'Agora tem texto';

  console.log(mySecundText);

  // const myFixed: fixed = 'Tem isso no texto';
  const myFixed: fixed = 'Isso';
  console.log(myFixed);

  // 9 - Context
  const contextValue: IAppContext = {
    language: 'JavaScript',
    framework: 'React',
    projects: 3,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <h1>React com TypeScript</h1>
      {isWorking && (
        <h2>
          {name} tem {age} anos, e está trabalhando.
        </h2>
      )}
      <h3>{myName(name)}</h3>
      <FirstComponent />
      <SecondComponent name="Alexandre" />
      <Destructuring
        title="Primeiro post"
        content="Algum conteúdo"
        commentQty={5}
        tags={['javaScript', 'React']}
        category={Category.JS}
      />
      <Destructuring
        title="Segundo post"
        content="Outro conteúdo"
        commentQty={10}
        tags={['javaScript', 'React']}
        category={Category.TS}
      />
      <State />
      <Context />
    </AppContext.Provider>
  );
}

export default App;
