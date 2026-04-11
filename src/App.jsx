import './App.css'
import ControlledField from './Components/ControlledField/ControlledField'
import FormAction from './Components/FormAction/FormAction'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import UnControlledField from './Components/UnCrontrolledField/UnControlledField'

function App() {

  return (
    <>
      <h1>Explore React form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlledField></ControlledField> */}
      <UnControlledField></UnControlledField>
    </>
  )
}

export default App
