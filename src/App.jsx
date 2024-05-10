import './App.css'
import LoginForm from './Componentes/LoginForm'

function App() {
  
  function aVeryBigSum(ar) {
    // Write your code here
    let suma = 0
    for (let i = 0 ; i < ar.length ; i++){
      suma = suma + ar[i]
    }
    return suma
}


console.log(aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005]))

  // console.log(simpleArraySum([1,2,3,4,5,6]))
  //console.log(sum)
  return (
    <div className='vh-100'>
      <div className='container h-100'>
        <div className='row aling-items-center h-100'>
          <div className='col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 text-white bg-dark'>
            <h2 className='text-center'>Inicio de Sesion</h2>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
