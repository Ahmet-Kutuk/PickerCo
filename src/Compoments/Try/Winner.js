import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import DotLoader from 'react-spinners/DotLoader';
Modal.setAppElement('#root');
function Winner(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [userNumber, setUserNumber] = useState();
  const [winner, setWinner] = useState({
    snippet: {
      topLevelComment: {
        snippet: {
          authorDisplayName: '',
          authorProfileImageUrl: '',
          textOriginal: '',
        },
      },
    },
  });
  useEffect(() => {
    const randomUser = Math.random() * props.allComments.length;
    setUserNumber(randomUser);
    setWinner(props.allComments[userNumber]);
  }, [props.allComments]);

  if (winner) {
    console.log(winner.snippet.topLevelComment.snippet);
  }
  return (
    <>
      <Modal
        isOpen={props.open}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
          content: {
            position: 'absolute',
            color: 'rgba(30, 58, 138',
            margin: 'auto',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '50%',
            height: '40%',
          },
        }}
      >
        {props.allComments.length > 0 ? (
          <>
            <button className="self-end" onClick={() => props.rePick()}>
              <i className="fas fa-window-close text-3xl"></i>
            </button>
            <div className="rounded-full profile">
              <img
                className="rounded-full"
                alt="profile"
                src={
                  winner &&
                  winner.snippet.topLevelComment.snippet.authorProfileImageUrl
                }
              />
            </div>
            <div className="nickname">
              <h2 className="text-xl">
                {winner &&
                  winner.snippet.topLevelComment.snippet.authorDisplayName}
              </h2>
            </div>
            <p className="text-xl mt-12">
              {winner && winner.snippet.topLevelComment.snippet.textOriginal}
            </p>
            <button
              className="p-4 bg-blue-500 text-white rounded-lg w-48 mt-24"
              onClick={() => props.rePick()}
            >
              Re Pick
            </button>
          </>
        ) : (
          <>
            <button
              className="self-end"
              onClick={() => {
                props.rePick();
                setWinner({
                  snippet: {
                    topLevelComment: {
                      snippet: {
                        authorDisplayName: '',
                        authorProfileImageUrl: '',
                        textOriginal: '',
                      },
                    },
                  },
                });
              }}
            >
              <i className="fas fa-window-close text-3xl"></i>
            </button>
            <h1 className="mb-16">Winner Loading</h1>
            <DotLoader color={'blue'} loading={isLoading} size={100} />
          </>
        )}
      </Modal>
    </>
  );
}

export default Winner;
