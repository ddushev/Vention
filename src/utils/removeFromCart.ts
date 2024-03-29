import { dispatch, store } from "@/redux/store";
import { setCartState } from "@/redux/cartSlice";
import { Game } from "@/types";

const removeFromCart = (gamesInStateCart: Game[]) => {
  const { username } = store.getState().authReduxState;
  const cartInStorage = localStorage.getItem(`${username}Cart`);

  if (cartInStorage) {
    const parsedCart = JSON.parse(cartInStorage);
    const updatedCart = parsedCart.filter((a: Game) => !gamesInStateCart.some((b: Game) => a.id === b.id));
    dispatch(setCartState(updatedCart));
    localStorage.setItem(`${username}Cart`, JSON.stringify(updatedCart));
  }
};

export default removeFromCart;
