import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let username = 'Tom';
  let userObj = {
    name: 'Tom',
    age: 18,
    imageUrl : 'img.png'
  }
 function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <HelloWorld />
      <MyButton />
      <p>在 React 中，你可以使用 className 来指定一个 CSS 的 class</p>
      <img className="avatar" src='img.png'/>
      <p>JSX 会让你把标签放到 JavaScript 中。而大括号会让你 “回到” JavaScript 中，这样你就可以从你的代码中嵌入一些变量并展示给用户</p>
      <p>{username}</p>
      <p>{userObj.name} -- { userObj.age}</p>
      <p>将 JSX 属性 “转义到 JavaScript”，但你必须使用大括号 而非 引号</p>
      <img src={userObj.imageUrl} alt="" />
      <p>更为复杂的表达式放入 JSX 的大括号内，例如 字符串拼接</p>
      <UserTest/>
      <ConditionalRendering/>
      <h1>列表渲染</h1>
      <ListRendering/>
      <p>React 将依靠你提供的 key 来思考发生了什么</p>
      <FruitList/>
      <ResponseEvent/>
      <UpdateScreen/>
      <p>每个按钮会 “记住” 自己的 count，而不影响其他按钮</p>
      <UpdateScreen/>
      <h1>使用 Hook</h1>
      <MyHook/>

      <h1>组件间共享数据--prop 传递</h1>
      <MyProp count={count} onClick={handleClick}/>
      <MyProp count={count} onClick={handleClick}/>
      <p>当你点击任何一个按钮时，MyApp 中的 count 都将改变，同时会改变 MyProp中的两个 count</p>

    </>
  )
}

function HelloWorld() {
  return (
    <div>
      <h1>Hello World -- React</h1>
    </div>
  )
}

function MyButton() {
  return (
    <button>我是一个按钮</button>
  );
}

function UserTest(){
    const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
     <p>
      {`上面示例中，style={{}} 并不是一个特殊的语法，而是 style={{}} JSX 大括号内的一个普通 {{}} 对象`}
    </p>
    </>
  );

}

function ConditionalRendering(){
  let content;
  const [isShow,setIsShow] = useState(true);

  const toggleContent = () =>{
    setIsShow(!isShow);
  }

  if(isShow){
    content = <h1>条件渲染-true</h1>;
  }else{
    content = <h1>条件渲染-false</h1>;
  }
  return(
     <>
      {content}
      <button onClick={toggleContent}>切换</button>
      {isShow ?  <h2>三元运算-true</h2> : <h2>三元运算-false</h2>}
      <p>当你不需要 else 分支时，你也可以使用更简短的 逻辑 && 语法：</p>
      {isShow && <h2>逻辑运算-true</h2>}
     </>
  );
}

function ListRendering(){
  const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  )

  return (
    <ul>{listItems}</ul>
  );
}

function FruitList(){
  const products = [
  { title: '卷心菜', isFruit: false, id: 1 },
  { title: '大蒜', isFruit: false, id: 2 },
  { title: '苹果', isFruit: true, id: 3 },
];
  const listItems = products.map(product =>
    <li key={product.id}
    style={{
      color: product.isFruit ? 'magenta' : 'darkgreen'
    }}>
      <h3>{product.title}</h3>
    </li>
  )

  return (
    <ul>{listItems}</ul>
  );
}

function ResponseEvent(){
  function handleClick(){
    alert('你点击了按钮');
  }

  return(
    <>
    <h1>Responding to events</h1>
    <button onClick={handleClick}>点击我</button>
    <p>{`注意，onClick={handleClick} 的结尾没有小括号`}</p>
    </>
  )
}

function UpdateScreen(){
  const [count, setCount] = useState(0);


  function handleAdd(){
    setCount(count + 1);
  }

  function handleSub(){
    setCount(count - 1);
  }

  return(
    <>
    <h1>Update the screen</h1>
    <p>先，从 React 引入 useState</p>
    <p>你将从 useState 中获得两样东西：当前的 state（count），以及用于更新它的函数（setCount）</p>
    <p>像 [something, setSomething] 这样为它们命名</p>
    <div>
      <button onClick={handleAdd}>+</button>
      <span>{count}</span>
      <button onClick={handleSub}>-</button>
    </div>
    </>
  )
}

function MyHook(){
  return (
    <>
      <p>以 use 开头的函数被称为 Hook</p>
      <p>Hook 比普通函数更为严格。你只能在你的组件（或其他 Hook）的 顶层 调用 Hook。如果你想在一个条件或循环中使用 useState，请提取一个新的组件并在组件内部使用它。</p>
    </>
  )
}

function MyProp({ count, onClick }){
return (
    <button onClick={onClick}>
      点了 {count} 次
    </button>
  );
}

export default App
