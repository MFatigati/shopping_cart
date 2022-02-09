import {render, screen} from "@testing-library/react"
import Product from "../components/Product"
import userEvent from "@testing-library/user-event"

describe('Product', () => {
  let addBtnFunc;
  const exampleProduct = {
    id: "64f7s63a",
    title: "Kindle",
    price: 75,
    quantity: 3
  }
  beforeEach(() => {
    addBtnFunc = jest.fn();
    render(<Product product={exampleProduct} handleAddToCart={addBtnFunc} id={exampleProduct.id}/>)
  })

  it('has add to cart button', () => {
    const addButton = screen.getByRole('link', {name: /Add to Cart/});
    expect(addButton).toBeInTheDocument();
  });

   it('add to cart is clicked', () => {
    const addButton = screen.getByRole('link', {name: /Add to Cart/});
    userEvent.click(addButton)
    expect(addBtnFunc.mock.calls.length).toBe(1); 
  })

  it('handleSubmit is called with id passed in', () => {
    const addButton = screen.getByRole('link', {name: /Add to Cart/});
    userEvent.click(addButton)
    console.log(addBtnFunc.mock.calls);
    expect(addBtnFunc.mock.calls[0][0]).toBe(exampleProduct.id);  
  })
})