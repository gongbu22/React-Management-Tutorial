
import './App.css';
import Customer from './components/Customer'

const customers = [{
  'id': 1,
  'image':'https://placeimg.com/64/64/1',
  'name':'홍길동',
  'birthday':'961222',
  'gender':'남자',
  'job':'대학생'
},
{
  'id': 2,
  'image':'https://placeimg.com/64/64/2',
  'name':'박유진',
  'birthday':'971222',
  'gender':'여자',
  'job':'대학생'
},
{
  'id': 3,
  'image':'https://placeimg.com/64/64/3',
  'name':'가나다',
  'birthday':'123456',
  'gender':'남자',
  'job':'회사원'
}
]

function App() {
  return (
    <div>
      {customers.map(c => {   //반복을 위해 map 사용
        return(
          <Customer 
            key={c.id}    //map함수는 key값이 필요하다 마침 id가 숫자기때문에 그냥 id값을 주겠다.
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        )
      })}
    </div>
  );
}

export default App;
