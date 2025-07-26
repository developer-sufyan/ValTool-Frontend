import './assets/css/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/scss/_custom.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import EmailVerificationPrompt from './components/EmailVerificationPrompt';
import AuthDebug from './components/AuthDebug';
import HomePage from './pages/HomePage.jsx';
import OurServicesPage from './pages/OurServicesPage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import ContactUsPage from './pages/ContactUsPage.jsx';
import PricingPage from './pages/PricingPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import IndexPage from './pages/Dashboard/IndexPage.jsx';
import ProfilePage from './pages/Dashboard/ProfilePage.jsx';
import ProjectPage from './pages/Dashboard/ProjectPage.jsx';
import Questionnaire from './components/Questionnaire/Questionnaire.jsx';
import QuestionOne from './components/Questionnaire/QuestionOne.jsx';
import QuestionnaireTwo from './components/Questionnaire/QuestionnaireTwo.jsx';
import QuestionThree from './components/Questionnaire/QuestionThree.jsx';
import QuestionFour from './components/Questionnaire/QuestionFour.jsx';
import QuestionFive from './components/Questionnaire/QuestionFive.jsx';
import QuestionSix from './components/Questionnaire/QuestionSix.jsx';
import QuestionSeven from './components/Questionnaire/QuestionSeven.jsx';
import QuestionEight from './components/Questionnaire/QuestionEight.jsx';
import QuestionNine from './components/Questionnaire/QuestionNine.jsx';
import QuestionTen from './components/Questionnaire/QuestionTen.jsx';
import QuestionEleven from './components/Questionnaire/QuestionEleven.jsx';
import QuestionTwelve from './components/Questionnaire/QuestionTwelve.jsx';
import QuestionThirteen from './components/Questionnaire/QuestionThirteen.jsx';
import QuestionFourteen from './components/Questionnaire/QuestionFourteen.jsx';
import QuestionFifteen from './components/Questionnaire/QuestionFifteen.jsx';
import QuestionSixteen from './components/Questionnaire/QuestionSixteen.jsx';
import QuestionSeventeen from './components/Questionnaire/QuestionSeventeen.jsx';
import QuestionEighteen from './components/Questionnaire/QuestionEighteen.jsx';
import QuestionNineteen from './components/Questionnaire/QuestionNineteen.jsx';
import QuestionTwenty from './components/Questionnaire/QuestionTwenty.jsx';
import QuestionComplete from './components/Questionnaire/QuestionComplete.jsx';
import QuestionTwentyOne from './components/Questionnaire/QuestionTwentyOne.jsx';
import ForgotPassword from './components/ForgotPassword.jsx';
import NewPassword from './components/NewPassword.jsx';
import AddProject from './components/Dashboard/AddProject.jsx';
// import ModernHomepage from './components/ModernHomepage.jsx';


function App() {
  return (
    <AuthProvider>
      <AuthDebug />
      <BrowserRouter>
        <Routes>
          {/* Landing static pages */}
          <Route path="/"  element= {<HomePage/>}/>
          {/* <Route path="/home2"  element= {<ModernHomepage/>}/> */}
          <Route path="/our-services" element={<OurServicesPage/>}/>
          <Route path="/about" element={<AboutUsPage/>}/>
          <Route path="/contact" element={<ContactUsPage/>}/>
          <Route path="/pricing" element={<PricingPage/>}/>
          {/* SignIn & SignUp */}
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/reset-password" element={<NewPassword/>}/>

          {/* Email Verification */}
          <Route path="/verify-email" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <div>Email verified! Redirecting...</div>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/>
          {/* Protected Dashboard Routes */} 
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <IndexPage/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/>        
          <Route path="/profile" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <ProfilePage/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/>        
          <Route path="/project" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <ProjectPage/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/> 
          <Route path="/new-project" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <AddProject/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/> 
          {/* Protected Questionnaire Routes */}       
          <Route path="/questionnaire" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <Questionnaire/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/>        
          <Route path="/question/1" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <QuestionOne/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/>        
          <Route path="/question/2" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <QuestionnaireTwo/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/>        
          <Route path="/question/3" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <QuestionThree/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/>        
          <Route path="/question/4" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <QuestionFour/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/>        
          <Route path="/question/5" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <QuestionFive/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/>        
          <Route path="/question/6" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <QuestionSix/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/>        
          <Route path="/question/7" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <QuestionSeven/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/>        
          <Route path="/question/8" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <QuestionEight/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/>        
          <Route path="/question/9" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <QuestionNine/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/>        
          <Route path="/question/10" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <QuestionTen/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/>        
          <Route path="/question/11" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <QuestionEleven/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/>
          <Route path="/question/12" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <QuestionTwelve/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/>
          <Route path="/question/13" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <QuestionThirteen/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/>
          <Route path="/question/14" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <QuestionFourteen/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/>
          <Route path="/question/15" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <QuestionFifteen/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/>
          <Route path="/question/16" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <QuestionSixteen/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/>
          <Route path="/question/17" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <QuestionSeventeen/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/>
          <Route path="/question/18" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <QuestionEighteen/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/>
          <Route path="/question/19" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <QuestionNineteen/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/>
          <Route path="/question/20" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <QuestionTwenty/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/>
          <Route path="/question/21" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <QuestionTwentyOne/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/>
          <Route path="/question/complete" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <QuestionComplete/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/>

          <Route path="/forget-password" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <ForgotPassword/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/> 

          <Route path="/reset-password" element={
            <ProtectedRoute>
              <EmailVerificationPrompt>
                <NewPassword/>
              </EmailVerificationPrompt>
            </ProtectedRoute>
          }/> 


        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
