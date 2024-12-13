import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddIncome from './components/Income/AddIncome';
import UDIncome from './components/Income/DeleteUpdateIncome';
import Category from './components/Category/Category';
import { Toaster } from "react-hot-toast";


function App() {

  return (

    <div>
          <Router>
            <Routes>
              <Route path="AddIncome" element={<AddIncome email='Lakruwan987@gmail.com' topic='A d d &nbsp;&nbsp; I n c o m e' btnValue='Add Income' />}></Route>
              <Route path="Update_Income" element={<UDIncome topic='U p d a t e &nbsp;&nbsp; I n c o m e' btnValue='Update Income' email="Lakruwan987@gmail.com" id='7' />}></Route>
              <Route path="Category" element={<Category />}></Route>
              <Route path="Delete_Income" element={<UDIncome topic='D e l e t e &nbsp;&nbsp; I n c o m e' btnValue='Delete Income' email="Lakruwan987@gmail.com" id='7' />}></Route>
              {/* <Route path="AddExpense" element={<AddIncome />}></Route>
        <Route path="Update_Expense" element={<AddIncome />}></Route>
        <Route path="Delete_Expense" element={<AddIncome />}></Route> */}
            </Routes>
          </Router>
        
    </div>

  );
}

export default App;
