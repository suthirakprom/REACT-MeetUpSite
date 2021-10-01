import FavoritesContext from "../store/favorites-context";
import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";

function FavoritePage() {
  const favoriteCtx = useContext(FavoritesContext);
  let content;
  if (favoriteCtx.totalFavorites === 0) {
    content = <p>You have no favorite yet.</p>;
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritePage;
