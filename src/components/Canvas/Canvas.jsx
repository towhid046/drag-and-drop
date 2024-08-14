import { useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import Popup from './Popup';
import Xarrow from 'react-xarrows';

const Canvas = () => {
  const [cards, setCards] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState('');

  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      position: { x: 50, y: 50 },
      size: { width: 200, height: 100 },
    };
    setCards([...cards, newCard]);
  };

  const handleShowMore = (text) => {
    setPopupText(text);
    setShowPopup(true);
  };

  return (
    <div className="w-screen h-screen overflow-auto bg-gray-100 relative py-12">
      <button onClick={addCard} className="bg-blue-500 text-white p-2 rounded mb-4 ml-4">
        Add Card
      </button>
      {cards.map((card, index) => (
        <Draggable key={card.id} defaultPosition={card.position}>
          <div id={`card-${card.id}`}>
            <ResizableBox
              width={card.size.width}
              height={card.size.height}
              minConstraints={[150, 100]}
              maxConstraints={[300, 300]}
              className="border border-gray-300 bg-white shadow-lg p-4 rounded-lg"
            >
              <div className="flex flex-col justify-between h-full">
                <p className="text-gray-700">{card.text.substring(0, 20)}...</p>
                <button
                  onClick={() => handleShowMore(card.text)}
                  className="text-blue-500 mt-2 self-end underline"
                >
                  Show More
                </button>
              </div>
            </ResizableBox>
            {index > 0 && (
              <Xarrow
                start={`card-${cards[index - 1].id}`}
                end={`card-${card.id}`}
                color="blue"
                strokeWidth={2}
              />
            )}
          </div>
        </Draggable>
      ))}
      {showPopup && <Popup text={popupText} onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default Canvas;