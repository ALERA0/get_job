import { Routes , Route } from "react-router";
import "./App.css";
import EmployeeFormSettings from "./components/EmployeeForm/EmployeeFormSettings";
import MainPage from "./components/MainPage/MainPage";
import EmmployeeForm from "./components/EmployeeForm/EmployeeForm";
import Blog from "./components/Blog/Blog";
import Courses from "./components/Courses/Courses";
import EmployeeJobs from "./components/Jobs/EmployeeJobs/EmployeeJobs";
import EmployerJobs from "./components/Jobs/EmployerJobs/EmployerJobs";
import BlogDetail from "./components/Blog/BlogDetail/BlogDetail";
import JobsDetail from "./components/Jobs/JobsDetail/JobsDetail";
import JobsDetailEmployee from "./components/Jobs/JobsDetail/JobsDetailEmployee";
import Messages from "./components/Messages/Messages";

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<MainPage/>}/>
      <Route path="employeeınfo" element={<EmmployeeForm/>}/>
      <Route path="settings" element={<EmployeeFormSettings/>}/>
      <Route path="blog" element={<BlogDetail/>}/>
      <Route path="courses" element={<Courses/>}/>
      <Route path="employerDetail" element={<JobsDetail/>}/>
      <Route path="jobs" element={<EmployerJobs/>}/>
      <Route path="messages" element={<Messages/>}/>



      




    </Routes>
  );
}

export default App;
