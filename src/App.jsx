import userData from "./data/userData.json";
import friends from "./data/friends.json";
import trancastions from "./data/transactions.json";

import Profile from "./components/Profile/Profile.jsx";
import FriendsList from "./components/FriendList/FriendList.jsx"
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx"

const App = () => {
  return (
   <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
    />
    
    < FriendsList friends={friends}      
      />
      
      <TransactionHistory items={trancastions}/>
  </>
  );
};

export default App;