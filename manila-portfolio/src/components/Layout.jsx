import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

export default function Layout({ children }) {
  const location = useLocation();
  const [sidebarWidth, setSidebarWidth] = useState(256); // 256px = w-64
  const [isResizing, setIsResizing] = useState(false);
  const { isDarkMode } = useTheme();

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const startResizing = () => {
    setIsResizing(true);
  };

  const stopResizing = () => {
    setIsResizing(false);
  };

  const resize = (e) => {
    if (isResizing) {
      const newWidth = e.clientX;
      if (newWidth >= 200 && newWidth <= 500) {
        setSidebarWidth(newWidth);
      }
    }
  };

  const bgColor = isDarkMode ? 'bg-[#191919]' : 'bg-[#f5f5f5]';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const sidebarBg = isDarkMode ? 'bg-[#1e1e1e]' : 'bg-white';
  const borderColor = isDarkMode ? 'border-gray-800' : 'border-gray-200';
  const hoverBg = isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100';
  const activeBg = isDarkMode ? 'bg-gray-800' : 'bg-gray-200';
  const inactiveText = isDarkMode ? 'text-gray-400' : 'text-gray-600';

  return (
    <div 
      className={`flex min-h-screen ${bgColor} ${textColor} transition-colors duration-500`}
      onMouseMove={resize}
      onMouseUp={stopResizing}
    >
      {/* Sidebar */}
      <aside 
        className={`${sidebarBg} border-r ${borderColor} flex flex-col relative transition-colors duration-500`}
        style={{ width: `${sidebarWidth}px`, minWidth: '200px', maxWidth: '500px' }}
      >
        <div className={`p-4 border-b ${borderColor} transition-colors duration-500`}>
          <Link to="/" className={`flex items-center gap-2 text-sm font-medium ${hoverBg} rounded px-2 py-1.5 transition-colors`}>
            <span className="text-blue-500">L</span>
            <span>Laxmi Ghanate</span>
          </Link>
        </div>
        
        <nav className="flex-1 p-3 space-y-1">
          <Link
            to="/"
            className={`flex items-center gap-2 px-2 py-1.5 rounded text-sm transition-colors ${
              isActive('/') && location.pathname === '/'
                ? `${activeBg} ${textColor}`
                : `${inactiveText} ${hoverBg}`
            }`}
          >
            <span>🏠</span>
            <span>homepage</span>
          </Link>
          
          <Link
            to="/who-i-am"
            className={`flex items-center gap-2 px-2 py-1.5 rounded text-sm transition-colors ${
              isActive('/who-i-am')
                ? `${activeBg} ${textColor}`
                : `${inactiveText} ${hoverBg}`
            }`}
          >
            <span>👤</span>
            <span>who i am</span>
          </Link>
          
          <Link
            to="/what-i-do"
            className={`flex items-center gap-2 px-2 py-1.5 rounded text-sm transition-colors ${
              isActive('/what-i-do')
                ? `${activeBg} ${textColor}`
                : `${inactiveText} ${hoverBg}`
            }`}
          >
            <span>💼</span>
            <span>what i do</span>
          </Link>
          
          <Link
            to="/thoughts"
            className={`flex items-center gap-2 px-2 py-1.5 rounded text-sm transition-colors ${
              isActive('/thoughts')
                ? `${activeBg} ${textColor}`
                : `${inactiveText} ${hoverBg}`
            }`}
          >
            <span>💭</span>
            <span>thoughts</span>
          </Link>
          
          <a
            href="/cyberspace/resume.pdf"
            className={`flex items-center gap-2 px-2 py-1.5 rounded text-sm ${inactiveText} ${hoverBg} transition-colors`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>📄</span>
            <span>resume</span>
          </a>
        </nav>

        {/* Resize Handle */}
        <div
          className={`absolute top-0 right-0 w-1 h-full cursor-col-resize hover:bg-blue-500 transition-colors ${isDarkMode ? 'bg-transparent' : 'bg-transparent'}`}
          onMouseDown={startResizing}
        />
      </aside>

      {/* Main Content */}
      <main className={`flex-1 overflow-auto ${bgColor} transition-colors duration-500`}>
        {children}
      </main>
    </div>
  );
}
