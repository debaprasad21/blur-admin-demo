// Converted from src/app/pages/components/timeline/TimelineCtrl.js

import React, { useEffect } from 'react';

const TimelineCtrl: React.FC = () => {
  useEffect(() => {
    const timelineBlocks = document.querySelectorAll('.cd-timeline-block');
    const offset = 0.8;

    const hideBlocks = (blocks: NodeListOf<Element>, offset: number) => {
      blocks.forEach(block => {
        if ((block as HTMLElement).offsetTop > window.scrollY + window.innerHeight * offset) {
          block.querySelectorAll('.cd-timeline-img, .cd-timeline-content').forEach(el => {
            el.classList.add('is-hidden');
          });
        }
      });
    };

    const showBlocks = (blocks: NodeListOf<Element>, offset: number) => {
      blocks.forEach(block => {
        if ((block as HTMLElement).offsetTop <= window.scrollY + window.innerHeight * offset) {
          block.querySelectorAll('.cd-timeline-img.is-hidden, .cd-timeline-content.is-hidden').forEach(el => {
            el.classList.remove('is-hidden');
            el.classList.add('bounce-in');
          });
        }
      });
    };

    // Hide timeline blocks which are outside the viewport
    hideBlocks(timelineBlocks, offset);

    // On scrolling, show/animate timeline blocks when they enter the viewport
    const onScroll = () => {
      if (!window.requestAnimationFrame) {
        setTimeout(() => {
          showBlocks(timelineBlocks, offset);
        }, 100);
      } else {
        window.requestAnimationFrame(() => {
          showBlocks(timelineBlocks, offset);
        });
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null; // This component does not render anything itself
};

export default TimelineCtrl;
