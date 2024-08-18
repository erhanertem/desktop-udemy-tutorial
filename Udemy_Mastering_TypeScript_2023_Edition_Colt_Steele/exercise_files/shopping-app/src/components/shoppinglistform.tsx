import { useRef } from 'react';

interface ShoppingListFormProps {
  onAddItem: (item: string, quantity: number) => void;
}

function ShoppingListForm({ onAddItem }: ShoppingListFormProps) {
  const productInputRef = useRef<HTMLInputElement>(null); //userRef locked to target element HTMLInputelement with a intial value of null
  const quantityInputRef = useRef<HTMLInputElement>(null); //userRef locked to target element HTMLInputelement with a intial value of null

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // console.log(inputRef.current?.value);
    // console.log('SUBMITTED!!');
    const newProduct = productInputRef.current!.value;
    const quantity = +quantityInputRef.current!.value;
    onAddItem(newProduct, quantity);
    productInputRef.current!.value = '';
    quantityInputRef.current!.value = '';
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" ref={productInputRef} />
      <input type="number" min={1} ref={quantityInputRef} />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ShoppingListForm;
