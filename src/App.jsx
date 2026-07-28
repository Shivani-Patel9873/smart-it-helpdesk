import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import ProtectedRoute from "./components/ProtectedRoute";


import Landing from "./pages/Landing";
import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import RaiseTicket from "./pages/RaiseTicket";
import MyTickets from "./pages/MyTickets";
import KnowledgeBase from "./pages/KnowledgeBase";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";
import TicketDetails from "./pages/TicketDetails";
import Admin from "./pages/Admin";



function App() {

  return (

    <Routes>


      {/* Landing Page */}

      <Route
        path="/"
        element={<Landing />}
      />



      {/* Login Page */}

      <Route
        path="/login"
        element={<Login />}
      />




      {/* Protected Application */}

      <Route

        path="/*"

        element={

          <ProtectedRoute>


            <div className="d-flex">


              <Sidebar />


              <div className="flex-grow-1">


                <Navbar />



                <Routes>


                  <Route
                    path="dashboard"
                    element={<Dashboard />}
                  />


                  <Route
                    path="raise-ticket"
                    element={<RaiseTicket />}
                  />


                  <Route
                    path="my-tickets"
                    element={<MyTickets />}
                  />


                  <Route
                    path="knowledge-base"
                    element={<KnowledgeBase />}
                  />


                  <Route
                    path="reports"
                    element={<Reports />}
                  />


                  <Route
                    path="profile"
                    element={<Profile />}
                  />


                  <Route
                    path="ticket/:id"
                    element={<TicketDetails />}
                  />



                  {/* ONLY ONE ADMIN ROUTE */}

                  <Route
                    path="admin"
                    element={<Admin />}
                  />



                </Routes>


              </div>


            </div>


          </ProtectedRoute>

        }

      />


    </Routes>

  );

}


export default App;