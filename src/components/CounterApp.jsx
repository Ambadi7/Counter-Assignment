import PropTypes from 'prop-types';


const CounterApp = ({count , increment , decrement}) => {
    
  return (
    <div className="flex bg-red-500 w-50 md:w-86 h-50 md:h-86 rounded-lg justify-center items-center">
        <div className="flex-row h-auto  justify-center items-center">
                <h1 className="flex text-white text-7xl  justify-center m-4">{count}</h1>
                <div className="flex gap-8 md:gap-20  justify-center ">
                  <button onClick={increment} className="bg-white p-1 md:p-3">Increment</button>
                  <button onClick={decrement} className="bg-white p-1 md:p-3">Decrement</button>
                </div>
                
                
        </div>
    </div>
  )
}
CounterApp.propTypes ={
  increment:PropTypes.increment,
  decrement:PropTypes.decrement,
  count:PropTypes.count
}

export default CounterApp