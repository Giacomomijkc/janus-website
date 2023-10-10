import React, {useState, useEffect} from 'react'

const Homepage = () => {
    
    const [showPopup, setShowPopup] = useState(false);
    const [iconPosition, setIconPosition] = useState({
      top: `${Math.random() * 90}vh`,
      left: `${Math.random() * 90}vw`,
    });
  
    const openPopup = () => {
      setShowPopup(true);
    };
  
    const closePopup = () => {
      setShowPopup(false);
    };

      // Aggiungi un effetto che muove l'icona randomicamente
  useEffect(() => {
    const moveIcon = () => {
      const newTop = `${Math.random() * 90}vh`;
      const newLeft = `${Math.random() * 90}vw`;
      setIconPosition({ top: newTop, left: newLeft });
    };

    const interval = setInterval(moveIcon, 1000); // Modifica la velocità desiderata qui (ogni 3 secondi nel caso presente).

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center text-[#050A30] mb-2">Janus | Full-Stack Dev</h1>
      <p className="text-sm font-regular text-center text-[#050A30]">
      MERN stack, open to new tech, keen on web3, experimenting with AI.</p>
      <div className="flex flex-row gap-2">
        <a href="https://twitter.com/sol_janus">
        <div class="mt-5 w-10 h-10 md:w-20 md:h-20 bg-[#050A30] rounded-full flex items-center justify-center text-[#F4F6FC] cursor-pointer font-bold">X</div>
        </a>
        <a href="https://github.com/Giacomomijkc">
        <div class="mt-5 w-10 h-10 md:w-20 md:h-20 bg-[#050A30] rounded-full flex items-center justify-center text-[#F4F6FC] cursor-pointer font-bold">Gh</div>
        </a>
        <a href="mailto:janus.sol02@gmail.com">
        <div class="mt-5 w-10 h-10 md:w-20 md:h-20 bg-[#050A30] rounded-full flex items-center justify-center text-[#F4F6FC] cursor-pointer font-bold">@</div>
        </a>
      </div>
      {showPopup && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center z-10 overflow-y-auto">
            <div className="bg-[#F4F6FC] p-4 rounded-lg mx-20">
              <p className='font-bold mb-4'>Janus was revered as the god of new beginnings. 
                This name has a special significance for me, as it reflects my current journey of new beginnings in life.
              </p>
              <p className="">[...] 
                Scuptores pictoresque Romani Ianum bifrontem fingebant, id est cum duplici vultu,
                quod altero vultu praeterita facta respiciebat, altero futura animadvertebat. 
                Praeterea Ianus cum baculo in dextra manu et cum clave in sinistra gingebatur, 
                quia sub eius fide erant urbium domorumque ianuae, qua homines in urbes 
                domosque ingrediebantur et quae a deo nomen trahebant.</p>
                <div className='flex justify-center'>
              <button onClick={closePopup} className="mx-auto mt-4 px-4 py-2 bg-[#050A30] text-[#F4F6FC] rounded-3xl cursor-pointer">
                Close
              </button>
              </div>
            </div>
          </div>
        )}
        <div
          className="w-10 h-10 bg-[#050A30] rounded-full flex items-center justify-center text-[#F4F6FC] cursor-pointer absolute"
          style={{ top: iconPosition.top, left: iconPosition.left }}
          onClick={openPopup}
        >
          🗝️
        </div>
    </div>
    
    </>
  )
}

export default Homepage