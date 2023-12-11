import React, { useEffect } from 'react';
import './FollowCursor.css'; // Подключаем стили для эффекта следования за курсором

const FollowCursor = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const el = document.querySelector(".follow-cursor");
      const target = e.target;
      if (!target) return;

      if (target.closest("a")) {
        el.classList.add("follow-cursor_active");
      } else {
        el.classList.remove("follow-cursor_active");
      }

      el.style.left = e.pageX + "px";
      el.style.top = e.pageY + "px";
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className="follow-cursor"></div>;
};

export default FollowCursor;
