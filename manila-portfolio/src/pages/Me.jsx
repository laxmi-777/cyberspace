import { useTheme } from '../context/ThemeContext.jsx';
import { useRef, useEffect, useState } from 'react';

export default function WhoIAm() {
  const { isDarkMode } = useTheme();
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const subtextColor = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const linkColor = isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700';
  const lineNumberColor = isDarkMode ? 'text-gray-600' : 'text-gray-400';
  const highlightColor = isDarkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-200 text-purple-700';
  
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [importText1, setImportText1] = useState('');
  const [importText2, setImportText2] = useState('');
  const [showImport2, setShowImport2] = useState(false);
  const [isCrumbling, setIsCrumbling] = useState(false);
  
  const fullImport1 = 'import { consulting, engineering } from "@/work";';
  const fullImport2 = 'import { humans, interfaces, systems } from "@uva/cs";';

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const updateCanvasSize = () => {
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        
        const context = canvas.getContext('2d');
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.strokeStyle = isDarkMode ? '#ffffff' : '#000000';
        context.lineWidth = 2;
        contextRef.current = context;
      };
      
      updateCanvasSize();
      window.addEventListener('resize', updateCanvasSize);
      return () => window.removeEventListener('resize', updateCanvasSize);
    }
  }, [isDarkMode]);

  // Typing animation for import statements
  useEffect(() => {
    if (importText1.length < fullImport1.length) {
      const timeout = setTimeout(() => {
        setImportText1(fullImport1.slice(0, importText1.length + 1));
      }, 15);
      return () => clearTimeout(timeout);
    } else {
      setShowImport2(true);
    }
  }, [importText1]);

  useEffect(() => {
    if (showImport2 && importText2.length < fullImport2.length) {
      const timeout = setTimeout(() => {
        setImportText2(fullImport2.slice(0, importText2.length + 1));
      }, 15);
      return () => clearTimeout(timeout);
    }
  }, [importText2, showImport2]);

  const handleCrumble = () => {
    setIsCrumbling(true);
    setImportText1('');
    setImportText2('');
    setShowImport2(false);
    
    setTimeout(() => {
      setIsCrumbling(false);
    }, 600);
  };

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const stopDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  };
  
  return (
    <div className="flex relative min-h-screen">
      {/* Line numbers */}
      <div className={`${lineNumberColor} text-right pr-4 pl-8 pt-12 select-none font-mono text-sm leading-relaxed`}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
        <div>16</div>
        <div>17</div>
        <div>18</div>
        <div>19</div>
        <div>20</div>
        <div>21</div>
        <div>22</div>
        <div>23</div>
        <div>24</div>
        <div>25</div>
        <div>26</div>
        <div>27</div>
        <div>28</div>
        <div>29</div>
        <div>30</div>
        <div>31</div>
        <div>32</div>
        <div>33</div>
        <div>34</div>
        <div>35</div>
        <div>36</div>
        <div>37</div>
        <div>38</div>
        <div>39</div>
        <div>40</div>
      </div>

      {/* Content */}
      <div className="max-w-4xl p-12 space-y-12 flex-1">
        {/* Import statements */}
        <section 
          className={`font-mono text-sm ${subtextColor} space-y-1 pb-8 border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} cursor-pointer transition-all duration-300 ${isCrumbling ? 'animate-crumble' : ''}`}
          onClick={handleCrumble}
        >
          <div className={`transition-all duration-200 ${isCrumbling ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
            <span className="text-purple-500">import</span>
            {importText1.slice(6)}
          </div>
          {showImport2 && (
            <div className={`transition-all duration-200 ${isCrumbling ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
              <span className="text-purple-500">import</span>
              {importText2.slice(6)}
            </div>
          )}
        </section>

        <section className="space-y-4">
          <h1 className={`text-4xl font-bold ${textColor}`}>
            who i am
          </h1>
          <p className={`text-lg ${subtextColor} leading-relaxed`}>
            <span className={highlightColor}>software engineer</span>, <span className={highlightColor}>consultant</span>, uva hoo, creative, writer, engineer, <span className={highlightColor}>cat enthusiast</span>.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className={`text-2xl font-semibold ${textColor}`}>about</h2>
          <p className={`${subtextColor} leading-relaxed`}>
            Hi. I'm Laxmi Ghanate. I'm a <span className={highlightColor}>Computer Science student at UVA (2023–2026)</span> and I freelance.
          </p>
          <p className={`${subtextColor} leading-relaxed`}>
            I like work where I get to do both sides: <span className={highlightColor}>talk to people, understand what they're really asking for, and then go build it</span>. I like client calls and I like shipping code.
          </p>
          <p className={`${subtextColor} leading-relaxed`}>
            Most of my best work starts with someone saying something like "we need a tool for this" and nothing else. <span className={highlightColor}>I'm good at turning that into a clear problem, a simple flow, and a solution that isn't overcomplicated</span>. I care a lot about UX, not as a buzzword — just because if something is confusing, people won't use it (and then it doesn't matter how "technically correct" it is).
          </p>
          <p className={`${subtextColor} leading-relaxed`}>
            Lately I've also been pushing myself to <span className={highlightColor}>build with a security mindset from the start</span>. Not dramatic, not fear-based, just being thoughtful about what could go wrong and making the safe choice the default.
          </p>
          <p className={`${subtextColor} leading-relaxed`}>
            Right now I'm focused on <span className={highlightColor}>student-facing tools, human-centered design projects</span>, and getting better at building things that feel clean, reliable, and intentional.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className={`text-2xl font-semibold ${textColor}`}>what i value</h2>
          <ul className={`${subtextColor} space-y-2 list-none`}>
            <li><strong className={highlightColor}>clarity.</strong> If it takes a paragraph to explain, it probably needs another pass.</li>
            <li><strong className={highlightColor}>people-first work.</strong> Good software is good listening + good follow-through.</li>
            <li><strong className={highlightColor}>secure-by-default.</strong> I don't like "we'll fix it later" as a strategy.</li>
            <li><strong className={highlightColor}>calm UX.</strong> Fewer steps, fewer surprises, fewer ways to mess it up.</li>
          </ul>
        </section>
      </div>

      {/* Drawing Sidebar */}
      <div 
        className="w-64 bg-purple-950/20 border-l border-purple-800/30 p-6 space-y-4 flex flex-col fixed right-0 top-0 bottom-0 overflow-hidden"
      >
        <div className="space-y-3 flex-shrink-0">
          <h3 className={`text-lg font-semibold ${textColor}`}>draw something!</h3>
          <div className={`${subtextColor} text-sm space-y-2`}>
            <p>I love creativity and self-expression.</p>
            <p>While you read, feel free to doodle, sketch, or leave a note here. It's your space.</p>
          </div>
        </div>

        <div className="flex-1 relative min-h-0">
          <canvas
            ref={canvasRef}
            className={`w-full h-full rounded-lg border ${isDarkMode ? 'bg-black border-purple-800/30' : 'bg-white border-gray-300'} cursor-crosshair`}
            style={{
              backgroundImage: isDarkMode 
                ? 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 1px, transparent 1px)' 
                : 'radial-gradient(circle, rgba(0, 0, 0, 0.2) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={(e) => {
              e.preventDefault();
              const touch = e.touches[0];
              const rect = e.target.getBoundingClientRect();
              startDrawing({ nativeEvent: { offsetX: touch.clientX - rect.left, offsetY: touch.clientY - rect.top } });
            }}
            onTouchMove={(e) => {
              e.preventDefault();
              const touch = e.touches[0];
              const rect = e.target.getBoundingClientRect();
              draw({ nativeEvent: { offsetX: touch.clientX - rect.left, offsetY: touch.clientY - rect.top } });
            }}
            onTouchEnd={stopDrawing}
          />
        </div>

        <button
          onClick={clearCanvas}
          className={`px-4 py-2 ${isDarkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} text-white rounded-lg text-sm font-medium transition-colors flex-shrink-0`}
        >
          Clear Canvas
        </button>
      </div>
    </div>
  );
}
