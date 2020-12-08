
import './App.css';
import {Inject,ScheduleComponent,Day,Week,WorkWeek,Month,Agenda} from '@syncfusion/ej2-react-schedule';
import Logo from './logoInject'
function App() {
  return (
    
    <div className='calendarContainer'>
      <Logo></Logo>
     <ScheduleComponent>
      <Inject services={[Day,Week,WorkWeek,Month,Agenda]}/>
    </ScheduleComponent>
    </div>
    
  );
}

export default App;
