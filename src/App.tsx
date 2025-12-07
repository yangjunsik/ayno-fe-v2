import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* 1. 여기에 나중에 <Header /> 같은 걸 넣으면 모든 페이지에 뜹니다. */}
      <h1>AYNO 헤더 (고정)</h1>

      <main>
        {/* 2. [핵심] Outlet: 여기가 바로 URL에 따라 내용이 갈아 끼워지는 '구멍'입니다. */}
        <Outlet />
      </main>

      {/* 3. 푸터도 여기에 넣으면 됩니다. */}
      <footer>Copytight © AYNO</footer>
    </div>
  );
}

export default App;