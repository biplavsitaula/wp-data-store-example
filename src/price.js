
import { useSelect, useDispatch } from '@wordpress/data';

export default () => {

  const store = 'my-shop';

  const price = useSelect((select) => {
    return select(store).getPrice();
  }, []);

  const { setPrice } = useDispatch(store);

  return <>
    Price: <input type="text" value={price} onChange={(e) => {
      setPrice(e.target.value);
    }} />
  </>
}