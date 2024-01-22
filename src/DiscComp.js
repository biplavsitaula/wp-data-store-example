
import { useSelect, useDispatch } from '@wordpress/data';

export default () => {

  const store = 'my-shop';

  const discount = useSelect((select) => {
    return select(store).getDiscount();

  }, []);

  const { setDiscount } = useDispatch(store);

  return <>
    Discount: <input type="text" value={discount} onChange={(e) => {
      setDiscount(e.target.value);
    }} />
  </>
}