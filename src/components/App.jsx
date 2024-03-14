import FormAddFriend from "./FormAddFriend";
import FriendsList from "./FriendsList";
import Button from "./Button";

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>
    </div>
  );
}
