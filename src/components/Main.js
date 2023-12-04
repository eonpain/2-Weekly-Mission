import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Folder from "./Folder";
import Shared from './SharedComponents/Shared';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate replace to="/folder" />} />
          <Route path="/folder" element={<Folder />} />
          <Route path="/shared" element={<Shared />} />
          <Route path="*" element={<div>잘못된 페이지입니다</div>} />     
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
