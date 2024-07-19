import './App.css';
import {
  AppConfig,
  UserSession,
  AuthDetails,
  showConnect,
} from "@stacks/connect";
import { useState } from "react";

const appConfig = new AppConfig(["store_write"]);
const userSession = new UserSession({ appConfig });
const [userData, setUserData] = useState(undefined);

const appDetails = {
  name: "Luxury Goods",
  icon: "https://freesvg.org/img/1541103084.png",
};

const connectWallet = () => {
  showConnect({
    appDetails,
    onFinish: () => window.location.reload(),
    userSession,
  });
};

useEffect(() => {
  if (userSession.isSignInPending()) {
    userSession.handlePendingSignIn().then((userData) => {
      setUserData(userData);
    });
  } else if (userSession.isUserSignedIn()) {
    setUserData(userSession.loadUserData());
  }
}, []);

{
  !userData && (
    <button
      className="p-4 bg-indigo-500 rounded text-white"
      onClick={connectWallet}
    >
      Connect Wallet
    </button>
  );
}

console.log(userData);

function App() {
  const [message, setMessage] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");

  const connectWallet = () => {
    // implement code
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const submitMessage = () => {
    // submit transaction
  };

  const handleTransactionChange = (e) => {
    setTransactionId(e.target.value);
  };

  const retrieveMessage = () => {
    // submit transaction
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-8">
      <button
        className="p-4 bg-indigo-500 rounded text-white"
        onClick={connectWallet}
      >
        Connect Wallet
      </button>
      <h1 className="text-6xl font-black">Hello Stacks</h1>
      <div className="flex gap-4">
        <input
          className="p-4 border border-indigo-500 rounded"
          placeholder="Write message here..."
          onChange={handleMessageChange}
          value={message}
        />
        <button
          className="p-4 bg-indigo-500 rounded text-white"
          onClick={submitMessage}
        >
          Submit New Message
        </button>
      </div>
      <div className="flex gap-4">
        <input
          className="p-4 border border-indigo-500 rounded"
          placeholder="Paste transaction ID to look up message"
          onChange={handleTransactionChange}
          value={transactionId}
        />
        <button
          className="p-4 bg-indigo-500 rounded text-white"
          onClick={retrieveMessage}
        >
          Retrieve Message
        </button>
      </div>
      {currentMessage.length > 0 ? (
        <p className="text-2xl">{currentMessage}</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;

export default App;
